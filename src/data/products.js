// Fictional products for a concept demo. Prices are sample values only.
export const CATEGORIES = ['Kitchen', 'Decor', 'Lighting', 'Stationery'];

export const PRODUCTS = [
  { id: 'p1',  name: 'Stoneware Mug',        category: 'Kitchen',    price: 18, art: 'mug',      colors: ['#e9d8c4', '#1f3a5f'], blurb: 'Hand-feel glaze, 350 ml.', tag: 'New' },
  { id: 'p2',  name: 'Serving Bowl',         category: 'Kitchen',    price: 32, art: 'bowl',     colors: ['#cfe3dc', '#2f6f62'], blurb: 'Wide bowl for salads and pasta.' },
  { id: 'p3',  name: 'Tea Kettle',           category: 'Kitchen',    price: 54, art: 'kettle',   colors: ['#f4d9d0', '#c4553a'], blurb: 'Gooseneck spout, 1 L.' },
  { id: 'p4',  name: 'Linen Apron',          category: 'Kitchen',    price: 29, art: 'apron',    colors: ['#e8e2d6', '#8a7a5c'], blurb: 'Washed linen with deep pockets.' },
  { id: 'p5',  name: 'Ceramic Vase',         category: 'Decor',      price: 38, art: 'vase',     colors: ['#d8e3f3', '#3d5f99'], blurb: 'Tall vase with a matte finish.', tag: 'Popular' },
  { id: 'p6',  name: 'Potted Fern',          category: 'Decor',      price: 24, art: 'plant',    colors: ['#e0ecd5', '#3f7d4a'], blurb: 'Faux plant in a terracotta-style pot.' },
  { id: 'p7',  name: 'Round Wall Clock',     category: 'Decor',      price: 42, art: 'clock',    colors: ['#f3ead9', '#2b2b2b'], blurb: 'Silent movement, 30 cm.' },
  { id: 'p8',  name: 'Woven Throw',          category: 'Decor',      price: 64, art: 'throw',    colors: ['#f2d9a8', '#b8741a'], blurb: 'Soft cotton blend, striped.' },
  { id: 'p9',  name: 'Arc Desk Lamp',        category: 'Lighting',   price: 76, art: 'lamp',     colors: ['#e7e3f4', '#5b4b9a'], blurb: 'Adjustable arm, warm light.', tag: 'New' },
  { id: 'p10', name: 'Glass Pendant',        category: 'Lighting',   price: 89, art: 'pendant',  colors: ['#fbe9c4', '#d08a12'], blurb: 'Globe shade with brass-tone cap.' },
  { id: 'p11', name: 'Soy-style Candle',     category: 'Lighting',   price: 21, art: 'candle',   colors: ['#f6e3d6', '#c9764f'], blurb: 'Cedar and citrus scent, 40 hr.' },
  { id: 'p12', name: 'Paper Lantern',        category: 'Lighting',   price: 17, art: 'lantern',  colors: ['#fde0e0', '#d1495b'], blurb: 'Foldable, battery tea-light included.' },
  { id: 'p13', name: 'Dotted Notebook',      category: 'Stationery', price: 12, art: 'notebook', colors: ['#d9e8f5', '#1f3a5f'], blurb: 'A5, 120 pages, lay-flat binding.' },
  { id: 'p14', name: 'Desk Organiser',       category: 'Stationery', price: 26, art: 'organiser',colors: ['#e5e5e5', '#555b66'], blurb: 'Three compartments, powder coated.' },
  { id: 'p15', name: 'Gel Pen Set',          category: 'Stationery', price: 14, art: 'pens',     colors: ['#ece0f7', '#8e44ad'], blurb: 'Set of 5 colours, 0.5 mm.' },
  { id: 'p16', name: 'Canvas Tote',          category: 'Stationery', price: 22, art: 'tote',     colors: ['#e6efe0', '#4a6b3a'], blurb: 'Roomy everyday bag with zip pocket.' }
];

export const money = n => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);
