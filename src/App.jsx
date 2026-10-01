import { useEffect, useMemo, useState, useCallback } from 'react';
import { PRODUCTS } from './data/products.js';
import Header from './components/Header.jsx';
import Filters from './components/Filters.jsx';
import ProductCard from './components/ProductCard.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import Checkout from './components/Checkout.jsx';

const STORAGE_KEY = 'sample-store-cart-v1';
const loadCart = () => {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; } catch { return []; }
};

export default function App() {
  const [cart, setCart] = useState(loadCart); // [{id, qty}]
  const [cartOpen, setCartOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [category, setCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(100);
  const [sort, setSort] = useState('featured');
  const [query, setQuery] = useState('');
  const [toast, setToast] = useState('');

  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); }, [cart]);
  useEffect(() => {
    document.body.style.overflow = cartOpen || checkout ? 'hidden' : '';
  }, [cartOpen, checkout]);
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(''), 1800);
    return () => clearTimeout(t);
  }, [toast]);

  const items = useMemo(
    () => cart.map(c => ({ ...PRODUCTS.find(p => p.id === c.id), qty: c.qty })).filter(i => i.name),
    [cart]
  );
  const count = items.reduce((s, i) => s + i.qty, 0);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = PRODUCTS.filter(p =>
      (category === 'All' || p.category === category) &&
      p.price <= maxPrice &&
      (!q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
    );
    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    if (sort === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [category, maxPrice, sort, query]);

  const add = useCallback(p => {
    setCart(c => c.some(x => x.id === p.id) ? c.map(x => x.id === p.id ? { ...x, qty: x.qty + 1 } : x) : [...c, { id: p.id, qty: 1 }]);
    setToast(`${p.name} added to cart`);
  }, []);
  const setQty = useCallback((id, qty) => setCart(c => qty < 1 ? c.filter(x => x.id !== id) : c.map(x => x.id === id ? { ...x, qty } : x)), []);
  const remove = useCallback(id => setCart(c => c.filter(x => x.id !== id)), []);
  const closeCart = useCallback(() => setCartOpen(false), []);
  const closeCheckout = useCallback(() => setCheckout(false), []);

  const resetFilters = () => { setCategory('All'); setMaxPrice(100); setQuery(''); setSort('featured'); };

  return (
    <>
      <a className="skip" href="#products">Skip to products</a>
      <Header count={count} onCart={() => setCartOpen(true)} query={query} onQuery={setQuery} />
      <main id="top">
        <section className="hero">
          <img className="hero-img" src="images/hero-banner.jpg" alt="" width="1600" height="700" fetchpriority="high" onError={e => { e.currentTarget.style.display = 'none'; }} />
          <div className="container hero-copy">
            <p className="eyebrow">Concept store · React + Vite</p>
            <h1>Everyday objects for a calmer home.</h1>
            <p className="lead">A front-end ecommerce demo with filtering, sorting, a persistent cart drawer and a validated checkout UI. All products are fictional.</p>
          </div>
        </section>
        <div className="container" id="products">
          <Filters category={category} onCategory={setCategory} maxPrice={maxPrice} onMaxPrice={setMaxPrice} sort={sort} onSort={setSort} total={visible.length} />
          {visible.length ? (
            <div className="grid">
              {visible.map(p => <ProductCard key={p.id} product={p} onAdd={add} />)}
            </div>
          ) : (
            <div className="none"><p>No products match your filters.</p><button className="btn" onClick={resetFilters}>Reset filters</button></div>
          )}
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p><strong>Concept / sample project.</strong> Sample Store is a self-made portfolio demo, not a real shop. Products, prices and the checkout are fictional; no payments are processed and no data leaves your browser (the cart is kept in localStorage).</p>
        </div>
      </footer>

      <CartDrawer open={cartOpen} items={items} onClose={closeCart} onQty={setQty} onRemove={remove}
        onCheckout={() => { setCartOpen(false); setCheckout(true); }} />
      {checkout && <Checkout items={items} onClose={closeCheckout} onDone={() => { setCart([]); setCheckout(false); }} />}
      <div className={'toast' + (toast ? ' show' : '')} role="status" aria-live="polite">{toast}</div>
    </>
  );
}
