const perfumes = [
  {
    id: 1,
    name: "Hawas Ice",
    brand: "Rasasi",
    family: "fresca",
    gender: "masculino",
    occasion: "verano",
    popularity: 98,
    isNew: true,
    bottleCapacityMl: 100,
    remainingMl: 85,
    longevity: "9 - 11 horas (Proyección alta)",
    description: "Frescura helada vibrante con manzana crujiente, menta y un fondo limpio de ámbar y almizcle ideal para el clima venezolano.",
    notes: {
      top: "Manzana, Limón italiano, Bergamota, Anís estrellado",
      heart: "Ciruela, Flor de azahar, Cardamomo",
      base: "Almizcle, Ámbar, Musgo, Maderas flotantes"
    },
    prices: { 3: 4.50, 5: 6.50, 10: 11.50 },
    images: {
      bottle: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=700&q=80",
      decant: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=700&q=80"
    }
  },
  {
    id: 2,
    name: "9PM Night Out",
    brand: "Afnan",
    family: "oriental",
    gender: "masculino",
    occasion: "noche",
    popularity: 95,
    isNew: false,
    bottleCapacityMl: 100,
    remainingMl: 60,
    longevity: "10 - 12 horas (Modo bestia nocturno)",
    description: "El rey de las salidas nocturnas. Vainilla cremosa, manzana acaramelada y canela especiada diseñada para atraer cumplidos.",
    notes: {
      top: "Manzana, Canela, Lavanda silvestre, Bergamota",
      heart: "Flor de azahar del naranjo, Lirio de los valles",
      base: "Vainilla, Haba tonka, Ámbar, Pachulí"
    },
    prices: { 3: 4.00, 5: 5.50, 10: 9.80 },
    images: {
      bottle: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=700&q=80",
      decant: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=700&q=80"
    }
  },
  {
    id: 3,
    name: "Amber Oud Gold Edition",
    brand: "Al Haramain",
    family: "frutal",
    gender: "unisex",
    occasion: "verano",
    popularity: 96,
    isNew: false,
    bottleCapacityMl: 100,
    remainingMl: 45,
    longevity: "12+ horas (Estela expansiva)",
    description: "Explosión tropical de melón, piña y vainilla aterciopelada con un aura lujosa y luminosa.",
    notes: {
      top: "Bergamota, Notas verdes",
      heart: "Melón, Piña, Notas dulces, Ámbar",
      base: "Almizcle, Vainilla, Notas amaderadas"
    },
    prices: { 3: 5.00, 5: 7.50, 10: 13.50 },
    images: {
      bottle: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=80",
      decant: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=700&q=80"
    }
  },
  {
    id: 4,
    name: "Yara Elixir",
    brand: "Lattafa",
    family: "frutal",
    gender: "femenino",
    occasion: "oficina",
    popularity: 92,
    isNew: true,
    bottleCapacityMl: 100,
    remainingMl: 90,
    longevity: "8 - 9 horas",
    description: "Batido cremoso de frutas tropicales, orquídea y vainilla suave que envuelve la piel con elegancia femenina.",
    notes: {
      top: "Orquídea, Heliotropo, Mandarina",
      heart: "Acorde gourmand, Frutas tropicales",
      base: "Vainilla, Almizcle, Sándalo"
    },
    prices: { 3: 3.80, 5: 5.20, 10: 9.00 },
    images: {
      bottle: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=700&q=80",
      decant: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=700&q=80"
    }
  },
  {
    id: 5,
    name: "Club de Nuit Intense Man",
    brand: "Armaf",
    family: "amaderada",
    gender: "masculino",
    occasion: "oficina",
    popularity: 97,
    isNew: false,
    bottleCapacityMl: 105,
    remainingMl: 70,
    longevity: "9 - 11 horas",
    description: "Cítricos ahumados sobre abedul y almizcle. Un clásico versátil que proyecta autoridad en oficina o eventos.",
    notes: {
      top: "Limón, Piña, Bergamota, Grosellas negras",
      heart: "Abedul, Jazmín, Rosa",
      base: "Almizcle, Ámbar gris, Pachulí, Vainilla"
    },
    prices: { 3: 4.00, 5: 5.80, 10: 10.00 },
    images: {
      bottle: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=700&q=80",
      decant: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=700&q=80"
    }
  },
  {
    id: 6,
    name: "Asad Bourbon",
    brand: "Lattafa",
    family: "oriental",
    gender: "masculino",
    occasion: "noche",
    popularity: 90,
    isNew: true,
    bottleCapacityMl: 100,
    remainingMl: 30,
    longevity: "9 - 10 horas",
    description: "Vainilla bourbon licorosa, cacao oscuro y especias cálidas con un carácter sofisticado y seductor.",
    notes: {
      top: "Pimienta rosa, Ciruela mirabel, Lavanda",
      heart: "Cacao, Davana, Nuez moscada",
      base: "Vainilla Bourbon, Ámbar, Vetiver"
    },
    prices: { 3: 4.20, 5: 6.00, 10: 10.80 },
    images: {
      bottle: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=700&q=80",
      decant: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=700&q=80"
    }
  }
];

