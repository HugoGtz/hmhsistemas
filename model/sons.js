var mongoose = require('mongoose'); 
var sonSchema = new mongoose.Schema({
  idP: String,
  job: String,
  dc: { type: Date, default: Date.now},
  du: { type: Date, default: Date.now}
});
mongoose.model('Son', sonSchema)