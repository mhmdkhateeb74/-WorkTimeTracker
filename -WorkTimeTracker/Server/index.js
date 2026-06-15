
process.env.TZ = "Asia/Jerusalem";

const express = require('express');

const port = 3132;
const app = express();
app.use(express.json());

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

const path = require('path');

const cors = require('cors');

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true 
}));


//--- mysql db-----
let db_M = require('./database');
global.db_pool = db_M.pool;

global.GenObj_Mid = require("./Middleware/GenObj_Mid");

const main_api_R = require("./Router/main_api_R");

app.use("/Api", main_api_R);


app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port http://localhost:${port}`);
});