export type ServerAction = {
    success: boolean;
    message: string;
};
  
export type ServerActionResponse<T> = {
    success: boolean;
    data: T;
    message: string;
};

export type FormState =
  	| {
    	errors?: {
        	platform?: string[]
        	email?: string[]
      	}
      	message?: string
      	success?: boolean
      	data?: any
    	}
  	| undefined