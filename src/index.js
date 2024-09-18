const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

require("dotenv").config();

const server = express();

server.use(cors());
server.set("view engine", "ejs");

const port = 5001;
server.listen(port, () => {
  console.log("Server is running on port http://localhost:" + port);
});

async function getDBConnection() {
  const connection = await mysql.createConnection({
    host: "localhost",
    database: "shoestore",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });
  connection.connect();
  return connection;
}
