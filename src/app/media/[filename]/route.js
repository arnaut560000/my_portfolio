import profile from "../../../../screenshots/profile.jpg";
import profilePng from "../../../../screenshots/profile.png";
import ai from "../../../../screenshots/AI.jpg";
import outage from "../../../../screenshots/outage-management-system.png";
import apartment from "../../../../screenshots/apartment-management-system.png";
import documents from "../../../../screenshots/document-management-system.png";

// Preserve existing image URLs without reading user-selected filesystem paths.
const images = new Map([
  ["profile.jpg", profile],
  ["profile.png", profilePng],
  ["AI.jpg", ai],
  ["outage-management-system.png", outage],
  ["apartment-management-system.png", apartment],
  ["document-management-system.png", documents],
]);

export async function GET(request, { params }) {
  const { filename } = await params;
  const image = images.get(filename);
  if (!image) return new Response("Image not found", { status: 404 });
  return Response.redirect(new URL(image.src, request.url), 307);
}
