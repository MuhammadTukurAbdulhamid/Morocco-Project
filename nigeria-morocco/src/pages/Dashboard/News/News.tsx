import { FormEvent, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { message, Tag } from "antd";
import useNewsManagement, {
  CreateNewsPayload,
} from "../hooks/useNewsManagement";
import { RootState } from "../../../redux";
import { NewsItem } from "../../LandinPage/hooks/useFetchNews";

const initialFormState = {
  title: "",
  resourceUrl: "",
  description: "",
  contentType: "article" as CreateNewsPayload["contentType"],
  featured: false,
};

export default function News() {
  const [form, setForm] = useState(initialFormState);
  const [messageApi, contextHolder] = message.useMessage();
  const [uploadingCover, setUploadingCover] = useState(false);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const coverInputRef = useRef<HTMLInputElement | null>(null);
  const token = useSelector((state: RootState) => state.user.user.token);
  const {
    news,
    loading,
    createNews,
    saving,
    savingError,
    deleteNews,
    isDeleting,
    deleteError,
    deletingId,
  } = useNewsManagement(token);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!coverPreview) {
      messageApi.error("Please upload a cover image");
      return;
    }

    const payload: CreateNewsPayload = {
      title: form.title.trim(),
      coverImage: coverPreview,
      resourceUrl: form.resourceUrl.trim(),
      description: form.description.trim() || undefined,
      contentType: form.contentType,
      tags: form.featured ? ["featured"] : [],
    };

    if (!payload.title || !payload.resourceUrl) {
      messageApi.error("Please complete the required fields");
      return;
    }

    const result = await createNews(payload);
    if (result.success) {
      messageApi.success("News item created");
      setForm(initialFormState);
      setCoverPreview(null);
    } else {
      messageApi.error(result.error || savingError || "Unable to create news");
    }
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm("Delete this news item?");
    if (!confirmed) return;
    const result = await deleteNews(id);
    if (result.success) {
      messageApi.success("News item deleted");
    } else {
      messageApi.error(result.error || deleteError || "Unable to delete news");
    }
  };

  const featuredCount = useMemo(
    () => news.filter((item) => item.tags?.includes("featured")).length,
    [news]
  );

  const handleCoverUpload = async (file?: File | null) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      messageApi.error("Please select an image file");
      return;
    }
    setUploadingCover(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "v4lnyqau");
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/djlbovjlt/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      if (data.error) {
        messageApi.error(data.error.message || "Upload failed");
        return;
      }
      setCoverPreview(data.secure_url || data.url);
      messageApi.success("Cover image uploaded");
    } catch (error) {
      console.error(error);
      messageApi.error("Unable to upload image");
    } finally {
      setUploadingCover(false);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      {contextHolder}
      <section className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">
          Create News Item
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Add videos or articles that will surface on the public landing page.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Title *
            </label>
            <input
              value={form.title}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, title: event.target.value }))
              }
              placeholder="Enter headline"
              className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Cover image *
            </label>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => coverInputRef.current?.click()}
                  className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={uploadingCover}
                >
                  {uploadingCover ? "Uploading..." : "Upload image"}
                </button>
                {coverPreview && !uploadingCover && (
                  <button
                    type="button"
                    onClick={() => setCoverPreview(null)}
                    className="text-sm text-red-600 hover:text-red-700"
                  >
                    Remove
                  </button>
                )}
              </div>
              <input
                ref={coverInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(event) => handleCoverUpload(event.target.files?.[0])}
              />
              {coverPreview && (
                <div className="relative w-full max-w-sm border border-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={coverPreview}
                    alt="Cover preview"
                    className="w-full h-40 object-cover"
                  />
                </div>
              )}
              {!coverPreview && (
                <p className="text-xs text-gray-500">
                  Upload JPG or PNG (recommended 1200 x 600). Image will be stored in Cloudinary.
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Video/Article URL *
            </label>
            <input
              value={form.resourceUrl}
              onChange={(event) =>
                setForm((prev) => ({
                  ...prev,
                  resourceUrl: event.target.value,
                }))
              }
              placeholder="https://..."
              className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Content type
            </label>
            <select
              value={form.contentType}
              onChange={(event) =>
                setForm((prev) => ({
                  ...prev,
                  contentType: event.target.value as CreateNewsPayload["contentType"],
                }))
              }
              className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition bg-white"
            >
              <option value="article">Article</option>
              <option value="video">Video</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm font-medium text-gray-700">
              Short description
            </label>
            <textarea
              value={form.description}
              onChange={(event) =>
                setForm((prev) => ({
                  ...prev,
                  description: event.target.value,
                }))
              }
              rows={3}
              placeholder="Optional summary that appears in the related section."
              className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition resize-none"
            />
          </div>

          <div className="flex items-center gap-3 md:col-span-2">
            <label className="inline-flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, featured: event.target.checked }))
                }
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              Feature in carousel
            </label>
            <span className="text-xs text-gray-500">
              Currently {featuredCount} item(s) tagged as featured.
            </span>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={saving}
            >
              {saving ? "Saving..." : "Publish news"}
            </button>
          </div>
        </form>
      </section>

      <section className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Published News
            </h2>
            <p className="text-sm text-gray-500">
              {loading
                ? "Loading news..."
                : news.length > 0
                ? `${news.length} item(s) in total`
                : "No news has been published yet."}
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {news.map((item) => (
            <NewsCard
              key={item._id}
              item={item}
              onDelete={handleDelete}
              isDeleting={isDeleting && deletingId === item._id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function NewsCard({
  item,
  onDelete,
  isDeleting,
}: {
  item: NewsItem;
  onDelete: (id: string) => void;
  isDeleting: boolean;
}) {
  const formattedDate = useMemo(() => {
    if (!item.createdAt) return "";
    try {
      return new Date(item.createdAt).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return "";
    }
  }, [item.createdAt]);

  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
      <div className="relative h-40 bg-gray-50">
        <img
          src={item.coverImage}
          alt={item.title}
          className="w-full h-full object-cover"
          onError={(event) => {
            (event.target as HTMLImageElement).src =
              "https://via.placeholder.com/600x400?text=News";
          }}
        />
        <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide">
          {item.contentType}
        </span>
        {item.tags?.includes("featured") && (
          <span className="absolute top-3 right-3 bg-primary text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide">
            Featured
          </span>
        )}
      </div>
      <div className="flex flex-col flex-1 p-4 gap-3">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-sm text-gray-600 line-clamp-3">
              {item.description}
            </p>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {item.tags?.map((tag) => (
            <Tag key={tag} color="green">
              {tag}
            </Tag>
          ))}
        </div>
        <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
          <span>{formattedDate}</span>
          <div className="flex items-center gap-3">
            <a
              href={item.resourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-medium"
            >
              Open link
            </a>
            <button
              onClick={() => onDelete(item._id)}
              className="text-red-600 hover:text-red-700 font-medium disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

