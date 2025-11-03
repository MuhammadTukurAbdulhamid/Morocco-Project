import { useState } from 'react';

export default function NewsUpdates() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const featuredImages = [
    {
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=400&fit=crop",
      title: "48th Annual General Meeting of Members (AGM)",
      date: "December, 2024"
    },
    {
      url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&h=400&fit=crop",
      title: "Executive Board Meeting",
      date: "November, 2024"
    },
    {
      url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&h=400&fit=crop",
      title: "Regional Conference",
      date: "October, 2024"
    }
  ];

  const relatedArticles = [
    {
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop",
      title: "Preparatory Joint Cross-Economic Zone",
      type: "Title"
    },
    {
      image: "https://images.unsplash.com/photo-1560439513-74b037a25d84?w=400&h=300&fit=crop",
      title: "HIS 48th Annual/Manger/Obtaining His Nigeria Athletes",
      type: "Title"
    },
    {
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      title: "Title",
      type: "Article"
    },
    {
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=300&fit=crop",
      title: "Title",
      type: "Article"
    },
    {
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",
      title: "Title",
      type: "Article"
    },
    {
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop",
      title: "Title",
      type: "Article"
    }
  ];

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? featuredImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => 
      prev === featuredImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Updates and News</h1>
        <p className="text-sm text-gray-600">Look at posts gallery or shop website from a welder and gas merlin.</p>
      </div>

      {/* Featured Image Section */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 mb-12">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Images from 2024 event</h2>
        
        <div className="relative w-full rounded-lg overflow-hidden shadow-lg group">
          <img 
            src={featuredImages[currentImageIndex].url}
            alt={featuredImages[currentImageIndex].title}
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          
          {/* Text Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl md:text-2xl font-medium mb-1">
              {featuredImages[currentImageIndex].title}
            </h3>
            <p className="text-sm opacity-90">
              {featuredImages[currentImageIndex].date}
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-6 right-6 flex gap-3">
            <button 
              onClick={handlePrevious}
              className="w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm flex items-center justify-center text-white transition-all"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm flex items-center justify-center text-white transition-all"
              aria-label="Next image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Related Articles Grid */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 pb-16">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Related articles or posts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedArticles.map((article, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-500">{article.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}