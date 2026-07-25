// ==================== НАСТРОЙКИ ====================
const WHATSAPP_NUMBER = "996 552 535 540";
const ITEMS_PER_PAGE = 12;

// ==================== ДАННЫЕ ТОВАРОВ ====================
const products = [
  // Кабельная продукция
  {
    id: 1,
    name: "Кабель ВВГ 3x1.5",
    category: "cables",
    desc: "Силовой кабель для стационарной прокладки внутри помещений",
    price: 55,
    unit: "сом/м",
    icon: "fa-bolt",
    popular: true,
  },
  {
    id: 2,
    name: "Кабель ВВГ 3x2.5",
    category: "cables",
    desc: "Силовой кабель с медными жилами для розеточных групп",
    price: 85,
    unit: "сом/м",
    icon: "fa-bolt",
    popular: true,
  },
  {
    id: 3,
    name: "Кабель ВВГ 5x4",
    category: "cables",
    desc: "Кабель для трехфазной сети, ввод в дом",
    price: 180,
    unit: "сом/м",
    icon: "fa-bolt",
  },
  {
    id: 4,
    name: "Кабель ВВГ 5x6",
    category: "cables",
    desc: "Усиленный кабель для мощных потребителей",
    price: 260,
    unit: "сом/м",
    icon: "fa-bolt",
  },
  {
    id: 5,
    name: "Кабель NYM 3x1.5",
    category: "cables",
    desc: "Универсальный монтажный кабель европейского стандарта",
    price: 65,
    unit: "сом/м",
    icon: "fa-bolt",
  },
  {
    id: 6,
    name: "Кабель NYM 3x2.5",
    category: "cables",
    desc: "Монтажный кабель для скрытой и открытой проводки",
    price: 95,
    unit: "сом/м",
    icon: "fa-bolt",
  },
  {
    id: 7,
    name: "Провод ПВС 2x0.75",
    category: "cables",
    desc: "Гибкий провод для бытовых приборов и удлинителей",
    price: 35,
    unit: "сом/м",
    icon: "fa-plug",
  },
  {
    id: 8,
    name: "Провод ПВС 2x1.5",
    category: "cables",
    desc: "Гибкий провод для мощных бытовых приборов",
    price: 55,
    unit: "сом/м",
    icon: "fa-plug",
  },
  {
    id: 9,
    name: "Провод ПВС 3x1.5",
    category: "cables",
    desc: "Трехжильный гибкий провод с заземлением",
    price: 75,
    unit: "сом/м",
    icon: "fa-plug",
  },
  {
    id: 10,
    name: "СИП 2x16",
    category: "cables",
    desc: "Самонесущий изолированный провод для воздушных линий",
    price: 95,
    unit: "сом/м",
    icon: "fa-network-wired",
  },
  {
    id: 11,
    name: "СИП 4x16",
    category: "cables",
    desc: "Магистральный СИП для трехфазного ввода",
    price: 145,
    unit: "сом/м",
    icon: "fa-network-wired",
  },
  {
    id: 12,
    name: "СИП 4x25",
    category: "cables",
    desc: "Усиленный магистральный провод для больших нагрузок",
    price: 210,
    unit: "сом/м",
    icon: "fa-network-wired",
  },
  {
    id: 13,
    name: "Гофра ПВХ 16 мм",
    category: "cables",
    desc: "Гибкая гофрированная труба для кабеля",
    price: 12,
    unit: "сом/м",
    icon: "fa-grip-lines",
  },
  {
    id: 14,
    name: "Гофра ПВХ 20 мм",
    category: "cables",
    desc: "Гофрированная труба среднего диаметра",
    price: 18,
    unit: "сом/м",
    icon: "fa-grip-lines",
  },
  {
    id: 15,
    name: "Гофра ПВХ 25 мм",
    category: "cables",
    desc: "Гофра большого диаметра для силовых кабелей",
    price: 25,
    unit: "сом/м",
    icon: "fa-grip-lines",
  },
  {
    id: 16,
    name: "Кабель КГ 2x2.5",
    category: "cables",
    desc: "Гибкий кабель для подключения сварочных аппаратов",
    price: 110,
    unit: "сом/м",
    icon: "fa-bolt",
  },
  {
    id: 17,
    name: "Кабель АВВГ 4x10",
    category: "cables",
    desc: "Алюминиевый кабель для ввода в здание",
    price: 130,
    unit: "сом/м",
    icon: "fa-bolt",
  },

  // Трубы, кабель-каналы
  {
    id: 18,
    name: "Кабель-канал 16x12",
    category: "pipes",
    desc: "Мини-короб для офисной проводки",
    price: 35,
    unit: "сом/шт",
    icon: "fa-grip-lines",
  },
  {
    id: 19,
    name: "Кабель-канал 25x16",
    category: "pipes",
    desc: "Пластиковый короб стандартного размера",
    price: 55,
    unit: "сом/шт",
    icon: "fa-grip-lines",
  },
  {
    id: 20,
    name: "Кабель-канал 40x25",
    category: "pipes",
    desc: "Крупный короб для магистральной проводки",
    price: 95,
    unit: "сом/шт",
    icon: "fa-grip-lines",
  },
  {
    id: 21,
    name: "Гофрированная труба ПНД 20 мм",
    category: "pipes",
    desc: "Труба ПНД для прокладки в стенах",
    price: 28,
    unit: "сом/м",
    icon: "fa-circle",
  },
  {
    id: 22,
    name: "Гофрированная труба ПНД 32 мм",
    category: "pipes",
    desc: "Труба для наружной прокладки кабеля",
    price: 42,
    unit: "сом/м",
    icon: "fa-circle",
  },
  {
    id: 23,
    name: "Металлический лоток 100 мм",
    category: "pipes",
    desc: "Лоток для кабельных трасс в цехах",
    price: 250,
    unit: "сом/шт",
    icon: "fa-draw-polygon",
  },
  {
    id: 24,
    name: "Металлический лоток 200 мм",
    category: "pipes",
    desc: "Широкий лоток для больших кабельных трасс",
    price: 380,
    unit: "сом/шт",
    icon: "fa-draw-polygon",
  },
  {
    id: 25,
    name: "ПВХ труба 16 мм",
    category: "pipes",
    desc: "Гладкая жесткая труба для электропроводки",
    price: 22,
    unit: "сом/м",
    icon: "fa-circle-notch",
  },
  {
    id: 26,
    name: "ПВХ труба 32 мм",
    category: "pipes",
    desc: "Труба для магистральных линий",
    price: 55,
    unit: "сом/м",
    icon: "fa-circle-notch",
  },

  // Розетки и выключатели
  {
    id: 27,
    name: "Розетка 16А Schneider",
    category: "sockets",
    desc: "Одноместная розетка скрытой установки с заземлением",
    price: 280,
    unit: "сом/шт",
    icon: "fa-plug",
    popular: true,
  },
  {
    id: 28,
    name: "Розетка 16А Legrand",
    category: "sockets",
    desc: "Французское качество, надежный контакт",
    price: 320,
    unit: "сом/шт",
    icon: "fa-plug",
    popular: true,
  },
  {
    id: 29,
    name: "Двойная розетка ABB",
    category: "sockets",
    desc: "Двухместная розетка с заземлением",
    price: 450,
    unit: "сом/шт",
    icon: "fa-plug",
  },
  {
    id: 30,
    name: "USB-розетка 2A",
    category: "sockets",
    desc: "Розетка со встроенным USB-портом для зарядки",
    price: 680,
    unit: "сом/шт",
    icon: "fa-usb",
  },
  {
    id: 31,
    name: "Выключатель 1кл Schneider",
    category: "sockets",
    desc: "Одноклавишный выключатель скрытого монтажа",
    price: 190,
    unit: "сом/шт",
    icon: "fa-toggle-on",
  },
  {
    id: 32,
    name: "Выключатель 2кл Legrand",
    category: "sockets",
    desc: "Двухклавишный выключатель для люстр",
    price: 280,
    unit: "сом/шт",
    icon: "fa-toggle-on",
  },
  {
    id: 33,
    name: "Проходной выключатель",
    category: "sockets",
    desc: "Для управления освещением из двух мест",
    price: 250,
    unit: "сом/шт",
    icon: "fa-exchange-alt",
  },
  {
    id: 34,
    name: "Диммер 600W",
    category: "sockets",
    desc: "Регулятор яркости для ламп накаливания",
    price: 420,
    unit: "сом/шт",
    icon: "fa-adjust",
  },
  {
    id: 35,
    name: "Рамка 2-постовая",
    category: "sockets",
    desc: "Декоративная рамка для розеток и выключателей",
    price: 95,
    unit: "сом/шт",
    icon: "fa-square",
  },

  // Щиты и оборудование
  {
    id: 36,
    name: "Электрощит 12 модулей",
    category: "panels",
    desc: "Распределительный щит навесной IP40",
    price: 980,
    unit: "сом/шт",
    icon: "fa-server",
    popular: true,
  },
  {
    id: 37,
    name: "Электрощит 24 модуля",
    category: "panels",
    desc: "Щит для квартиры или небольшого дома",
    price: 1450,
    unit: "сом/шт",
    icon: "fa-server",
  },
  {
    id: 38,
    name: "Электрощит 36 модулей",
    category: "panels",
    desc: "Большой щит для коттеджа или офиса",
    price: 2200,
    unit: "сом/шт",
    icon: "fa-server",
  },
  {
    id: 39,
    name: "Автомат 10А ABB",
    category: "panels",
    desc: "Автоматический выключатель однополюсный",
    price: 320,
    unit: "сом/шт",
    icon: "fa-shield-alt",
  },
  {
    id: 40,
    name: "Автомат 16А ABB",
    category: "panels",
    desc: "Стандартный автомат для розеточных групп",
    price: 350,
    unit: "сом/шт",
    icon: "fa-shield-alt",
    popular: true,
  },
  {
    id: 41,
    name: "Автомат 25А Schneider",
    category: "panels",
    desc: "Автомат для мощных потребителей",
    price: 420,
    unit: "сом/шт",
    icon: "fa-shield-alt",
  },
  {
    id: 42,
    name: "УЗО 25А 30мА ABB",
    category: "panels",
    desc: "Устройство защитного отключения",
    price: 850,
    unit: "сом/шт",
    icon: "fa-shield-virus",
  },
  {
    id: 43,
    name: "УЗО 40А 30мА Schneider",
    category: "panels",
    desc: "Защита от утечек тока для всего дома",
    price: 1100,
    unit: "сом/шт",
    icon: "fa-shield-virus",
  },
  {
    id: 44,
    name: "Дифавтомат 16А 30мА",
    category: "panels",
    desc: "Автомат + УЗО в одном корпусе",
    price: 950,
    unit: "сом/шт",
    icon: "fa-bolt",
  },
  {
    id: 45,
    name: "Дифавтомат 25А 30мА",
    category: "panels",
    desc: "Комбинированная защита для мощных линий",
    price: 1200,
    unit: "сом/шт",
    icon: "fa-bolt",
  },
  {
    id: 46,
    name: "DIN-рейка 35 мм",
    category: "panels",
    desc: "Металлическая DIN-рейка для монтажа автоматов",
    price: 55,
    unit: "сом/шт",
    icon: "fa-ruler-horizontal",
  },
  {
    id: 47,
    name: "Клеммная колодка 12 пар",
    category: "panels",
    desc: "Соединительная колодка для распределения",
    price: 120,
    unit: "сом/шт",
    icon: "fa-th",
  },

  // Освещение
  {
    id: 48,
    name: "LED лампа 9W E27 6500K",
    category: "lighting",
    desc: "Светодиодная лампа холодный белый свет",
    price: 110,
    unit: "сом/шт",
    icon: "fa-lightbulb",
    popular: true,
  },
  {
    id: 49,
    name: "LED лампа 12W E27 3000K",
    category: "lighting",
    desc: "Теплый свет, аналог 100Вт лампы накаливания",
    price: 140,
    unit: "сом/шт",
    icon: "fa-lightbulb",
  },
  {
    id: 50,
    name: "LED лампа 15W E27",
    category: "lighting",
    desc: "Яркая лампа для больших помещений",
    price: 180,
    unit: "сом/шт",
    icon: "fa-lightbulb",
  },
  {
    id: 51,
    name: "LED прожектор 30W IP65",
    category: "lighting",
    desc: "Уличный прожектор для подсветки территории",
    price: 550,
    unit: "сом/шт",
    icon: "fa-sun",
  },
  {
    id: 52,
    name: "LED прожектор 50W IP65",
    category: "lighting",
    desc: "Мощный прожектор для фасадов и дворов",
    price: 780,
    unit: "сом/шт",
    icon: "fa-sun",
  },
  {
    id: 53,
    name: "LED прожектор 100W IP66",
    category: "lighting",
    desc: "Промышленный прожектор для больших площадей",
    price: 1350,
    unit: "сом/шт",
    icon: "fa-sun",
  },
  {
    id: 54,
    name: "Светильник встраиваемый 6W",
    category: "lighting",
    desc: "Точечный LED-светильник для потолка",
    price: 220,
    unit: "сом/шт",
    icon: "fa-lightbulb",
  },
  {
    id: 55,
    name: "Светильник накладной 12W",
    category: "lighting",
    desc: "Накладной потолочный светильник",
    price: 380,
    unit: "сом/шт",
    icon: "fa-lightbulb",
  },
  {
    id: 56,
    name: "Люстра LED Modern 5 ламп",
    category: "lighting",
    desc: "Современная подвесная люстра с LED-лампами",
    price: 4200,
    unit: "сом/шт",
    icon: "fa-fan",
  },
  {
    id: 57,
    name: "Уличный светильник настенный",
    category: "lighting",
    desc: "Влагозащищенный светильник IP44",
    price: 620,
    unit: "сом/шт",
    icon: "fa-street-view",
  },
  {
    id: 58,
    name: "Трековая система 3 светильника",
    category: "lighting",
    desc: "Поворотные трековые светильники для магазинов",
    price: 1850,
    unit: "сом/компл",
    icon: "fa-lightbulb",
  },
  {
    id: 59,
    name: "Аварийный светильник LED",
    category: "lighting",
    desc: "Светильник с аккумулятором для аварийного освещения",
    price: 480,
    unit: "сом/шт",
    icon: "fa-exclamation-triangle",
  },

  // Услуги
  {
    id: 60,
    name: "Штробление стен (кирпич)",
    category: "services",
    desc: "За метр погонный, глубина до 30 мм",
    price: 180,
    unit: "сом/м",
    icon: "fa-hammer",
  },
  {
    id: 61,
    name: "Штробление стен (бетон)",
    category: "services",
    desc: "За метр погонный, с алмазным диском",
    price: 300,
    unit: "сом/м",
    icon: "fa-hammer",
  },
  {
    id: 62,
    name: "Монтаж кабеля открытый",
    category: "services",
    desc: "Прокладка кабеля в кабель-канале",
    price: 120,
    unit: "сом/м",
    icon: "fa-tools",
  },
  {
    id: 63,
    name: "Монтаж кабеля скрытый",
    category: "services",
    desc: "Прокладка кабеля в штробе с заделкой",
    price: 200,
    unit: "сом/м",
    icon: "fa-tools",
  },
  {
    id: 64,
    name: "Установка автомата в щите",
    category: "services",
    desc: "Монтаж и подключение одного модуля",
    price: 250,
    unit: "сом/шт",
    icon: "fa-shield-alt",
  },
  {
    id: 65,
    name: "Сборка электрощита",
    category: "services",
    desc: "Полная сборка распределительного щита",
    price: 2500,
    unit: "сом/шт",
    icon: "fa-server",
  },
  {
    id: 66,
    name: "Монтаж электрощита навесного",
    category: "services",
    desc: "Установка и подключение щита",
    price: 1800,
    unit: "сом/шт",
    icon: "fa-server",
  },
  {
    id: 67,
    name: "Установка розетки",
    category: "services",
    desc: "Врезка в стену и подключение",
    price: 350,
    unit: "сом/шт",
    icon: "fa-plug",
  },
  {
    id: 68,
    name: "Установка выключателя",
    category: "services",
    desc: "Монтаж и подключение выключателя",
    price: 300,
    unit: "сом/шт",
    icon: "fa-toggle-on",
  },
  {
    id: 69,
    name: "Диагностика электропроводки",
    category: "services",
    desc: "Полная проверка системы с заключением",
    price: 1500,
    unit: "сом",
    icon: "fa-search",
  },
  {
    id: 70,
    name: "Проектирование электроснабжения",
    category: "services",
    desc: "Разработка проекта для квартиры/дома",
    price: 5000,
    unit: "сом",
    icon: "fa-drafting-compass",
  },
  {
    id: 71,
    name: "Замена проводки (1 комната)",
    category: "services",
    desc: "Полная замена проводки в одной комнате",
    price: 4500,
    unit: "сом",
    icon: "fa-sync-alt",
  },
  {
    id: 72,
    name: "Подключение электроплиты",
    category: "services",
    desc: "Прокладка силового кабеля и подключение",
    price: 1800,
    unit: "сом",
    icon: "fa-fire",
  },
  {
    id: 73,
    name: "Монтаж теплого пола (электрика)",
    category: "services",
    desc: "Подключение системы теплого пола",
    price: 2800,
    unit: "сом",
    icon: "fa-temperature-high",
  },
  {
    id: 74,
    name: "Установка стабилизатора напряжения",
    category: "services",
    desc: "Монтаж и подключение стабилизатора",
    price: 1200,
    unit: "сом",
    icon: "fa-chart-line",
  },
];

