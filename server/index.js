const express = require('express');
const path = require('path');
const app = express();

// Example API route
app.use('/api', require('./routes/api'));  // Adjust as per your code

// Serve React static files from client/build
app.use(express.static(path.join(__dirname, 'client/build')));

// Catch-all route to serve React app for any non-API request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Listen on Railway provided PORT or default 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
