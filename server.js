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
