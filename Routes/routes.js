const joi = require("../models/models");
const boom = require("@hapi/boom");
const Toys = require("@hapipal/toys");
const sanitize = require("../help/sanitize");
const { payload } = require("@hapi/hapi/lib/validation");

//here we are exporting the the array of objects to the index.js file
module.exports = [
  {
    method: "GET",
    path: "/",
    options: {
      description: "tells that our api is working",
      tags: ["api"],
    },
    handler: async (request, h) => {
      return h.response({ message: "route is working properly" });
    },
  },

  {
    method: "POST",
    path: "/user",
    options: {
      description: "create a user's profile",
      tags: ["api"],
      validate: {
        payload: joi,
      },
      pre: Toys.pre([
        {
          firstName: ({ payload }) => {
            const { firstName } = payload;
            return sanitize.sanitizeFirstNameOrLastName(firstName);
          },
        },
        {
          lastName: ({ payload }) => {
            const { lastName } = payload;
            return sanitize.sanitizeFirstNameOrLastName(lastName);
          },
        },
      ]),
    },
    handler: async (request, h) => {
      const { ...payload } = request.payload;
      const { firstName } = request.pre;
      payload.firstName = firstName;
      return payload;
    },
  },

  {
    method: "GET",
    path: "/user",
    options: {
      description: "tells users location",
      tags: ["api"],
      notes: "Return's user's location",
    },
    handler: async (request, h) => {
      const location = request.location;
      return h.response({ location: location }).code(200);
    },
  },
];
