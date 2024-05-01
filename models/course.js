const mongoose = require("mongoose");

const course_tb = mongoose.Schema({
  course_name: {
    type: String,
    require: true,
  },
  course_duration: {
    type: Number,
    require: true,
  },
  course_teacher: {
    type: String,
    require: true,
  },
});

const courseTable=mongoose.model("courseTable", course_tb);
module.exports = courseTable