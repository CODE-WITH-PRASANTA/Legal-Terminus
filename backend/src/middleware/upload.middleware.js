import multer from "multer";
import sharp from "sharp";
import fs from "fs";
import path from "path";

const storage = multer.memoryStorage();

export const upload = multer({
  storage,
  limits: { fileSize: 3 * 1024 * 1024 },
});

export const processImage = async (file) => {
  if (!file) return null;

  const uploadDir = "uploads/blogs";
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const uniqueName = `blog-${Date.now()}-${Math.floor(
    Math.random() * 1e6
  )}.webp`;

  const outputPath = path.join(uploadDir, uniqueName);

  await sharp(file.buffer)
    .resize(1200)
    .webp({ quality: 80 })
    .toFile(outputPath);

  return uniqueName;
};
