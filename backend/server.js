const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
const morgan = require('morgan');

const Router = require("./routes/products.js");
const blogRouter = require("./routes/blogRoutes.js");

const PORT = process.env.PORT || 8070;

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection success!");
})

app.use("/products",Router);
app.use('/blog', blogRouter)

app.listen(PORT, () =>{
    console.log(`Server is up and running on port number : ${PORT}`);
}) 

var Users = require('./routes/Users.jsx');
app.use('/users', Users);

var Messurements = require('./routes/Messurements.jsx');
app.use('/messurements', Messurements);