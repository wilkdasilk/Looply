var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LoopSchema = new Schema({
  instrument: String,
  name: String,
  loopUrl: String,
  tags: [ String ]
});

var Loop = mongoose.model('Loop', LoopSchema);

module.exports = Loop;
