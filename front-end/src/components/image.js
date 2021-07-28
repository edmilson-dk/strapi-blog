import NextImage from "next/image";

import { getStrapiMedia } from "../lib/media";

const ImageComponent = ({ image, style }) => {
  const imageUrl = getStrapiMedia(image);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imageUrl}
      alt={image.alternativeText || image.name}
      style={style}
    />
  );
};

export default ImageComponent;