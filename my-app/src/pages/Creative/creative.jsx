import { useState } from 'react';
import './creative.css';

function importAll(r) {
  return r.keys().sort().map(r);
}

const artImages = importAll(
  require.context('../../assets/art', false, /\.(png|jpe?g|webp)$/)
);

const photographyImages = importAll(
  require.context('../../assets/photography', false, /\.(png|jpe?g|webp)$/)
);

const creativeItems = [
  ...artImages.map((src, i) => ({
    id: `art-${i}`,
    type: 'art',
    src,
  })),
  ...photographyImages.map((src, i) => ({
    id: `photo-${i}`,
    type: 'photography',
    src,
  })),
];

function Creative() {
  const [category, setCategory] = useState('art');
  const [activeImage, setActiveImage] = useState(null);

  const filteredItems = creativeItems.filter(
    item => item.type === category
  );

  return (
    <div className="creative-page">
      <div className="creative-buttons">
        <button
          className={'schoolbell-regular ' + (category === 'art' ? 'active' : '')}
          onClick={() => setCategory('art')}
        >
          Art
        </button>

        <button
          className={'schoolbell-regular ' + (category === 'photography' ? 'active' : '')}
          onClick={() => setCategory('photography')}
        >
          Photography
        </button>
      </div>

      <div className="creative-gallery">
        {filteredItems.map(item => (
          <img
            src={item.src}
            alt=""
            onClick={() => setActiveImage(item.src)}
          />
        ))}
      </div>
      {activeImage && (
        <div
          className="image-overlay"
          onClick={() => setActiveImage(null)}
        >
          <img src={activeImage} alt="" />
        </div>
      )}
    </div>
  );
}

export default Creative;