// ESTADO GLOBAL DE LA APLICACIÓN
let state = {
  bcvRate: 46.50,
  showBsPrimary: false,
  cart: [],
  activeProduct: null,
  selectedMl: 5,
  bundleSelection: []
};

// FORMATEADORES DE MONEDA (USD / VES BCV)
function formatPrice(usdAmount) {
  const bsAmount = usdAmount * state.bcvRate;
  if (state.showBsPrimary) {
    return {
      primary: `Bs. ${bsAmount.toLocaleString("es-VE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      secondary: `$${usdAmount.toFixed(2)} USD`
    };
  }
  return {
    primary: `$${usdAmount.toFixed(2)}`,
    secondary: `Bs. ${bsAmount.toLocaleString("es-VE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  };
}

// RENDERIZAR CATÁLOGO CON FILTROS Y ORDENAMIENTO
function renderCatalog() {
  const family = document.getElementById("filter-family").value;
  const gender = document.getElementById("filter-gender").value;
  const occasion = document.getElementById("filter-occasion").value;
  const brand = document.getElementById("filter-brand").value;
  const sortBy = document.getElementById("sort-products").value;

  let filtered = perfumes.filter(p => {
    return (family === "all" || p.family === family) &&
           (gender === "all" || p.gender === gender) &&
           (occasion === "all" || p.occasion === occasion) &&
           (brand === "all" || p.brand === brand);
  });

  if (sortBy === "price-asc") filtered.sort((a, b) => a.prices[5] - b.prices[5]);
  if (sortBy === "price-desc") filtered.sort((a, b) => b.prices[5] - a.prices[5]);
  if (sortBy === "popular") filtered.sort((a, b) => b.popularity - a.popularity);
  if (sortBy === "newest") filtered.sort((a, b) => (b.isNew === a.isNew ? 0 : b.isNew ? 1 : -1));

  const grid = document.getElementById("products-grid");
  grid.innerHTML = filtered.map(p => {
    const price5ml = formatPrice(p.prices[5]);
    const available5ml = Math.floor(p.remainingMl / 5);
    return `
      <article class="product-card">
        <div class="card-img-wrap">
          <img src="${p.images.bottle}" alt="${p.name}" loading="lazy">
          <span class="card-badge">${p.isNew ? "Nuevo" : p.family}</span>
        </div>
        <div class="card-body">
          <span class="card-brand">${p.brand}</span>
          <h4 class="card-title">${p.name}</h4>
          <div class="card-tags">
            <span class="tag-pill">${p.gender}</span>
            <span class="tag-pill">${p.occasion}</span>
            <span class="tag-pill">${available5ml > 0 ? `${available5ml} decants disp.` : "Agotado"}</span>
          </div>
          <div class="card-prices">
            <div>
              <span class="price-main">${price5ml.primary} <small>(5ml)</small></span>
              <span class="price-sub">${price5ml.secondary}</span>
            </div>
            <button class="btn-card-view" onclick="openPDP(${p.id})">Elegir ml</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// ABRIR MODAL DE PRODUCTO (PDP)
window.openPDP = function(id) {
  const product = perfumes.find(p => p.id === id);
  if (!product) return;

  state.activeProduct = product;
  state.selectedMl = 5;

  document.getElementById("pdp-brand").textContent = product.brand;
  document.getElementById("pdp-title").textContent = product.name;
  document.getElementById("pdp-desc").textContent = product.description;
  document.getElementById("pdp-longevity").textContent = `⏱️ ${product.longevity}`;
  document.getElementById("note-top").textContent = product.notes.top;
  document.getElementById("note-heart").textContent = product.notes.heart;
  document.getElementById("note-base").textContent = product.notes.base;

  const mainImg = document.getElementById("pdp-main-img");
  mainImg.src = product.images.bottle;

  document.getElementById("thumb-bottle").onclick = (e) => {
    mainImg.src = product.images.bottle;
    document.querySelectorAll(".thumb-btn").forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
  };

  document.getElementById("thumb-decant").onclick = (e) => {
    mainImg.src = product.images.decant;
    document.querySelectorAll(".thumb-btn").forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
  };

  updatePDPSizeUI();
  document.getElementById("pdp-modal").classList.add("open");
};

function updatePDPSizeUI() {
  const p = state.activeProduct;
  const ml = state.selectedMl;
  const usd = p.prices[ml];
  const bs = usd * state.bcvRate;
  const unitsAvailable = Math.floor(p.remainingMl / ml);

  document.querySelectorAll(".size-btn").forEach(btn => {
    btn.classList.toggle("active", Number(btn.dataset.ml) === ml);
  });

  document.getElementById("pdp-price-usd").textContent = `$${usd.toFixed(2)} USD (${ml}ml)`;
  document.getElementById("pdp-price-bs").textContent = `Bs. ${bs.toLocaleString("es-VE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (Tasa BCV)`;

  const stockEl = document.getElementById("pdp-stock-indicator");
  const addBtn = document.getElementById("pdp-add-cart");

  if (unitsAvailable > 3) {
    stockEl.textContent = `✓ ${unitsAvailable} unidades disponibles`;
    stockEl.className = "stock-pill";
    addBtn.disabled = false;
  } else if (unitsAvailable > 0) {
    stockEl.textContent = `⚠️ ¡Últimas ${unitsAvailable} unidades!`;
    stockEl.className = "stock-pill low";
    addBtn.disabled = false;
  } else {
    stockEl.textContent = "✕ Agotado en este tamaño";
    stockEl.className = "stock-pill low";
    addBtn.disabled = true;
  }
}

// AGREGAR AL CARRITO Y DESCONTAR INVENTARIO DE BOTELLA MADRE
function addToCart(item) {
  state.cart.push(item);
  updateCartUI();
}

function updateCartUI() {
  const countEl = document.getElementById("cart-count");
  const itemsContainer = document.getElementById("cart-items");
  const shippingMethod = document.getElementById("shipping-agency").value;

  countEl.textContent = state.cart.length;

  if (state.cart.length === 0) {
    itemsContainer.innerHTML = `<p style="color:var(--text-muted); font-size:0.9rem;">Tu carrito está vacío. Explora el catálogo para agregar decants.</p>`;
  } else {
    itemsContainer.innerHTML = state.cart.map((item, idx) => `
      <div class="cart-item">
        <div class="cart-item-info">
          <h5>${item.title}</h5>
          <small>${item.detail} • $${item.priceUsd.toFixed(2)}</small>
        </div>
        <button class="btn-remove" onclick="removeCartItem(${idx})">Eliminar</button>
      </div>
    `).join("");
  }

  const subtotalUsd = state.cart.reduce((sum, i) => sum + i.priceUsd, 0);
  const shippingUsd = shippingMethod === "Delivery" && subtotalUsd > 0 ? 3.00 : 0;
  const totalUsd = subtotalUsd + shippingUsd;
  const totalBs = totalUsd * state.bcvRate;

  document.getElementById("cart-subtotal-usd").textContent = `$${subtotalUsd.toFixed(2)}`;
  document.getElementById("cart-shipping-usd").textContent = shippingUsd > 0 ? `$${shippingUsd.toFixed(2)}` : "Cobro en Destino";
  document.getElementById("cart-total-usd").textContent = `$${totalUsd.toFixed(2)}`;
  document.getElementById("cart-total-bs").textContent = `Bs. ${totalBs.toLocaleString("es-VE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  document.getElementById("loyalty-points").textContent = Math.floor(subtotalUsd * 10);
}

window.removeCartItem = function(index) {
  state.cart.splice(index, 1);
  updateCartUI();
};

// DISCOVERY SET BUILDER (3 x 5ml CON 15% DESCUENTO)
function renderDiscoveryBuilder() {
  const list = document.getElementById("bundle-selector-list");
  list.innerHTML = perfumes.map(p => `
    <button type="button" class="bundle-item-btn" onclick="toggleBundlePerfume(${p.id})">
      <strong>${p.name}</strong><br>
      <small style="color:var(--gold-primary)">${p.brand} • 5ml ($${p.prices[5].toFixed(2)})</small>
    </button>
  `).join("");
}

window.toggleBundlePerfume = function(id) {
  const perfume = perfumes.find(p => p.id === id);
  if (!perfume || perfume.remainingMl < 5) return;

  if (state.bundleSelection.length < 3) {
    state.bundleSelection.push(perfume);
  } else {
    state.bundleSelection.shift();
    state.bundleSelection.push(perfume);
  }
  updateBundleUI();
};

function updateBundleUI() {
  const slotsContainer = document.getElementById("bundle-slots");
  const totalEl = document.getElementById("bundle-total-price");
  const btn = document.getElementById("add-bundle-btn");

  let slotsHtml = "";
  for (let i = 0; i < 3; i++) {
    const item = state.bundleSelection[i];
    if (item) {
      slotsHtml += `<div class="slot filled">${i + 1}. ${item.name} (5ml)</div>`;
    } else {
      slotsHtml += `<div class="slot empty">${i + 1}. Elige fragancia</div>`;
    }
  }
  slotsContainer.innerHTML = slotsHtml;

  const rawTotal = state.bundleSelection.reduce((acc, p) => acc + p.prices[5], 0);
  const discountedTotal = rawTotal * 0.85; // 15% OFF
  totalEl.textContent = `$${discountedTotal.toFixed(2)} USD`;
  btn.disabled = state.bundleSelection.length !== 3;
}

// INVENTARIO DE BOTELLAS MADRE (ADMIN)
function renderAdminInventory() {
  const tbody = document.getElementById("admin-inventory-body");
  tbody.innerHTML = perfumes.map(p => {
    const usedMl = p.bottleCapacityMl - p.remainingMl;
    const count5 = Math.floor(p.remainingMl / 5);
    const count10 = Math.floor(p.remainingMl / 10);
    return `
      <tr>
        <td><strong>${p.name}</strong><br><small>${p.brand}</small></td>
        <td>${p.bottleCapacityMl} ml</td>
        <td>${usedMl} ml</td>
        <td style="color:var(--gold-primary); font-weight:700;">${p.remainingMl} ml</td>
        <td>${count5} de 5ml / ${count10} de 10ml</td>
        <td><button class="btn-refill" onclick="refillBottle(${p.id})">+ Nueva Botella</button></td>
      </tr>
    `;
  }).join("");
}

window.refillBottle = function(id) {
  const p = perfumes.find(item => item.id === id);
  if (p) {
    p.remainingMl = p.bottleCapacityMl;
    renderAdminInventory();
    renderCatalog();
  }
};

// INICIALIZACIÓN Y EVENTOS
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  renderDiscoveryBuilder();
  renderAdminInventory();
  updateCartUI();

  // Tasa BCV y cambio de moneda
  document.getElementById("bcv-rate").addEventListener("input", (e) => {
    const val = parseFloat(e.target.value);
    if (val > 0) {
      state.bcvRate = val;
      renderCatalog();
      updateCartUI();
      if (state.activeProduct) updatePDPSizeUI();
    }
  });

  document.getElementById("toggle-currency").addEventListener("click", (e) => {
    state.showBsPrimary = !state.showBsPrimary;
    e.target.textContent = state.showBsPrimary ? "Ver en: Bs. (BCV)" : "Ver en: USD ($)";
    renderCatalog();
  });

  // Filtros
  ["filter-family", "filter-gender", "filter-occasion", "filter-brand", "sort-products"].forEach(id => {
    document.getElementById(id).addEventListener("change", renderCatalog);
  });

  // Selector de ml en PDP
  document.querySelectorAll(".size-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.selectedMl = Number(btn.dataset.ml);
      updatePDPSizeUI();
    });
  });

  // Añadir desde PDP
  document.getElementById("pdp-add-cart").addEventListener("click", () => {
    const p = state.activeProduct;
    const ml = state.selectedMl;
    if (p && p.remainingMl >= ml) {
      p.remainingMl -= ml; // Descuenta de la botella madre
      addToCart({
        title: `${p.name} (${p.brand})`,
        detail: `Decant ${ml}ml`,
        priceUsd: p.prices[ml],
        mlUsed: ml
      });
      renderCatalog();
      renderAdminInventory();
      document.getElementById("pdp-modal").classList.remove("open");
      document.getElementById("cart-drawer").classList.add("open");
    }
  });

  // Añadir Discovery Set
  document.getElementById("add-bundle-btn").addEventListener("click", () => {
    if (state.bundleSelection.length === 3) {
      const names = state.bundleSelection.map(p => p.name).join(", ");
      const total = state.bundleSelection.reduce((acc, p) => acc + p.prices[5], 0) * 0.85;
      state.bundleSelection.forEach(p => { p.remainingMl = Math.max(0, p.remainingMl - 5); });
      addToCart({
        title: "Discovery Set (3 x 5ml)",
        detail: names,
        priceUsd: total,
        mlUsed: 15
      });
      state.bundleSelection = [];
      updateBundleUI();
      renderCatalog();
      renderAdminInventory();
      document.getElementById("cart-drawer").classList.add("open");
    }
  });

  // Checkout y envío de resumen por WhatsApp
  document.getElementById("shipping-agency").addEventListener("change", updateCartUI);
  document.getElementById("checkout-form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (state.cart.length === 0) return alert("Agrega al menos un decant al carrito.");

    const name = document.getElementById("cust-name").value;
    const agency = document.getElementById("shipping-agency").value;
    const payment = document.getElementById("payment-method").value;
    const address = document.getElementById("shipping-address").value;
    const totalUsd = document.getElementById("cart-total-usd").textContent;
    const totalBs = document.getElementById("cart-total-bs").textContent;

    const itemsText = state.cart.map(i => `• ${i.title} - ${i.detail} ($${i.priceUsd.toFixed(2)})`).join("%0A");
    const msg = `Hola *Gabo Fragrance*, quiero confirmar mi pedido:%0A%0A*Cliente:* ${name}%0A*Productos:*%0A${itemsText}%0A%0A*Envío:* ${agency} (${address})%0A*Método de Pago:* ${payment}%0A*Total:* ${totalUsd} / ${totalBs}`;

    window.open(`https://wa.me/584120000000?text=${msg}`, "_blank");
  });

  // Controles de modales y menú móvil
  document.getElementById("close-pdp").onclick = () => document.getElementById("pdp-modal").classList.remove("open");
  document.getElementById("open-cart-btn").onclick = () => document.getElementById("cart-drawer").classList.add("open");
  document.getElementById("close-cart").onclick = () => document.getElementById("cart-drawer").classList.remove("open");
  document.getElementById("open-admin-btn").onclick = () => {
    renderAdminInventory();
    document.getElementById("admin-modal").classList.add("open");
  };
  document.getElementById("close-admin").onclick = () => document.getElementById("admin-modal").classList.remove("open");
  document.getElementById("menu-toggle").onclick = () => document.getElementById("nav-links").classList.toggle("active");
});:root {
  --bg-black: #09090b;
  --bg-card: #121216;
  --bg-elevated: #1a1a20;
  --gold-primary: #d4af37;
  --gold-light: #f3e5ab;
  --gold-dark: #aa8220;
  --text-main: #f4f4f6;
  --text-muted: #a1a1aa;
  --border-subtle: rgba(212, 175, 55, 0.22);
  --font-display: 'Cinzel', serif;
  --font-sans: 'Plus Jakarta Sans', sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg-black);
  color: var(--text-main);
  font-family: var(--font-sans);
  line-height: 1.6;
  overflow-x: hidden;
}

.container {
  width: 92%;
  max-width: 1200px;
  margin: 0 auto;
}

/* TOP BAR BCV */
.top-bar {
  background: #000;
  border-bottom: 1px solid var(--border-subtle);
  font-size: 0.8rem;
  padding: 8px 0;
}

.top-bar-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.badge-auth {
  color: var(--gold-light);
  font-weight: 500;
}

.currency-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.currency-controls input {
  width: 72px;
  background: var(--bg-elevated);
  border: 1px solid var(--gold-primary);
  color: var(--gold-light);
  padding: 3px 6px;
  border-radius: 4px;
  font-weight: 600;
}

.btn-currency {
  background: rgba(212, 175, 55, 0.15);
  color: var(--gold-primary);
  border: 1px solid var(--gold-primary);
  padding: 3px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 600;
}

/* NAVBAR */
.navbar {
  position: sticky;
  top: 0;
  z-index: 90;
  background: rgba(9, 9, 11, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-subtle);
  padding: 14px 0;
}

.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--text-main);
}

.brand-monogram {
  width: 40px;
  height: 40px;
  border: 1.5px solid var(--gold-primary);
  display: grid;
  place-items: center;
  font-family: var(--font-display);
  font-size: 1.4rem;
  color: var(--gold-primary);
  border-radius: 6px;
  background: linear-gradient(135deg, #18181b, #09090b);
}

.brand-text h1 {
  font-family: var(--font-display);
  font-size: 1.15rem;
  letter-spacing: 2px;
  color: var(--gold-primary);
}

.brand-text small {
  display: block;
  font-size: 0.65rem;
  letter-spacing: 3px;
  color: var(--text-muted);
}

.nav-links {
  display: none;
  gap: 24px;
  align-items: center;
}

.nav-links.active {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--bg-card);
  padding: 20px;
  border-bottom: 1px solid var(--border-subtle);
}

.nav-links a {
  color: var(--text-main);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--gold-primary);
}

.btn-admin-toggle {
  background: transparent;
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cart-trigger {
  background: linear-gradient(135deg, var(--gold-primary), var(--gold-dark));
  color: #000;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
}

.menu-toggle {
  background: none;
  border: 1px solid var(--border-subtle);
  color: var(--gold-primary);
  font-size: 1.2rem;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
}

/* HERO */
.hero {
  position: relative;
  min-height: 75vh;
  display: flex;
  align-items: center;
  background: radial-gradient(circle at 75% 30%, rgba(212, 175, 55, 0.16), transparent 55%),
              linear-gradient(to bottom, #09090b, #111115);
  border-bottom: 1px solid var(--border-subtle);
  padding: 60px 0;
}

.hero-content {
  max-width: 680px;
}

.hero-tag {
  display: inline-block;
  color: var(--gold-primary);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 14px;
}

.hero h2 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4.5vw, 3.3rem);
  line-height: 1.15;
  margin-bottom: 18px;
}

.hero p {
  color: var(--text-muted);
  font-size: 1.05rem;
  margin-bottom: 30px;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

/* BOTONES */
.btn-gold {
  background: linear-gradient(135deg, var(--gold-primary), var(--gold-dark));
  color: #09090b;
  font-weight: 700;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-gold:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.25);
}

.btn-gold:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.btn-outline {
  border: 1px solid var(--gold-primary);
  color: var(--gold-primary);
  background: transparent;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.2s;
}

.btn-outline:hover {
  background: rgba(212, 175, 55, 0.1);
}

.full-width {
  width: 100%;
}

/* SECCIONES */
.section {
  padding: 70px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 42px;
}

.sub-gold {
  color: var(--gold-primary);
  font-size: 0.75rem;
  letter-spacing: 2.5px;
  font-weight: 700;
  display: block;
  margin-bottom: 6px;
}

.section-header h3 {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
}

.grid-3 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 22px;
}

