const express = require('express');
const app = express();
const PORT = 4000;
const productRoutes = require('./routes');
const mongoose = require('mongoose');
app.use(express.json());

mongoose.connect('mongodb+srv://flowolfox:test123@cluster0.lck5f51.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB Connected.'))
  .catch((error) => console.error(error));

app.use("/api/products", productRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});

app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});

module.exports = app;