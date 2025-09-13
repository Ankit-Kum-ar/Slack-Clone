import React from "react";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import * as Sentry from "@sentry/react";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";

const SentryRoutes = Sentry.withSentryReactRouterV7Routing(Routes);
const App = () => {
	return (
		<>
			<SignedIn>
				<SentryRoutes>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/auth" element={<Navigate to={"/"} replace />} />
					</Routes>
				</SentryRoutes>
			</SignedIn>

			<SignedOut>
				<SentryRoutes>
					<Routes>
						<Route path="/auth" element={<AuthPage />} />
						<Route path="*" element={<Navigate to={"/auth"} replace />} />
					</Routes>
				</SentryRoutes>
			</SignedOut>
		</>
	);
};

export default App;
