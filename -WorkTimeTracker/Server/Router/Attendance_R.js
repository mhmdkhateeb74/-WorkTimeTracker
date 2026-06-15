const express = require('express');
const router = express.Router();
module.exports = router;


const Attendance_Mid = require("../Middleware/Attendance_Mid");


router.post("/Add", [Attendance_Mid.AddItem], (req, res) => {
    if(res.ok)
        res.status(200).json({message:"OK", Last_Id:res.insertId});
    else
        return res.status(500).json({message: res.err});
});

router.put("/Update", [Attendance_Mid.UpdateItem], (req, res) => {
    if(res.ok)
        res.status(200).json({message:"OK"});
    else
        return res.status(500).json({message: res.err});
});

