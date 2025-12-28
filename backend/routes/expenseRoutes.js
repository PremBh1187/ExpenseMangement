const express = require('express');
const{
    addExpense,
    getExpenses,
    updateExpense,
    deleteExpense
} = require('../controllers/expenseController');

const {protect} = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
.post(protect, addExpense)
.get(protect, getExpenses);

router.route('/:id')
.put(protect, updateExpense)
.delete(protect, deleteExpense);

// routes/userRoutes.js
router.get('/profile', protect, (req, res) => {
  res.json({
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email
  });
});


module.exports = router;