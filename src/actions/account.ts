import { post } from "@/serviceBase";

// When you want a credentials saved call this function that takes form entries as argument
export const createAccount = async () => {
    try {
        // Send the form entries via post
        const response = await post("/credential")
        // Json the response because the response is string
        const data = await response.json()

        // Check if the Server did succed in creating
        if (data.success) {
            // Return unsuccessfull message
            return { success: false, message: "Server Error" };
        }

        // Return successfull message
        return { success: true, message: "Saved Credenbtials" };
    } catch (error) {
        // Return unsuccessfull message
        return { success: false, message: JSON.stringify(error) };
    }
};