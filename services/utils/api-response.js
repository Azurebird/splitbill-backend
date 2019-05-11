export const buildResponse = (res, object = {}, statusCode = 200) => {
  return res.status(statusCode).json(object);
};

export const buildErrorResponse = (res, error) => {
  const {
    statusCode = 500,
    detail: { message = 'Internal server error' }
  } = error;
  return res.status(statusCode).json({ message });
};