.value-card, .review-card, .blog-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  padding: 28px;
  border-radius: 10px;
}

.icon-gold {
  font-size: 1.8rem;
  margin-bottom: 12px;
}

.value-card h4, .blog-card h4 {
  color: var(--gold-light);
  margin-bottom: 8px;
}

.value-card p, .blog-card p, .review-card p {
  color: var(--text-muted);
  font-size: 0.92rem;
}

/* FILTROS */
.filters-bar {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 30px;
  background: var(--bg-card);
  padding: 16px;
  border-radius: 10px;
  border: 1px solid var(--border-subtle);
}

.filter-group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
}

select, input, textarea {
  background: var(--bg-elevated);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--text-main);
  padding: 10px 12px;
  border-radius: 6px;
  font-family: inherit;
  font-size: 0.88rem;
}

select:focus, input:focus, textarea:focus {
  outline: none;
  border-color: var(--gold-primary);
}

/* GRID PRODUCTOS */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
}

.product-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s, border-color 0.25s;
}

.product-card:hover {
  transform: translateY(-4px);
  border-color: var(--gold-primary);
}

.card-img-wrap {
  position: relative;
  height: 230px;
  background: #0d0d10;
  overflow: hidden;
}

.card-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(9, 9, 11, 0.85);
  border: 1px solid var(--gold-primary);
  color: var(--gold-primary);
  font-size: 0.7rem;
  padding: 3px 8px;
  border-radius: 4px;
  text-transform: uppercase;
}

