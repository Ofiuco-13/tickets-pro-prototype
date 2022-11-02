import express from "express";
import { pool } from "./db.js";

const app = express();

app.get("/", async (req, res) => {
  const [result] = await pool.query("SELECT * FROM users");
  res.json(result);
});

app.get("/ping", async (req, res) => {
  const [result] = await pool.query(`SELECT "hello world" as RESULT`);
  res.json(result[0]);
});

app.get("/create", async (req, res) => {
  const result = await pool.query(`INSERT INTO users(name) VALUE ("Emma")`);
  res.json(result);
});

app.listen(8080, () => console.log("Server en port 8080."));
