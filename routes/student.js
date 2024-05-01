const express = require("express");
const router = express.Router();
const studentModel = require("../models/student");

//get all students record
router.get("/students", async (req, res) => {
  try {
    const students = await studentModel.find();
    res.json({
      message: "all students: ",
      students,
    });
  } catch (error) {
    res.json({
      message: "error is occurred: ",
      error,
    });
  }
});

//get single record
router.get("/students/:studentID", async (req, res) => {
  const studentID = req.params.studentID;
  try {
    const studentData = await studentModel.findById(studentID);
    res.json({
      message: "student with given id: ",
      studentData,
    });
  } catch (error) {
    res.json({
      message: "error occurred: ",
      error,
    });
  }
});

//create or insert a data
router.post("/students", async (req, res) => {
  try {
    const newStudent = await studentModel.create(req.body);
    res.json({
      message: "new student added: ",
      newStudent,
    });
  } catch (error) {
    res.json({
      message: "error occurred: ",
      error,
    });
  }
});

//delete a record
router.delete("/students/:studentID", async (req, res) => {
  try {
    await studentModel.deleteOne({
      _id: req.params.studentID,
    });
    res.json({
      message: "student deleted: ",
    });
  } catch (error) {
    res.json({
      message: "student not deleted: ",
      error,
    });
  }
});

//update record
router.put("/students/:studentID", async (req, res) => {
  const studentID = req.params.studentID;

  try {
    const updatedStudent = await studentModel.updateOne(
      {
        _id: studentID,
      },
      req.body
    );
    res.json({
      message: "student is updated: ",
      updatedStudent,
    });
  } catch (error) {
    res.json({
      message: "student not updated: ",
      error,
    });
  }
});

module.exports = router;
