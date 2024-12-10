import { Model, Schema } from "mongoose";
import createModel from "@/lib/createModel";

export type Accounts = {
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

type AccountsDocument = Document & Accounts;
type AccountsModel = Model<AccountsDocument>;

export const AccountsSchema = new Schema<AccountsDocument, AccountsModel>({
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
AccountsSchema.virtual("id").get(function () {
	return this._id.toString();
});

export default createModel<AccountsDocument, AccountsModel>("credentials", AccountsSchema);
