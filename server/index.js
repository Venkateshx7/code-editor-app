const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors()); // Enable CORS

app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

// Serve React build files
app.use(express.static(path.join(__dirname, '../client/build')));

// For all other routes, send back React's index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
