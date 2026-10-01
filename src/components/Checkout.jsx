import { useEffect, useState } from 'react';
import { money } from '../data/products.js';

const SHIPPING = { standard: { label: 'Standard (3–5 days)', cost: 5 }, express: { label: 'Express (1–2 days)', cost: 12 } };
const TAX_RATE = 0.08; // demo value only

export default function Checkout({ items, onClose, onDone }) {
  const [form, setForm] = useState({ name: '', email: '', address: '', city: '', zip: '', ship: 'standard', card: '', exp: '', cvc: '' });
  const [errors, setErrors] = useState({});
  const [placed, setPlaced] = useState(false);

  useEffect(() => {
    const onKey = e => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = SHIPPING[form.ship].cost;
  const tax = +(subtotal * TAX_RATE).toFixed(2);
  const total = subtotal + shipping + tax;

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (form.name.trim().length < 2) e.name = 'Enter your full name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (form.address.trim().length < 4) e.address = 'Enter your address';
    if (form.city.trim().length < 2) e.city = 'Enter your city';
    if (!/^[A-Za-z0-9 -]{3,10}$/.test(form.zip)) e.zip = 'Enter a postal code';
    if (form.card.replace(/\s/g, '').length < 12) e.card = 'Enter a demo card number (not a real one)';
    if (!/^\d{2}\/\d{2}$/.test(form.exp)) e.exp = 'MM/YY';
    if (!/^\d{3,4}$/.test(form.cvc)) e.cvc = '3–4 digits';
    return e;
  };

  const submit = ev => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) { setPlaced(true); }
  };

  const Field = ({ id, label, type = 'text', ...rest }) => (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={form[id]} onChange={set(id)} aria-invalid={!!errors[id]} aria-describedby={errors[id] ? id + '-err' : undefined} {...rest} />
      {errors[id] && <p className="err" id={id + '-err'} role="alert">{errors[id]}</p>}
    </div>
  );

  if (placed) {
    return (
      <div className="modal" role="dialog" aria-modal="true" aria-label="Order confirmation">
        <div className="modal-box confirm">
          <div className="check" aria-hidden="true">✓</div>
          <h2>Demo order placed</h2>
          <p>Thanks, {form.name.split(' ')[0] || 'friend'}! This is a concept demo: no payment was taken, nothing was stored and no products will ship.</p>
          <button className="btn" onClick={onDone}>Back to the store</button>
        </div>
      </div>
    );
  }

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label="Checkout">
      <div className="modal-box">
        <div className="modal-head">
          <h2>Checkout</h2>
          <button className="icon-btn" onClick={onClose} aria-label="Close checkout">✕</button>
        </div>
        <p className="demo-banner">Demo checkout UI – do not enter real card details. Nothing is sent anywhere.</p>
        <div className="co-grid">
          <form onSubmit={submit} noValidate>
            <fieldset><legend>Contact</legend>
              <Field id="name" label="Full name" autoComplete="name" />
              <Field id="email" label="Email" type="email" autoComplete="email" />
            </fieldset>
            <fieldset><legend>Shipping</legend>
              <Field id="address" label="Address" autoComplete="street-address" />
              <div className="two">
                <Field id="city" label="City" autoComplete="address-level2" />
                <Field id="zip" label="Postal code" autoComplete="postal-code" />
              </div>
              <div className="radios">
                {Object.entries(SHIPPING).map(([k, v]) => (
                  <label key={k} className={'radio' + (form.ship === k ? ' on' : '')}>
                    <input type="radio" name="ship" value={k} checked={form.ship === k} onChange={set('ship')} />
                    <span>{v.label}</span><strong>{money(v.cost)}</strong>
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset><legend>Payment (demo)</legend>
              <Field id="card" label="Card number" inputMode="numeric" placeholder="0000 0000 0000 0000" autoComplete="off" />
              <div className="two">
                <Field id="exp" label="Expiry" placeholder="MM/YY" autoComplete="off" />
                <Field id="cvc" label="CVC" inputMode="numeric" autoComplete="off" />
              </div>
            </fieldset>
            <button className="btn btn-block" type="submit">Place demo order · {money(total)}</button>
          </form>
          <aside className="summary" aria-label="Order summary">
            <h3>Order summary</h3>
            <ul>
              {items.map(i => <li key={i.id}><span>{i.name} × {i.qty}</span><span>{money(i.price * i.qty)}</span></li>)}
            </ul>
            <div className="row"><span>Subtotal</span><span>{money(subtotal)}</span></div>
            <div className="row"><span>Shipping</span><span>{money(shipping)}</span></div>
            <div className="row"><span>Tax (demo {TAX_RATE * 100}%)</span><span>{money(tax)}</span></div>
            <div className="row total"><span>Total</span><strong>{money(total)}</strong></div>
          </aside>
        </div>
      </div>
    </div>
  );
}
