import { Model, Schema } from "mongoose";
import createModel from "@/lib/createModel";

export type Credentials = {
    id: string
    userID: string
    platform: string
    password?: string
    username: string
    category?: string[]
    notes?: string
    createdAt: Date
    updatedAt: Date
    subscription?: {
        active: boolean
        payDay: Date
    }
};

type CredentialsDocument = Document & Credentials;
type CredentialsModel = Model<CredentialsDocument>;

export const CredentialsSchema = new Schema<CredentialsDocument, CredentialsModel>({
    userID: { type: String, required: true },
    platform: { type: String, required: true },
    password: { type: String, required: false },
    username: { type: String, required: true },
    category: [{type: String, required: false }],
    notes: { type: String, required: false },
    subscription: {  type: { 
        active: { type: Boolean, required: false },
        payDay: { type: Date, required: false }
    }, required: false },
});

// MongoDB has id written like _id, instead make it like id 
CredentialsSchema.virtual("id").get(function () {
	return this._id.toString();
});

export default createModel<CredentialsDocument, CredentialsModel>("credentials", CredentialsSchema);
