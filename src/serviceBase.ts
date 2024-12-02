const BASE_URL = `${process.env.NEXTAUTH_URL}/api`;

export const get = async <T>(url: string) => {
    try {
        const response = await fetch(`${BASE_URL}${url}`);
        return response.json() as T;
    } catch (err) {
        throw err;
    }
};

export const post = async <T>(url: string, data?: T) => {
    const response = await fetch(`${BASE_URL}${url}`, {
        method: "POST",
        body: JSON.stringify(data),
    });
    return response.json();
};

export const put = async <T>(url: string, data?: T) => {
    const response = await fetch(`${BASE_URL}${url}`, {
        method: "PUT",
        body: JSON.stringify(data),
    });
    return response.json();
};

export const remove = async <T>(url: string, data?: T) => {
    const response = await fetch(`${BASE_URL}${url}`, {
        method: "DELETE",
        body: JSON.stringify(data),
    });
    return response.json();
};