.card-body {
  padding: 18px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-brand {
  font-size: 0.72rem;
  letter-spacing: 1.5px;
  color: var(--gold-primary);
  text-transform: uppercase;
}

.card-title {
  font-size: 1.1rem;
  margin: 4px 0 8px;
}

.card-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 14px;
}

.tag-pill {
  font-size: 0.72rem;
  background: var(--bg-elevated);
  color: var(--text-muted);
  padding: 2px 8px;
  border-radius: 4px;
}

.card-prices {
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price-main {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--gold-light);
}

.price-sub {
  display: block;
  font-size: 0.75rem;
  color: var(--text-muted);
}

.btn-card-view {
  background: transparent;
  border: 1px solid var(--gold-primary);
  color: var(--gold-primary);
  padding: 7px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.82rem;
}

.btn-card-view:hover {
  background: var(--gold-primary);
  color: #000;
}

/* DISCOVERY SET */
.bundle-box {
  background: linear-gradient(145deg, #141418, #0c0c0e);
  border: 1px solid var(--gold-primary);
  border-radius: 14px;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
}

.bundle-slots {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 20px 0;
}

.slot {
  background: var(--bg-elevated);
  border: 1px dashed var(--gold-primary);
  padding: 12px;
  border-radius: 8px;
  font-size: 0.8rem;
  text-align: center;
  color: var(--gold-light);
}

.slot.filled {
  border-style: solid;
  background: rgba(212, 175, 55, 0.15);
}

.bundle-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.gold-text {
  color: var(--gold-primary);
  font-size: 1.4rem;
  display: block;
}

.bundle-selector-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 10px;
  max-height: 290px;
  overflow-y: auto;
}

