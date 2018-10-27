const express = require("express");
const app = express();
app.use(express.static("./client/build"));
const PORT = process.env.PORT || 3000;
app.listen(PORT);