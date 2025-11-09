import { useCallback, useEffect, useMemo, useState } from "react";
import useLoading from "../../../general_hooks/useLoading";
import { httpClient } from "../../../utils/config";
import { NewsItem } from "../../LandinPage/hooks/useFetchNews";

type NewsResponse = {
  success: boolean;
  data: NewsItem[];
  error?: string;
};

type CreateNewsResponse = {
  success: boolean;
  data: NewsItem;
  error?: string;
};

type DeleteResponse = {
  success: boolean;
  message?: string;
  error?: string;
};

export interface CreateNewsPayload {
  title: string;
  coverImage: string;
  resourceUrl: string;
  contentType: "article" | "video";
  tags: string[];
  description?: string;
}

export default function useNewsManagement(token: string) {
  const { loading, startLoading, stopLoading } = useLoading();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [saving, setSaving] = useState(false);
  const [savingError, setSavingError] = useState<string | null>(null);
  const [deleteState, setDeleteState] = useState<{
    id: string | null;
    error: string | null;
    loading: boolean;
  }>({ id: null, error: null, loading: false });

  const fetchNews = useCallback(async () => {
    startLoading();
    try {
      const response = await httpClient.get<NewsResponse>("/news");
      if (response.data.success) {
        setNews(response.data.data);
      }
    } finally {
      stopLoading();
    }
  }, [startLoading, stopLoading]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const createNews = useCallback(
    async (
      payload: CreateNewsPayload
    ): Promise<{ success: boolean; error?: string }> => {
      if (!token) {
        setSavingError("You need to be logged in to create news");
        return { success: false, error: "You need to be logged in to create news" };
      }

      setSaving(true);
      setSavingError(null);
      try {
        const response = await httpClient.post<CreateNewsResponse>(
          "/news",
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data.success) {
          setNews((prev) => [response.data.data, ...prev]);
          return { success: true };
        }
        setSavingError(response.data.error || "Unable to create news");
        return {
          success: false,
          error: response.data.error || "Unable to create news",
        };
      } catch (error) {
        setSavingError("Unable to create news");
        return { success: false, error: "Unable to create news" };
      } finally {
        setSaving(false);
      }
    },
    [token]
  );

  const deleteNews = useCallback(
    async (
      id: string
    ): Promise<{ success: boolean; error?: string }> => {
      if (!token) {
        setDeleteState({
          id: null,
          error: "You need to be logged in to delete news",
          loading: false,
        });
        return { success: false, error: "You need to be logged in to delete news" };
      }
      setDeleteState({ id, error: null, loading: true });
      try {
        const response = await httpClient.delete<DeleteResponse>(
          `/news/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data.success) {
          setNews((prev) => prev.filter((item) => item._id !== id));
          setDeleteState({ id: null, error: null, loading: false });
          return { success: true };
        }
        setDeleteState({
          id: null,
          error: response.data.error || "Unable to delete news",
          loading: false,
        });
        return {
          success: false,
          error: response.data.error || "Unable to delete news",
        };
      } catch (error) {
        setDeleteState({
          id: null,
          error: "Unable to delete news",
          loading: false,
        });
        return { success: false, error: "Unable to delete news" };
      }
    },
    [token]
  );

  const isDeleting = useMemo(() => deleteState.loading, [deleteState]);

  return {
    news,
    loading,
    fetchNews,
    createNews,
    saving,
    savingError,
    deleteNews,
    isDeleting,
    deleteError: deleteState.error,
    deletingId: deleteState.id,
  };
}

