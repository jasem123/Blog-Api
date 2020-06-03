const express = require('express');
const router = express.Router();
//include mongodb
const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/blgoAPI";
router.get('' , (req , res)=>{
    mongoClient.connect(url , (err , result)=>{
        result.db().collection('tags').find({}).toArray((err , data)=>{
            res.send(data);
        })
    });
});
router.get('/:id' , (req , res)=>{
    res.send("tags id");
});
router.post('' , (req , res)=>{
    mongoClient.connect(url , (err , result)=>{
        result.db().collection('tags').insert(req.body).then((value)=>{
            res.send(value.ops);
        });
        result.close();
    });
   
});
router.put('' , (req , res)=>{
    res.send("tags put");
});
router.delete('' , (req , res)=>{
    res.send("tags delete");
});

module.exports = router;