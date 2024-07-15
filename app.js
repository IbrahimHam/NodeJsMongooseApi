const express = require("express")
const dotenv = require("dotenv")
const db = require('./db/client')

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

db();

app.use(express.json());

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})