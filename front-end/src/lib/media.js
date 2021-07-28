import { getStrapiUrl } from "./strapi-api";

export function getStrapiMedia(media) {
  const imageUrl = media.url.startsWith("/")
    ? getStrapiUrl(media.url)
    : media.url;

  return imageUrl;
}