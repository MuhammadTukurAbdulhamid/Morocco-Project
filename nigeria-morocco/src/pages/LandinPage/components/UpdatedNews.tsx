import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import useFetchNews, { NewsItem } from "../hooks/useFetchNews";

const FALLBACK_FEATURES: NewsItem[] = [
  {
    _id: "placeholder-feature-1",
    title: "48th Annual General Meeting of Members (AGM)",
    coverImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=400&fit=crop",
    resourceUrl: "#",
    contentType: "article",
    tags: ["featured"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "placeholder-feature-2",
    title: "Executive Board Meeting",
    coverImage:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&h=400&fit=crop",
    resourceUrl: "#",
    contentType: "article",
    tags: ["featured"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "placeholder-feature-3",
    title: "Regional Conference",
    coverImage:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&h=400&fit=crop",
    resourceUrl: "#",
    contentType: "article",
    tags: ["featured"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const FALLBACK_ARTICLES: NewsItem[] = [
  {
    _id: "placeholder-article-1",
    title: "Preparatory Joint Cross-Economic Zone",
    coverImage:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop",
    resourceUrl: "#",
    contentType: "article",
    tags: ["event"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "placeholder-article-2",
    title: "Nigeria-Morocco Investment Outlook",
    coverImage:
      "https://images.unsplash.com/photo-1560439513-74b037a25d84?w=400&h=300&fit=crop",
    resourceUrl: "#",
    contentType: "article",
    tags: ["news"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export default function NewsUpdates() {
  const { t, i18n } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { news, loading, error } = useFetchNews();

  const { features, articles } = useMemo(() => mapNews(news), [news]);

  useEffect(() => {
    if (features.length === 0) {
      setCurrentImageIndex(0);
      return;
    }
    if (currentImageIndex >= features.length) {
      setCurrentImageIndex(0);
    }
  }, [features, currentImageIndex]);

  const handlePrevious = () => {
    if (features.length === 0) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? features.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (features.length === 0) return;
    setCurrentImageIndex((prev) =>
      prev === features.length - 1 ? 0 : prev + 1
    );
  };

  const activeCarouselItem =
    features.length > 0 ? features[currentImageIndex] : null;

  const formatDate = (value?: string) => {
    if (!value) return "";
    try {
      return new Date(value).toLocaleDateString(
        i18n.language === "fr" ? "fr-FR" : "en-GB",
        {
          year: "numeric",
          month: "short",
          day: "numeric",
        }
      );
    } catch {
      return "";
    }
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {t("UpdatesAndNews", { defaultValue: "Updates and News" })}
        </h1>
        <p className="text-sm text-gray-600">
          {t("newsDescription", {
            defaultValue:
              "Look at posts gallery or shop website from a welder and gas merlin.",
          })}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 mb-12">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          {t("FirstEditionReport", {
            defaultValue:
              "First Edition of The Nigeria – Morocco Business Week Report",
          })}
        </h2>

        <div className="relative w-full rounded-lg overflow-hidden shadow-lg group min-h-[240px] flex items-center justify-center bg-gray-100">
          {loading && (
            <div className="py-20 text-gray-500 text-sm">
              {t("LoadingHighlights", { defaultValue: "Loading highlights…" })}
            </div>
          )}
          {!loading && !activeCarouselItem && (
            <div className="py-16 text-gray-500 text-sm text-center">
              {t("NewsWillAppear", {
                defaultValue: "News will appear here once published.",
              })}
            </div>
          )}
          {!loading && activeCarouselItem && (
            <>
              <img
                src={activeCarouselItem.coverImage}
                alt={activeCarouselItem.title}
                className="w-full h-[300px] md:h-[400px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://via.placeholder.com/1200x400?text=" +
                    encodeURIComponent(activeCarouselItem.title);
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-white/20 backdrop-blur rounded-full text-xs uppercase tracking-wide px-3 py-1">
                    {activeCarouselItem.contentType}
                  </span>
                  {activeCarouselItem.tags?.includes("featured") && (
                    <span className="bg-primary text-white rounded-full text-xs uppercase tracking-wide px-3 py-1">
                      {t("Featured", { defaultValue: "Featured" })}
                    </span>
                  )}
                </div>
                <h3 className="text-xl md:text-2xl font-medium mb-1">
                  {activeCarouselItem.title}
                </h3>
                <p className="text-sm opacity-90">
                  {formatDate(activeCarouselItem.createdAt)}
                </p>
                {activeCarouselItem.description && (
                  <p className="text-xs md:text-sm opacity-80 mt-2 max-w-3xl">
                    {activeCarouselItem.description}
                  </p>
                )}
                <div className="mt-4">
                  <a
                    href={activeCarouselItem.resourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mb-3 gap-2 text-sm text-white/90 hover:text-white underline-offset-2"
                  >
                    {t("ViewResource", { defaultValue: "View resource" })}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </>
          )}

          {features.length > 1 && (
            <div className="absolute bottom-6 right-6 flex gap-3">
              <button
                onClick={handlePrevious}
                className="w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm flex items-center justify-center text-white transition-all"
                aria-label={t("PreviousImage", {
                  defaultValue: "Previous image",
                })}
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
                aria-label={t("NextImage", { defaultValue: "Next image" })}
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
          )}

          {/* Pagination Dots */}
          {features.length > 1 && (
            <div className="absolute bottom-6 left-6 flex gap-2">
              {features.map((item, index) => (
                <button
                  key={item._id}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "bg-white w-6"
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={t("GoToSlide", {
                    defaultValue: `Go to slide ${index + 1}`,
                  })}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 pb-16">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          {t("RelatedArticles", { defaultValue: "Related articles or posts" })}
        </h2>

        {error && <div className="text-sm text-red-600 mb-4">{error}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article: NewsItem) => (
            <article
              key={article._id}
              className="bg-white rounded-lg overflow-hidden cursor-pointer group border border-gray-100 hover:shadow-md transition"
              onClick={() => window.open(article.resourceUrl, "_blank")}
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/400x300?text=" +
                      encodeURIComponent(article.title);
                  }}
                />
                <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide">
                  {article.contentType}
                </span>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                  {article.title}
                </h3>
                {article.description && (
                  <p className="text-xs text-gray-500 line-clamp-3">
                    {article.description}
                  </p>
                )}
                <div className="mt-auto flex items-center justify-between text-xs text-gray-500">
                  <span>{formatDate(article.createdAt)}</span>
                  {article.tags?.length ? (
                    <span className="uppercase text-[10px] font-semibold text-primary">
                      {article.tags.join(" • ")}
                    </span>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        {!loading && articles.length === 0 && features.length === 0 && (
          <div className="text-sm text-gray-500">
            {t("ContentWillBeShared", {
              defaultValue:
                "We will share videos, interviews and articles here once they are published.",
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function mapNews(news: NewsItem[] | undefined | null) {
  if (!news || news.length === 0) {
    return {
      features: FALLBACK_FEATURES,
      articles: FALLBACK_ARTICLES,
    };
  }

  const featuredNews = news.filter((item) => item.tags?.includes("featured"));
  const features =
    featuredNews.length > 0
      ? featuredNews.slice(0, 6)
      : news.slice(0, Math.min(3, news.length));

  const articles = news.slice(0, 6);

  return {
    features,
    articles,
  };
}
