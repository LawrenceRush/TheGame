const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  title: { type: String, required: true },
 
});

const Title = mongoose.model("Title", gameSchema);

module.exports = Title;