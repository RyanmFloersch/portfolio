require('dotenv').config();
const http = require('http');
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

// const db = require('./config/connection');

const PORT = process.env.PORT || 3333;
const app  = express();
const path = require('path');

const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../client/build")

app.use(express.json());
app.use(express.static(buildPath));

app.get("/", function(req, res){

    res.sendFile(
        path.join(__dirname,"../client/build/index.html"),
        function(err){
            if(err){
                res.status(500).send(err);
            }
        }
    );

});




app.use(routes);

app.listen(PORT, () => console.log('Server started on port %s',PORT))

