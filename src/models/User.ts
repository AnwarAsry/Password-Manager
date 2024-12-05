import { Model, Schema } from "mongoose";
import { AdapterUser } from "next-auth/adapters";
import createModel from "@/lib/createModel";

export type User = AdapterUser & {
    id: string
    password: string
};

type UserDocument = Document & User;
type UserModel = Model<UserDocument>;

export const UserSchema = new Schema<UserDocument, UserModel>({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: false },
	image: { type: String, required: true },
});

UserSchema.virtual("id").get(function () {
	return this._id.toString();
});

export default createModel<UserDocument, UserModel>("users", UserSchema);
