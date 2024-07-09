

const express = require('express');
const router = express.Router();
const Product = require('../models/Product');


router.get('/:minPrice', async (req, res) => {
    const { minPrice } = req.params;

    try {
        const products = await Product.find({ price: { $gt: parseInt(minPrice) } }).sort({ price: -1 }).exec();

        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