.bundle-item-btn {
  background: var(--bg-elevated);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-main);
  padding: 10px;
  border-radius: 8px;
  text-align: left;
  cursor: pointer;
  font-size: 0.82rem;
}

.bundle-item-btn:hover {
  border-color: var(--gold-primary);
}

/* TESTIMONIOS & BLOG */
.stars {
  color: var(--gold-primary);
  margin-bottom: 10px;
  letter-spacing: 2px;
}

.reviewer {
  display: block;
  margin-top: 12px;
  font-size: 0.82rem;
  color: var(--gold-light);
  font-weight: 600;
}

.blog-tag {
  font-size: 0.7rem;
  color: var(--gold-primary);
  font-weight: 700;
  letter-spacing: 1px;
}

/* MODALES Y DRAWER */
.modal-backdrop, .drawer-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.82);
  backdrop-filter: blur(5px);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 200;
  padding: 16px;
}

.modal-backdrop.open, .drawer-backdrop.open {
  display: flex;
}

.drawer-backdrop {
  justify-content: flex-end;
  padding: 0;
}

.modal-content {
  background: var(--bg-card);
  border: 1px solid var(--gold-primary);
  border-radius: 14px;
  max-width: 860px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 26px;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 14px;
  right: 16px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
}

.pdp-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

