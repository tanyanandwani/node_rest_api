const express = require('express');
const router = express.Router();

router.get('/products', (req, res, next)=>{
    res.status(200).json({
        message:"handling get request to /products"
    });
});

router.post('/products', (req,res,next)=>{
    res.status(200).json({
        message:"handling post request to /products",
        
    });
});

router.post('/products/:productId', (req,res,next)=>{
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message:"handling post request to /products",
            id:id
  
    });
}

else{
    res.status(200).json({
        message:"you passed an ID"
});
}
});

router.patch('/products/:productId', (req,res,next)=>{
    res.status(200).json({
        message:"updated product",
        
    });
});

router.delete('/products/:productId', (req,res,next)=>{
    res.status(200).json({
        message:"deleted product",
        
    });
});

module.exports = router;