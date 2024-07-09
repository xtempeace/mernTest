

const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb+srv://12345:12345@cluster0.wbn6stw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 


mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));


app.use(express.json());


app.use('/products', productRoutes);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
