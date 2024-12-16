//CRUD

const express = require('express');
const User = require('../../models/User');
const { validateUser } = require('../../validators/userValidator');

const router = express.Router();

// Create a user
router.post('/', async (req, res) => {
  const { error, value } = validateUser(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  try {
    const user = await User.query().insert(value);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.query();
    res.json(users);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// Get a user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.query().findById(req.params.id);
    if (!user) return res.status(404).send({ error: 'User not found' });

    res.json(user);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// Update a user
router.put('/:id', async (req, res) => {
  const { error, value } = validateUser(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  try {
    const user = await User.query().patchAndFetchById(req.params.id, value);
    if (!user) return res.status(404).send({ error: 'User not found' });

    res.json(user);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// Delete a user
router.delete('/:id', async (req, res) => {
  try {
    const rowsDeleted = await User.query().deleteById(req.params.id);
    if (!rowsDeleted) return res.status(404).send({ error: 'User not found' });

    res.send({ message: 'User deleted' });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
