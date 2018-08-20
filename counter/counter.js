var mongoose = require('mongoose');  
var CounterSchema = new mongoose.Schema({  
  name: String,
  value: Number
});
mongoose.model('Counter', CounterSchema);

module.exports = mongoose.model('Counter');