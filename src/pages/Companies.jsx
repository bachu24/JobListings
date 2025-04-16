import { useState } from 'react';
import { Link } from 'react-router-dom';
import { companies } from '../data/mockData';
import { Search, Star, Building2 } from 'lucide-react';

const Companies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    industry: '',
    rating: ''
  });

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = !filters.industry || company.industry === filters.industry;
    const matchesRating = !filters.rating || company.rating >= parseFloat(filters.rating);

    return matchesSearch && matchesIndustry && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Browse Companies</h1>
        
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search companies..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.industry}
                onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
              >
                <option value="">All Industries</option>
                <option value="Technology">Technology</option>
                <option value="Design">Design</option>
              </select>
              <select
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.rating}
                onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
              >
                <option value="">All Ratings</option>
                <option value="4">4+ Stars</option>
                <option value="4.5">4.5+ Stars</option>
              </select>
            </div>
          </div>
        </div>

        {/* Company Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company) => (
            <Link
              key={company.id}
              to={`/companies/${company.id}`}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-16 h-16 rounded-md mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold">{company.name}</h2>
                  <div className="flex items-center text-gray-600">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span>{company.rating}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-gray-600">
                <Building2 className="h-4 w-4 mr-1" />
                <span>{company.industry}</span>
              </div>
              <p className="text-gray-700 mt-4 line-clamp-2">{company.overview}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies; 