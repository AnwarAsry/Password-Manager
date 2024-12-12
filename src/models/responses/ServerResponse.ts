export type ServerResponse= {
    success: boolean;
    message: string;
};
  
export type ServerActionResponse<T> = {
    success: boolean;
    data: T;
    message: string;
};
  