// ==================== ГЛОБАЛЬНОЕ СОСТОЯНИЕ ====================
let cart = JSON.parse(localStorage.getItem("nurservice_cart")) || [];
let currentFilter = "all";
let currentSort = "default";
let searchQuery = "";
let currentPage = 1;

// ==================== DOM ЭЛЕМЕНТЫ ====================
const catalogGrid = document.getElementById("catalogGrid");
const categoryFilter = document.getElementById("categoryFilter");
const paginationContainer = document.getElementById("pagination");
const searchInput = document.getElementById("searchInput");
const cartBtn = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");
const cartModalOverlay = document.getElementById("cartModalOverlay");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartFooter = document.getElementById("cartFooter");
const cartEmpty = document.getElementById("cartEmpty");
const cartTotalPrice = document.getElementById("cartTotalPrice");
const clearCartBtn = document.getElementById("clearCartBtn");
const checkoutBtn = document.getElementById("checkoutBtn");
const burgerBtn = document.getElementById("burgerBtn");
const mainNav = document.getElementById("mainNav");
const header = document.getElementById("header");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const sortButtons = document.querySelectorAll(".sort-btn");

// ==================== ФУНКЦИИ ====================

function saveCart() {
  localStorage.setItem("nurservice_cart", JSON.stringify(cart));
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
  cartCount.classList.add("bump");
  setTimeout(() => cartCount.classList.remove("bump"), 200);
}

