function errorHandlerMiddleware(error, request, response, next) {
    response.status(500).json({ message: error });
}

export default errorHandlerMiddleware;