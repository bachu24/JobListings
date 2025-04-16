import { Link } from 'react-router-dom';
import { Home, Briefcase, Building2, User, LogIn } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-600">JobConnect</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center text-gray-700 hover:text-blue-600">
              <Home className="h-5 w-5 mr-1" />
              Home
            </Link>
            <Link to="/jobs" className="flex items-center text-gray-700 hover:text-blue-600">
              <Briefcase className="h-5 w-5 mr-1" />
              Jobs
            </Link>
            <Link to="/companies" className="flex items-center text-gray-700 hover:text-blue-600">
              <Building2 className="h-5 w-5 mr-1" />
              Companies
            </Link>
            <Link to="/freelancers" className="flex items-center text-gray-700 hover:text-blue-600">
              <User className="h-5 w-5 mr-1" />
              Freelancers
            </Link>
            <Link to="/signin" className="flex items-center text-gray-700 hover:text-blue-600">
              <LogIn className="h-5 w-5 mr-1" />
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 