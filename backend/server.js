const express = require('express');
const dotenv = require('dotenv').config();
const routes = require('./routes/userRoutes');

const app = express();

app.get('/api/users', (req, res) => {
  res.status(200).send({ message: 'Hello' });
});

app.use('/api/users', routes);

const PORT = process.env.NODE_ENV === 'dev' ? process.env.PORT : 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

console.log('Server...');
