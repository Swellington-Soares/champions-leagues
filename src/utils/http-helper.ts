interface HttpResponse<T> {
    statusCode: number;
    body: T;
}

export class HttpHelper {
    static ok<T>(data: T): HttpResponse<T> {
        return {
            statusCode: 200,
            body: data
        };
    }

    static created<T>(data: T): HttpResponse<T> {
        return {
            statusCode: 201,
            body: data
        };
    }

    static noContent(): HttpResponse<null> {
        return {
            statusCode: 204,
            body: null
        };
    }

    static badRequest(error: string): HttpResponse<string> {
        return {
            statusCode: 400,
            body: error
        };
    }

    static unauthorized(error: string): HttpResponse<string> {
        return {
            statusCode: 401,
            body: error
        };
    }

    static forbidden(error: string): HttpResponse<string> {
        return {
            statusCode: 403,
            body: error
        };
    }

    static notFound(error: string): HttpResponse<string> {
        return {
            statusCode: 404,
            body: error
        };
    }

    static serverError(error: string): HttpResponse<string> {
        return {
            statusCode: 500,
            body: error
        };
    }

    static customError(statusCode: number, error: string): HttpResponse<string> {
        return {
            statusCode: statusCode,
            body: error
        };
    }
}