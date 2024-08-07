const express = require('express');
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /products'
    });
});

//about a single product
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') { 
        res.status(200).json({
            message: 'you discovered the special Id',
            id: id
        });
    } else {
    res.status(200).json({
        message: 'you passed an Id'
    });
    }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!'
    });
});

module.exports = router;