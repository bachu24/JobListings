import { Link } from 'react-router-dom';
import { Briefcase, Building2, User, ArrowRight, CheckCircle2 } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-bounce-in">
            Find Your Next Opportunity
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-primary-100 animate-fade-in">
            Connect with top companies and freelancers in one place
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up">
            <Link
              to="/jobs"
              className="btn bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transform hover:scale-105 transition-transform"
            >
              Find Jobs
            </Link>
            <Link
              to="/freelancers"
              className="btn bg-transparent border-2 border-white hover:bg-primary-700 px-8 py-3 rounded-md font-medium transform hover:scale-105 transition-transform"
            >
              Hire Freelancers
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 animate-slide-in">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center card hover:translate-y-[-4px] transition-transform animate-float">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Find Jobs</h3>
              <p className="text-neutral-600">
                Browse through thousands of job listings from top companies
              </p>
            </div>
            <div className="text-center card hover:translate-y-[-4px] transition-transform animate-float [animation-delay:0.2s]">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Company Reviews</h3>
              <p className="text-neutral-600">
                Read authentic reviews from current and former employees
              </p>
            </div>
            <div className="text-center card hover:translate-y-[-4px] transition-transform animate-float [animation-delay:0.4s]">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Freelance Work</h3>
              <p className="text-neutral-600">
                Connect with skilled freelancers for your projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
              <ul className="space-y-4">
                {[
                  'Verified job listings from top companies',
                  'Transparent company reviews and ratings',
                  'Secure payment system for freelancers',
                  '24/7 customer support',
                  'Advanced search and filtering options'
                ].map((benefit, index) => (
                  <li 
                    key={benefit} 
                    className="flex items-center gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-accent-600 flex-shrink-0 animate-pulse-slow" />
                    <span className="text-neutral-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8 animate-bounce-in">
              <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
              <p className="text-neutral-600 mb-6">
                Be part of a growing community of professionals and companies
              </p>
              <Link
                to="/signin"
                className="btn bg-accent-500 text-white hover:bg-accent-600 inline-flex items-center gap-2 transform hover:scale-105 transition-transform"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-slide-in">Ready to Get Started?</h2>
          <p className="text-xl text-primary-100 mb-8 animate-fade-in">
            Join thousands of professionals and companies on our platform
          </p>
          <Link
            to="/signin"
            className="btn bg-accent-500 text-white hover:bg-accent-600 px-8 py-3 rounded-md font-medium inline-flex items-center gap-2 transform hover:scale-105 transition-transform"
          >
            Sign Up Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 