import { Model, Schema } from "mongoose";
import createModel from "@/lib/createModel";

export type Accounts = {
    id?: string
    userID: string
    platform: string
    password?: string
    username: string
    category?: string[]
    notes?: string
    created?: Date
    updated?: Date
    subscription?: {
        active: boolean
        payDay: Date
    }
};

export const duummyyData: Accounts = {
    userID: "string",
    platform: "string",
    password: "string",
    username: "string",
    notes: "string",
};

type AccountsDocument = Document & Accounts;
type AccountsModel = Model<AccountsDocument>;

export const AccountsSchema = new Schema<AccountsDocument, AccountsModel>({
    userID: { type: String, required: true },
    platform: { type: String, required: true },
    password: { type: String, required: false },
    username: { type: String, required: true },
    // This property creates automatically by mongoose even when we dont want to
    // To prevent that set default to undefined
    category: { type: [String], default: undefined },
    notes: { type: String, required: false },
    created: { type: Date, required: false },
    updated: { type: Date, required: false },
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
