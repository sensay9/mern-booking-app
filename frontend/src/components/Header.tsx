// Header.tsx

// Import necessary dependencies from React and React Router
import React from 'react';
import { Link } from 'react-router-dom';

// Import the useAppContext hook and SignOutButton component
import { useAppContext } from '../contexts/AppContext';
import SignOutButton from './SignOutButton';

// Functional component representing the header of the website
const Header = () => {
  // Use the useAppContext hook to get the isLoggedIn state
  const { isLoggedIn } = useAppContext();

  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        {/* Site branding and name with a link to the home page */}
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">MernHolidays.com</Link>
        </span>

        {/* Navigation section with conditional rendering based on user authentication */}
        <span className="flex space-x-2">
          {isLoggedIn ? (
            // If the user is logged in, display links to My Bookings and My Hotels
            <>
              <Link className='flex items-center text-white px-3 font-bold hover:bg-blue-600' to="/my-bookings">My Bookings</Link>
              <Link className='flex items-center text-white px-3 font-bold hover:bg-blue-600' to="/my-hotels">My Hotels</Link>
              {/* Uncomment the line below to add a Sign Out button */}
              {/* <SignOutButton /> */}
            </>
          ) : (
            // If the user is not logged in, display a link to the Sign In page
            <Link
              to="/sign-in"
              className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
}

export default Header;
