const statusIndex = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  DUPLICATE: 422,
  UNAUTORIZED: 401,
  FORBIDDEN: 403,
  DELETED: 204,
  TO_MANY_REQUEST: 429,
  ERROR: 500,
};

const MESSAGE = {
  ERROR: (data) => {
    return {
      status: statusIndex.ERROR,
      data: {
        error: data,
      },
    };
  },

  RECIPES: (data) => {
    return {
      status: statusIndex.OK,
      data: {
        recipes: data,
      },
    };
  },
};
export default MESSAGE;
