const express = require("express");
const path = require("path");

const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const connectToMongoDB = require("./db/db");


const app = express();

//setting view engine
app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"));


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use('/url', urlRoute);
app.use('/', staticRoute);

//db
connectToMongoDB("mongodb://localhost:27017/short-url")
  .then(() => {
    console.log("Connect to DB");
  })
  .catch((error) => {
    console.log(error);
  });


app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(8000, () => {
  console.log(`Server is listening on Port:8000`);
});
