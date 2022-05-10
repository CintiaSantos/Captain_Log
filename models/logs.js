const { Schema } = require("mongoose");
const mongoose = require("mongoose");

/*
title: string
entry: string
shipIsBroken: Boolean (bonus: set a default to true)
*/
const logSchema = new Schema({
  title: { type: String, required: true },
  entry: { type: String, required: true },
  shipIsBroken: { type: Boolean, default: true },
});

const Log = mongoose.model("Log", logSchema);

module.exports = Log;
