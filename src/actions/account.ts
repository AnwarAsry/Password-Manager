import { IAccounts } from "@/models/IAccounts";
import { ServerAction, ServerActionResponse } from "@/models/responses/ServerAction";
import { get, post } from "@/serviceBase";

// Fetch all Credentials saved by user
export const getAllCredentialsForUser = async (userId: string): Promise<ServerActionResponse<IAccounts[] | null>>  	 => {
    try {
        // Send the userId as parameter
        const response = await get<ServerActionResponse<IAccounts[]>>(`/credential/${userId}`)

        // Check if the Server did not succeed in fetching
        if (!response.success) {
            // Return unsuccessfull message
            return { success: false, data: null, message: "Server Error" };
        }

        // Return successfull
        return response;
    } catch (error) {
        // Return unsuccessfull message
        return { success: false, data: null, message: JSON.stringify(error)};
    }
};

// When you want a credentials saved call this function that takes form entries as argument
export const createAccount = async (prevState, formData: FormData): Promise<ServerAction> => {
    try {
        // Collect other form data
        const platform = formData.get("platform");
        const username = formData.get("username");
        const password = formData.get("password");
        const notes = formData.get("notes");
        // Get categories
        const category = JSON.parse(formData.get("category") as string);
        const userID = formData.get("userID");

        // Payload
        const payload = {
            platform,
            username,
            password,
            notes,
            category,   // This is an array
            userID,
        };
        
        // Send the form entries via post
        const response = await post("/credential", payload)
        
        // Json the response because the response is string
        const data = await response.json()

        // Check if the Server did not succeed in creating
        if (!data.success) {
            // Return unsuccessfull message
            return { success: false, message: "Server Error" };
        }

        // Return successfull
        return data;
    } catch (error) {
        // Return unsuccessfull message
        return { success: false, message: JSON.stringify(error) };
    }
};

export const getSearchResult = async (searchText: string): Promise<ServerActionResponse<IAccounts[] | null>> => {
    try {
        // Send the text as query
        const response = await get<ServerActionResponse<IAccounts[]>>(`/search?searchQuery=${searchText}`);

        // Check if the Server did not succeed in searching
        if (!response.success) {
            // Return unsuccessfull message
            return { success: false, data: null, message: "Server Error" };
        }

        // Return successfull
        return response;
    } catch (error) {
        // Return unsuccessfull message
        return { success: false, data: null, message: JSON.stringify(error)};
    }
}