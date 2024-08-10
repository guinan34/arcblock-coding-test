const express = require('express');

const router = express.Router();
const { Model, DataTypes } = require('sequelize');

const sequelize = require('./db-init');

// Define User model
class User extends Model {}

// Define fields for user table
User.init(
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
  },
  { sequelize, modelName: 'user' },
);

// Generate the test data
async function createTestData() {
  await User.create({
    name: '黄贵楠',
    email: '3481203724@qq.com',
    password: 'testtesttest',
    phone: '17338126810',
  });
}

// Sync models with database then create the test data
sequelize.sync({ force: true }).then(() => createTestData());

// CRUD routes for User model
router.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.get('/users/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
});

router.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

router.put('/users/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.update(req.body);
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

router.delete('/users/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.destroy();
    res.json({ message: 'User deleted' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

module.exports = router;
