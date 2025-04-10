import { Model, Schema } from "mongoose";
import createModel from "@/lib/createModel";

export type IAccounts = {
    id: string
    userID: string
    image?: string
    platform: string
    linkUrl?: string
    password?: string
    email: string
    username?: string
    category?: string[]
    notes?: string
    createdAt: Date
    updatedAt: Date
};

type AccountsDocument = Document & IAccounts;
type AccountsModel = Model<AccountsDocument>;

export const AccountsSchema = new Schema<AccountsDocument, AccountsModel>({
    userID: { type: String, required: true },
    image: { type: String, required: false },
    platform: { type: String, required: true },
    linkUrl: { type: String, required: false },
    password: { type: String, required: false },
    email: { type: String, required: false },
    username: { type: String, required: false },
    category: { type: [String], default: [] },
    notes: { type: String, required: false },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
}, { 
    timestamps: true,
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
});

// MongoDB has id written like _id, instead make it like id
// For this to work you have to add toJSON and/or toObject like on line 32,33 then call this method on your request when fetch data
AccountsSchema.virtual("id").get(function () {
	return this._id.toString();
});

export default createModel<AccountsDocument, AccountsModel>("credentials", AccountsSchema);
