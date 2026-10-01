// Original SVG illustrations used as product "photos" (no copyrighted imagery).
const shapes = {
  mug: (a, b) => (<><path d="M70 70h80v70a40 40 0 0 1-40 40 40 40 0 0 1-40-40z" fill={b} /><path d="M150 85h14a20 20 0 0 1 0 40h-14" fill="none" stroke={b} strokeWidth="10" /><ellipse cx="110" cy="70" rx="40" ry="8" fill="#fff" opacity=".35" /></>),
  bowl: (a, b) => (<><path d="M45 100h130a65 65 0 0 1-130 0z" fill={b} /><ellipse cx="110" cy="100" rx="65" ry="10" fill="#fff" opacity=".35" /><rect x="85" y="165" width="50" height="8" rx="4" fill={b} /></>),
  kettle: (a, b) => (<><path d="M70 100a40 45 0 0 1 80 0v50H70z" fill={b} /><path d="M150 112l30-30" stroke={b} strokeWidth="9" strokeLinecap="round" /><path d="M85 100a25 40 0 0 1 50 0" fill="none" stroke="#333" strokeWidth="7" /><rect x="60" y="148" width="100" height="14" rx="5" fill="#333" opacity=".75" /></>),
  apron: (a, b) => (<><path d="M80 40h60l8 40h-76z" fill={b} /><path d="M72 80h76l12 100H60z" fill={b} /><rect x="85" y="125" width="50" height="30" rx="4" fill="#fff" opacity=".35" /><path d="M80 40q30-20 60 0" fill="none" stroke="#333" strokeWidth="4" opacity=".5" /></>),
  vase: (a, b) => (<><path d="M95 40h30v30q40 30 30 80-5 25-45 25t-45-25q-10-50 30-80z" fill={b} /><path d="M110 40v-20M110 40q-18-6-24-20M110 40q18-6 26-20" stroke="#4d8b55" strokeWidth="5" fill="none" strokeLinecap="round" /></>),
  plant: (a, b) => (<><path d="M80 140h60l-8 40H88z" fill="#c9764f" /><rect x="76" y="132" width="68" height="12" rx="3" fill="#b4623c" /><g fill={b}><path d="M110 132q-50-10-55-70 40 10 55 70z" /><path d="M110 132q50-10 55-70-40 10-55 70z" /><path d="M110 132q-14-30 0-80 14 50 0 80z" /></g></>),
  clock: (a, b) => (<><circle cx="110" cy="105" r="70" fill="#fff" stroke={b} strokeWidth="9" /><g stroke={b} strokeWidth="4" strokeLinecap="round"><path d="M110 50v10M110 150v10M55 105h10M155 105h10" /></g><path d="M110 105V70M110 105l24 14" stroke={b} strokeWidth="6" strokeLinecap="round" /><circle cx="110" cy="105" r="6" fill={b} /></>),
  throw: (a, b) => (<><rect x="40" y="55" width="140" height="110" rx="6" fill={b} /><g fill="#fff" opacity=".45"><rect x="40" y="80" width="140" height="12" /><rect x="40" y="110" width="140" height="12" /><rect x="40" y="140" width="140" height="12" /></g><g stroke={b} strokeWidth="3"><path d="M48 165v14M64 165v14M80 165v14M96 165v14M112 165v14M128 165v14M144 165v14M160 165v14M174 165v14" /></g></>),
  lamp: (a, b) => (<><rect x="70" y="170" width="80" height="10" rx="5" fill={b} /><path d="M110 170V80q0-40 50-30" fill="none" stroke={b} strokeWidth="8" strokeLinecap="round" /><path d="M140 40l50 14-10 26z" fill={b} /><path d="M150 80l20 70" stroke="#ffd36b" strokeWidth="0" /><ellipse cx="168" cy="110" rx="26" ry="8" fill="#ffd36b" opacity=".35" /></>),
  pendant: (a, b) => (<><path d="M110 10v60" stroke="#333" strokeWidth="4" /><rect x="94" y="66" width="32" height="16" rx="4" fill={b} /><circle cx="110" cy="125" r="46" fill="#ffe6a8" stroke={b} strokeWidth="5" /><circle cx="110" cy="125" r="18" fill="#fff" opacity=".7" /></>),
  candle: (a, b) => (<><rect x="80" y="90" width="60" height="85" rx="8" fill={b} /><rect x="80" y="90" width="60" height="14" rx="6" fill="#fff" opacity=".4" /><path d="M110 88V76" stroke="#333" strokeWidth="3" /><path d="M110 74q-12-14 0-30 12 16 0 30z" fill="#ffb347" /></>),
  lantern: (a, b) => (<><path d="M110 15v25" stroke="#333" strokeWidth="4" /><rect x="85" y="38" width="50" height="10" rx="3" fill="#333" /><path d="M85 48q-35 40 0 100h50q35-60 0-100z" fill={b} /><g stroke="#fff" strokeWidth="3" opacity=".5" fill="none"><path d="M95 52q-25 45 0 92M110 50v98M125 52q25 45 0 92" /></g><rect x="85" y="148" width="50" height="10" rx="3" fill="#333" /></>),
  notebook: (a, b) => (<><rect x="65" y="30" width="95" height="140" rx="6" fill={b} /><rect x="65" y="30" width="14" height="140" rx="4" fill="#000" opacity=".25" /><rect x="95" y="60" width="50" height="8" rx="3" fill="#fff" opacity=".8" /><g fill="#fff" opacity=".5">{[0,1,2,3].map(r => [0,1,2,3].map(c => <circle key={r + '-' + c} cx={98 + c * 14} cy={95 + r * 14} r="1.8" />))}</g></>),
  organiser: (a, b) => (<><rect x="50" y="90" width="40" height="80" rx="5" fill={b} /><rect x="95" y="60" width="40" height="110" rx="5" fill={b} opacity=".85" /><rect x="140" y="105" width="35" height="65" rx="5" fill={b} opacity=".7" /><g stroke="#e35" strokeWidth="5" strokeLinecap="round"><path d="M110 60l4-30M120 60l12-26" /></g><path d="M62 90l-2-22" stroke="#2a7" strokeWidth="5" strokeLinecap="round" /></>),
  pens: (a, b) => (<g strokeLinecap="round" strokeWidth="12">{['#8e44ad', '#e74c3c', '#f1c40f', '#27ae60', '#2980b9'].map((c, i) => <path key={c} d={`M${60 + i * 25} 170L${72 + i * 25} 50`} stroke={c} />)}</g>),
  tote: (a, b) => (<><path d="M80 80q0-50 30-50t30 50" fill="none" stroke={b} strokeWidth="9" /><path d="M55 80h110l8 100H47z" fill={b} /><rect x="85" y="110" width="50" height="40" rx="4" fill="#fff" opacity=".3" /></>)
};

export default function ProductArt({ type, colors, label }) {
  const [bg, fg] = colors;
  const draw = shapes[type] || shapes.mug;
  return (
    <svg viewBox="0 0 220 200" role="img" aria-label={label} className="art" preserveAspectRatio="xMidYMid slice">
      <rect width="220" height="200" fill={bg} />
      <circle cx="170" cy="40" r="60" fill="#fff" opacity=".25" />
      <ellipse cx="110" cy="184" rx="70" ry="8" fill="#000" opacity=".1" />
      {draw(bg, fg)}
    </svg>
  );
}
