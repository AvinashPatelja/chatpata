import React from 'react';

type ImageComponentProps = {
  src: string;
  alt?: string;
  size: number | string;
};

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt = 'Image', size }) => {
  const sizeValue = typeof size === 'number' ? `${size}px` : size;

  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: sizeValue,
        height: sizeValue,
        objectFit: 'cover', // optional: keeps aspect ratio and crops to fit
      }}
    />
  );
};

export default ImageComponent;
