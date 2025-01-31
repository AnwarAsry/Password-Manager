import { Model, Schema } from "mongoose";
import createModel from "@/lib/createModel";

export type IAccounts = {
    id: string
    userID: string
    platform: string
    linkUrl: string
    password?: string
    username: string
    category?: string[]
    notes?: string
    createdAt: Date
    updatedAt: Date
};

export const dummyData: IAccounts = {
    id: "1231",
    userID: "h45749dj",
    platform: "Google",
    linkUrl: "https://www.google.com",
    password: "odsifdosdf",
    username: "anwartest@test.com",
    createdAt: new Date,
    updatedAt: new Date,
};

type AccountsDocument = Document & IAccounts;
type AccountsModel = Model<AccountsDocument>;

export const AccountsSchema = new Schema<AccountsDocument, AccountsModel>({
    userID: { type: String, required: true },
    platform: { type: String, required: true },
    linkUrl: { type: String, required: false },
    password: { type: String, required: false },
    username: { type: String, required: true },
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
