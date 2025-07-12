import { ApiError } from './api-error';

/**
 * Custom error class for handling player not found errors.
 * Extends the ApiError class to provide specific error handling for player retrieval.
 */
export class PlayerNotFoundError extends ApiError {    
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
        this.status = 404; // Not Found
    }
}