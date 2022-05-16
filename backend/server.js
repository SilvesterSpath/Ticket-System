const express = require('express');
const dotenv = require('dotenv').config();
const routes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorMiddleware');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/users', (req, res) => {
  res.status(200).send({ message: 'Welcome to the Ticket System API' });
});

// Routes
app.use('/api/users', routes);

app.use(errorHandler);

const PORT = process.env.NODE_ENV === 'dev' ? process.env.PORT : 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

console.log('Server...');
