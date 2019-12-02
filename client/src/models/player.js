const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  title: { type: String },
  name: { type: String, required: true },
  invetory: { type: Array},
  clue: { type: Number}
});

const thePlayer = mongoose.model("player", playerSchema);

module.exports = thePlayer;
