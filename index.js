const hapi = require("@hapi/hapi");

//requiring the array of object of all the routes
const routes = require("./Routes/routes");

//requiring plugins
const plugins = require("./plugins/plugins");

//starting the server
const server = new hapi.Server({
  port: 3000,
  host: "localhost",
});

//and here in the routes we have an array of object and each object contains method,path and a handler
server.route(routes);

//and here we are starting the server
const launch = async () => {
  await server.register(plugins);
  try {
    await server.start();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
  console.log("server is running at port", server.info.uri);
};

launch();
