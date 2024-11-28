const express = require("express");
const mongoose = require("mongoose");
const mongooseconnect = require("./config/monooseconnect");
const curdModel = require("./models/curd.model");
const cors = require("cors");
const app = express();
const port = 4000;

mongooseconnect();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("connect server");
});

app.post("/createdata", async (req, res) => {
  try {
    let { name } = req.body;
    let createdata = new curdModel({
      name: name,
    });
    await createdata.save();
    res.status(201).send({ message: "Data Created", data: createdata });
  } catch (error) {
    console.log(error);
    res.status(500).sendStatus({ message: "eroor" });
  }
});

app.listen(port, (req, res) => {
  console.log(`server is running http://localhost:${port}`);
});
