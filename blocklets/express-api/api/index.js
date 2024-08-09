const express = require('express');
const { Sequelize, Model, DataTypes } = require('sequelize');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.BLOCKLET_PORT || process.env.PORT || 3030;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Create Sequelize instance
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/database.sqlite',
});

// Define User model
class User extends Model {}
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

// Middleware for parsing request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CRUD routes for User model
app.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.get('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
});

app.post('/', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

app.put('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.update(req.body);
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.delete('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.destroy();
    res.json({ message: 'User deleted' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
