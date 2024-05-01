const mongoose = require("mongoose");

const student_tb = mongoose.Schema({
  roll: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: false,
  },
  city: {
    type: String,
    require: true,
  },
});

const studentModel = mongoose.model("student_tb", student_tb);
module.exports=studentModel