import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./providers/AuthProvider.jsx";
import {
	createRoutesFromChildren,
	matchRoutes,
	useLocation,
	useNavigationType,
} from "react-router";
import * as Sentry from "@sentry/react";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key");
}

const queryClient = new QueryClient(); // Create a QueryClient instance for React Query

Sentry.init({
	// Initialize Sentry for error tracking and performance monitoring
	dsn: "https://20f398c9fcfc5e56993fcbc03389c9a5@o4509951057199104.ingest.us.sentry.io/4510013810147328",
	integrations: [
		Sentry.reactRouterV7BrowserTracingIntegration({
			useEffect: useEffect,
			useLocation,
			useNavigationType,
			createRoutesFromChildren,
			matchRoutes,
		}),
	],
	tracesSampleRate: 1.0,
});

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ClerkProvider publishableKey={PUBLISHABLE_KEY}>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<AuthProvider>
						<App />
					</AuthProvider>
					<Toaster position="top-right" />
				</QueryClientProvider>
			</BrowserRouter>
		</ClerkProvider>
	</StrictMode>
);
