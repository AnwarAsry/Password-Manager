import { IAccounts } from "@/models/IAccounts";
import { ServerAction, ServerActionResponse } from "@/models/responses/ServerAction";
import { get, post, put, remove } from "@/serviceBase";

// Fetch all Credentials saved by user
export const getAllCredentialsForUser = async (userId: string): Promise<ServerActionResponse<IAccounts[] | null>> => {
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
export const createCredential = async (formData: FormData): Promise<ServerAction> => {
    try {
        // Payload
        const payload = {
            platform: formData.get("platform"),
            username: formData.get("username"),
            password: formData.get("password"),
            notes: formData.get("notes"),
            userID: formData.get("userID"),
            category: JSON.parse(formData.get("category") as string), // This is an array
        };
        
        // // Send the form entries via post
        const response = await post("/credential/item", payload)

        // // Check if the Server did not succeed in creating
        if (!response.success) {
            // Return unsuccessfull message
            return { success: false, message: "Server Error" };
        }

        // // Return successfull
        return response;
    } catch (error) {
        // Return unsuccessfull message
        return { success: false, message: JSON.stringify(error) };
    }
};

// Fetching the data based on the searchText
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

// Get the saved Credential by id
export const getCredential = async (id: string): Promise<ServerActionResponse<IAccounts | null>> => {
    try {
        // Send the id as param
        const response = await get<ServerActionResponse<IAccounts>>(`/credential/item/${id}`);

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

// Delete request for deleting a credential based on id
export const deleteCredential = async (id: string): Promise<ServerAction> => {
    try {
        // Send the id as param
        const response = await remove<ServerAction>(`/credential/item/${id}`);

        // Check if the Server did not succeed in searching
        if (!response.success) {
            // Return unsuccessfull message
            return { success: false, message: "Server Error" };
        }

        // Return successfull
        return response;
    } catch (error) {
        // Return unsuccessfull message
        return { success: false, message: JSON.stringify(error)};
    }
}

// Delete request for deleting a credential based on id
export const updateCredential = async (id: string, formData: FormData): Promise<ServerAction> => {
    try {
        // Payload
        const payload = {
            platform: formData.get("platform"),
            username: formData.get("username"),
            password: formData.get("password"),
            notes: formData.get("notes"),
            category: JSON.parse(formData.get("category") as string)  // This is an array
        };

        // Send the id as param and obj with values to update
        const response = await put(`/credential/item/${id}`, payload);

        // Check if the Server did not succeed in searching
        if (!response.success) {
            // Return unsuccessfull message
            return { success: false, message: "Server Error" };
        }

        // Return successfull
        return response;
    } catch (error) {
        // Return unsuccessfull message
        return { success: false, message: JSON.stringify(error)};
    }
}
