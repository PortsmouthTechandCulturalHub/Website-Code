import { Assets } from "@/contentful/types";

export const mapContentfulAsset = (
  image: Assets,
  title: string,
): Image => ({
  src: image.url,
  alt: image.title || title,
  width: image.width,
  height: image.height,
});
