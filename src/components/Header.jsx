export default function Header({ count, onCart, query, onQuery }) {
  return (
    <header className="header">
      <div className="container header-in">
        <a className="brand" href="#top" aria-label="Sample Store home">
          <span className="brand-mark" aria-hidden="true">S</span> Sample Store
        </a>
        <label className="search">
          <span className="sr-only">Search products</span>
          <input type="search" placeholder="Search products…" value={query} onChange={e => onQuery(e.target.value)} />
        </label>
        <button className="cart-btn" onClick={onCart} aria-label={`Open cart, ${count} item${count === 1 ? '' : 's'}`}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 6h15l-2 9H8z" /><path d="M6 6L5 3H2" /><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /></svg>
          <span className="badge" aria-hidden="true">{count}</span>
        </button>
      </div>
    </header>
  );
}
