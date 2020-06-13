const express = require('express');
const router = express.Router();

router.get('/orders', (req, res, next)=>{
    res.status(200).json({
        message:"handling get request to /orders"
    });
});

router.post('/orders', (req,res,next)=>{
    res.status(200).json({
        message:"handling post request to /orders",
        
    });
});

router.get('/orders/:orderId', (req,res,next)=>{
    res.status(200).json({
        message:"order details",
        orderId: req.params.orderId
        
    });
});

router.delete('/orders/:orderId', (req,res,next)=>{
    res.status(200).json({
        message:"deleted order",
        
    });
});

module.exports = router;