import { useState } from 'react';
import { Star, Mail, Globe, Briefcase, DollarSign, Clock } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    title: 'Senior Frontend Developer',
    email: 'john.doe@example.com',
    website: 'https://johndoe.dev',
    bio: 'Experienced frontend developer with a passion for creating beautiful and functional user interfaces. Specializing in React, TypeScript, and modern web development.',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL'],
    hourlyRate: '$80',
    availability: 'Full-time',
    rating: 4.8,
    reviews: [
      {
        id: 1,
        author: 'Jane Smith',
        rating: 5,
        comment: 'John is an excellent developer. He delivered the project on time and exceeded our expectations.',
        date: '2024-03-15'
      },
      {
        id: 2,
        author: 'Mike Johnson',
        rating: 4,
        comment: 'Great work ethic and communication skills. Would definitely work with again.',
        date: '2024-02-20'
      }
    ]
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-4xl font-semibold">
              {profile.name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold">{profile.name}</h1>
                  <p className="text-xl text-gray-600">{profile.title}</p>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="btn btn-secondary"
                >
                  {isEditing ? 'Save Profile' : 'Edit Profile'}
                </button>
              </div>
              <div className="flex items-center gap-4 mt-4 text-gray-600">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span>{profile.rating}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-1" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 mr-1" />
                  <a href={profile.website} className="text-blue-600 hover:underline">
                    {profile.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">About</h2>
              <p className="text-gray-700 mb-6">{profile.bio}</p>
              
              <h2 className="text-xl font-semibold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Availability & Rates</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-700">Availability: {profile.availability}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-700">Hourly Rate: {profile.hourlyRate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Reviews</h2>
            <div className="space-y-6">
              {profile.reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{review.author}</h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span>{review.rating}</span>
                        <span className="mx-2">•</span>
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 