const express = require('express');
const router = express.Router();
module.exports = router;

const Attendance_R = require('./Attendance_R');
router.use('/AE',[],Attendance_R);