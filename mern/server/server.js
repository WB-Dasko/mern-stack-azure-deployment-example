// Import Azure Monitor OpenTelemetry
// const { useAzureMonitor, AzureMonitorOpenTelemetryOptions } = require("@azure/monitor-opentelemetry");
// const config = {
//   azureMonitorExporterOptions: {
//     connectionString: "InstrumentationKey=c7084a8c-4594-4510-8df7-35278385de7d;IngestionEndpoint=https://westeurope-5.in.applicationinsights.azure.com/;LiveEndpoint=https://westeurope.livediagnostics.monitor.azure.com/;ApplicationId=894b97cb-93fd-433b-9397-d33ddc1159f5"
    
//   },
// }

// useAzureMonitor(config);


// const express = require("express");
// const app = express();
// const cors = require("cors");
const dotenv = require ("dotenv");
var path = require('path');
var http = require('http');
const mongoose = require('mongoose');

// const bodyParser= require ("body-parser");
// const swaggerJsdoc= require ("swagger-jsdoc");
// const swaggerUi =require ("swagger-ui-express");

dotenv.config();

// const PORT = process.env.PORT;
// const URL = process.env.URL || localhost

const databaseUrl = process.env.ATLAS_URI || "" 
mongoose.connect(databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=> {
  console.log("connected to DB");
})
.catch((error)=> {
  console.log(databaseUrl)
  console.error("Error connecting to DB:", error)
 
});

var oas3Tools = require('oas3-tools');
var serverPort = 8080;
// swaggerRouter configuration

var options = {
  routing: {
      controllers: path.join(__dirname, './controllers')
  },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var app = expressAppConfig.getApp();

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
  console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
  console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});

const SIGNALS = {
  SIGHUP: 1,
  SIGINT: 2,
  SIGTERM: 15
}

Object.keys(SIGNALS).forEach((signal) => {
  process.on(signal, () => {
    console.log(`Recieved signal(${signal}), shutting down server...`)
    const code = SIGNALS[signal]
    server.close(() => {
      console.log(`Server stopped by ${signal} with value ${code}`)
      process.exit(128 + code)
    })
  })
})



// const options = {
//   definition: {
//     openapi: "3.1.0",
//     info: {
//       title: "Dasko Express API with Swagger",
//       version: "0.1.0",
//       description:
//         "This is a simple CRUD API application made with Express and documented with Swagger",
//       license: {
//         name: "MIT",
//         url: "https://spdx.org/licenses/MIT.html",
//       },
//       // contact: {
//       //   name: "LogRocket",
//       //   url: "https://logrocket.com",
//       //   email: "info@email.com",
//       // },
//     },
//     servers: [
//       {
//         url: "https://msdocs-expressjs-mongodb-1337.azurewebsites.net",
//       },
//     ],
//   },
//   apis: ["./routes/*.js"],
// };

// const specs = swaggerJsdoc(options);

// app.use(
//   "/api-docs",
//   swaggerUi.serve,
//   swaggerUi.setup(specs)
// );


// app.use(cors());
// app.use(express.json());
// app.use(express.static('public'))
// app.use(require("./routes/record"));
// // get driver connection

// const db = require("./db/conn");

// app.listen(PORT, () => {
//   //perform a database connection when server starts
//   db.connectToServer(function (err) {
//     if (err) console.error(err);

//   });
//   console.log(`Server is running on port: ${PORT}`);
//});
