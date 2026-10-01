import { useState } from 'react';
import ProductArt from './ProductArt.jsx';

// Real (royalty-free) photo with a graceful fallback to the original SVG illustration.
export default function ProductImage({ product, eager = false }) {
  const [failed, setFailed] = useState(false);
  if (!product.img || failed) {
    return <ProductArt type={product.art} colors={product.colors} label={`Illustration of ${product.name}`} />;
  }
  return (
    <img
      className="photo"
      src={product.img}
      alt={product.name}
      width="720"
      height="655"
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
