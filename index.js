const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//import routes
const authRoute = require("./routes/auth");


dotenv.config();


// app.use(express.json())

// connected to mongodb
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to mongoDb!")
);

//middleware
app.use(express.json());
//route middleware
app.use("/api/user", authRoute);




app.listen(3000, () => console.log("server running"));
