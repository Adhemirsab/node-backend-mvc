const { verifyToken } = require("../utils/handleJwt");
const { handleHttpError } = require("../utils/handleError");
const { userModel } = require("../models");

const checkRole = (roles) => async (req, res, next) => {
  try {
    const { user } = req;
    const rolesByUser = user.role;
    const checkValueRol = roles.some((rolSingle) =>
      rolesByUser.includes(rolSingle)
    );

    if (!checkValueRol) {
      handleHttpError(res, "USER_NOT_PERMISSIONS", 403);
      return;
    }
    next();
  } catch (e) {
    handleHttpError(res, "ERROR_PERMISSIONS", 403);
  }
};

module.exports = checkRole;
