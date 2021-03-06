const express = require("express");
const cors = require("cors");
const { request, response } = require("express");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get("/",(request, response)=>{
    response.json({message: "Welcome to the application."});
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}.`);
})