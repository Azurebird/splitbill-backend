class ApiError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

export class BadRequestError extends ApiError {
  constructor(message) {
    super(400, message);
  }
}

export class NotFoundError extends ApiError {
  constructor(message) {
    super(404, message);
  }
}
