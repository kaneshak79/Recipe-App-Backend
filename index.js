// // const express = require("express");
// // const dotenv = require("dotenv");
// // const connectDB = require("./database/config.cjs");
// // const recipeRouter = require("./routers/recipeRouter.cjs");
// import express from "express";
// import dotenv from "dotenv";
// import connectDB from "./database/config.js";
// import recipeRouter from "./routers/recipeRouter.js"
// dotenv.config();

// const app = express();
// app.use(express.json());

// connectDB();

// app.use("/api", recipeRouter);

// app.listen(process.env.PORT, () => {
//   console.log(`Server running on port ${process.env.PORT}`);
// });

import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/config.js";
import recipeRouter from "./routers/recipeRouter.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api", recipeRouter);

app.get("/", (req, res) => {
  res.send("Recipe API Running");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});