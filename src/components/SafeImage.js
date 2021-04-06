import React from 'react';

export default function SafeImage({ src, className, alt }) {
  const dummyImg = 'https://elbel.by/image/cache/catalog/nastennye-bra-folder/0/oad-iblock-21a-21affe2dd1950db04594ed01f01a2fb0-400x400.jpg';

  return (
    <img
      onError={(event) => event.target.setAttribute("src", dummyImg)}
      src={src}
      className={className}
      alt={alt}
    />
  )
}
