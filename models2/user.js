const { Model } = require("@hapipal/schwifty");
const joi = require("joi").extend(require("@hapi/joi-date"));

module.exports = class User extends Model {
  static getTableName() {
    return "users";
  }

  static get idColumn() {
    return "id";
  }

  static getJoiSchema() {
    return joi.object({
      firstName: joi.string().min(3).max(30).required(),
      lastName: joi.string().min(3).max(30).required(),
      age: joi.number().positive().required(),
      email: joi.string().email().required(),
      mobileNo: joi.string().min(10).max(10).required(),
      password: joi.string().min(7).max(20).required(),
      token: joi.string().max(300).allow(null),
    });
  }
};
