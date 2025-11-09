import { useCallback, useEffect, useState } from "react";
import { httpClient } from "../../../utils/config";

export type NewsItem = {
  _id: string;
  title: string;
  coverImage: string;
  resourceUrl: string;
  contentType: "article" | "video";
  tags?: string[];
  description?: string;
  createdAt: string;
  updatedAt: string;
};

type NewsResponse = {
  success: boolean;
  data: NewsItem[];
  error?: string;
};

export default function useFetchNews() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await httpClient.get<NewsResponse>("/news");
      if (response.data.success) {
        setNews(response.data.data);
      } else {
        setError(response.data.error || "Unable to fetch news");
      }
    } catch (err) {
      setError("Unable to fetch news");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return {
    news,
    loading,
    error,
    refetch: fetchNews,
  };
}

