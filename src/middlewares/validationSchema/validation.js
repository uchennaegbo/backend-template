
const validatePayload = (schema) => async (request, response, next) => {
  try {
    const body = { ...request.body };
    await schema.validateAsync(body);
    request.body = body;
    next();
  } catch (error) {
    return response.status(422).json({
      status: 422,
      message: error.message,
    });
  }
  return null;
};

export default validatePayload;
