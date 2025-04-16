import { Link } from 'react-router-dom';
import { Briefcase, Building2, User } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Next Opportunity
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Connect with top companies and freelancers in one place
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/jobs"
              className="btn bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium"
            >
              Find Jobs
            </Link>
            <Link
              to="/freelancers"
              className="btn bg-transparent border-2 border-white hover:bg-blue-700 px-8 py-3 rounded-md font-medium"
            >
              Hire Freelancers
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Briefcase className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Find Jobs</h3>
              <p className="text-gray-600">
                Browse through thousands of job listings from top companies
              </p>
            </div>
            <div className="text-center">
              <Building2 className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Company Reviews</h3>
              <p className="text-gray-600">
                Read authentic reviews from current and former employees
              </p>
            </div>
            <div className="text-center">
              <User className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Freelance Work</h3>
              <p className="text-gray-600">
                Connect with skilled freelancers for your projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of professionals and companies on our platform
          </p>
          <Link
            to="/signin"
            className="btn bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-md font-medium"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 