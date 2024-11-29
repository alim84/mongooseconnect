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
    let { age } = req.body;
    let { email } = req.body;
    let createdata = new curdModel({
      name: name,
      age: age,
      email: email,
    });
    await createdata.save();
    res.status(201).send({ message: "Data Created", data: createdata });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "error" });
  }
});

app.get("/alldata", async (req, res) => {
  try {
    let alldata = await curdModel.find({});
    res.status(200).send({ message: "success all Data", data: alldata });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error Somthing" });
  }
});
app.get("/findone/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let getone = await curdModel.findOne({ _id: id });
    res.status(200).send({ message: "successfully one Data", data: getone });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error Somthing" });
  }
});

app.delete("/deletedata/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let deletedata = await curdModel.findByIdAndDelete({ id });
    res.status(200).send({ message: "Delete Successfully", data: deletedata });
  } catch (error) {
    res.status(500).send({ message: "Delete Successfully" });
  }
});

app.patch("/updatadata/:id", async (req, res) => {
  let { id } = req.params;
  let { name } = req.body;
  let updatadata = await curdModel.findByIdAndUpdate(
    { id },
    { name },
    { new: true }
  );
  res
    .status(200)
    .send({ message: "Successfully data update", data: updatadata });
});

app.listen(port, (req, res) => {
  console.log(`server is running http://localhost:${port}`);
});
