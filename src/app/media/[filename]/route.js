import { promises as fs } from "fs";
import path from "path";

const MIME_TYPES = {
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp"
};

async function readFirstExistingFile(fileName) {
  const locations = [
    path.join(process.cwd(), "screenshots", fileName),
    path.join(process.cwd(), "public", fileName)
  ];

  for (const filePath of locations) {
    try {
      const buffer = await fs.readFile(filePath);
      return { buffer, filePath };
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error;
      }
    }
  }

  return null;
}

export async function GET(_request, { params }) {
  const fileName = params.filename;
  const file = await readFirstExistingFile(fileName);

  if (!file) {
    return new Response("Image not found", { status: 404 });
  }

  const extension = path.extname(file.filePath).toLowerCase();
  const contentType = MIME_TYPES[extension] || "application/octet-stream";

  return new Response(file.buffer, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=3600"
    }
  });
}