function getProductById(id) {
  return products.find((p) => p.id === id);
}

function getCategoryName(cat) {
  const names = {
    cables: "Кабели",
    pipes: "Трубы и каналы",
    sockets: "Розетки и выключатели",
    panels: "Щиты и оборудование",
    lighting: "Освещение",
    services: "Услуги",
  };
  return names[cat] || cat;
}

function getFilteredProducts() {
  let filtered = [...products];

  if (currentFilter !== "all") {
    filtered = filtered.filter((p) => p.category === currentFilter);
  }

  if (searchQuery.trim() !== "") {
    const query = searchQuery.toLowerCase().trim();
    filtered = filtered.filter((p) => p.name.toLowerCase().includes(query));
  }

  switch (currentSort) {
    case "price-asc":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "name":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      filtered.sort((a, b) => {
        if (a.popular && !b.popular) return -1;
        if (!a.popular && b.popular) return 1;
        return a.id - b.id;
      });
  }

  return filtered;
}

function renderCatalog() {
  const filtered = getFilteredProducts();
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  if (currentPage > totalPages) currentPage = totalPages || 1;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageProducts = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  catalogGrid.innerHTML = "";

  if (pageProducts.length === 0) {
    catalogGrid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#999;">
        <i class="fas fa-search" style="font-size:50px;margin-bottom:16px;display:block;opacity:0.3;"></i>
        <p style="font-size:18px;font-weight:600;color:#555;">Товары не найдены</p>
        <p style="font-size:14px;">Попробуйте изменить параметры поиска или фильтра</p>
      </div>`;
    paginationContainer.innerHTML = "";
    return;
  }

  pageProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-image">
        <i class="fas ${product.icon}" style="font-size:50px;color:var(--color-primary);"></i>
        <span class="product-category-badge">${getCategoryName(product.category)}</span>
        ${product.popular ? '<span style="position:absolute;top:14px;right:14px;background:#e74c3c;color:white;font-size:10px;padding:3px 10px;border-radius:20px;font-weight:600;">ХИТ</span>' : ""}
      </div>
      <div class="product-body">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.desc}</p>
        <div class="product-price">${product.price} <span>${product.unit}</span></div>
        <button class="product-btn" data-id="${product.id}">
          <i class="fas fa-cart-plus"></i> Добавить в корзину
        </button>
      </div>
    `;
    catalogGrid.appendChild(card);
  });

  document.querySelectorAll(".product-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.currentTarget.getAttribute("data-id"));
      addToCart(id);
    });
  });

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  if (totalPages <= 1) {
    paginationContainer.innerHTML = "";
    return;
  }

  let html = "";
  html += `<button class="page-btn" ${currentPage === 1 ? "disabled" : ""} data-page="${currentPage - 1}">
    <i class="fas fa-chevron-left"></i>
  </button>`;

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 2 && i <= currentPage + 2)
    ) {
      html += `<button class="page-btn ${i === currentPage ? "active" : ""}" data-page="${i}">${i}</button>`;
    } else if (i === currentPage - 3 || i === currentPage + 3) {
      html += `<span class="page-dots">...</span>`;
    }
  }

  html += `<button class="page-btn" ${currentPage === totalPages ? "disabled" : ""} data-page="${currentPage + 1}">
    <i class="fas fa-chevron-right"></i>
  </button>`;

  paginationContainer.innerHTML = html;

  document.querySelectorAll(".page-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const page = parseInt(btn.getAttribute("data-page"));
      if (page && page !== currentPage) {
        currentPage = page;
        renderCatalog();
        document
          .getElementById("catalog")
          .scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

function addToCart(productId) {
  const existing = cart.find((item) => item.productId === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ productId, quantity: 1 });
  }
  saveCart();
  updateCartCount();
  animateAddToCart();
  showToast("Товар добавлен в корзину");
}

