import { useAuth } from "@clerk/clerk-react";
import * as Sentry from "@sentry/react";
import { Navigate, Route, Routes } from "react-router";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import RippleWaveLoader from "./components/RippleWaveLoader";

const SentryRoutes = Sentry.withSentryReactRouterV7Routing(Routes);
const App = () => {
	const { isSignedIn, isLoaded } = useAuth();
	if (!isLoaded) {
		return (
			<div className="h-screen w-screen flex items-center justify-center">
				<RippleWaveLoader />
			</div>
		);
	}
	return (
		<>
			<SentryRoutes>
				<Route
					path="/"
					element={
						isSignedIn ? <HomePage /> : <Navigate to={"/auth"} replace />
					}
				/>
				<Route
					path="/auth"
					element={isSignedIn ? <Navigate to={"/"} replace /> : <AuthPage />}
				/>
			</SentryRoutes>
		</>
	);
};

export default App;

// {
/* <SignedIn>
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
			</SignedOut> */
// }
