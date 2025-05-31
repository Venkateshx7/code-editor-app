const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS

// Serve React build files - static middleware first
app.use(express.static(path.join(__dirname, '../client/build')));

// For all other routes, send back React's index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// (Optional) backend API routes can go here before the * route

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