.pdp-gallery img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid var(--border-subtle);
}

.pdp-thumbs {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.thumb-btn {
  flex: 1;
  padding: 8px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  border-radius: 6px;
  cursor: pointer;
}

.thumb-btn.active {
  border-color: var(--gold-primary);
  color: var(--gold-primary);
}

.pdp-meta {
  display: flex;
  gap: 12px;
  margin: 12px 0;
  font-size: 0.85rem;
}

.stock-pill {
  background: rgba(34, 197, 94, 0.15);
  color: #4ade80;
  padding: 2px 10px;
  border-radius: 99px;
}

.stock-pill.low {
  background: rgba(234, 179, 8, 0.15);
  color: #facc15;
}

.pyramid-box {
  background: var(--bg-elevated);
  padding: 14px;
  border-radius: 8px;
  margin: 14px 0;
}

.pyramid-box h4 {
  color: var(--gold-primary);
  font-size: 0.9rem;
  margin-bottom: 6px;
}

.pyramid-box ul {
  list-style: none;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.size-buttons {
  display: flex;
  gap: 10px;
  margin: 10px 0 18px;
}

.size-btn {
  flex: 1;
  padding: 10px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

.size-btn.active {
  background: var(--gold-primary);
  color: #000;
}

.pdp-price-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border-subtle);
  padding-top: 16px;
}

.pdp-price-usd {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--gold-primary);
  display: block;
}

