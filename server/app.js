const express = require('express');
const { PORT } = require('./config/env');
const connectDB = require('./config/db');
const { clerkMiddleware } = require('@clerk/express');
const { inngest, functions } = require('./config/inngest');
const { serve } = require('inngest/express');

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use(clerkMiddleware())

app.use("/api/inngest", serve({ client: inngest, functions }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to connect to the database', err);
});