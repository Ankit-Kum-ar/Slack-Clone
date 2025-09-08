
// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
const Sentry = require("@sentry/node");
const { NODE_ENV, SENTRY_DSN } = require("./config/env");

Sentry.init({
	dsn: SENTRY_DSN,
    tracesSampleRate: 1.0, // to capture 100% of transactions for performance monitoring.
    profileLifecycle: 1.0, // To enable profiling on all requests.
    environment: NODE_ENV || 'development',
    includeLocalVariables: true, // To include local variables in error reports.
	// Setting this option to true will send default PII data to Sentry.
	// For example, automatic IP address collection on events
	sendDefaultPii: true,
});
