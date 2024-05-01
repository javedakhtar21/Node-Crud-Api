const express = require("express");
const router = express.Router();
const courseModel = require("../models/course");

//get all courses
router.get("/courses", async (req, res) => {
  try {
    const courses = await courseModel.find();
    res.json({
      message: "all courses are: ",
      courses,
    });
  } catch (error) {
    res.json({
      message: "error occured: ",
      error,
    });
  }
});

//get single course
router.get("/courses/:courseID", async (req, res) => {
  const courseID = req.params.courseID;
  try {
    const course = await courseModel.findById(courseID);
    res.json({
      message: "course with given id is: ",
      course,
    });
  } catch (error) {
    res.json({
      message: "error occurred: ",
      error,
    });
  }
});

//create a new course
router.post("/courses", async (req, res) => {
  try {
    const newCourse = await courseModel.create(req.body);
    res.json({
      message: "new course is added: ",
      newCourse,
    });
  } catch (error) {
    res.json({
      message: "error is occured: ",
      error,
    });
  }
});

//update course
router.put("/courses/:courseID", async (req, res) => {
  const courseID = req.params.courseID;
  try {
    const updateCourse = await courseModel.updateOne(
      {
        _id: courseID,
      },
      req.body
    );

    res.json({
      message: `course with id-${courseID} is updated`,
      updateCourse,
    });
  } catch (error) {
    res.json({
      message: `course with id-${courseID} is not updated`,
      error,
    });
  }
});

//delete course
router.delete("/courses/:courseID", async (req, res) => {
  const courseID = req.params.courseID;

  try {
    const deleteCourse = await courseModel.deleteOne({
      _id: courseID,
    });

    res.json({
      message: "course is deleted",
      deleteCourse,
    });
  } catch (error) {
    res.json({
      message: "course is not deleted",
      error,
    });
  }
});
module.exports = router;
