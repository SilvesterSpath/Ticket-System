const express = require('express');
const color = require('colors');
const dotenv = require('dotenv').config();
const users = require('./routes/userRoutes');

const errorHandler = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

// Connect ot DB
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/users', (req, res) => {
  res.status(200).send({ message: 'Welcome to the Ticket System API' });
});

// Routes
app.use('/api/users', users);
app.use('/api/tickets', require('./routes/ticketRoutes'));

app.use(errorHandler);

const PORT = process.env.NODE_ENV === 'dev' ? process.env.PORT : 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
