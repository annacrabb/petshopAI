// src/components/ExampleCarouselImage.js

import React from 'react';

function ExampleCarouselImage({ text }) {
  return (
    <div>
      <img
        className="d-block w-100"
        src="https://sustainability.stanford.edu/sites/sustainability/files/styles/card_1192x596/public/media/image/resized_reef_image_0.jpg.webp?h=6935e2eb&itok=ZcKJ9MOE"
        alt={text}
      />
    </div>
  );
}

export default ExampleCarouselImage;
