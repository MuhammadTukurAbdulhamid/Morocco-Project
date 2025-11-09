const News = require("../model/NewsModel");

const sanitizeTags = (tags) => {
  if (!tags) {
    return [];
  }
  if (Array.isArray(tags)) {
    return tags.filter(Boolean).map((tag) => String(tag).trim());
  }
  if (typeof tags === "string") {
    return tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }
  return [];
};

module.exports.create = async function (req, res) {
  try {
    const { title, coverImage, resourceUrl, contentType, tags, description } =
      req.body;

    if (!title || !coverImage || !resourceUrl) {
      return res.status(400).json({
        success: false,
        error: "title, coverImage and resourceUrl are required",
      });
    }

    const news = await News.create({
      title,
      coverImage,
      resourceUrl,
      contentType: contentType || "article",
      tags: sanitizeTags(tags),
      description,
      createdBy: req.user?._id,
    });

    res.status(201).json({ success: true, data: news });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports.list = async function (req, res) {
  try {
    const { tag, limit } = req.query;
    const query = {};
    if (tag) {
      query.tags = tag;
    }

    const parsedLimit = Number(limit);
    const newsQuery = News.find(query)
      .sort({ createdAt: -1 })
      .select("-__v");

    if (!Number.isNaN(parsedLimit) && parsedLimit > 0) {
      newsQuery.limit(parsedLimit);
    }

    const news = await newsQuery.exec();
    res.status(200).json({ success: true, data: news });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports.update = async function (req, res) {
  try {
    const { id } = req.params;
    const { title, coverImage, resourceUrl, contentType, tags, description } =
      req.body;

    const news = await News.findById(id);
    if (!news) {
      return res
        .status(404)
        .json({ success: false, error: "News item not found" });
    }

    news.title = title ?? news.title;
    news.coverImage = coverImage ?? news.coverImage;
    news.resourceUrl = resourceUrl ?? news.resourceUrl;
    news.contentType = contentType ?? news.contentType;
    news.description = description ?? news.description;
    if (tags !== undefined) {
      news.tags = sanitizeTags(tags);
    }

    await news.save();
    res.status(200).json({ success: true, data: news });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports.remove = async function (req, res) {
  try {
    const { id } = req.params;
    const news = await News.findById(id);
    if (!news) {
      return res
        .status(404)
        .json({ success: false, error: "News item not found" });
    }
    await news.deleteOne();
    res.status(200).json({ success: true, message: "News deleted" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

