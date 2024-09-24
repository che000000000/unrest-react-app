interface SuccessResponse {
    statusCode: number
    data: any
}

interface ErrorResponse {
    statusCode: any
    message: any
    error: any
}

export type ApiResponse = SuccessResponse | ErrorResponse