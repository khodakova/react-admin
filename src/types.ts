export interface ServerError {
    statusCode?: number;
    message: string;
    details?: string;
}

export interface IUser {
    id: number,
    name: string,
}