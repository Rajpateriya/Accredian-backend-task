const express = require('express');
require('dotenv').config();
const cors = require("cors")
const referralRoutes = require('./src/routes/referralRoutes');

const app = express();

const PORT = process.env.PORT || 5000;
app.use(cors())
app.use(express.json());
app.use('/api/referrals', referralRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


const { Client } = require('pg');
const connectionString = process.env.DATABASE_URL; // Replace with your Render database connection URL

const client = new Client({
  connectionString: connectionString,
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL database');
  } catch (error) {
    console.error('Error connecting to database', error);
  }
}

connectToDatabase();