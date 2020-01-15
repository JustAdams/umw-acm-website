const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.set('port', 8080);
app.use(bodyParser.json({ type: "application/json"}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const Pool = require('pg').Pool;
const config = {
    host: "localhost",
    user: "postgres",
    password: "Justin100",
    database: "acmdatabase"
};

const pool = new Pool(config);

app.get("/test", (req, res) => {
    res.json("acm blog server up");
    console.log("acm blog server up");
});

app.get("/news", async (req, res) => {
    try {
        const template = "SELECT * FROM newsposts";
        const response = await pool.query(template);
        res.json(response.rows);
    } catch (err) {
        console.error("ERROR RUNNING QUERY " + err);
    }
});

app.get("/news/post", async (req, res) => {
    try {
        const template = "SELECT * FROM newsposts WHERE post_id = $1";
        const response = await pool.query(template, [
            req.query.q
        ]);
        res.json(response.rows);
    } catch (err) {
        console.error("ERROR RUNNING QUERY " + err);
    }
});

app.post('/join', async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    try {
        const query = "INSERT INTO members (member_name, member_email) VALUES ($1, $2)";
        const result = await pool.query(query, 
            [
                name,
                email
            ]);
        if (result.rowCount = 1) {
            res.json("User added");
        } else {
            res.json("User not added");
        }
    } catch (err) {
        console.log("ERROR: " + err);
        if (err.message.search("duplicate") != -1) {
            res.json("Member already joined");
        }
    }
});

app.listen(app.get("port"), () => {
    console.log(`Find the server at http://localhost:${app.get("port")}`);
});