export class ApiError extends Error {
    status: number;
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
        this.status = 500; // Internal Server Error by default
    }
}