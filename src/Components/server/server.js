const express = require("express");
const app = express();
const mysql = require("mysql")
const cors = require("cors")

app.use(cors());
app.use(express.json());

const MYSQL_WS = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "Cinema"
})
   




app.listen(3006, () => {
    console.log("servidor rodando")
})