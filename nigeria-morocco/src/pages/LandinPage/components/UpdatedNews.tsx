import { useState } from 'react';

export default function NewsUpdates() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const featuredImages = [
    {
      url: "/achievements/highlights-1.jpg",
      title: "First Edition - Nigeria Morocco Business Week",
      date: "October 28 - November 1, 2024",
    },
    {
      url: "/achievements/exhibition-1.jpg",
      title: "Exhibition Showcase",
      date: "October 28 - November 1, 2024",
    },
    {
      url: "/achievements/b2b-1.jpg",
      title: "B2B Meetings & Partnerships",
      date: "October 28 - November 1, 2024",
    },
    {
      url: "/achievements/mou-1.jpg",
      title: "Memoranda of Understanding Signing",
      date: "October 28 - November 1, 2024",
    },
    {
      url: "/achievements/highlights-2.jpg",
      title: "Event Highlights & Key Moments",
      date: "October 28 - November 1, 2024",
    },
    {
      url: "/achievements/exhibition-2.jpg",
      title: "Industry Exhibitions",
      date: "October 28 - November 1, 2024",
    },
  ];

  const relatedArticles = [
    {
      image: "/achievements/highlights-3.jpg",
      title: "Event Highlights & Key Moments",
      type: "Event",
    },
    {
      image: "/achievements/exhibition-3.jpg",
      title: "Exhibition Stands & Products",
      type: "Exhibition",
    },
    {
      image: "/achievements/b2b-2.jpg",
      title: "B2B Networking Sessions",
      type: "Meeting",
    },
    {
      image: "/achievements/b2b-3.jpg",
      title: "Business Partnerships",
      type: "Partnership",
    },
    {
      image: "/achievements/exhibition-4.jpg",
      title: "Industry Showcase",
      type: "Exhibition",
    },
    {
      image: "/achievements/highlights-4.jpg",
      title: "Summit Activities",
      type: "Event",
    },
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Updates and News
        </h1>
        <p className="text-sm text-gray-600">
          Look at posts gallery or shop website from a welder and gas merlin.
        </p>
      </div>

      {/* Featured Image Section */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 mb-12">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          First Edition of The Nigeria – Morocco Business Week Report
        </h2>

        <div className="relative w-full rounded-lg overflow-hidden shadow-lg group">
          <img
            src={featuredImages[currentImageIndex].url}
            alt={featuredImages[currentImageIndex].title}
            className="w-full h-[300px] md:h-[400px] object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://via.placeholder.com/1200x400?text=" +
                encodeURIComponent(featuredImages[currentImageIndex].title);
            }}
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
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm flex items-center justify-center text-white transition-all"
              aria-label="Next image"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Related Articles Grid */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 pb-16">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          Related articles or posts
        </h2>

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
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/400x300?text=" +
                      encodeURIComponent(article.title);
                  }}
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