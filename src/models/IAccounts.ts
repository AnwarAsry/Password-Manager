import { Model, Schema } from "mongoose";
import createModel from "@/lib/createModel";

export type IAccounts = {
    id: string
    userID: string
    platform: string
    password?: string
    username: string
    category?: string[]
    notes?: string
    createdAt: Date
    updatedAt: Date
};

type AccountsDocument = Document & IAccounts;
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
    createdAt: { type: Date, required: false },
    updatedAt: { type: Date, required: false },
}, { timestamps: true });

// MongoDB has id written like _id, instead make it like id 
AccountsSchema.virtual("id").get(function () {
	return this._id.toString();
});

export default createModel<AccountsDocument, AccountsModel>("credentials", AccountsSchema);
