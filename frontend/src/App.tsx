// Import necessary components and routing elements from React Router
// import { useState } from 'react'; // This import statement is commented out as useState is not currently used
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import the Layout component and the Register and SignIn pages
import Layout from './layouts/Layout';
import Register from './pages/Register';
import SignIn from './pages/SignIn';

// Main component representing the entire application
function App() {
  // Uncomment the following line if you plan to use state in the component
  // const [count, setCount] = useState(0);

  return (
    // Set up the application routing using React Router
    <Router>
      <Routes>
        {/* Define routes for different pages */}
        {/* Home Page */}
        <Route path="/" element={<Layout><p>Home Page</p></Layout>} />

        {/* Search Page */}
        <Route path="/search" element={<Layout><p>Search Page</p></Layout>} />

        {/* Registration Page */}
        <Route path="/register" element={<Layout><Register /></Layout>} />

        {/* Sign-In Page */}
        <Route path="/sign-in" element={<Layout><SignIn /></Layout>} />

        {/* Redirect any unknown routes to the home page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

// Export the App component as the default export
export default App;
