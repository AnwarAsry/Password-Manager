import { IAccounts } from "@/models/IAccounts";
import { ServerAction, ServerActionResponse } from "@/models/responses/ServerAction";
import { get, post } from "@/serviceBase";

// Fetch all Credentials saved by user
export const getAllCredentialsForUser = async (userId: string): Promise<ServerActionResponse<IAccounts[]> | ServerAction> => {
    try {
        // Send the form entries via post
        const response = await get<ServerActionResponse<IAccounts[]>>(`/credential/${userId}`)

        // Check if the Server did not succeed in creating
        if (!response.success) {
            // Return unsuccessfull message
            return { success: false, message: "Server Error" };
        }

        // Return successfull message
        return response;
    } catch (error) {
        // Return unsuccessfull message
        return { success: false, message: JSON.stringify(error) };
    }
};

// When you want a credentials saved call this function that takes form entries as argument
export const createAccount = async (prevState, formData: FormData): Promise<ServerAction> => {
    try {
        // FormData is an array of key-value pair
        // Turn the data into an Object
        const body = Object.fromEntries(formData);
        
        // Send the form entries via post
        const response = await post("/credential", body)
        
        // Json the response because the response is string
        const data = await response.json()

        // Check if the Server did not succeed in creating
        if (!data.success) {
            // Return unsuccessfull message
            return { success: false, message: "Server Error" };
        }

        // Return successfull message
        return data;
    } catch (error) {
        // Return unsuccessfull message
        return { success: false, message: JSON.stringify(error) };
    }
};