function animateAddToCart() {
  cartBtn.style.transform = "scale(1.2)";
  setTimeout(() => (cartBtn.style.transform = "scale(1)"), 200);
}

function showToast(message) {
  const oldToast = document.querySelector(".toast-notification");
  if (oldToast) oldToast.remove();

  const toast = document.createElement("div");
  toast.className = "toast-notification";
  toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
  toast.style.cssText = `
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: #333;
    color: white;
    padding: 12px 24px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 14px;
    z-index: 2000;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    animation: slideUpToast 0.3s ease, fadeOutToast 0.3s ease 2s forwards;
    display: flex;
    align-items: center;
    gap: 8px;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.productId !== productId);
  saveCart();
  updateCartCount();
  renderCartModal();
}

function changeQuantity(productId, delta) {
  const item = cart.find((i) => i.productId === productId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
    updateCartCount();
    renderCartModal();
  }
}

// ==================== РЕНДЕР КОРЗИНЫ С ПОЛЕМ АДРЕСА ====================
function renderCartModal() {
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartEmpty.style.display = "block";
    cartFooter.style.display = "none";
    cartItemsContainer.style.display = "none";
    return;
  }

  cartEmpty.style.display = "none";
  cartFooter.style.display = "block";
  cartItemsContainer.style.display = "block";

  let total = 0;

  // Список товаров
  cart.forEach((item) => {
    const product = getProductById(item.productId);
    if (!product) return;
    const itemTotal = product.price * item.quantity;
    total += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <div class="cart-item-info">
        <div class="cart-item-title">${product.name}</div>
        <div class="cart-item-price">${product.price} ${product.unit} × ${item.quantity} = ${itemTotal} сом</div>
      </div>
      <div class="cart-item-quantity">
        <button class="qty-btn qty-minus" data-id="${product.id}">−</button>
        <span>${item.quantity}</span>
        <button class="qty-btn qty-plus" data-id="${product.id}">+</button>
      </div>
      <button class="cart-item-remove" data-id="${product.id}" aria-label="Удалить">
        <i class="fas fa-trash-alt"></i>
      </button>
    `;
    cartItemsContainer.appendChild(cartItem);
  });

  // Разделитель
  const divider = document.createElement("div");
  divider.style.cssText = "border-top:2px dashed #e0e0e0;margin:16px 0;";
  cartItemsContainer.appendChild(divider);

  // Поле для ввода адреса
  const addressBlock = document.createElement("div");
  addressBlock.style.cssText = "margin-bottom:8px;";
  addressBlock.innerHTML = `
    <label style="display:block;font-weight:700;color:#111;margin-bottom:8px;font-size:14px;">
      <i class="fas fa-map-marker-alt" style="color:var(--color-primary);"></i> Адрес доставки
    </label>
    <textarea 
      id="cartAddressInput" 
      placeholder="Введите ваш адрес: город, улица, дом, квартира, ориентиры..."
      style="
        width: 100%;
        min-height: 80px;
        padding: 12px 14px;
        border: 2px solid #e0e0e0;
        border-radius: 10px;
        font-size: 14px;
        font-family: inherit;
        resize: vertical;
        outline: none;
        transition: border-color 0.3s;
        color: #333;
        line-height: 1.5;
        box-sizing: border-box;
      "
    ></textarea>
  `;
  cartItemsContainer.appendChild(addressBlock);

  // Обновляем итоговую сумму
  cartTotalPrice.textContent = total + " сом";

  // Назначаем обработчики кнопкам в корзине
  document.querySelectorAll(".qty-minus").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.currentTarget.getAttribute("data-id"));
      changeQuantity(id, -1);
    });
  });

  document.querySelectorAll(".qty-plus").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.currentTarget.getAttribute("data-id"));
      changeQuantity(id, 1);
    });
  });

  document.querySelectorAll(".cart-item-remove").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.currentTarget.getAttribute("data-id"));
      removeFromCart(id);
    });
  });
}

