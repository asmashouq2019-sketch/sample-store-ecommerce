import ProductImage from './ProductImage.jsx';
import { money } from '../data/products.js';

export default function ProductCard({ product, onAdd }) {
  return (
    <article className="card">
      <div className="card-art">
        <ProductImage product={product} />
        {product.tag && <span className="tag">{product.tag}</span>}
      </div>
      <div className="card-body">
        <p className="cat">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="blurb">{product.blurb}</p>
        <div className="card-foot">
          <span className="price">{money(product.price)}</span>
          <button className="btn btn-sm" onClick={() => onAdd(product)} aria-label={`Add ${product.name} to cart`}>Add to cart</button>
        </div>
      </div>
    </article>
  );
}
