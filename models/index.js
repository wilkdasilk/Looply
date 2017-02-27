var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/looply");

var Loop = require('./loop');

module.exports.Loop = Loop;