// ==================== ОТПРАВКА ЗАКАЗА В WHATSAPP ====================
function checkoutWhatsApp() {
  if (cart.length === 0) {
    alert("Корзина пуста! Добавьте товары перед оформлением заказа.");
    return;
  }

  // Получаем адрес из поля в корзине
  const addressInput = document.getElementById("cartAddressInput");
  if (!addressInput) return;

  const address = addressInput.value.trim();

  if (!address) {
    // Подсвечиваем поле красным
    addressInput.style.borderColor = "#e74c3c";
    addressInput.style.animation = "shake 0.5s ease";
    addressInput.placeholder = "Пожалуйста, укажите адрес доставки!";
    addressInput.focus();
    setTimeout(() => {
      addressInput.style.borderColor = "#e0e0e0";
      addressInput.style.animation = "";
    }, 2000);
    return;
  }

  // Формируем сообщение
  let message = "Здравствуйте!\n\n";
  message += "Хочу заказать:\n";

  let total = 0;

  cart.forEach((item) => {
    const product = getProductById(item.productId);
    if (!product) return;
    const itemTotal = product.price * item.quantity;
    total += itemTotal;
    message += `• ${product.name} — ${item.quantity} шт — ${itemTotal} сом\n`;
  });

  message += "\n";
  message += `Общая сумма: ${total} сом\n`;
  message += "\n";
  message += `Адрес: ${address}\n`;
  message += "\n";
  message += "Спасибо!";

  // Открываем WhatsApp
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");

  // Очищаем корзину после успешной отправки
  cart = [];
  saveCart();
  updateCartCount();
  closeCart();
  showToast("Заказ отправлен!");
}

