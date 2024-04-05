const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./Model/User');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check if connected to MongoDB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// API to handle form submission
app.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Create a new user document
    const newUser = new UserModel({ email, password });
    
    // Save the user document to the database
    await newUser.save();
    
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
