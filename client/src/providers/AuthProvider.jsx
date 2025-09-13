import { useAuth } from "@clerk/clerk-react";
import { createContext, useEffect } from "react";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

const AuthContext = createContext({}); // Create a context to share auth-related data if needed in the future 

export default function AuthProvider({ children }) {
    const { getToken } = useAuth(); // Get the getToken function from Clerk's useAuth hook

    useEffect(() => {
        const interceptor = axiosInstance.interceptors.request.use( // What is Interceptor? -> A way to intercept and modify requests or responses before they are handled by then or catch. Or you can say it is a middleware for HTTP requests.
            async (config) => {
                try {
                    const token = await getToken(); // Get the token from Clerk
                    if (token) {
                        config.headers.Authorization = `Bearer ${token}`; // Attach the token to the Authorization header
                    }
                } catch (error) {
                    if(error.message?.includes("auth") || error.message?.includes("token")) {
                        toast.error("Authentication error. Please sign in again.");
                    }
                }
                return config;
            },
            (error) => {
                console.error("Error in request interceptor axios:", error);
                return Promise.reject(error);
            }
        );

        // Cleanup function to remove the interceptor when the component unmounts or getToken changes (to prevent memory leaks)
        return () => {
            axiosInstance.interceptors.request.eject(interceptor);
        }
    }, [getToken]);

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    );
}