function openCart() {
  renderCartModal();
  cartModalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartModalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

function clearCart() {
  if (cart.length === 0) return;
  if (confirm("Вы уверены, что хотите полностью очистить корзину?")) {
    cart = [];
    saveCart();
    updateCartCount();
    renderCartModal();
    showToast("Корзина очищена");
  }
}

// ==================== ОБРАБОТЧИКИ СОБЫТИЙ ====================

// Фильтр категорий
categoryFilter.addEventListener("click", (e) => {
  if (e.target.classList.contains("filter-btn")) {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");
    currentFilter = e.target.getAttribute("data-category");
    currentPage = 1;
    renderCatalog();
  }
});

// Клик по карточке категории
document.querySelectorAll(".category-card").forEach((card) => {
  card.addEventListener("click", () => {
    const category = card.getAttribute("data-category");
    document.querySelectorAll(".filter-btn").forEach((b) => {
      b.classList.remove("active");
      if (b.getAttribute("data-category") === category)
        b.classList.add("active");
    });
    currentFilter = category;
    currentPage = 1;
    renderCatalog();
    document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
  });
});

// Сортировка
sortButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    sortButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentSort = btn.getAttribute("data-sort");
    currentPage = 1;
    renderCatalog();
  });
});

// Поиск товаров
let searchTimeout;
searchInput.addEventListener("input", (e) => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    searchQuery = e.target.value;
    currentPage = 1;
    renderCatalog();
  }, 300);
});

