const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api`;

// Get function
export const get = async <T>(url: string) => {
    try {
        const response = await fetch(`${BASE_URL}${url}`);
        return response.json() as T;
    } catch (error) {
        throw error;
    }
};

// Create function
export const post = async <T>(url: string, data?: T) => {
    try {
        const response = await fetch(`${BASE_URL}${url}`, {
            method: "POST",
            body: JSON.stringify(data),
        });
        return response.json();
    } catch (error) {
        throw error;
    }
};

// Update function
export const put = async <T>(url: string, data?: T) => {
    try {
        const response = await fetch(`${BASE_URL}${url}`, {
            method: "PUT",
            body: JSON.stringify(data),
        });
        return response.json();
    } catch (error) {
        throw error;
    }
};

// Delete function
export const remove = async <T>(url: string, data?: T) => {
    try {
        const response = await fetch(`${BASE_URL}${url}`, {
            method: "DELETE",
            body: JSON.stringify(data),
        });
        return response.json();
    } catch (error) {
        throw error;
    }
};
