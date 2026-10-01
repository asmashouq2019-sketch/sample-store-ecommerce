import { CATEGORIES } from '../data/products.js';

export default function Filters({ category, onCategory, maxPrice, onMaxPrice, sort, onSort, total }) {
  return (
    <section className="filters" aria-label="Product filters">
      <div className="chips" role="group" aria-label="Category">
        {['All', ...CATEGORIES].map(c => (
          <button key={c} className={'chip' + (category === c ? ' on' : '')} aria-pressed={category === c} onClick={() => onCategory(c)}>{c}</button>
        ))}
      </div>
      <div className="controls">
        <label className="ctl">
          <span>Max price: <strong>${maxPrice}</strong></span>
          <input type="range" min="10" max="100" step="5" value={maxPrice} onChange={e => onMaxPrice(+e.target.value)} />
        </label>
        <label className="ctl">
          <span>Sort by</span>
          <select value={sort} onChange={e => onSort(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
            <option value="name">Name A–Z</option>
          </select>
        </label>
        <p className="count" aria-live="polite">{total} product{total === 1 ? '' : 's'}</p>
      </div>
    </section>
  );
}
