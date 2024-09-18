const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

require("dotenv").config();

const server = express();

server.use(cors());
server.use(express.json());

server.set("view engine", "ejs");

const port = 5001;
server.listen(port, () => {
  console.log("Server is running on port http://localhost:" + port);
});

async function getDBConnection() {
  const connection = await mysql.createConnection({
    host: "localhost",
    database: "shoestore",
    user: "root",
    password: "Ginackck",
  });
  connection.connect();
  return connection;
}

server.get("/marcas", async (req, res) => {
  try {
    const connection = await getDBConnection();
    const queryMarcas = "SELECT * FROM marcas";
    const [result] = await connection.query(queryMarcas);

    connection.end();

    res.status(200).json({
      info: "sucess",
      results: result,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

server.get("/productos", async (req, res) => {
  try {
    const connection = await getDBConnection();
    const QueryProductos = "SELECT * FROM productos";
    const [result] = await connection.query(QueryProductos);

    connection.end();

    res.status(200).json({
      info: "sucess",
      results: result,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

server.post("/marcas", async (req, res) => {
  const { nombre, logo_url } = req.body;
  const connection = await getDBConnection();
  const QueryMarcas = "INSERT INTO marcas(nombre,logo_url)VALUES(?,?)";
  const [result] = await connection.query(QueryMarcas, [nombre, logo_url]);
  connection.end();
  res.status(201).json({
    status: "sucess",
    message: result,
  });
});

server.get("/marcas/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const connection = await getDBConnection();
    const queryMarcas = "SELECT * FROM marcas WHERE id_marca=?";
    const [result] = await connection.query(queryMarcas, [id]);

    connection.end();

    res.status(200).json({
      status: "sucess",
      results: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

server.put("/marcas/:id", async (req, res) => {
  const id = req.params.id;
  const { nombre, logo_url } = req.body;
  const connection = await getDBConnection();

  if (nombre) {
    const queryNombre = "UPDATE marcas SET nombre = ? WHERE id_marca=?";
    const [resultname] = await connection.query(queryNombre, [nombre, id]);
  }
  if (logo_url) {
    const queryLogo = "UPDATE marcas SET logo_url = ? WHERE id_marca=?";
    const [resultLogo] = await connection.query(queryLogo, [logo_url, id]);
  }
  connection.end();

  res.status(200).json({
    status: "sucess",
    message: "Recurso actualizado",
  });
});
