import React from 'react';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  priority?: boolean;
}

export default function Image({
  src,
  alt,
  width,
  height,
  priority,
  className,
  style,
  ...props
}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      loading={priority ? 'eager' : 'lazy'}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}
