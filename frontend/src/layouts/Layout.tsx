// Import necessary React components
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

// Define the type for the props that the Layout component will receive
interface Props {
    children: React.ReactNode;
}

// Functional component representing the overall layout of the application
const Layout = ({ children }: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Render the Header component */}
            <Header />

            {/* Render the Hero component */}
            <Hero />

            {/* Main content container with dynamic children */}
            <div className="container mx-auto py-10 flex-1">
                {children}
            </div>

            {/* Render the Footer component */}
            <Footer />
        </div>
    );
};

// Export the Layout component as the default export
export default Layout;
