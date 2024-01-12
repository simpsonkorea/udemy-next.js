import express from 'express';
import mysql from 'mysql';
import { config } from 'dotenv';

config();

const app = express();
const port = 3000;

const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

app.get('/posts', (req, res) => {
  connection.query('SELECT * FROM posts', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Database query failed' });
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Note: Do not end the connection here. It will be reused for subsequent requests.