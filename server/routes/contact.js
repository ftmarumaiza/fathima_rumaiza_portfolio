const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Contact = require('../models/Contact');

function isDatabaseReady() {
  return mongoose.connection.readyState === 1;
}

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (!isDatabaseReady()) {
      return res.status(503).json({
        demoMode: true,
        error: 'Contact form is running in demo mode. Connect MongoDB to store messages.'
      });
    }

    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ success: true, message: 'Message received!' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/contact (admin)
router.get('/', async (req, res) => {
  try {
    if (!isDatabaseReady()) {
      return res.status(503).json({
        error: 'Contact storage is unavailable until MongoDB is connected.'
      });
    }

    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
