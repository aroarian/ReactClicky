const express = require("express");
const app = express();


app.use(express.static("./client/src"));
const PORT = process.env.PORT || 3000;


app.listen(PORT, function() {
    console.log("App listening on Port " + PORT )
});