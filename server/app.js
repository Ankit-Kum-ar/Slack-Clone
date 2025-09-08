require('./instrument.js') // Sentry must be imported first to instrument all modules below it 
const express = require('express');
const { PORT } = require('./config/env');
const connectDB = require('./config/db');
const { clerkMiddleware } = require('@clerk/express');
const { inngest, functions } = require('./config/inngest');
const { serve } = require('inngest/express');
const chatRouter = require('./routes/chat.route');
const Sentry = require("@sentry/node");

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use(clerkMiddleware())

app.use("/api/inngest", serve({ client: inngest, functions })); // Inngest webhook endpoint
app.use('/api/chat', chatRouter); // Chat-related routes


app.get('/debug-sentry', (req, res) => {
  throw new Error("My first Sentry error!");
});
app.get('/', (req, res) => {
  res.send('Hello World!');
});

Sentry.setupConnectErrorHandler(app); // Sentry error handler
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to connect to the database', err);
});