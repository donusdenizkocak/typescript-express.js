import express, { Request, Response } from 'express';
import mysql from 'mysql2';

const app = express();
const port = process.env.PORT || 3000;

const connection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"test_two"
  });

  connection.query(
    'SELECT * FROM blog',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });