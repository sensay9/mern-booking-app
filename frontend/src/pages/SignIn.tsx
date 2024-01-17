import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from 'react-query';
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { Link, useNavigate } from "react-router-dom";

// Define the type for the form data
export type SignInFormData = {
    email: string;
    password: string;
};

// Functional component representing the sign-in form
const SignIn = () => {
    // Initialize hooks and context
    const queryClient = useQueryClient();
    const { showToast } = useAppContext();
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm<SignInFormData>();

    // Use mutation for handling sign-in API call
    const mutation = useMutation(apiClient.signIn, {
        onSuccess: async () => {
            // 1. Show the toast message
            showToast({ message: "Sign in Successful", type: "SUCCESS" });

            // 2. Invalidate the token validation query and trigger a refetch
            await queryClient.invalidateQueries("validateToken");

            // 3. Navigate to the home page
            navigate("/");
        },
        onError: (error: Error) => {
            // Show an error toast message in case of failure
            showToast({ message: error.message, type: "ERROR" });
        }
    });

    // Handle form submission
    const onSubmit = handleSubmit((data) => {
        // Trigger the mutation to perform the sign-in
        mutation.mutate(data);
    });

    // JSX for rendering the sign-in form
    return (
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <h2 className="text-3xl font-bold">Sign In</h2>

            {/* Email Input */}
            <label className="text-gray-700 text-sm font-bold flex-1">
                Email
                <input type="email"
                    className="border rounded w-full py-1 px-2 font-normal"{...register("email", { required: "This field is required" })}></input>
                {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                )}
            </label>

            {/* Password Input */}
            <label className="text-gray-700 text-sm font-bold flex-1">
                Password
                <input type="password"
                    className="border rounded w-full py-1 px-2 font-normal"{...register("password", {
                        required: "This field is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters"
                        }
                    })}></input>
                {errors.password && (
                    <span className="text-red-500">{errors.password.message}</span>
                )}
            </label>

            {/* Sign Up Link and Login Button */}
            <span className="flex items-center justify-between">
                {/* Link to Registration Page */}
                <span className="text-sm">
                    Not Registered? <Link className="underline" to="/register">Create an account here</Link>
                </span>

                {/* Submit Button */}
                <button type="submit"
                    className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl">Login</button>
            </span>
        </form>
    );
};

// Export the SignIn component as the default export
export default SignIn;