.pdp-price-bs {
  font-size: 0.85rem;
  color: var(--text-muted);
}

/* DRAWER CARRITO */
.drawer-panel {
  background: var(--bg-card);
  width: 100%;
  max-width: 440px;
  height: 100%;
  padding: 22px;
  overflow-y: auto;
  border-left: 1px solid var(--gold-primary);
  position: relative;
}

.drawer-header {
  margin-bottom: 18px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border-subtle);
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bg-elevated);
  padding: 10px 12px;
  border-radius: 8px;
  margin-bottom: 10px;
}

.cart-item-info h5 {
  font-size: 0.9rem;
}

.cart-item-info small {
  color: var(--gold-primary);
}

.btn-remove {
  background: none;
  border: none;
  color: #f87171;
  cursor: pointer;
  font-size: 0.85rem;
}

.loyalty-banner {
  background: rgba(212, 175, 55, 0.12);
  border: 1px solid var(--border-subtle);
  padding: 10px;
  border-radius: 8px;
  font-size: 0.82rem;
  color: var(--gold-light);
  margin: 14px 0;
}

.checkout-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.cart-totals {
  background: var(--bg-elevated);
  padding: 14px;
  border-radius: 8px;
  margin: 8px 0;
}

.total-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.88rem;
  margin-bottom: 6px;
}

