const express = require('express');
const router = express.Router();

router.get('' , (req , res)=>{
    res.send("users");
});
router.get('/:id' , (req , res)=>{
    res.send("users");
});
router.post('' , (req , res)=>{
    res.send("users post");
});
router.put('' , (req , res)=>{
    res.send("users put");
});
router.delete('' , (req , res)=>{
    res.send("users delete");
});



module.exports = router;