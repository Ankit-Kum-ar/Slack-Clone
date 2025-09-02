const dotenv = require('dotenv');
dotenv.config({
    path: '.env'
});

const {
    PORT,
    NODE_ENV,
    MONGO_URI,
    CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY,
    STREAM_API_KEY,
    STREAM_API_SECRET,
    SENTRY_DSN,
    INNGEST_EVENT_KEY,
    INNGEST_SIGNING_KEY
} = process.env;

module.exports = {
    PORT,
    NODE_ENV,
    MONGO_URI,
    CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY,
    STREAM_API_KEY,
    STREAM_API_SECRET,
    SENTRY_DSN,
    INNGEST_EVENT_KEY,
    INNGEST_SIGNING_KEY
};