.grand-total {
  font-weight: 700;
  color: var(--gold-primary);
  font-size: 1.05rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 6px;
}

.bcv-total {
  color: var(--gold-light);
  font-weight: 600;
}

/* TABLA ADMIN BOTELLAS MADRE */
.table-responsive {
  overflow-x: auto;
  margin-top: 16px;
}

.admin-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
}

.admin-table th, .admin-table td {
  padding: 10px;
  border-bottom: 1px solid var(--border-subtle);
  text-align: left;
}

.admin-table th {
  color: var(--gold-primary);
}

.btn-refill {
  background: var(--bg-elevated);
  border: 1px solid var(--gold-primary);
  color: var(--gold-primary);
  padding: 4px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.footer {
  border-top: 1px solid var(--border-subtle);
  padding: 36px 0;
  background: #050507;
  color: var(--text-muted);
  font-size: 0.85rem;
}

.footer-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
}

.footer h4 {
  color: var(--gold-primary);
  font-family: var(--font-display);
}

.footer-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

/* RESPONSIVE DESKTOP */
@media (min-width: 768px) {
  .menu-toggle {
    display: none;
  }
  .nav-links {
    display: flex;
  }
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  .filters-bar {
    flex-direction: row;
    justify-content: space-between;
  }
  .bundle-box {
    grid-template-columns: 1.1fr 1fr;
  }
  .pdp-grid {
    grid-template-columns: 1fr 1.2fr;
  }
}