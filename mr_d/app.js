/**
 * Mr D Reference Application - Interactive Prototype
 * South Africa's Premier On-Demand Food, Grocery & Courier Platform
 */

(function () {
  'use strict';

  // =========================================================================
  // MOCK DATA STORE (South African Favourites)
  // =========================================================================
  const STORES_DATA = [
    {
      id: 'nandos-sandton',
      name: "Nando's Sandton",
      category: 'food',
      rating: 4.8,
      reviewsCount: '2.4k',
      deliveryTime: '20-30 min',
      deliveryTimeNum: 25,
      deliveryFee: 15.0,
      minOrder: 80.0,
      cuisines: 'Peri-Peri Chicken • Flame-Grilled • Burgers',
      isHalaal: true,
      hasDeal: true,
      promoText: 'Buy 1/2 Chicken Get Free Regular Chips',
      heroImage: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80',
      menu: [
        {
          id: 'nan-01',
          name: '1/4 Chicken Meal with Chips',
          category: 'Popular',
          description: 'Succulent flame-grilled quarter chicken basted in your choice of Peri-Peri, served with fresh crispy peri-chips.',
          price: 89.90,
          tag: 'BESTSELLER',
          image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=400&q=80',
          sizes: [
            { name: 'Regular Portion', priceOffset: 0 },
            { name: 'Upsize Chips & Soda', priceOffset: 24.00 }
          ],
          addons: [
            { name: 'Peri-Peri Drizzle Dip', price: 12.00 },
            { name: 'Toasted Garlic Pita', price: 18.00 },
            { name: 'Grilled Halloumi Sticks', price: 28.00 }
          ]
        },
        {
          id: 'nan-02',
          name: 'Full Chicken & 2 Sharing Sides',
          category: 'Combos & Sharing',
          description: 'Whole flame-grilled chicken carved into 4 pieces with your favourite basting. Paired with 2 large sharing sides.',
          price: 249.90,
          tag: 'FAMILY DEAL',
          image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=400&q=80',
          sizes: [
            { name: 'Standard Platter', priceOffset: 0 },
            { name: 'Mega Platter (Add Spicy Rice)', priceOffset: 35.00 }
          ],
          addons: [
            { name: 'Extra Large Peri-Chips', price: 32.00 },
            { name: 'Coleslaw Salad Bowl', price: 26.00 }
          ]
        },
        {
          id: 'nan-03',
          name: 'Classic Chicken Burger & Chips',
          category: 'Burgers & Pitas',
          description: 'Flame-grilled peri-peri chicken breast fillet with crisp lettuce, tomato and creamy perinaise in a toasted Portuguese roll.',
          price: 94.90,
          tag: 'POPULAR',
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80',
          sizes: [
            { name: 'Single Fillet', priceOffset: 0 },
            { name: 'Double Fillet Burger', priceOffset: 34.00 }
          ],
          addons: [
            { name: 'Melted Cheddar Slice', price: 14.00 },
            { name: 'Crispy Grilled Bacon Strips', price: 22.00 }
          ]
        }
      ]
    },
    {
      id: 'rocomamas-grayston',
      name: 'RocoMamas Grayston',
      category: 'food',
      rating: 4.7,
      reviewsCount: '3.1k',
      deliveryTime: '25-35 min',
      deliveryTimeNum: 30,
      deliveryFee: 18.0,
      minOrder: 100.0,
      cuisines: 'Smashburgers • Ribs • G-Shakes • Wings',
      isHalaal: true,
      hasDeal: true,
      promoText: '2 for 1 Classic Smashburgers on Mondays',
      heroImage: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
      menu: [
        {
          id: 'roco-01',
          name: 'Old Skool Smashburger',
          category: 'Popular',
          description: '150g aged beef patty, aged cheddar, tomato, red onion, sweet pickle & legendary RocoMayo on a toasted brioche bun.',
          price: 104.90,
          tag: 'ICONIC',
          image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80',
          sizes: [
            { name: 'Single (150g)', priceOffset: 0 },
            { name: 'Double Smash (300g)', priceOffset: 42.00 }
          ],
          addons: [
            { name: 'Smoked Bacon', price: 24.00 },
            { name: 'Jalapeño Bombs (x2)', price: 26.00 },
            { name: 'Roco Secret Cheese Dip', price: 16.00 }
          ]
        },
        {
          id: 'roco-02',
          name: 'Loaded Chilli Cheese Fries',
          category: 'Sides & Fries',
          description: 'Skinny rustic cut fries smothered in hot jalapeño melted cheese sauce and crispy fried bacon bits.',
          price: 68.00,
          tag: 'CRAVING',
          image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80',
          sizes: [
            { name: 'Regular Bowl', priceOffset: 0 },
            { name: 'Sharing Monster Bowl', priceOffset: 32.00 }
          ],
          addons: [
            { name: 'Extra Guacamole Spoon', price: 18.00 },
            { name: 'Sour Cream Swirl', price: 12.00 }
          ]
        },
        {
          id: 'roco-03',
          name: 'Belgian Chocolate Freakshake',
          category: 'G-Shakes',
          description: 'Thick gourmet shake blended with rich Belgian chocolate, crushed Oreos, soft swirl cream and chocolate ganache.',
          price: 74.50,
          tag: 'DESSERT',
          image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80',
          sizes: [
            { name: 'Standard Mason Jar', priceOffset: 0 }
          ],
          addons: [
            { name: 'Toasted Marshmallows', price: 12.00 },
            { name: 'Ferrero Rocher Crunch', price: 22.00 }
          ]
        }
      ]
    },
    {
      id: 'pnp-sandton-city',
      name: 'Pick n Pay Sandton City',
      category: 'pnp',
      rating: 4.9,
      reviewsCount: '8.7k',
      deliveryTime: '35-45 min',
      deliveryTimeNum: 38,
      deliveryFee: 0.0, // Free delivery promo!
      minOrder: 150.0,
      cuisines: 'Supermarket • Fresh Produce • Bakery • Butchery',
      isHalaal: true,
      hasDeal: true,
      promoText: 'Free Delivery on groceries over R250',
      heroImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
      menu: [
        {
          id: 'pnp-01',
          name: 'Clover Full Cream Fresh Milk (2L)',
          category: 'Dairy & Eggs',
          description: 'Fresh Grade A full cream milk with fresh taste and essential calcium for your morning teas and cereals.',
          price: 36.99,
          tag: 'ESSENTIAL',
          image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=400&q=80',
          sizes: [{ name: '2L Bottle', priceOffset: 0 }],
          addons: []
        },
        {
          id: 'pnp-02',
          name: 'SASKO Premium Sliced White Bread (700g)',
          category: 'Bakery',
          description: 'Soft, vitamin-enriched fresh sliced white toast loaf baked daily in store.',
          price: 18.99,
          tag: 'DAILY',
          image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80',
          sizes: [{ name: '700g Loaf', priceOffset: 0 }],
          addons: []
        },
        {
          id: 'pnp-03',
          name: 'Pick n Pay Traditional Beef Boerewors (600g)',
          category: 'Butchery & Braai',
          description: 'Authentic South African recipe boerewors made with prime beef and toasted coriander spices, ideal for the braai.',
          price: 84.99,
          tag: 'BRAAI MASTER',
          image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=400&q=80',
          sizes: [{ name: '600g Pack', priceOffset: 0 }],
          addons: []
        },
        {
          id: 'pnp-04',
          name: 'Ripe & Ready Hass Avocados (2 Pack)',
          category: 'Fresh Produce',
          description: 'Creamy Hass avocados selected at perfect ripeness for salads, toast or guacamole.',
          price: 34.99,
          tag: 'FRESH',
          image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=400&q=80',
          sizes: [{ name: '2 Pack', priceOffset: 0 }],
          addons: []
        }
      ]
    },
    {
      id: 'debonairs-rivonia',
      name: 'Debonairs Pizza Rivonia',
      category: 'food',
      rating: 4.6,
      reviewsCount: '1.9k',
      deliveryTime: '20-30 min',
      deliveryTimeNum: 25,
      deliveryFee: 12.0,
      minOrder: 70.0,
      cuisines: 'Pizza • Subs • Sides',
      isHalaal: true,
      hasDeal: true,
      promoText: 'Triple-Decker Deal with 1.5L Coke',
      heroImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
      menu: [
        {
          id: 'deb-01',
          name: 'Triple-Decker Creamy Chicken Pizza',
          category: 'Popular',
          description: 'Three layers, three cheeses: chicken strips, mushroom, sweet bell peppers, secret cream sauce and melted mozzarella crust.',
          price: 179.90,
          tag: 'LEGEND',
          image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80',
          sizes: [
            { name: 'Large Triple-Decker', priceOffset: 0 }
          ],
          addons: [
            { name: 'Garlic Butter Crust Dip', price: 14.00 },
            { name: 'Extra Mozzarella Layer', price: 22.00 }
          ]
        },
        {
          id: 'deb-02',
          name: 'Cheesy Garlic Bread Sticks',
          category: 'Sides',
          description: 'Warm oven-baked baguette slices smothered in herb garlic butter and bubbling golden mozzarella.',
          price: 49.90,
          tag: 'SIDE',
          image: 'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?auto=format&fit=crop&w=400&q=80',
          sizes: [{ name: '4 Slices', priceOffset: 0 }],
          addons: []
        }
      ]
    },
    {
      id: 'pnp-liquor-sandton',
      name: 'Pick n Pay Liquor Sandton',
      category: 'liquor',
      rating: 4.9,
      reviewsCount: '4.2k',
      deliveryTime: '25-35 min',
      deliveryTimeNum: 28,
      deliveryFee: 20.0,
      minOrder: 120.0,
      cuisines: 'Beer • Cider • Wine • Spirits • Mixers',
      isHalaal: false,
      hasDeal: true,
      promoText: '2 for R180 Savanna Dry 6-packs',
      heroImage: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
      menu: [
        {
          id: 'liq-01',
          name: 'Savanna Dry Cider 330ml (6-Pack Cans)',
          category: 'Ciders & Beers',
          description: 'Dry, crisp South African premium apple cider made from crushed apples. Refreshingly dry.',
          price: 114.99,
          tag: 'BESTSELLER',
          image: 'https://images.unsplash.com/photo-1584225064785-c62a8b43d148?auto=format&fit=crop&w=400&q=80',
          sizes: [{ name: '6 x 330ml Cans', priceOffset: 0 }],
          addons: [{ name: 'Bag of Party Ice (2kg)', price: 16.99 }]
        },
        {
          id: 'liq-02',
          name: 'Castle Lite Beer 330ml (6-Pack Cans)',
          category: 'Ciders & Beers',
          description: 'Extra cold, premium South African light lager brewed with select hops for crisp refreshment.',
          price: 99.99,
          tag: 'POPULAR',
          image: 'https://images.unsplash.com/photo-1608270546103-97992762a1a8?auto=format&fit=crop&w=400&q=80',
          sizes: [{ name: '6 x 330ml Cans', priceOffset: 0 }],
          addons: [{ name: 'Bag of Party Ice (2kg)', price: 16.99 }]
        },
        {
          id: 'liq-03',
          name: 'Nederburg The Winemasters Baronne (750ml)',
          category: 'Wine Cellar',
          description: 'Smooth Cabernet Sauvignon and Shiraz blend from Paarl. Aromas of ripe berries and oak spice.',
          price: 89.99,
          tag: 'RED WINE',
          image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80',
          sizes: [{ name: '750ml Bottle', priceOffset: 0 }],
          addons: []
        }
      ]
    },
    {
      id: 'takealot-now-sandton',
      name: 'TakealotNOW Sandton',
      category: 'takealot',
      rating: 4.8,
      reviewsCount: '5.1k',
      deliveryTime: '20-30 min',
      deliveryTimeNum: 22,
      deliveryFee: 25.0,
      minOrder: 100.0,
      cuisines: 'Electronics • Phone Accessories • Gaming • Party',
      isHalaal: true,
      hasDeal: false,
      promoText: 'Delivered in under 30 mins directly to your door',
      heroImage: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80',
      menu: [
        {
          id: 'tk-01',
          name: 'Anker Powerline USB-C to Lightning Cable (1m)',
          category: 'Electronics',
          description: 'Durable braided nylon high-speed charging cable with Apple MFi certification.',
          price: 199.00,
          tag: 'ESSENTIAL',
          image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=400&q=80',
          sizes: [{ name: '1 Metre', priceOffset: 0 }],
          addons: []
        },
        {
          id: 'tk-02',
          name: 'JBL GO 3 Waterproof Bluetooth Speaker',
          category: 'Audio',
          description: 'Punchy JBL Pro Sound in an ultra-compact rugged waterproof speaker with 5-hour battery playtime.',
          price: 649.00,
          tag: 'PORTABLE AUDIO',
          image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=400&q=80',
          sizes: [{ name: 'Midnight Black', priceOffset: 0 }],
          addons: []
        },
        {
          id: 'tk-03',
          name: 'Monopoly Deal Fast-Paced Card Game',
          category: 'Party & Games',
          description: 'All the fun of Monopoly in a fast-paced 15-minute card game for friends and family gatherings.',
          price: 139.00,
          tag: 'GAME NIGHT',
          image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=400&q=80',
          sizes: [{ name: 'Standard Deck', priceOffset: 0 }],
          addons: []
        }
      ]
    },
    {
      id: 'simply-asia-sandton',
      name: 'Simply Asia Sandton City',
      category: 'food',
      rating: 4.7,
      reviewsCount: '1.8k',
      deliveryTime: '25-35 min',
      deliveryTimeNum: 30,
      deliveryFee: 15.0,
      minOrder: 90.0,
      cuisines: 'Thai • Noodles • Dim Sum • Asian Fusion',
      isHalaal: true,
      hasDeal: false,
      promoText: 'Authentic Thai chefs preparing fresh wok noodles',
      heroImage: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
      menu: [
        {
          id: 'sa-01',
          name: '514 Roasted Chilli Paste & Cashew Nut Noodles',
          category: 'Popular Wok Dishes',
          description: 'Yellow noodles wok-fried with peppers, roasted cashew nuts, onion, and our signature sweet chilli paste.',
          price: 112.00,
          tag: 'CHEF FAVOURITE',
          image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=400&q=80',
          sizes: [
            { name: 'Chicken', priceOffset: 0 },
            { name: 'Beef Strips', priceOffset: 16.00 },
            { name: 'Crispy Prawns', priceOffset: 34.00 }
          ],
          addons: [
            { name: 'Steamed Sweet Corn Dim Sum (x3)', price: 42.00 },
            { name: 'Extra Chopped Peanuts', price: 10.00 }
          ]
        }
      ]
    }
  ];

  // =========================================================================
  // APPLICATION STATE
  // =========================================================================
  const state = {
    stores: STORES_DATA,
    activeStore: null,
    categoryFilter: 'all',
    quickFilter: 'all',
    sortBy: 'popular',
    searchQuery: '',
    orderMode: 'delivery',
    currentLocation: 'Sandton City, Johannesburg',
    cart: [],
    customizingItem: null,
    selectedSize: null,
    selectedAddons: [],
    customQuantity: 1,
    includeCutlery: true,
    driverTip: 15,
    appliedVoucher: null,
    activeOrder: null,
    simulationTimer: null
  };

  // Storage key for state persistence
  const STORAGE_KEY = 'mrd_benstore_state';

  // Load state from localStorage if available
  function loadPersistentState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.cart && Array.isArray(parsed.cart)) state.cart = parsed.cart;
        if (parsed.activeOrder) state.activeOrder = parsed.activeOrder;
        if (parsed.currentLocation) state.currentLocation = parsed.currentLocation;
        if (parsed.appliedVoucher) state.appliedVoucher = parsed.appliedVoucher;
      }
    } catch (e) {
      console.warn('Could not read from localStorage', e);
    }
  }

  function savePersistentState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        cart: state.cart,
        activeOrder: state.activeOrder,
        currentLocation: state.currentLocation,
        appliedVoucher: state.appliedVoucher
      }));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  }

  // =========================================================================
  // DOM ELEMENT SELECTORS
  // =========================================================================
  const dom = {
    // Header & Navigation
    homeLink: document.getElementById('home-link'),
    modeDelivery: document.getElementById('mode-delivery'),
    modeCollect: document.getElementById('mode-collect'),
    currentLocationText: document.getElementById('current-location-text'),
    openAddressModal: document.getElementById('open-address-modal'),
    globalSearchInput: document.getElementById('global-search-input'),
    searchClearBtn: document.getElementById('search-clear-btn'),
    openCartBtn: document.getElementById('open-cart-btn'),
    cartCounterBadge: document.getElementById('cart-counter-badge'),
    cartTotalBadge: document.getElementById('cart-total-badge'),
    mobCartBadge: document.getElementById('mob-cart-badge'),
    liveOrderBtn: document.getElementById('live-order-btn'),

    // Views
    homeView: document.getElementById('home-view'),
    storeDetailView: document.getElementById('store-detail-view'),
    storesGrid: document.getElementById('stores-grid'),
    emptyStoresState: document.getElementById('empty-stores-state'),
    resetFiltersBtn: document.getElementById('reset-filters-btn'),
    catalogTitle: document.getElementById('catalog-title'),
    catalogCount: document.getElementById('catalog-count'),

    // Carousel & Category Bar
    carouselDots: document.getElementById('carousel-dots'),
    categoryChips: document.querySelectorAll('.category-chip'),
    filterPills: document.querySelectorAll('.filter-pill'),
    storeSortSelect: document.getElementById('store-sort-select'),

    // Cart Drawer
    cartDrawerOverlay: document.getElementById('cart-drawer-overlay'),
    closeCartBtn: document.getElementById('close-cart-btn'),
    cartStoreName: document.getElementById('cart-store-name'),
    freeDeliveryMeter: document.getElementById('free-delivery-meter'),
    meterText: document.getElementById('meter-text'),
    meterFill: document.getElementById('meter-fill'),
    cartItemsList: document.getElementById('cart-items-list'),
    cartEmptyView: document.getElementById('cart-empty-view'),
    cartFooter: document.getElementById('cart-footer'),
    cutleryCheckbox: document.getElementById('cutlery-checkbox'),
    tipButtons: document.querySelectorAll('.tip-btn'),
    voucherInput: document.getElementById('voucher-code-input'),
    applyVoucherBtn: document.getElementById('apply-voucher-btn'),
    voucherAppliedBanner: document.getElementById('voucher-applied-banner'),
    voucherAppliedText: document.getElementById('voucher-applied-text'),
    removeVoucherBtn: document.getElementById('remove-voucher-btn'),
    summarySubtotal: document.getElementById('summary-subtotal'),
    summaryDelivery: document.getElementById('summary-delivery'),
    summaryService: document.getElementById('summary-service'),
    summaryTip: document.getElementById('summary-tip'),
    summaryDiscountRow: document.getElementById('summary-discount-row'),
    summaryDiscount: document.getElementById('summary-discount'),
    summaryTotal: document.getElementById('summary-total'),
    checkoutBtnTotal: document.getElementById('checkout-btn-total'),
    btnProceedCheckout: document.getElementById('btn-proceed-checkout'),
    btnStartShopping: document.getElementById('btn-start-shopping'),

    // Item Customization Modal
    customModal: document.getElementById('customization-modal'),
    closeCustomModal: document.getElementById('close-custom-modal'),
    modalItemTitle: document.getElementById('modal-item-title'),
    modalItemDesc: document.getElementById('modal-item-desc'),
    modalItemBaseprice: document.getElementById('modal-item-baseprice'),
    modalItemTag: document.getElementById('modal-item-tag'),
    modalItemImage: document.getElementById('modal-item-image'),
    modalSizesList: document.getElementById('modal-sizes-list'),
    modalAddonsList: document.getElementById('modal-addons-list'),
    itemInstructions: document.getElementById('item-instructions'),
    customQtyMinus: document.getElementById('custom-qty-minus'),
    customQtyPlus: document.getElementById('custom-qty-plus'),
    customQtyCount: document.getElementById('custom-qty-count'),
    customModalTotal: document.getElementById('custom-modal-total'),
    btnAddCustomizedCart: document.getElementById('btn-add-customized-cart'),

    // Checkout Modal
    checkoutModal: document.getElementById('checkout-modal'),
    closeCheckoutModal: document.getElementById('close-checkout-modal'),
    checkoutForm: document.getElementById('checkout-form'),
    modalCheckoutTotal: document.getElementById('modal-checkout-total'),
    btnPlaceOrder: document.getElementById('btn-place-order'),
    orderSubmitSpinner: document.getElementById('order-submit-spinner'),

    // Live Tracking Modal
    trackingModal: document.getElementById('tracking-modal'),
    closeTrackingModal: document.getElementById('close-tracking-modal'),
    trackEtaClock: document.getElementById('track-eta-clock'),
    trackEtaCountdown: document.getElementById('track-eta-countdown'),
    trackOrderId: document.getElementById('track-order-id'),
    trackDriverName: document.getElementById('track-driver-name'),
    trackDriverVehicle: document.getElementById('track-driver-vehicle'),
    mapRestaurantName: document.getElementById('map-restaurant-name'),
    animatedDriverMarker: document.getElementById('animated-driver-marker'),
    btnCallDriver: document.getElementById('btn-call-driver'),
    btnMsgDriver: document.getElementById('btn-msg-driver'),
    btnAdvanceSimulation: document.getElementById('btn-advance-simulation'),
    btnResetOrder: document.getElementById('btn-reset-order'),

    // Location Modal
    locationModal: document.getElementById('location-modal'),
    closeLocationModal: document.getElementById('close-location-modal'),
    locationItems: document.querySelectorAll('.location-item'),

    // Toasts
    toastContainer: document.getElementById('toast-container'),

    // Mobile Navigation Items
    mobNavHome: document.getElementById('mob-nav-home'),
    mobNavGroceries: document.getElementById('mob-nav-groceries'),
    mobNavOrders: document.getElementById('mob-nav-orders'),
    mobNavCart: document.getElementById('mob-nav-cart')
  };

  // =========================================================================
  // UTILITY HELPERS
  // =========================================================================
  function formatCurrency(amount) {
    const num = Number(amount) || 0;
    return `R ${num.toFixed(2)}`;
  }

  function showToast(message, type = 'normal') {
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'success' ? 'toast-success' : type === 'deal' ? 'toast-deal' : ''}`;
    
    let icon = 'ℹ️';
    if (type === 'success') icon = '✓';
    if (type === 'deal') icon = '🎉';
    if (type === 'error') icon = '⚠️';

    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    dom.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 250);
    }, 3200);
  }

  // =========================================================================
  // CAROUSEL BANNER FUNCTIONALITY
  // =========================================================================
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dots .dot');

  function setSlide(index) {
    if (!slides.length) return;
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('active', i === currentSlide));
    dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
  }

  setInterval(() => {
    setSlide(currentSlide + 1);
  }, 5000);

  if (dom.carouselDots) {
    dom.carouselDots.addEventListener('click', (e) => {
      const dot = e.target.closest('.dot');
      if (dot) setSlide(parseInt(dot.dataset.index, 10));
    });
  }

  document.querySelectorAll('.btn-hero-cta').forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.category;
      applyCategoryFilter(cat);
    });
  });

  // =========================================================================
  // STORE LISTING & FILTERING
  // =========================================================================
  function getFilteredStores() {
    return state.stores.filter((store) => {
      // Category filter
      if (state.categoryFilter !== 'all' && state.categoryFilter !== 'deals') {
        if (store.category !== state.categoryFilter) return false;
      }
      if (state.categoryFilter === 'deals' && !store.hasDeal) {
        return false;
      }

      // Quick filter
      if (state.quickFilter === 'top-rated' && store.rating < 4.7) return false;
      if (state.quickFilter === 'fast' && store.deliveryTimeNum > 28) return false;
      if (state.quickFilter === 'free-del' && store.deliveryFee > 0) return false;
      if (state.quickFilter === 'halaal' && !store.isHalaal) return false;
      if (state.quickFilter === 'budget' && !store.hasDeal) return false;

      // Search query
      if (state.searchQuery.trim() !== '') {
        const q = state.searchQuery.toLowerCase();
        const matchesName = store.name.toLowerCase().includes(q);
        const matchesCuisine = store.cuisines.toLowerCase().includes(q);
        const matchesItems = store.menu.some((item) =>
          item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)
        );
        if (!matchesName && !matchesCuisine && !matchesItems) return false;
      }

      return true;
    }).sort((a, b) => {
      if (state.sortBy === 'rating') return b.rating - a.rating;
      if (state.sortBy === 'fastest') return a.deliveryTimeNum - b.deliveryTimeNum;
      if (state.sortBy === 'lowest-fee') return a.deliveryFee - b.deliveryFee;
      return 0; // Default popular
    });
  }

  function renderStores() {
    const filtered = getFilteredStores();
    dom.storesGrid.innerHTML = '';

    if (filtered.length === 0) {
      dom.emptyStoresState.classList.remove('hidden');
      dom.catalogCount.textContent = '0 stores found';
      return;
    }

    dom.emptyStoresState.classList.add('hidden');
    dom.catalogCount.textContent = `Showing ${filtered.length} stores near ${state.currentLocation.split(',')[0]}`;

    filtered.forEach((store) => {
      const card = document.createElement('article');
      card.className = 'store-card';
      card.dataset.storeId = store.id;
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View menu for ${store.name}`);

      const feeText = store.deliveryFee === 0 
        ? '<span class="meta-free-del">🛵 Free Delivery</span>' 
        : `🛵 ${formatCurrency(store.deliveryFee)} delivery`;

      card.innerHTML = `
        <div class="store-card-hero">
          <img src="${store.heroImage}" alt="${store.name} hero photo" class="store-hero-img" loading="lazy">
          ${store.hasDeal ? `<span class="store-promo-badge">🏷️ ${store.promoText}</span>` : ''}
          <button type="button" class="store-fav-btn" aria-label="Favorite store" title="Save to favourites">♥</button>
        </div>
        <div class="store-card-body">
          <div class="store-main-info">
            <h2 class="store-title">${store.name}</h2>
            <div class="store-rating-pill">★ ${store.rating.toFixed(1)}</div>
          </div>
          <p class="store-categories">${store.cuisines}</p>
          <div class="store-meta-footer">
            <span class="meta-item">⏱ ${store.deliveryTime}</span>
            <span class="meta-item">${feeText}</span>
          </div>
        </div>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.closest('.store-fav-btn')) {
          e.stopPropagation();
          const btn = e.target.closest('.store-fav-btn');
          btn.classList.toggle('is-favorite');
          showToast(btn.classList.contains('is-favorite') ? `Saved ${store.name} to favourites!` : `Removed ${store.name}`);
          return;
        }
        openStoreDetail(store);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openStoreDetail(store);
        }
      });

      dom.storesGrid.appendChild(card);
    });
  }

  function applyCategoryFilter(cat) {
    state.categoryFilter = cat;
    dom.categoryChips.forEach((chip) => chip.classList.toggle('active', chip.dataset.category === cat));
    
    // Switch view back to home if in store detail
    if (state.activeStore) {
      closeStoreDetail();
    }
    renderStores();
  }

  // Event Listeners for Filters
  dom.categoryChips.forEach((chip) => {
    chip.addEventListener('click', () => applyCategoryFilter(chip.dataset.category));
  });

  dom.filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      dom.filterPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      state.quickFilter = pill.dataset.filter;
      renderStores();
    });
  });

  dom.storeSortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderStores();
  });

  dom.globalSearchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    dom.searchClearBtn.classList.toggle('hidden', state.searchQuery === '');
    renderStores();
  });

  dom.searchClearBtn.addEventListener('click', () => {
    state.searchQuery = '';
    dom.globalSearchInput.value = '';
    dom.searchClearBtn.classList.add('hidden');
    renderStores();
  });

  dom.resetFiltersBtn.addEventListener('click', () => {
    state.categoryFilter = 'all';
    state.quickFilter = 'all';
    state.searchQuery = '';
    dom.globalSearchInput.value = '';
    dom.searchClearBtn.classList.add('hidden');
    dom.categoryChips.forEach((c) => c.classList.toggle('active', c.dataset.category === 'all'));
    dom.filterPills.forEach((p) => p.classList.toggle('active', p.dataset.filter === 'all'));
    renderStores();
  });

  // =========================================================================
  // STORE DETAIL VIEW & MENU RENDERING
  // =========================================================================
  function openStoreDetail(store) {
    state.activeStore = store;
    dom.homeView.classList.add('hidden');
    dom.storeDetailView.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Group menu by categories
    const categoriesMap = {};
    store.menu.forEach((item) => {
      const cat = item.category || 'Specialities';
      if (!categoriesMap[cat]) categoriesMap[cat] = [];
      categoriesMap[cat].push(item);
    });

    const categoryNames = Object.keys(categoriesMap);

    dom.storeDetailView.innerHTML = `
      <div class="store-detail-hero">
        <img src="${store.heroImage}" alt="${store.name} banner" class="store-detail-banner-img">
        <div class="store-detail-overlay">
          <button type="button" class="btn-back-stores" id="btn-back-to-stores" aria-label="Back to store catalog">
            ← Back to Stores
          </button>
          <div class="store-detail-meta">
            <h1>${store.name}</h1>
            <div class="store-detail-tags">
              <span>★ ${store.rating.toFixed(1)} (${store.reviewsCount} reviews)</span>
              <span>•</span>
              <span>⏱ ${store.deliveryTime}</span>
              <span>•</span>
              <span>🛵 ${store.deliveryFee === 0 ? 'Free Delivery' : formatCurrency(store.deliveryFee)}</span>
              ${store.isHalaal ? `<span class="tag-badge">HALAAL CERTIFIED</span>` : ''}
            </div>
          </div>
        </div>
      </div>

      <!-- Sticky Category Filter for Menu -->
      <nav class="menu-nav-sticky" aria-label="Menu Sections">
        ${categoryNames.map((name, i) => `
          <button type="button" class="menu-nav-pill ${i === 0 ? 'active' : ''}" data-target-sec="sec-${i}">
            ${name}
          </button>
        `).join('')}
      </nav>

      <!-- Menu Categories & Food Items -->
      <div class="menu-sections-wrapper">
        ${categoryNames.map((name, i) => `
          <section class="menu-section" id="sec-${i}">
            <h2 class="menu-section-title">${name} (${categoriesMap[name].length})</h2>
            <div class="menu-items-grid">
              ${categoriesMap[name].map((item) => `
                <div class="food-card" data-item-id="${item.id}" tabindex="0" role="button" aria-label="Add ${item.name} to basket">
                  <div class="food-info">
                    ${item.tag ? `<span class="food-tag-badge">${item.tag}</span>` : ''}
                    <h3 class="food-title">${item.name}</h3>
                    <p class="food-desc">${item.description}</p>
                    <div class="food-price-row">
                      <span class="food-price">${formatCurrency(item.price)}</span>
                      <button type="button" class="btn-food-add" aria-label="Add to cart">
                        Add +
                      </button>
                    </div>
                  </div>
                  <div class="food-thumbnail-wrap">
                    <img src="${item.image}" alt="${item.name}" class="food-thumbnail" loading="lazy">
                  </div>
                </div>
              `).join('')}
            </div>
          </section>
        `).join('')}
      </div>
    `;

    // Listeners for store detail view
    document.getElementById('btn-back-to-stores').addEventListener('click', closeStoreDetail);

    // Scroll pill listener
    dom.storeDetailView.querySelectorAll('.menu-nav-pill').forEach((pill) => {
      pill.addEventListener('click', () => {
        dom.storeDetailView.querySelectorAll('.menu-nav-pill').forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        const targetId = pill.dataset.targetSec;
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          const yOffset = -140;
          const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      });
    });

    // Food Card Click to open customizer
    dom.storeDetailView.querySelectorAll('.food-card').forEach((card) => {
      card.addEventListener('click', () => {
        const itemId = card.dataset.itemId;
        const item = store.menu.find((m) => m.id === itemId);
        if (item) openCustomizationModal(item, store);
      });
    });
  }

  function closeStoreDetail() {
    state.activeStore = null;
    dom.storeDetailView.classList.add('hidden');
    dom.homeView.classList.remove('hidden');
  }

  dom.homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    closeStoreDetail();
  });

  // =========================================================================
  // ITEM CUSTOMIZATION MODAL
  // =========================================================================
  function openCustomizationModal(item, store) {
    state.customizingItem = { ...item, storeId: store.id, storeName: store.name };
    state.customQuantity = 1;
    state.selectedSize = (item.sizes && item.sizes.length > 0) ? item.sizes[0] : null;
    state.selectedAddons = [];

    dom.modalItemTitle.textContent = item.name;
    dom.modalItemDesc.textContent = item.description;
    dom.modalItemBaseprice.textContent = formatCurrency(item.price);
    dom.modalItemTag.textContent = item.tag || 'POPULAR';
    dom.modalItemImage.src = item.image;
    dom.customQtyCount.textContent = '1';
    dom.itemInstructions.value = '';

    // Render Sizes
    if (item.sizes && item.sizes.length > 0) {
      dom.modalSizesList.innerHTML = item.sizes.map((s, index) => `
        <label class="custom-option-row">
          <div class="custom-option-label">
            <input type="radio" name="custom-size" value="${index}" ${index === 0 ? 'checked' : ''}>
            <span>${s.name}</span>
          </div>
          <span class="custom-option-price">${s.priceOffset > 0 ? `+${formatCurrency(s.priceOffset)}` : 'Included'}</span>
        </label>
      `).join('');

      dom.modalSizesList.querySelectorAll('input[name="custom-size"]').forEach((radio) => {
        radio.addEventListener('change', (e) => {
          state.selectedSize = item.sizes[parseInt(e.target.value, 10)];
          updateCustomModalTotal();
        });
      });
    } else {
      dom.modalSizesList.innerHTML = '<p class="address-caption">Standard portion included</p>';
    }

    // Render Add-ons
    if (item.addons && item.addons.length > 0) {
      dom.modalAddonsList.innerHTML = item.addons.map((a, index) => `
        <label class="custom-option-row">
          <div class="custom-option-label">
            <input type="checkbox" name="custom-addon" value="${index}">
            <span>${a.name}</span>
          </div>
          <span class="custom-option-price">+${formatCurrency(a.price)}</span>
        </label>
      `).join('');

      dom.modalAddonsList.querySelectorAll('input[name="custom-addon"]').forEach((chk) => {
        chk.addEventListener('change', () => {
          const checked = Array.from(dom.modalAddonsList.querySelectorAll('input[name="custom-addon"]:checked'))
            .map((input) => item.addons[parseInt(input.value, 10)]);
          state.selectedAddons = checked;
          updateCustomModalTotal();
        });
      });
    } else {
      dom.modalAddonsList.innerHTML = '<p class="address-caption">No extra add-ons for this item.</p>';
    }

    updateCustomModalTotal();
    dom.customModal.showModal();
  }

  function updateCustomModalTotal() {
    if (!state.customizingItem) return;
    let base = state.customizingItem.price;
    if (state.selectedSize) base += state.selectedSize.priceOffset;
    if (state.selectedAddons && state.selectedAddons.length > 0) {
      base += state.selectedAddons.reduce((acc, a) => acc + a.price, 0);
    }
    const total = base * state.customQuantity;
    dom.customModalTotal.textContent = formatCurrency(total);
  }

  dom.customQtyMinus.addEventListener('click', () => {
    if (state.customQuantity > 1) {
      state.customQuantity--;
      dom.customQtyCount.textContent = state.customQuantity;
      updateCustomModalTotal();
    }
  });

  dom.customQtyPlus.addEventListener('click', () => {
    state.customQuantity++;
    dom.customQtyCount.textContent = state.customQuantity;
    updateCustomModalTotal();
  });

  dom.closeCustomModal.addEventListener('click', () => dom.customModal.close());

  dom.btnAddCustomizedCart.addEventListener('click', () => {
    if (!state.customizingItem) return;

    // Check if adding from a different store
    if (state.cart.length > 0 && state.cart[0].storeId !== state.customizingItem.storeId) {
      const confirmClear = confirm(`Your basket has items from ${state.cart[0].storeName}. Would you like to clear it and start an order from ${state.customizingItem.storeName}?`);
      if (confirmClear) {
        state.cart = [];
      } else {
        return;
      }
    }

    let unitPrice = state.customizingItem.price;
    if (state.selectedSize) unitPrice += state.selectedSize.priceOffset;
    if (state.selectedAddons) {
      unitPrice += state.selectedAddons.reduce((acc, a) => acc + a.price, 0);
    }

    const cartItem = {
      id: 'cart-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
      storeId: state.customizingItem.storeId,
      storeName: state.customizingItem.storeName,
      title: state.customizingItem.name,
      unitPrice: unitPrice,
      quantity: state.customQuantity,
      sizeName: state.selectedSize ? state.selectedSize.name : '',
      addons: state.selectedAddons ? state.selectedAddons.map((a) => a.name) : [],
      instructions: dom.itemInstructions.value.trim()
    };

    state.cart.push(cartItem);
    savePersistentState();
    renderCart();
    dom.customModal.close();
    showToast(`Added ${cartItem.title} to basket!`, 'success');
  });

  // =========================================================================
  // BASKET & CART MANAGEMENT
  // =========================================================================
  function renderCart() {
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    dom.cartCounterBadge.textContent = totalItems;
    dom.mobCartBadge.textContent = totalItems;

    if (state.cart.length === 0) {
      dom.cartEmptyView.classList.remove('hidden');
      dom.cartItemsList.classList.add('hidden');
      dom.cartFooter.classList.add('hidden');
      dom.freeDeliveryMeter.classList.add('hidden');
      dom.cartTotalBadge.textContent = 'R 0.00';
      dom.cartStoreName.textContent = 'No store selected';
      return;
    }

    dom.cartEmptyView.classList.add('hidden');
    dom.cartItemsList.classList.remove('hidden');
    dom.cartFooter.classList.remove('hidden');
    dom.freeDeliveryMeter.classList.remove('hidden');

    const currentStore = state.stores.find((s) => s.id === state.cart[0].storeId) || {
      name: state.cart[0].storeName,
      deliveryFee: 15.0
    };

    dom.cartStoreName.textContent = currentStore.name;

    // Render Items
    dom.cartItemsList.innerHTML = state.cart.map((item, index) => {
      const addonsSummary = [
        item.sizeName,
        item.addons.join(', '),
        item.instructions ? `Note: "${item.instructions}"` : ''
      ].filter(Boolean).join(' • ');

      return `
        <div class="cart-item-row" data-cart-index="${index}">
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.title}</h4>
            ${addonsSummary ? `<p class="cart-item-addons">${addonsSummary}</p>` : ''}
          </div>
          <div class="cart-item-stepper">
            <button type="button" class="cart-step-btn btn-cart-minus" aria-label="Decrease quantity">−</button>
            <span class="cart-step-qty">${item.quantity}</span>
            <button type="button" class="cart-step-btn btn-cart-plus" aria-label="Increase quantity">+</button>
          </div>
          <span class="cart-item-price">${formatCurrency(item.unitPrice * item.quantity)}</span>
        </div>
      `;
    }).join('');

    // Attach cart item quantity listeners
    dom.cartItemsList.querySelectorAll('.cart-item-row').forEach((row) => {
      const index = parseInt(row.dataset.cartIndex, 10);
      row.querySelector('.btn-cart-minus').addEventListener('click', () => {
        if (state.cart[index].quantity > 1) {
          state.cart[index].quantity--;
        } else {
          state.cart.splice(index, 1);
        }
        savePersistentState();
        renderCart();
      });

      row.querySelector('.btn-cart-plus').addEventListener('click', () => {
        state.cart[index].quantity++;
        savePersistentState();
        renderCart();
      });
    });

    // Calculations
    const subtotal = state.cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
    const serviceFee = 5.00;
    let deliveryFee = currentStore.deliveryFee;

    // Free delivery threshold R200
    const freeDeliveryThreshold = 200.00;
    if (subtotal >= freeDeliveryThreshold || (state.appliedVoucher && state.appliedVoucher.freeDelivery)) {
      deliveryFee = 0.00;
      dom.meterText.textContent = '🎉 You unlocked FREE Delivery!';
      dom.meterFill.style.width = '100%';
    } else {
      const remaining = freeDeliveryThreshold - subtotal;
      dom.meterText.textContent = `Add ${formatCurrency(remaining)} more for Free Delivery!`;
      const pct = Math.min(100, Math.round((subtotal / freeDeliveryThreshold) * 100));
      dom.meterFill.style.width = `${pct}%`;
    }

    let discount = 0;
    if (state.appliedVoucher && state.appliedVoucher.discount) {
      discount = Math.min(subtotal, state.appliedVoucher.discount);
      dom.summaryDiscountRow.classList.remove('hidden');
      dom.summaryDiscount.textContent = `-${formatCurrency(discount)}`;
    } else {
      dom.summaryDiscountRow.classList.add('hidden');
    }

    const tip = Number(state.driverTip) || 0;
    const grandTotal = Math.max(0, (subtotal + deliveryFee + serviceFee + tip) - discount);

    // Update UI Breakdown
    dom.summarySubtotal.textContent = formatCurrency(subtotal);
    dom.summaryDelivery.textContent = deliveryFee === 0 ? 'FREE' : formatCurrency(deliveryFee);
    dom.summaryService.textContent = formatCurrency(serviceFee);
    dom.summaryTip.textContent = formatCurrency(tip);
    dom.summaryTotal.textContent = formatCurrency(grandTotal);
    dom.cartTotalBadge.textContent = formatCurrency(grandTotal);
    dom.checkoutBtnTotal.textContent = formatCurrency(grandTotal);
    dom.modalCheckoutTotal.textContent = formatCurrency(grandTotal);
  }

  // Cart Drawer open/close
  function openCartDrawer() {
    renderCart();
    dom.cartDrawerOverlay.classList.remove('hidden');
  }

  function closeCartDrawer() {
    dom.cartDrawerOverlay.classList.add('hidden');
  }

  dom.openCartBtn.addEventListener('click', openCartDrawer);
  dom.mobNavCart.addEventListener('click', openCartDrawer);
  dom.closeCartBtn.addEventListener('click', closeCartDrawer);
  dom.btnStartShopping.addEventListener('click', closeCartDrawer);

  dom.cartDrawerOverlay.addEventListener('click', (e) => {
    if (e.target === dom.cartDrawerOverlay) closeCartDrawer();
  });

  // Driver Tip Options
  dom.tipButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      dom.tipButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.driverTip = parseInt(btn.dataset.tip, 10);
      renderCart();
    });
  });

  // Cutlery Checkbox
  dom.cutleryCheckbox.addEventListener('change', (e) => {
    state.includeCutlery = e.target.checked;
    showToast(state.includeCutlery ? 'Cutlery will be packed' : 'Eco-mode: No cutlery');
  });

  // Voucher Application
  dom.applyVoucherBtn.addEventListener('click', () => {
    const code = dom.voucherInput.value.trim().toUpperCase();
    if (!code) return;

    if (code === 'MRD50') {
      state.appliedVoucher = { code: 'MRD50', discount: 50.00 };
      dom.voucherAppliedText.textContent = 'MRD50 (-R 50.00 First Order)';
      dom.voucherAppliedBanner.classList.remove('hidden');
      dom.voucherInput.value = '';
      showToast('Voucher MRD50 applied: R50 OFF!', 'deal');
      savePersistentState();
      renderCart();
    } else if (code === 'FREEDEL') {
      state.appliedVoucher = { code: 'FREEDEL', freeDelivery: true };
      dom.voucherAppliedText.textContent = 'FREEDEL (Free Delivery Waived)';
      dom.voucherAppliedBanner.classList.remove('hidden');
      dom.voucherInput.value = '';
      showToast('Voucher FREEDEL applied: Free delivery!', 'deal');
      savePersistentState();
      renderCart();
    } else {
      showToast('Invalid voucher code. Try "MRD50" or "FREEDEL"', 'error');
    }
  });

  dom.removeVoucherBtn.addEventListener('click', () => {
    state.appliedVoucher = null;
    dom.voucherAppliedBanner.classList.add('hidden');
    savePersistentState();
    renderCart();
    showToast('Voucher removed');
  });

  // Proceed to Checkout
  dom.btnProceedCheckout.addEventListener('click', () => {
    if (state.cart.length === 0) return;
    closeCartDrawer();
    dom.checkoutModal.showModal();
  });

  dom.closeCheckoutModal.addEventListener('click', () => dom.checkoutModal.close());

  // =========================================================================
  // CHECKOUT & ORDER SUBMISSION
  // =========================================================================
  dom.checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    dom.btnPlaceOrder.disabled = true;
    dom.orderSubmitSpinner.classList.remove('hidden');

    setTimeout(() => {
      dom.btnPlaceOrder.disabled = false;
      dom.orderSubmitSpinner.classList.add('hidden');
      dom.checkoutModal.close();

      const orderNumber = Math.floor(10000 + Math.random() * 90000);
      const storeName = state.cart.length > 0 ? state.cart[0].storeName : "Nando's Sandton";

      // Create Active Order
      state.activeOrder = {
        id: orderNumber,
        storeName: storeName,
        step: 1, // 1: Placed, 2: Kitchen, 3: On Way, 4: Delivered
        driver: {
          name: 'Sipho Mthembu',
          rating: '4.9 ★ (1.4k orders)',
          vehicle: 'Red Honda Ace 125 • Reg: CA 849-210'
        },
        etaMinutes: 24,
        placedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      // Clear Basket
      state.cart = [];
      savePersistentState();
      renderCart();

      // Show Tracker Button & Open Tracking Modal
      dom.liveOrderBtn.classList.remove('hidden');
      openOrderTracking();
      showToast(`Order #MRD-${orderNumber} placed successfully!`, 'success');

      // Start automatic step advance simulation
      startSimulationTimer();
    }, 1200);
  });

  // =========================================================================
  // ORDER TRACKING SIMULATOR
  // =========================================================================
  function openOrderTracking() {
    if (!state.activeOrder) {
      showToast('No active orders right now');
      return;
    }

    const order = state.activeOrder;
    dom.trackOrderId.textContent = order.id;
    dom.mapRestaurantName.textContent = order.storeName;
    dom.trackDriverName.textContent = order.driver.name;
    dom.trackDriverVehicle.textContent = order.driver.vehicle;

    updateTrackingUI();
    dom.trackingModal.showModal();
  }

  function updateTrackingUI() {
    if (!state.activeOrder) return;
    const step = state.activeOrder.step;

    // Step Elements
    const step1 = document.getElementById('track-step-1');
    const step2 = document.getElementById('track-step-2');
    const step3 = document.getElementById('track-step-3');
    const step4 = document.getElementById('track-step-4');

    const line1 = document.getElementById('track-line-1');
    const line2 = document.getElementById('track-line-2');
    const line3 = document.getElementById('track-line-3');

    // Reset classes
    [step1, step2, step3, step4].forEach((s) => {
      s.classList.remove('step-completed', 'step-active');
    });
    [line1, line2, line3].forEach((l) => l.classList.remove('active'));

    // Animated positions for Driver Marker across the vector route
    if (step === 1) {
      step1.classList.add('step-active');
      dom.trackEtaClock.textContent = '18:50';
      dom.trackEtaCountdown.textContent = 'Order received by restaurant';
      dom.animatedDriverMarker.style.left = '70px';
      dom.animatedDriverMarker.style.top = '175px';
    } else if (step === 2) {
      step1.classList.add('step-completed');
      line1.classList.add('active');
      step2.classList.add('step-active');
      dom.trackEtaClock.textContent = '18:42';
      dom.trackEtaCountdown.textContent = 'Kitchen is wrapping up your food';
      dom.animatedDriverMarker.style.left = '160px';
      dom.animatedDriverMarker.style.top = '170px';
    } else if (step === 3) {
      step1.classList.add('step-completed');
      line1.classList.add('active');
      step2.classList.add('step-completed');
      line2.classList.add('active');
      step3.classList.add('step-active');
      dom.trackEtaClock.textContent = '18:32';
      dom.trackEtaCountdown.textContent = 'Driver Sipho is 6 mins away from you';
      dom.animatedDriverMarker.style.left = '340px';
      dom.animatedDriverMarker.style.top = '105px';
    } else if (step >= 4) {
      step1.classList.add('step-completed');
      line1.classList.add('active');
      step2.classList.add('step-completed');
      line2.classList.add('active');
      step3.classList.add('step-completed');
      line3.classList.add('active');
      step4.classList.add('step-completed');
      dom.trackEtaClock.textContent = 'Delivered!';
      dom.trackEtaCountdown.textContent = 'Driver has arrived at your address';
      dom.animatedDriverMarker.style.left = '480px';
      dom.animatedDriverMarker.style.top = '65px';
    }
  }

  function advanceDeliveryStage() {
    if (!state.activeOrder) return;
    if (state.activeOrder.step < 4) {
      state.activeOrder.step++;
      savePersistentState();
      updateTrackingUI();

      if (state.activeOrder.step === 2) {
        showToast('Update: Kitchen started preparing your order');
      } else if (state.activeOrder.step === 3) {
        showToast('Update: Driver Sipho M. is on the way with your food!', 'deal');
      } else if (state.activeOrder.step === 4) {
        showToast('Ding-dong! Your order has arrived! Enjoy!', 'success');
      }
    } else {
      showToast('Order is already delivered!');
    }
  }

  function startSimulationTimer() {
    if (state.simulationTimer) clearInterval(state.simulationTimer);
    state.simulationTimer = setInterval(() => {
      if (state.activeOrder && state.activeOrder.step < 4) {
        advanceDeliveryStage();
      } else {
        clearInterval(state.simulationTimer);
      }
    }, 15000); // Progress automatically every 15s for lively demo
  }

  dom.btnAdvanceSimulation.addEventListener('click', advanceDeliveryStage);

  dom.btnResetOrder.addEventListener('click', () => {
    state.activeOrder = null;
    if (state.simulationTimer) clearInterval(state.simulationTimer);
    savePersistentState();
    dom.trackingModal.close();
    dom.liveOrderBtn.classList.add('hidden');
    showToast('Demo order cleared');
  });

  dom.liveOrderBtn.addEventListener('click', openOrderTracking);
  dom.mobNavOrders.addEventListener('click', openOrderTracking);
  dom.closeTrackingModal.addEventListener('click', () => dom.trackingModal.close());

  dom.btnCallDriver.addEventListener('click', () => {
    showToast('Calling Sipho Mthembu on +27 82 998 1234...');
  });

  dom.btnMsgDriver.addEventListener('click', () => {
    showToast('Message sent to driver: "Please buzz unit 402"');
  });

  // =========================================================================
  // LOCATION PICKER MODAL
  // =========================================================================
  dom.openAddressModal.addEventListener('click', () => {
    dom.locationModal.showModal();
  });

  dom.closeLocationModal.addEventListener('click', () => dom.locationModal.close());

  dom.locationItems.forEach((item) => {
    item.addEventListener('click', () => {
      dom.locationItems.forEach((i) => i.classList.remove('active'));
      item.classList.add('active');
      const loc = item.dataset.location;
      state.currentLocation = loc;
      dom.currentLocationText.textContent = loc;
      savePersistentState();
      dom.locationModal.close();
      showToast(`Location updated to ${loc}`, 'success');
      renderStores();
    });
  });

  // Delivery vs Collect switch
  dom.modeDelivery.addEventListener('click', () => {
    state.orderMode = 'delivery';
    dom.modeDelivery.classList.add('active');
    dom.modeCollect.classList.remove('active');
    dom.modeDelivery.setAttribute('aria-checked', 'true');
    dom.modeCollect.setAttribute('aria-checked', 'false');
    showToast('Switched to Delivery Mode');
  });

  dom.modeCollect.addEventListener('click', () => {
    state.orderMode = 'collect';
    dom.modeCollect.classList.add('active');
    dom.modeDelivery.classList.remove('active');
    dom.modeCollect.setAttribute('aria-checked', 'true');
    dom.modeDelivery.setAttribute('aria-checked', 'false');
    showToast('Switched to Self-Collect (0 Delivery Fee)');
  });

  // Bottom Navigation Mobile
  dom.mobNavHome.addEventListener('click', () => {
    dom.mobNavHome.classList.add('active');
    dom.mobNavGroceries.classList.remove('active');
    applyCategoryFilter('all');
  });

  dom.mobNavGroceries.addEventListener('click', () => {
    dom.mobNavGroceries.classList.add('active');
    dom.mobNavHome.classList.remove('active');
    applyCategoryFilter('pnp');
  });

  // =========================================================================
  // INITIALIZATION
  // =========================================================================
  function init() {
    loadPersistentState();

    if (state.currentLocation) {
      dom.currentLocationText.textContent = state.currentLocation;
    }

    if (state.activeOrder) {
      dom.liveOrderBtn.classList.remove('hidden');
    }

    renderStores();
    renderCart();

    console.log('Mr D Reference Prototype initialized successfully.');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
