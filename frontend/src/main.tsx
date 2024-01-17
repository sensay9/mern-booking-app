// Import necessary modules from React and React DOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the main App component, global styles, and necessary React Query components
import App from './App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppContextProvider } from './contexts/AppContext.tsx';

// Create a new instance of the QueryClient with custom default options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0, // Set the maximum number of retries for queries to 0
    },
  },
});

// Use ReactDOM.createRoot to render the application
ReactDOM.createRoot(document.getElementById('root')!).render(
  // Enable React Strict Mode for enhanced development checks
  <React.StrictMode>
    {/* Provide the QueryClient to the application using QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      {/* Provide the AppContext to the entire application using AppContextProvider */}
      <AppContextProvider>
        {/* Render the main App component within the context of QueryClient and AppContext */}
        <App />
      </AppContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
