import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex gap-x-16 items-center h-16">
          <div className="text-xl font-bold text-blue-600">UniGuide</div>
          <div className="flex space-x-8">
            <Link to="/" className="hover:text-blue-500 font-medium">
              Home
            </Link>
            <Link to="/quiz" className="hover:text-blue-500 font-medium">
              Quiz
            </Link>
            <Link to="/contact" className="hover:text-blue-500 font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
