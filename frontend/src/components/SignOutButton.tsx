// Import React Query hooks for mutation and query management
import { useMutation, useQueryClient } from 'react-query';

// Import the API client module
import * as apiClient from '../api-client';

// Import the AppContext to access context values
import { useAppContext } from '../contexts/AppContext';

// Functional component representing a Sign Out button
const SignOutButton = () => {
  // Access the query client for managing queries
  const queryClient = useQueryClient();

  // Access the showToast function from the AppContext
  const { showToast } = useAppContext();

  // Define a mutation using the signOut API call
  const mutation = useMutation(apiClient.signOut, {
    // Action to perform on successful sign out
    onSuccess: async () => {
      // Invalidate the "validateToken" query to trigger a re-fetch
      await queryClient.invalidateQueries('validateToken');

      // Show a success toast message
      showToast({ message: 'Signed Out', type: 'SUCCESS' });
    },
    // Action to perform on sign out error
    onError: (error: Error) => {
      // Show an error toast message with the error details
      showToast({ message: error.message, type: 'ERROR' });
    },
  });

  // Handler function to execute the sign out mutation
  const handleClick = () => {
    mutation.mutate();
  };

  // Render a button with a click event handler for sign out
  return (
    <button
      onClick={handleClick}
      className="text-blue-600 px-3 font-bold bg-white hover:bg-gray-100"
    >
      Sign Out
    </button>
  );
};

// Export the SignOutButton component for use in other parts of the application
export default SignOutButton;
