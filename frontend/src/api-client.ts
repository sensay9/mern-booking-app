// Import the RegisterFormData and SignInFormData types from their respective pages
import { RegisterFormData } from "./pages/Register";
import { SignInFormData } from "./pages/SignIn";

// Retrieve the API base URL from the environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

// Function to handle user registration
export const register = async (formData: RegisterFormData) => {
    // Make a POST request to the registration endpoint
    const response = await fetch(`${API_BASE_URL}/api/users/register`, {
        method: 'POST',
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
    });

    // Parse the response body
    const responseBody = await response.json();

    // If the response is not okay, throw an error with the error message from the server
    if (!response.ok) {
        throw new Error(responseBody.message);
    }
}

// Function to handle user sign-in
export const signIn = async (formData: SignInFormData) => {
    // Make a POST request to the sign-in endpoint
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })

    // Parse the response body
    const body = await response.json();

    // If the response is not okay, throw an error with the error message from the server
    if (!response.ok) {
        throw new Error(body.message)
    }

    // Return the parsed response body
    return body;
}

// Function to validate the user's authentication token
export const validateToken = async () => {
    // Make a request to validate the authentication token
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
        credentials: "include"
    })

    // If the response is not okay, throw an error indicating that the token is invalid
    if (!response.ok) {
        throw new Error("Token invalid");
    }

    // Return the parsed response body
    return response.json();
}

// Function to handle user sign-out
export const signOut = async () => {
    // Make a POST request to the sign-out endpoint
    const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
        credentials: "include",
        method: "POST"
    })

    // If the response is not okay, throw an error indicating an error during sign out
    if (!response.ok) {
        throw new Error("Error during sign out");
    }
}
