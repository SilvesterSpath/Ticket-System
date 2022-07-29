const express = require('express');
const router = express.Router();

const {
  getTickets,
  createTicket,
  getTicket,
  updateTicket,
} = require('../controllers/ticketControllers');

const { protect } = require('../middleware/authMiddleware');

// Re-route into note router
const noteRouter = require('./noteRoutes');
router.use('/:ticketId/notes', noteRouter);

router.get('/', protect, getTickets);
router.post('/', protect, createTicket);
router.get('/:id', protect, getTicket);
router.put('/:id', protect, updateTicket);

/* router.route('/').get(protect, getTickets).post(protect, createTicket); */

module.exports = router;
