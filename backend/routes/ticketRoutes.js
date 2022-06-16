const express = require('express');
const router = express.Router();

const {
  getTickets,
  createTicket,
} = require('../controllers/ticketControllers');

const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getTickets);
router.post('/', protect, createTicket);

/* router.route('/').get(protect, getTickets).post(protect, createTicket); */

module.exports = router;
