const hapiSwagger = require("hapi-swagger");
const inert = require("@hapi/inert");
const vision = require("@hapi/vision");
const hapiGeoLocate = require("hapi-geo-locate");

module.exports = [
  inert,
  vision,
  {
    plugin: hapiSwagger,
    options: {
      info: {
        title: "API documentation",
        version: "1.0",
      },
    },
  },
  {
    plugin: hapiGeoLocate,
    options: {
      enabledByDefault: true,
    },
  },
];
