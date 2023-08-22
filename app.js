const express = require("express");

const app = express();
const tasks = require("./routes/tasks");

//middleware
const notFound = require("./middleware/not-found");
// db connection

const connectDB = require("./db/connect");

// env file
require("dotenv").config();

// MIDDLEWARE
app.use(express.static("./public")); // to serve out static files which are in the public folder
app.use(express.json()); // if we don't use this we won't have data in out req.body

// ROUTES

app.use("/api/v1/tasks", tasks);
app.use(notFound);
const PORT = 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is running at port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
