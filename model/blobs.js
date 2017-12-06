var mongoose = require('mongoose');  
var blobSchema = new mongoose.Schema({  
  name: String,
  badge: { type: Number, default: 100},
  idP: Number,
  dc: { type: Date, default: Date.now },
  du: { type: Date, default: Date.now}
});

mongoose.model('Blob', blobSchema)
