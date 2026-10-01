import { useEffect, useRef } from 'react';
import ProductArt from './ProductArt.jsx';
import { money } from '../data/products.js';

export default function CartDrawer({ open, items, onClose, onQty, onRemove, onCheckout }) {
  const closeRef = useRef(null);
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = e => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <>
      <div className={'overlay' + (open ? ' show' : '')} onClick={onClose} aria-hidden="true" />
      <aside className={'drawer' + (open ? ' open' : '')} role="dialog" aria-modal="true" aria-label="Shopping cart" aria-hidden={!open}>
        <div className="drawer-head">
          <h2>Your cart</h2>
          <button ref={closeRef} className="icon-btn" onClick={onClose} aria-label="Close cart" tabIndex={open ? 0 : -1}>✕</button>
        </div>
        {items.length === 0 ? (
          <p className="empty">Your cart is empty. Add something from the grid.</p>
        ) : (
          <ul className="lines">
            {items.map(i => (
              <li key={i.id} className="line">
                <div className="thumb"><ProductArt type={i.art} colors={i.colors} label="" /></div>
                <div className="line-info">
                  <p className="line-name">{i.name}</p>
                  <p className="line-price">{money(i.price)}</p>
                  <div className="qty">
                    <button onClick={() => onQty(i.id, i.qty - 1)} aria-label={`Decrease quantity of ${i.name}`}>−</button>
                    <span aria-live="polite">{i.qty}</span>
                    <button onClick={() => onQty(i.id, i.qty + 1)} aria-label={`Increase quantity of ${i.name}`}>+</button>
                    <button className="link" onClick={() => onRemove(i.id)}>Remove</button>
                  </div>
                </div>
                <strong>{money(i.price * i.qty)}</strong>
              </li>
            ))}
          </ul>
        )}
        <div className="drawer-foot">
          <div className="row"><span>Subtotal</span><strong>{money(subtotal)}</strong></div>
          <p className="small">Shipping and tax are shown at checkout (demo values).</p>
          <button className="btn btn-block" disabled={!items.length} onClick={onCheckout}>Go to checkout</button>
        </div>
      </aside>
    </>
  );
}
