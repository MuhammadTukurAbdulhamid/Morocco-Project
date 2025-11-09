const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    coverImage: {
      type: String,
      required: true,
      trim: true,
    },
    resourceUrl: {
      type: String,
      required: true,
      trim: true,
    },
    contentType: {
      type: String,
      enum: ["article", "video"],
      default: "article",
    },
    tags: {
      type: [String],
      default: [],
    },
    description: {
      type: String,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

const News = mongoose.model("news", NewsSchema);

module.exports = News;

