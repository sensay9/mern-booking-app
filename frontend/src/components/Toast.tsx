// Import the useEffect hook from React for side effects
import { useEffect } from "react";

// Define the properties expected by the Toast component
type ToastProps = {
    message: string;
    type: "SUCCESS" | "ERROR";
    onClose: () => void;
};

// Functional component representing a Toast notification
const Toast = ({ message, type, onClose }: ToastProps) => {
    // Use the useEffect hook to set up a timer for auto-closing the Toast
    useEffect(() => {
        // Set a timer to close the Toast after 5000 milliseconds (5 seconds)
        const timer = setTimeout(() => {
            // Call the onClose callback when the timer expires
            onClose();
        }, 5000);

        // Clean up the timer when the component is unmounted or dependency changes
        return () => {
            clearTimeout(timer);
        };
    }, [onClose]); // The dependency array ensures useEffect runs only when onClose changes

    // Determine styles based on the type of Toast (SUCCESS or ERROR)
    const styles = type === "SUCCESS"
        ? "fixed top-4 right-4 z-50 p-4 rounded-md bg-green-600 text-white max-w-md"
        : "fixed top-4 right-4 z-50 p-4 rounded-md bg-red-600 text-white max-w-md";

    // Render the Toast with dynamic styles and message content
    return (
        <div className={styles}>
            <div className="flex justify-center items-center">
                <span className="text-lg font-semibold">{message}</span>
            </div>
        </div>
    );
};

// Export the Toast component for use in other parts of the application
export default Toast;
