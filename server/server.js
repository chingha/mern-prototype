const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require("./models/user");

const cors= require ('cors');

app.use(express.json());
app.use (cors());

// connecting to mongo db atlas using mongoose, altas then connect to the local mongo db  
mongoose.connect("mongodb+srv://demo:demo123@cluster0.ovn4f.mongodb.net/merndemo?retryWrites=true&w=majority");

// adding user & msg to the db from the frontend
app.post("/get", async (req, res) => {
    const user = req.body
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
});

app.listen(3001, () => {
    console.log("server runs perfectly")
});
