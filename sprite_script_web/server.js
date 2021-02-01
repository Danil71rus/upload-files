const ip = require("ip");
const fs = require('fs');
const cors = require("cors");
const express = require("express");

const app = express();
// const hostname = ip.address();
const hostname = "localhost";
const port = 3000;

global.__basedir = __dirname;
const dir = __basedir + "/uploads";
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const corsOptions = {
    origin: `http://${hostname}:8080`,
};

app.use(cors(corsOptions));

const initRoutes = require("./server/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