// Корзина
cartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
cartModalOverlay.addEventListener("click", (e) => {
  if (e.target === cartModalOverlay) closeCart();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && cartModalOverlay.classList.contains("active")) {
    closeCart();
  }
});

clearCartBtn.addEventListener("click", clearCart);
checkoutBtn.addEventListener("click", checkoutWhatsApp);

// Бургер-меню
burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  mainNav.classList.toggle("active");
  const expanded = burgerBtn.classList.contains("active");
  burgerBtn.setAttribute("aria-expanded", expanded);

  if (expanded) {
    document.body.classList.add("menu-open");
  } else {
    document.body.classList.remove("menu-open");
  }
});

// Закрытие мобильного меню при клике на ссылку
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    burgerBtn.classList.remove("active");
    mainNav.classList.remove("active");
    burgerBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

// Тень при скролле
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  if (window.scrollY > 500) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});

// Кнопка "Наверх"
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// FAQ аккордеон
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const faqItem = btn.parentElement;
    const isActive = faqItem.classList.contains("active");
    document
      .querySelectorAll(".faq-item")
      .forEach((item) => item.classList.remove("active"));
    if (!isActive) faqItem.classList.add("active");
  });
});

// ==================== ИНИЦИАЛИЗАЦИЯ ====================
function init() {
  renderCatalog();
  updateCartCount();
}

// Добавляем стили для анимаций
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes slideUpToast {
    from { opacity: 0; transform: translateX(-50%) translateY(20px); }
    to { opacity: 1; transform: translateX(-50%) translateY(0); }
  }
  @keyframes fadeOutToast {
    from { opacity: 1; }
    to { opacity: 0; }
  }
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-8px); }
    50% { transform: translateX(8px); }
    75% { transform: translateX(-5px); }
  }
  .page-dots {
    display: flex;
    align-items: center;
    padding: 0 8px;
    color: #999;
    font-weight: bold;
  }
`;
document.head.appendChild(styleSheet);

document.addEventListener("DOMContentLoaded", init);
