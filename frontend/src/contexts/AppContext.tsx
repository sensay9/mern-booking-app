// Import necessary React modules and components
import React, { useContext, useState } from "react";
import Toast from "../components/Toast";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";

// Define the shape of a Toast message
type ToastMessage = {
    message: string;
    type: "SUCCESS" | "ERROR";
};

// Define the shape of the AppContext
type AppContext = {
    showToast: (toastMessage: ToastMessage) => void;
    isLoggedIn: boolean;
};

// Create a React context for managing the application state
const AppContext = React.createContext<AppContext | undefined>(undefined);

// Create a provider component to wrap the application and manage state
export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    // State to manage Toast messages
    const [toast, setToast] = useState<ToastMessage | undefined>(undefined);

    // Use a React Query hook to check if the user is authenticated
    const { isError } = useQuery("validateToken", apiClient.validateToken, {
        retry: false,
    });

    // Render the provider with the context value and Toast component
    return (
        <AppContext.Provider
            value={{
                showToast: (toastMessage) => {
                    // Function to display a Toast message
                    setToast(toastMessage);
                },
                isLoggedIn: !isError, // Determine authentication status based on query result
            }}
        >
            {/* Render Toast component if there's a message to display */}
            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(undefined)} />}
            {children}
        </AppContext.Provider>
    );
};

// Create a custom hook to simplify accessing the AppContext
export const useAppContext = () => {
    const context = useContext(AppContext);
    return context as AppContext;
};
