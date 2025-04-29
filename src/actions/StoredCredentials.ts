import { CredentialFormSchema } from '@lib/definitions';
import { get, post, put, remove } from '@lib/ServiceBase'
import { FormState, ServerAction, ServerActionResponse } from '@models/responses/ServerActions'
import { StoredCredential } from '@prismaModels';

// Fetch all Credentials saved by user
export const getAllCredentialsForUser = async (userId: string): Promise<ServerActionResponse<StoredCredential[] | null>> => {
    try {
        // Send the userId as parameter
        const response = await get<ServerActionResponse<StoredCredential[]>>(`/storedcredential/user?userId=${userId}`);

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

// Get the saved Credential by id
export const getCredential = async (id: string): Promise<ServerActionResponse<StoredCredential | null>> => {
    try {
        // Send the id as param
        const response = await get<ServerActionResponse<StoredCredential>>(`/storedcredential/${id}`);

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

// When you want a credentials saved call this function that takes form entries as argument
export const createCredential = async (formState: FormState, formData: FormData): Promise<FormState> => {
    const validatedFields = CredentialFormSchema.safeParse({
        platform: formData.get("platform"),
        email: formData.get("email"),
        password: formData.get("password"),
    });

    if (!validatedFields.success) {
        // Return unsuccessfull message
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    try {
        // Payload
        const payload = Object.fromEntries(formData);

        // Send the form entries via post
        const response = await post("/storedcredential/create", payload)

        // Check if the Server did not succeed in creating
        if (!response.success) {
            // Return unsuccessfull message
            return { success: false, message: "Server Error" };
        }

        // Return successfull
        return response;
    } catch (error) {
        // Return unsuccessfull message
        return { success: false, message: JSON.stringify(error) };
    }
};

// Update request for updating a credential based on id
export function updateCredential(id: string) {
    return async (prevState: FormState, formData: FormData): Promise<FormState> => {
        const validatedFields = CredentialFormSchema.safeParse({
            platform: formData.get('platform'),
            email: formData.get('email'),
            password: formData.get('password'),
        });
  
        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        // Payload
        const payload = {
            platform: formData.get("platform"),
            email: formData.get("email"),
            username: formData.get("username"),
            password: formData.get("password"),
            linkUrl: formData.get("linkUrl"),
            notes: formData.get("notes"),
            category: JSON.parse(formData.get("category") as string)  // This is an array
        };
        
        try {
            const response = await put(`/storedcredential/update/${id}`, payload);
  
            if (!response.success) {
                return {
                    success: false,
                    message: 'Server Error.',
                };
            }

            return response
        } catch (error) {
            // Return unsuccessfull message
            return { success: false, data: null, message: JSON.stringify(error)};
        }
    };
}

// Delete request for deleting a credential based on id
export const deleteCredential = async (id: string): Promise<ServerAction> => {
    try {
        // Send the id as param
        const response = await remove<ServerAction>(`/storedcredential/delete/${id}`);

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

// Fetching the data based on the searchText
export const getSearchResult = async (searchText: string): Promise<ServerActionResponse<StoredCredential[] | null>> => {
    try {
        // Send the text as query
        const response = await get<ServerActionResponse<StoredCredential[]>>(`/storedcredential/search?searchQuery=${searchText}`);

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