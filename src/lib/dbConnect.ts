// lib/dbConnect.tsx
import _mongoose, { connect } from "mongoose";

declare global {
    // eslint-disable-next-line no-var
    var mongoose: {
        promise: ReturnType<typeof connect> | null;
        conn: typeof _mongoose | null;
    };
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    );
}


//  Global is used here to maintain a cached connection across hot reloads
//  in development. This prevents connections from growing exponentially
//  during API Route usage.
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

  if (!cached.promise) {
    const opts = {
            bufferCommands: false,
            dbName: "pm",
        };

        cached.promise = connect(MONGODB_URI!, opts).then((mongoose) => {
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

export async function dbDisconnect() {
    mongoose.conn?.connection.close();
}

export default dbConnect;
