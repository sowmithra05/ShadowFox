const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');
const path = require('path');
const session = require('express-session');

const app = express();
const PORT = 3000;
const MONGO_URL = 'mongodb://localhost:27017/';
const DB_NAME = 'ipl_team_hub';

let db;

// MongoDB Connection
MongoClient.connect(MONGO_URL)
  .then(client => {
    console.log('✓ Connected to MongoDB');
    db = client.db(DB_NAME);
    initializeDatabase();
  })
  .catch(error => {
    console.error('✗ MongoDB connection error:', error);
    console.log('Make sure MongoDB is running: mongod');
  });

async function initializeDatabase() {
  const collections = await db.listCollections().toArray();
  const collectionNames = collections.map(c => c.name);
  
  if (!collectionNames.includes('users')) {
    await db.createCollection('users');
    console.log('✓ Created users collection');
  }
  
  if (!collectionNames.includes('players')) {
    await db.createCollection('players');
    await db.collection('players').insertMany([
      {
        name: 'Rohit Sharma',
        role: 'Captain • Batsman',
        batting: 'Right-handed',
        runs: 542,
        average: 38.7,
        image: 'Rohit Sharma.png',
        country: 'India',
        isCaptain: true
      },
      {
        name: 'Jasprit Bumrah',
        role: 'Bowler',
        bowling: 'Right-arm Fast',
        wickets: 18,
        economy: 7.2,
        image: 'Jasprit Bumrah.png',
        country: 'India'
      },
      {
        name: 'Hardik Pandya',
        role: 'All-rounder',
        batting: 'Right-handed',
        runs: 298,
        wickets: 12,
        image: 'Hardik Pandya.png',
        country: 'India'
      },
      {
        name: 'Ishan Kishan',
        role: 'Wicket-keeper',
        batting: 'Left-handed',
        runs: 421,
        catches: 15,
        image: 'Ishan Kishan.png',
        country: 'India'
      }
    ]);
    console.log('✓ Created players collection with sample data');
  }
}

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/images', express.static('images'));
app.use(session({
  secret: 'ipl-team-hub-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));

// Serve HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/pages/ipl_login.html'));
});

// API Routes
app.post('/api/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    
    console.log('Registration attempt:', email);
    
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    await db.collection('users').insertOne({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      createdAt: new Date()
    });
    
    console.log('✓ User registered:', email);
    res.json({ success: true, message: 'Registration successful' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration failed: ' + error.message });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    console.log('Login attempt:', email);
    
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }
    
    const user = await db.collection('users').findOne({ email });
    if (!user) {
      console.log('✗ User not found:', email);
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      console.log('✗ Invalid password for:', email);
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    
    req.session.userId = user._id;
    req.session.userEmail = user.email;
    
    console.log('✓ User logged in:', email);
    res.json({ 
      success: true, 
      message: 'Login successful',
      user: { firstName: user.firstName, lastName: user.lastName, email: user.email }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed: ' + error.message });
  }
});

app.get('/api/players', async (req, res) => {
  try {
    const players = await db.collection('players').find().toArray();
    res.json(players);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch players' });
  }
});

app.post('/api/logout', (req, res) => {
  req.session.destroy();
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`\n=================================`);
  console.log(`✓ Server running on http://localhost:${PORT}`);
  console.log(`=================================\n`);
});