const joi=require("@hapi/joi");
const { string } = require("joi");

//this schema here is validating the input's entered by the client
const schema=joi.object({
    firstName:joi.string().min(3).max(30).required(),
    lastName:joi.string().min(3).max(30).required(),
    age:joi.number().positive().required(),
    email:joi.string().email().required(),
    mobileNo:joi.string().min(10).max(10).required(),
    password:joi.string().min(7).max(20).required(),
    confirmPassword:joi.string().min(7).max(20).required()
})

module.exports=schema;