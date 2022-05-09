const validate = require("validator");
const sanitizeFirstNameOrLastName = (name = null) => {
  if (name) {
    name = validate.trim(name);
  }
  return name;
};

module.exports = {
  sanitizeFirstNameOrLastName,
};
