const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require ("dotenv");

const bodyParser= require ("body-parser");
const swaggerJsdoc= require ("swagger-jsdoc");
const swaggerUi =require ("swagger-ui-express");

dotenv.config();

const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());
app.use(express.static('public'))
app.use(require("./routes/record"));
// get driver connection

const db = require("./db/conn");

app.listen(PORT, () => {
  //perform a database connection when server starts
  db.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${PORT}`);
});
