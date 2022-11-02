import { createPool } from "mysql2/promise";

const pool = createPool({
  user: "root",
  password: "emmanuel01",
  host: "localhost",
  port: 3306,
  database: "usersdb",
});

export { pool };
