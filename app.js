const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv/config')


app.use(bodyParser.json());
// Routes
const postRoute = require('./routes/posts')
app.use('/posts', postRoute)


mongoose.connect(
    process.env.DB_CONNECTION,
  { useUnifiedTopology: true , useNewUrlParser:true},
  () => {
    console.log("connected to db");
  }
);



app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
