const express = require('express');
require('./db');

const userRoutes = require('./routes/users/users'); // Import the routes

const app = express();
app.use(express.json());

// Use the user router at the '/users' path
app.use('/users', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});