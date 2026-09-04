export const addressPageStyles = {
  mainContainer: "min-h-screen bg-[#0b0a08] text-white",
  section: "relative overflow-hidden px-3 py-8 sm:px-5 sm:py-10 lg:px-6 xl:px-8",
  bgGradient1: "absolute inset-x-0 top-0 h-72 bg-linear-to-b from-yellow-300/25 to-transparent",
  bgLine: "absolute left-0 top-28 h-px w-full bg-linear-to-r from-transparent via-yellow-300/50 to-transparent",
  gridContainer: "relative mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start xl:gap-8",
  leftColumn: "space-y-5 lg:space-y-6",
  badge: "inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-2 text-sm font-bold text-yellow-200",
  iconBadge: "h-4 w-4",
  heading: "font-store-display text-3xl font-black tracking-wide text-white sm:text-4xl xl:text-5xl",
  headingSpan: "block text-yellow-300",
  subheading: "mt-4 max-w-xl text-base font-medium leading-7 text-white/65",
  infoGrid: "grid gap-3 md:grid-cols-2",
  infoCard: "rounded-2xl border border-white/10 bg-white/5 p-4 lg:p-5",
  infoLabel: "font-store-label text-xs font-black uppercase tracking-wide text-yellow-300",
  infoValue: "mt-2 text-sm font-semibold text-white/70",
  selectedContainer: "rounded-3xl border border-yellow-300/20 bg-yellow-300/10 p-4 lg:p-5",
  selectedLabel: "font-store-label text-sm font-black uppercase tracking-wide text-yellow-300",
  selectedTypeBadge: "mt-2 inline-flex rounded-full bg-yellow-300 px-3 py-1 text-xs font-black text-black",
  selectedDetails: "mt-3 text-sm leading-6 text-white/80",
  selectedName: "font-bold text-white",
  formContainer: "rounded-4xl border border-yellow-300/20 bg-white p-4 text-black shadow-2xl shadow-yellow-500/10 sm:p-6 xl:p-7",
  savedAlert: "mb-5 flex items-center gap-3 rounded-2xl border border-yellow-300/40 bg-yellow-100 px-4 py-3 text-sm font-bold text-black",
  iconSuccess: "h-5 w-5 text-yellow-700",
  formHeader: "mb-6 flex items-start justify-between gap-4",
  formLabel: "font-store-label text-sm font-black uppercase tracking-wide text-yellow-600",
  formTitle: "font-store-display mt-2 text-2xl font-black tracking-wide sm:text-3xl",
  addButton: "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-yellow-300 transition hover:bg-yellow-300 hover:text-black",
  form: "space-y-4",
  labelText: "font-store-label mb-2 block text-sm font-bold text-black/75",
  selectInput: "w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm font-semibold text-black outline-none focus:border-black/25",
  inputWrapper: "flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3.5 transition focus-within:border-black/25",
  iconInput: "h-5 w-5 text-yellow-600",
  inputField: "w-full bg-transparent text-sm font-semibold text-black outline-none placeholder:text-black/35",
  textareaField: "w-full resize-none bg-transparent text-sm font-semibold leading-6 text-black outline-none placeholder:text-black/35",
  submitButton: "font-store-label inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-5 py-4 text-sm font-black uppercase tracking-wide text-yellow-300 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-yellow-300 hover:text-black",
  loaderIcon: "h-5 w-5 animate-spin",
  iconSm: "h-5 w-5",
  addressBookContainer: "relative mx-auto mt-10 max-w-7xl",
  addressBookHeader: "mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between",
  addressBookLabel: "font-store-label text-xs font-black uppercase tracking-wide text-yellow-300",
  addressBookTitle: "font-store-display mt-1 text-2xl font-black text-white",
  addressCount: "text-sm font-semibold text-white/55",
  emptyState: "rounded-3xl border border-white/10 bg-white/5 p-6 text-white/70",
  addressGrid: "grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-5",
  addressCardBase: "group flex h-full min-h-72 flex-col rounded-[1.35rem] border p-4 shadow-xl backdrop-blur transition hover:-translate-y-1 lg:min-h-76 xl:p-5",
  addressCardSelected: "border-yellow-300/70 bg-linear-to-br from-yellow-300/18 via-yellow-300/10 to-white/5 shadow-yellow-500/15",
  addressCardDefault: "border-white/10 bg-white/[0.07] shadow-black/25 hover:border-yellow-300/35 hover:bg-white/10",
  addressCardTop: "flex items-start justify-between gap-3",
  addressCardInfo: "min-w-0",
  addressCardIcon: "mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-yellow-300 text-black shadow-lg shadow-yellow-500/20",
  addressCardName: "font-store-label truncate text-lg font-black text-white",
  addressCardMobile: "mt-1 text-sm font-bold text-white/55",
  addressCardBadges: "flex shrink-0 flex-col items-end gap-2",
  selectedBadge: "rounded-full border border-yellow-300/40 bg-yellow-300/15 px-3 py-1 text-xs font-black text-yellow-200",
  typeBadge: "rounded-full bg-yellow-300 px-3 py-1 text-xs font-black text-black",
  addressCardDetails: "mt-4 flex-1 rounded-2xl border border-white/10 bg-black/20 p-3 text-sm leading-6 text-white/75 xl:p-4",
  pinText: "font-bold text-white/85",
  landmarkText: "mt-1 text-white/55",
  addressCardActions: "mt-4 grid grid-cols-[1fr_auto] gap-3",
  useAddressButtonBase: "inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-black transition",
  useAddressButtonSelected: "bg-white/10 text-white ring-1 ring-white/10",
  useAddressButtonDefault: "bg-yellow-300 text-black hover:bg-yellow-400",
  editButton: "inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-yellow-300 hover:bg-yellow-300 hover:text-black",
};


export const bannerStyles = {
  section: "relative overflow-hidden bg-[#fff8dc] py-6 sm:py-8",
  container: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
  innerContainer: "relative overflow-hidden rounded-4xl border border-yellow-200 bg-[#111111]",

  // Decorative gradients (inline styles)
  decorGradient1: {
    background:
      "radial-gradient(circle at top left, rgba(250,204,21,0.18), transparent 28%), radial-gradient(circle at bottom right, rgba(250,204,21,0.10), transparent 32%)",
  },
  decorGradient2: {
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.03), transparent 40%, rgba(255,255,255,0.02))",
  },

  gridContainer:
    "relative grid min-h-auto grid-cols-1 items-center gap-6 px-5 py-7 xl:min-h-95 xl:grid-cols-2 xl:px-12",
  leftColumn: "relative z-10 space-y-4 text-white",

  badge:
    "font-store-label inline-flex items-center gap-2 rounded-full border border-yellow-300/40 bg-yellow-300/10 px-4 py-2 text-sm font-bold text-yellow-200 backdrop-blur-sm",
  iconSmall: "h-4 w-4",

  headingWrapper: "space-y-3",
  heading:
    "font-store-display max-w-xl text-3xl font-black leading-tight tracking-wide sm:text-4xl lg:text-5xl",
  headingHighlight: "block text-yellow-300",
  description: "max-w-lg text-sm font-medium leading-6 text-white/75 sm:text-base",

  buttonsWrapper: "flex flex-wrap items-center gap-3",
  primaryButton:
    "font-store-label inline-flex items-center gap-2 rounded-full bg-yellow-300 px-5 py-2.5 text-sm font-bold text-black shadow-lg shadow-yellow-300/20 transition-transform duration-300 hover:-translate-y-1 hover:bg-yellow-200",
  secondaryButton:
    "font-store-label inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition duration-300 hover:border-yellow-300/40 hover:text-yellow-200",

  cardsContainer: "grid max-w-xl grid-cols-1 gap-3 pt-1 sm:grid-cols-3",
  card: "rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm",
  cardIcon: "h-5 w-5 text-yellow-300",
  cardTitle: "font-store-label mt-2 text-sm font-bold text-white",
  cardText: "text-xs font-medium text-white/60",

  trustMessage:
    "font-store-label flex items-center gap-2 pt-1 text-sm font-bold text-white/70",
  starIcon: "h-4 w-4 fill-yellow-300 text-yellow-300",

  rightColumn: "relative z-10 hidden min-h-80 items-center justify-center xl:flex",
};


export const cartPageStyles = {
  mainContainer: "relative min-h-screen overflow-hidden bg-[#0b0a08] px-4 py-8 text-white sm:px-6 lg:px-8",

  bgGradient1: "absolute inset-x-0 top-0 h-72 bg-linear-to-b from-yellow-300/25 to-transparent",
  bgLine: "absolute left-0 top-28 h-px w-full bg-linear-to-r from-transparent via-yellow-300/50 to-transparent",

  toast: "fixed right-4 top-6 z-50 flex items-center gap-3 rounded-2xl border border-yellow-300/40 bg-yellow-300 px-4 py-3 text-sm font-black text-black shadow-2xl shadow-yellow-500/25",
  iconMd: "h-5 w-5",

  section: "relative mx-auto max-w-384",

  headerWrapper: "mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",

  badge: "font-store-label inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-2 text-sm font-black uppercase tracking-wide text-yellow-200",
  iconSm: "h-4 w-4",

  heading: "font-store-display mt-4 text-4xl font-black tracking-wide text-white sm:text-5xl",
  itemCount: "mt-3 text-sm font-semibold text-white/60",

  continueButton: "font-store-label inline-flex w-fit items-center justify-center rounded-full bg-yellow-300 px-5 py-3 text-sm font-black text-black transition hover:bg-yellow-400",

  emptyContainer: "flex min-h-[52vh] flex-col items-center justify-center rounded-4xl border border-white/10 bg-white/5 p-8 text-center",
  emptyIconWrapper: "flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-300 text-black shadow-xl shadow-yellow-500/20",
  iconLg: "h-9 w-9",
  emptyTitle: "font-store-display mt-5 text-3xl font-black",
  emptySubtext: "mt-2 max-w-md text-sm font-semibold leading-6 text-white/60",

  cartGrid: "grid items-start gap-5 xl:grid-cols-[1fr_320px]",
  productGrid: "grid auto-rows-max items-start gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-5",

  productCard: "group flex h-fit flex-col overflow-hidden rounded-2xl rounded-bl-[3rem] border border-yellow-200/60 bg-white text-black shadow-[0_14px_36px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1",
  productImageWrapper: "bg-yellow-50 p-2.5",
  productImage: "h-24 w-full object-contain",

  productContent: "flex flex-1 flex-col p-3",
  productHeader: "flex items-start justify-between gap-2",
  productInfo: "min-w-0",
  productCategory: "font-store-label text-[10px] font-black uppercase tracking-wide text-yellow-700",
  productName: "font-store-label mt-1 line-clamp-2 text-sm font-black leading-snug text-zinc-950",
  productCompany: "mt-1 truncate text-xs font-bold text-zinc-500",

  removeButton: "inline-flex cursor-pointer h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-black text-yellow-300 transition hover:bg-yellow-300 hover:text-black",

  sizeWrapper: "mt-2 flex flex-wrap gap-1.5",
  sizeBadge: "font-store-label rounded-full bg-black px-2.5 py-1 text-[11px] font-bold text-white",

  priceContainer: "mt-2 rounded-2xl bg-zinc-50 px-3 py-2",
  priceRow: "flex items-baseline gap-2",
  priceCurrent: "font-store-display text-lg font-black text-zinc-900",
  priceOld: "font-store-label text-xs font-bold text-zinc-400 line-through",
  priceTotal: "mt-1 text-xs font-bold text-zinc-500",

  quantityControls: "font-store-label mt-3 gap-7 flex justify-center inline-flex h-9 w-32 items-center justify-between rounded-full border border-yellow-300 bg-black px-1.5 text-sm font-black text-yellow-300",
  qtyButton: "inline-flex cursor-pointer h-7 w-7 items-center justify-center rounded-full bg-yellow-300 text-black transition hover:bg-yellow-400",

  summaryAside: "h-fit rounded-3xl border border-yellow-300/25 bg-white p-5 text-black shadow-2xl shadow-yellow-500/10 xl:sticky xl:top-24",
  summaryLabel: "font-store-label text-xs font-black uppercase tracking-wide text-yellow-700",
  summaryTitle: "font-store-display mt-2 text-2xl font-black",

  summaryDetails: "mt-5 space-y-3 text-sm font-bold",
  summaryRow: "flex justify-between text-black/65",
  summaryDivider: "h-px bg-black/10",
  summaryTotal: "flex justify-between text-lg font-black text-black",

  paymentSection: "mt-6",
  paymentLabel: "font-store-label mb-3 text-sm font-black uppercase tracking-wide text-black/70",
  paymentOptions: "grid gap-3",

  paymentButtonBase: "flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-black transition",
  paymentButtonActive: "border-black bg-black text-yellow-300",
  paymentButtonInactive: "border-black/10 bg-white text-black hover:border-yellow-400 hover:bg-yellow-50",

  checkoutButton: "font-store-label cursor-pointer mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-5 py-4 text-sm font-black uppercase tracking-wide text-yellow-300 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-yellow-300 hover:text-black",
};

export const footerStyles = {
  footer: "relative overflow-hidden border-t border-yellow-400/20 bg-[#0b0a08] text-white",

  // Decorative glow backgrounds
  decorGlow1: "absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400/20 blur-3xl animate-pulse",
  decorGlow2: "absolute bottom-0 right-0 h-56 w-56 rounded-full bg-amber-500/15 blur-3xl",
  decorGlow3: "absolute left-0 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-yellow-300/10 blur-3xl",

  container: "relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8",
  grid: "grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.75fr_1.7fr_1fr]",

  // Brand
  brandWrapper: "space-y-4",
  brandHeader: "flex items-center gap-3",
  logoContainer: "relative flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl border border-yellow-300/40 bg-white/95 p-1.5 shadow-xl shadow-yellow-500/15",
  logoDot: "absolute -right-1 -top-1 h-4 w-4 rounded-full bg-yellow-300 shadow-sm shadow-yellow-300/40",
  logoImage: "relative h-full w-full object-contain",
  brandTitle: "font-serif text-2xl font-black italic tracking-wide text-white sm:text-3xl",
  brandHighlight: "bg-linear-to-r from-yellow-500 via-amber-300 to-yellow-600 bg-clip-text text-transparent",
  brandDescription: "max-w-sm text-sm font-medium leading-6 text-white/70",

  // Quick Links
  sectionTitle: "font-store-display mb-5 text-xl font-black tracking-wide text-yellow-300",
  linkList: "space-y-3",
  linkItem: "font-store-label group inline-flex items-center gap-2 font-bold text-white/70 transition hover:translate-x-1 hover:text-yellow-300",
  linkBullet: "h-1.5 w-1.5 rounded-full bg-yellow-400/70 transition group-hover:scale-125",
  linkArrow: "h-4 w-4 opacity-0 transition group-hover:opacity-100",

  // Categories
  categoriesTitle: "font-store-display mb-5 w-full border-b border-yellow-400/25 pb-3 text-2xl font-black tracking-wide text-yellow-300",
  categoriesGrid: "grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3",
  categoryLink: "font-store-label cursor-pointer text-left text-sm font-bold leading-snug text-white/70 transition hover:translate-x-1 hover:text-yellow-200",

  // Contact
  contactList: "space-y-4 text-sm font-medium text-white/70",
  contactItem: "flex items-start gap-3",
  contactIcon: "mt-0.5 h-4 w-4 text-yellow-300",
  websiteButton: "font-store-label group mt-5 inline-flex items-center gap-2 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 px-4 py-3 font-bold text-yellow-200 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:border-yellow-300/40 hover:bg-yellow-400/20",
  websiteIcon: "h-4 w-4 transition group-hover:rotate-12",
  websiteArrow: "h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5",

  // Bottom bar
  bottomBar: "mt-12 border-t border-yellow-400/15 pt-6",
  bottomBarInner: "flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left",
  copyright: "text-sm font-medium text-white/60",
  designerWrapper: "group flex items-center gap-2 text-sm font-medium text-white/70",
  designerLabel: "text-white/50",
  designerLink: "font-store-label inline-flex items-center gap-2 font-bold text-yellow-300 transition hover:text-yellow-200",
  designerArrow: "h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5",

  // Glow line (inline style + classes)
  glowLine: "pointer-events-none absolute left-1/2 top-0 h-1 w-40 -translate-x-1/2 rounded-b-full bg-linear-to-r from-transparent via-yellow-300 to-transparent blur-sm",
  glowAnimation: { animation: "torchMove 4s ease-in-out infinite" },
};

export const hookahPageStyles = {
  section: "min-h-screen scroll-mt-24 bg-linear-to-br from-yellow-50 via-white to-zinc-100 py-12",
  container: "mx-auto max-w-9xl px-4 sm:px-6",
  headerWrapper: "mb-12 text-center",
  badge: "font-store-label mb-4 inline-flex items-center rounded-full border border-yellow-300 bg-white px-5 py-2 text-sm font-bold uppercase tracking-[0.18em] text-zinc-700 shadow-sm",
  heading: "font-serif text-4xl font-black italic tracking-wide text-zinc-950 sm:text-5xl md:text-6xl",
  highlight: "bg-linear-to-r from-yellow-500 via-amber-400 to-yellow-600 bg-clip-text text-transparent",
  divider: "mx-auto mt-4 h-1 w-28 rounded-full bg-linear-to-r from-transparent via-yellow-400 to-transparent",

  productGrid: "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6",

  productCard: "group relative overflow-hidden rounded-3xl rounded-bl-[5rem] border border-yellow-200 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]",
  cardOverlay1: "absolute inset-0 bg-linear-to-br from-yellow-400/10 via-transparent to-yellow-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
  cardOverlay2: "absolute -right-10 top-0 h-24 w-24 rounded-full bg-yellow-300/20 blur-2xl",
  cardOverlay3: "absolute -bottom-10 left-0 h-24 w-24 rounded-full bg-yellow-200/20 blur-2xl",
  cardContent: "relative flex h-full flex-col",

  imageWrapper: "overflow-hidden bg-yellow-50",
  productImage: "h-40 w-full object-contain transition-transform duration-500",

  productInfo: "flex flex-1 flex-col p-4",
  productName: "font-store-label line-clamp-2 text-base font-black leading-snug tracking-wide text-zinc-900",
  productCompany: "mt-1 text-sm font-bold text-zinc-500",
  sizeBadge: "font-store-label mt-2 inline-flex w-fit rounded-full bg-black px-3 py-1 text-xs font-bold text-white",

  priceContainer: "mt-4 rounded-2xl bg-zinc-50 px-4 py-3",
  priceRow: "mt-1 flex items-baseline gap-2",
  priceCurrent: "font-store-display text-2xl font-black text-zinc-900",
  priceOld: "font-store-label text-sm font-bold text-zinc-400 line-through",

  actionWrapper: "mt-4 flex justify-center",

  quantityControls: "font-store-label inline-flex h-11 w-40 items-center justify-between rounded-full border border-yellow-300 bg-black px-2 text-sm font-black text-yellow-300 shadow-md shadow-yellow-200",
  qtyButton: "inline-flex cursor-pointer h-8 w-8 items-center justify-center rounded-full bg-yellow-300 text-black transition hover:bg-yellow-400",
  qtyValue: "min-w-10 text-center",

  addButton: "font-store-label inline-flex cursor-pointer h-11 w-40 items-center justify-center gap-2 rounded-full border border-yellow-300 bg-yellow-400 px-3 text-sm font-bold text-zinc-900 shadow-md shadow-yellow-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 active:scale-[0.98]",

  cardBottomBar: "h-1 w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full",

  viewMoreWrapper: "mt-10 flex justify-center",
  viewMoreLink: "font-store-label inline-flex items-center gap-2 rounded-full bg-black px-8 py-3 font-bold text-white shadow-lg transition-all duration-300",
  viewMoreArrow: "transition-transform duration-300 group-hover:translate-x-1",
};

export const loginPageStyles = {
  // Main container
  mainContainer: "min-h-screen overflow-hidden bg-[#0b0a08] text-white",

  // Toast shared styles
  toastBase:
    "fixed right-4 top-4 z-50 flex items-center gap-3 rounded-2xl border px-4 py-3 shadow-2xl transition-all duration-500 sm:right-6",
  toastSuccess:
    "border-yellow-300/40 bg-black text-yellow-200 shadow-yellow-400/20",
  toastError:
    "border-red-400/50 bg-black text-red-200 shadow-red-500/20",
  toastVisible: "translate-y-0 opacity-100",
  toastHidden: "-translate-y-4 opacity-0",
  toastIconWrapperSuccess:
    "flex h-9 w-9 items-center justify-center rounded-full bg-yellow-300 text-black",
  toastIconWrapperError:
    "flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-white",
  toastTitle: "font-store-label block text-sm font-black",
  toastSubtext: "text-xs font-semibold text-white/65",

  // Icons
  iconSm: "h-4 w-4",
  iconMd: "h-5 w-5",

  // Decorative backgrounds (inline styles)
  decorBg: "absolute inset-0",
  decorGradients: {
    background:
      "radial-gradient(circle at top left, rgba(250,204,21,0.22), transparent 30%), radial-gradient(circle at bottom right, rgba(245,158,11,0.18), transparent 32%)",
  },
  decorLine:
    "absolute left-1/2 top-0 h-px w-4/5 -translate-x-1/2 bg-linear-to-r from-transparent via-yellow-300/70 to-transparent",

  // Section grid
  section:
    "relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8",

  // Left column (hidden on mobile, shown on lg+)
  leftColumn: "order-2 md:hidden lg:block hidden space-y-8 lg:order-1",

  // Logo
  logoLink: "inline-flex items-center gap-3",
  logoWrapper:
    "flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-1.5 shadow-xl shadow-yellow-400/15 ring-1 ring-yellow-200/40",
  logoImage: "h-full w-full object-contain",
  logoText:
    "font-serif block text-2xl font-black italic tracking-wide",
  logoSubtext:
    "font-store-label text-xs font-bold uppercase tracking-wide text-yellow-300",

  // Hero
  heroWrapper: "max-w-xl space-y-5",
  heroBadge:
    "font-store-label inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-2 text-sm font-bold text-yellow-200",
  heroHeading:
    "font-store-display text-4xl font-black leading-tight tracking-wide sm:text-5xl",
  heroHighlight: "block text-yellow-300",
  heroDescription:
    "max-w-lg text-base font-medium leading-7 text-white/70",

  // Feature cards
  featureGrid: "grid max-w-xl gap-3 sm:grid-cols-3",
  featureCard: "rounded-2xl border border-white/10 bg-white/5 p-4",
  featureIcon: "h-5 w-5 text-yellow-300",
  featureLabel: "font-store-label mt-3 text-sm font-bold text-white",

  // Right column (form)
  rightColumn: "order-1 lg:order-2",
  form: "mx-auto w-full max-w-md rounded-4xl border border-yellow-300/20 bg-white p-6 text-black shadow-2xl shadow-yellow-500/10 sm:p-8",

  // Form header
  formHeader: "mb-7",
  formLabel:
    "font-store-label text-sm font-black uppercase tracking-wide text-yellow-600",
  formTitle:
    "font-store-display mt-2 text-3xl font-black tracking-wide text-black",

  // Form fields
  formFields: "space-y-4",
  inputLabel:
    "font-store-label mb-2 block text-sm font-bold text-black/75",
  inputWrapper:
    "flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3.5 transition focus-within:border-black/25",
  inputIcon: "h-5 w-5 text-yellow-600",
  inputField:
    "auth-field w-full bg-transparent text-sm font-semibold text-black outline-none placeholder:text-black/35",
  togglePasswordButton:
    "rounded-full p-1 text-black/55 transition hover:bg-yellow-200 hover:text-black",

  // Forgot password
  forgotPasswordWrapper: "mt-2 flex justify-end",
  forgotPasswordLink:
    "text-sm font-semibold text-yellow-600 transition hover:text-yellow-500 hover:underline",

  // Submit button
  submitButton:
    "font-store-label mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-5 py-4 text-sm font-black uppercase tracking-wide text-yellow-300 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-yellow-300 hover:text-black disabled:cursor-wait disabled:opacity-80",

  // Signup prompt
  signupPrompt: "mt-6 text-center text-sm font-semibold text-black/60",
  signupLink:
    "font-store-label font-black text-black underline decoration-yellow-400 decoration-2 underline-offset-4",
};

export const navbarStyles = {
  // Header (sticky, with conditional visibility)
  headerBase:
    "sticky top-0 z-50 w-full border-b border-yellow-200 bg-yellow-400/95 shadow-sm backdrop-blur-md transition-transform duration-300",
  headerVisible: "translate-y-0",
  headerHidden: "-translate-y-full",

  // Container
  container:
    "mx-auto flex max-w-7xl flex-col gap-3 px-3 py-3 sm:px-6 xl:flex-row xl:items-center xl:px-8",

  // Logo link and wrapper
  logoLink:
    "flex shrink-0 items-center justify-between gap-3 xl:justify-start",
  logoWrapper: "flex items-center gap-3",
  logoImageWrapper:
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white p-1 shadow-md ring-1 ring-black/5 sm:h-12 sm:w-12",
  logoImage: "h-full w-full object-contain",
  logoTextWrapper: "leading-tight",
  logoTitle:
    "font-serif italic text-base font-black tracking-wide text-black sm:text-xl",
  logoSubtitle:
    "font-store-label text-[10px] font-bold uppercase tracking-wide text-black/70 sm:text-xs",

  // Search form
  searchForm: "flex w-full flex-1 justify-center",
  searchContainer:
    "flex w-full max-w-2xl items-center overflow-hidden rounded-full bg-white shadow-md ring-1 ring-black/5 transition-all duration-200 focus-within:ring-black/15",
  searchInputWrapper: "flex flex-1 items-center gap-3 px-4",
  searchIcon: "h-4 w-4 text-gray-400",
  searchInput:
    "font-store-label w-full bg-transparent text-sm text-gray-800 outline-none placeholder:font-medium placeholder:text-gray-400",
  searchButton:
    "font-store-label cursor-pointer bg-black px-3 py-3 text-sm font-bold text-white transition-colors sm:px-5",

  // Right side actions
  actionsWrapper:
    "grid w-full shrink-0 grid-cols-3 gap-1.5 sm:flex sm:items-center sm:justify-center sm:gap-2 xl:w-auto",

  // Common action button (used for orders, cart, login, account)
  actionButton:
    "font-store-label inline-flex cursor-pointer items-center justify-center gap-1 rounded-full bg-white px-1.5 py-2.5 text-[11px] font-bold text-black shadow-md ring-1 ring-black/5 transition-transform hover:scale-[1.02] hover:bg-[#fff8dc] sm:gap-2 sm:px-4 sm:text-sm",
  actionIcon: "h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4",

  // Cart button (extends actionButton but adds background black)
  cartButton:
    "font-store-label relative inline-flex cursor-pointer items-center justify-center gap-1 rounded-full bg-black px-1.5 py-2.5 text-[11px] font-bold text-white shadow-md transition-transform sm:gap-2 sm:px-4 sm:text-sm",
  cartBadge:
    "absolute -right-2 -top-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-white px-1.5 text-xs font-black text-black ring-2 ring-yellow-400",

  // Account dropdown
  accountDropdownWrapper: "group relative min-w-0",
  dropdownChevron:
    "hidden h-4 w-4 shrink-0 transition group-hover:rotate-180 sm:block",

  dropdownMenu:
    "absolute right-0 top-full z-50 mt-3 w-52 rounded-2xl border border-yellow-300/40 bg-black p-2 shadow-2xl shadow-black/25 transition-all duration-200",
  dropdownOpen: "visible translate-y-0 opacity-100",
  dropdownClosed: "invisible translate-y-2 opacity-0",

  dropdownItem:
    "font-store-label flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-bold text-yellow-100 transition hover:bg-yellow-300 hover:text-black",
  dropdownIcon: "h-4 w-4",
};

export const ordersPageStyles = {
  // Main container
  mainContainer:
    "relative min-h-screen overflow-hidden bg-[#0b0a08] px-4 py-8 text-white sm:px-6 lg:px-8",

  // Decorative backgrounds
  bgGradient1:
    "absolute inset-x-0 top-0 h-80 bg-linear-to-b from-yellow-300/25 to-transparent",
  bgLine:
    "absolute left-0 top-28 h-px w-full bg-linear-to-r from-transparent via-yellow-300/50 to-transparent",

  // Toast
  toastContainer:
    "fixed right-4 top-6 z-50 flex items-center gap-3 rounded-2xl border border-yellow-300/40 bg-yellow-300 px-4 py-3 text-sm font-black text-black shadow-2xl shadow-yellow-500/25",
  iconMd: "h-5 w-5",

  // Confirm modal
  confirmModal:
    "fixed right-4 top-6 z-50 w-[calc(100vw-2rem)] max-w-sm rounded-3xl border border-yellow-300/40 bg-white p-4 text-black shadow-2xl shadow-yellow-500/25 sm:right-6",
  confirmIconWrapper:
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-yellow-300 text-black",
  confirmTitle: "font-store-label text-sm font-black",
  confirmSubtext: "mt-1 text-xs font-bold leading-5 text-black/60",
  confirmActions: "mt-4 grid grid-cols-2 gap-2",
  confirmKeepButton:
    "font-store-label cursor-pointer rounded-2xl border border-black/10 px-4 py-3 text-sm font-black text-black transition hover:bg-zinc-50",
  confirmCancelButton:
    "font-store-label cursor-pointer rounded-2xl bg-black px-4 py-3 text-sm font-black text-yellow-300 transition hover:bg-yellow-300 hover:text-black",

  // Section
  section: "relative mx-auto max-w-384",
  headerGrid: "mb-8 grid gap-5 lg:grid-cols-[1fr_420px] lg:items-end",

  badge:
    "font-store-label inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-2 text-sm font-black uppercase tracking-wide text-yellow-200",
  iconSm: "h-4 w-4",
  heading:
    "font-store-display mt-4 text-4xl font-black tracking-wide text-white sm:text-5xl",
  subheading:
    "mt-3 max-w-2xl text-sm font-semibold leading-6 text-white/60",

  // Stats
  statsGrid: "grid grid-cols-1 gap-3 sm:grid-cols-3",
  statCard:
    "rounded-3xl border border-yellow-300/20 bg-white/8 p-4 shadow-xl shadow-black/20",
  statIcon: "h-5 w-5 text-yellow-300",
  statValue: "font-store-display mt-3 text-xl font-black text-white",
  statLabel:
    "font-store-label mt-1 text-xs font-black uppercase text-white/45",

  // Loading
  loadingContainer:
    "flex min-h-72 items-center justify-center rounded-3xl border border-yellow-300/20 bg-white/8",
  loadingSpinner: "h-8 w-8 animate-spin text-yellow-300",

  // Orders grid
  ordersGrid:
    "grid items-start gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4",

  // Order card
  orderCard:
    "overflow-hidden rounded-3xl border border-yellow-300/20 bg-white text-black shadow-2xl shadow-black/25 transition duration-300 hover:-translate-y-1 hover:shadow-yellow-500/10",
  orderHeader: "border-b border-black/10 bg-yellow-50 p-4",
  orderBadges: "flex flex-wrap items-center gap-2",

  // Badge base (used for status and payment)
  badgeBase:
    "font-store-label inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-black uppercase",
  orderIdBadge:
    "font-store-label inline-flex items-center gap-1.5 rounded-full bg-black px-3 py-1.5 text-[10px] font-black uppercase text-yellow-300",
  iconXs: "h-3.5 w-3.5",

  orderItemCount: "font-store-display mt-3 text-xl font-black",
  orderDate: "mt-1 line-clamp-2 text-xs font-bold leading-5 text-black/55",

  orderActions: "mt-4 grid grid-cols-[44px_1fr] gap-2",

  eyeButtonBase:
    "inline-flex h-10 cursor-pointer items-center justify-center rounded-2xl border text-black transition",
  eyeButtonActive: "border-black bg-yellow-300",
  eyeButtonInactive:
    "border-black/10 bg-white hover:border-yellow-400 hover:bg-yellow-50",

  statusCancelled:
    "font-store-label inline-flex h-10 items-center justify-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 text-xs font-black uppercase text-red-700",
  statusDelivered:
    "font-store-label inline-flex h-10 items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 text-xs font-black uppercase text-emerald-700",
  cancelButton:
    "font-store-label inline-flex h-10 w-fit cursor-pointer items-center justify-center gap-2 justify-self-end rounded-2xl bg-black px-4 text-xs font-black uppercase text-yellow-300 transition hover:bg-red-600 hover:text-white",

  // Expanded section
  expandedContainer: "flex flex-col gap-4 p-4",
  expandedItemsGrid:
    "grid auto-rows-fr grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-3",

  expandedItem:
    "group flex h-full min-h-65 min-w-0 flex-col overflow-hidden rounded-2xl border border-yellow-200/70 bg-white text-black shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5",
  expandedItemImageWrapper:
    "flex h-28 items-center justify-center bg-yellow-50 p-2",
  expandedItemImage: "h-full w-full object-contain",
  expandedItemContent: "flex flex-1 flex-col p-2",
  expandedItemName:
    "font-store-label line-clamp-2 min-h-10 text-xs font-black leading-4 text-zinc-950",
  expandedItemCompany:
    "mt-1 truncate text-[10px] font-black uppercase tracking-wide text-yellow-700",
  expandedItemSize: "mt-1 truncate text-[11px] font-bold text-zinc-500",
  expandedItemFooter:
    "mt-auto flex items-center justify-between gap-1 pt-2",
  expandedItemPrice:
    "font-store-display truncate text-sm font-black text-zinc-950",
  expandedItemQty:
    "font-store-label rounded-full bg-yellow-300 px-2 py-0.5 text-[10px] font-black text-black",

  // Order summary
  orderSummary:
    "rounded-2xl border border-yellow-300/35 bg-black p-4 text-white shadow-xl shadow-yellow-500/10",
  summaryTitle:
    "font-store-label text-[10px] font-black uppercase tracking-wide text-yellow-300",
  summaryDetails: "mt-3 space-y-2 text-xs font-bold",
  summaryRow: "flex justify-between text-white/65",
  summaryDivider: "h-px bg-yellow-300/20",
  summaryTotal: "flex justify-between text-base font-black text-yellow-300",

  progressContainer: "mt-4",
  progressLabels:
    "mb-2 flex items-center justify-between text-[10px] font-black uppercase text-white/50",
  progressBar: "grid grid-cols-3 gap-2",
  progressStep: "h-2 rounded-full",
  progressStepActive: "bg-yellow-300",
  progressStepInactive: "bg-white/15",
};

export const paymentSuccessPageStyles = {
  main: "flex min-h-screen items-center justify-center bg-[#0b0a08] px-4 text-white",
  container:
    "flex items-center gap-3 rounded-3xl border border-yellow-300/25 bg-white/8 px-5 py-4 text-sm font-black text-yellow-200",
  loaderIcon: "h-5 w-5 animate-spin",
};

export const productItemsPageStyles = {
  // Empty state
  emptySection: "bg-yellow-50 px-4 py-20 text-center",
  emptyHeading:
    "font-serif text-4xl font-black italic text-zinc-950",
  emptyLink:
    "font-store-label mt-6 inline-flex rounded-full bg-black px-6 py-3 font-bold text-white",

  // Main section
  section:
    "min-h-screen bg-linear-to-br from-yellow-50 via-white to-zinc-100 px-4 py-10 sm:px-6 lg:px-8",
  container: "mx-auto max-w-450",

  backLink:
    "font-store-label mb-6 inline-flex items-center gap-2 text-sm font-bold text-zinc-600 hover:text-zinc-950",

  contentWrapper: "mt-10 p-5 sm:p-7",

  categoryLabel:
    "font-store-label text-xs font-black uppercase tracking-[0.2em] text-black",
  categoryTitle:
    "font-serif text-3xl font-black italic tracking-wide text-black",

  productGrid:
    "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6",

  // Product card (shared with HookahPage but slightly different)
  productCard:
    "group relative overflow-hidden rounded-3xl rounded-bl-[5rem] border border-yellow-200 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]",
  cardOverlay1:
    "absolute inset-0 bg-linear-to-br from-yellow-400/10 via-transparent to-yellow-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
  cardOverlay2:
    "absolute -right-10 top-0 h-24 w-24 rounded-full bg-yellow-300/20 blur-2xl",
  cardOverlay3:
    "absolute -bottom-10 left-0 h-24 w-24 rounded-full bg-yellow-200/20 blur-2xl",

  cardContent: "relative flex h-full flex-col",

  imageWrapper: "overflow-hidden bg-yellow-50",
  productImage: "h-40 w-full object-contain transition-transform duration-500",

  productInfo: "flex flex-1 flex-col p-4",
  productName:
    "font-store-label line-clamp-2 text-base font-black leading-snug tracking-wide text-zinc-900",
  productCompany: "mt-1 text-sm font-bold text-zinc-500",
  sizeBadge:
    "font-store-label mt-2 inline-flex w-fit rounded-full bg-black px-3 py-1 text-xs font-bold text-white",

  priceContainer: "mt-4 rounded-2xl bg-zinc-50 px-4 py-3",
  priceRow: "mt-1 flex items-baseline gap-2",
  priceCurrent: "font-store-display text-2xl font-black text-zinc-900",
  priceOld: "font-store-label text-sm font-bold text-zinc-400 line-through",

  actionWrapper: "mt-4 flex justify-center",

  quantityControls:
    "font-store-label inline-flex h-11 w-40 items-center justify-between rounded-full border border-yellow-300 bg-black px-2 text-sm font-black text-yellow-300 shadow-md shadow-yellow-200",
  qtyButton:
    "inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow-300 text-black",

  addButton:
    "font-store-label inline-flex h-11 w-40 items-center justify-center gap-2 rounded-full border border-yellow-300 bg-yellow-400 px-3 text-sm font-bold text-black transition hover:bg-yellow-300",

  cardBottomBar: "h-1 w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full",
};


export const productsPageStyles = {
  section: "relative min-h-[80vh] scroll-mt-24 overflow-hidden bg-[#111111] px-4 py-4 pt-20 sm:px-6 lg:px-8",

  // Inline gradient background
  gradientBackground: {
    background: `
      radial-gradient(circle at top left, rgba(250,204,21,0.45), transparent 16%),
      radial-gradient(circle at top right, rgba(250,204,21,0.45), transparent 16%),
      radial-gradient(circle at bottom left, rgba(250,204,21,0.45), transparent 16%),
      radial-gradient(circle at bottom right, rgba(250,204,21,0.45), transparent 16%)
    `,
  },

  innerContainer: "relative mx-auto max-w-7xl",

  grid: "grid auto-rows-fr grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8",

  categoryLink:
    "flex h-full scroll-mt-28 cursor-pointer flex-col overflow-hidden p-1.5 transition-transform duration-300 hover:-translate-y-1 sm:p-2",

  categoryImage: "h-32 w-full rounded-2xl object-cover sm:h-36 md:h-32 xl:h-36",

  categoryName:
    "font-store-label mt-2 flex min-h-8 items-center justify-center px-1 text-center text-xs font-bold leading-tight tracking-wide text-[#fff8dc] sm:text-[13px] xl:text-sm",
};

export const searchResultsStyles = {
  section:
    "min-h-screen bg-linear-to-br from-yellow-50 via-white to-zinc-100 px-4 py-10 sm:px-6 lg:px-8",
  container: "mx-auto max-w-375",

  // Loading
  loadingContainer:
    "flex min-h-60 items-center justify-center rounded-3xl border border-yellow-200 bg-white shadow-sm",
  loaderIcon: "h-8 w-8 animate-spin text-yellow-500",

  // Empty state
  emptyContainer:
    "flex min-h-60 flex-col items-center justify-center rounded-3xl border border-yellow-200 bg-white px-6 text-center shadow-sm",
  emptyIcon: "h-12 w-12 text-yellow-500",
  emptyTitle: "font-store-label mt-4 text-xl font-black text-zinc-950",
  emptySubtext: "mt-2 max-w-md text-sm font-semibold text-zinc-500",

  // Results grid
  resultsGrid:
    "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",

  // Product card
  productCard:
    "group relative overflow-hidden rounded-3xl rounded-bl-[5rem] border border-yellow-200 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]",
  cardOverlay1:
    "absolute inset-0 bg-linear-to-br from-yellow-400/10 via-transparent to-yellow-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
  cardOverlay2:
    "absolute -right-10 top-0 h-24 w-24 rounded-full bg-yellow-300/20 blur-2xl",
  cardOverlay3:
    "absolute -bottom-10 left-0 h-24 w-24 rounded-full bg-yellow-200/20 blur-2xl",

  cardContent: "relative flex h-full flex-col",

  imageWrapper: "overflow-hidden bg-yellow-50",
  productImage:
    "h-40 w-full object-contain transition-transform duration-500 group-hover:scale-105",

  productInfo: "flex flex-1 flex-col p-4",
  productName:
    "font-store-label line-clamp-2 text-base font-black leading-snug tracking-wide text-zinc-900",
  productCompany: "mt-1 text-sm font-bold text-zinc-500",
  sizeBadge:
    "font-store-label mt-2 inline-flex w-fit rounded-full bg-black px-3 py-1 text-xs font-bold text-white",

  priceContainer: "mt-4 rounded-2xl bg-zinc-50 px-4 py-3",
  priceRow: "mt-1 flex items-baseline gap-2",
  priceCurrent: "font-store-display text-2xl font-black text-zinc-900",
  priceOld: "font-store-label text-sm font-bold text-zinc-400 line-through",

  actionWrapper: "mt-4 flex justify-center",

  quantityControls:
    "font-store-label inline-flex h-11 w-40 items-center justify-between rounded-full border border-yellow-300 bg-black px-2 text-sm font-black text-yellow-300 shadow-md shadow-yellow-200",
  qtyButton:
    "inline-flex cursor-pointer h-8 w-8 items-center justify-center rounded-full bg-yellow-300 text-black transition hover:bg-yellow-400",
  qtyValue: "min-w-10 text-center",

  addButton:
    "font-store-label inline-flex cursor-pointer h-11 w-40 items-center justify-center gap-2 rounded-full border border-yellow-300 bg-yellow-400 px-3 text-sm font-bold text-zinc-900 shadow-md shadow-yellow-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 active:scale-[0.98]",

  cardBottomBar: "h-1 w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full",
};

export const signupPageStyles = {
  mainContainer: "min-h-screen overflow-hidden bg-[#0b0a08] text-white",

  // Toast shared styles
  toastBase:
    "fixed right-4 top-4 z-50 flex items-center gap-3 rounded-2xl border px-4 py-3 shadow-2xl transition-all duration-500 sm:right-6",
  toastSuccess:
    "border-yellow-300/40 bg-black text-yellow-200 shadow-yellow-400/20",
  toastError:
    "border-red-400/50 bg-black text-red-200 shadow-red-500/20",
  toastVisible: "translate-y-0 opacity-100",
  toastHidden: "-translate-y-4 opacity-0",
  toastIconWrapperSuccess:
    "flex h-9 w-9 items-center justify-center rounded-full bg-yellow-300 text-black",
  toastIconWrapperError:
    "flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-white",
  toastTitle: "font-store-label block text-sm font-black",
  toastSubtext: "text-xs font-semibold text-white/65",

  // Icons
  iconSm: "h-4 w-4",
  iconMd: "h-5 w-5",

  // Decorative backgrounds (inline styles)
  decorBg: "absolute inset-0",
  decorGradients: {
    background:
      "radial-gradient(circle at top right, rgba(250,204,21,0.24), transparent 30%), radial-gradient(circle at bottom left, rgba(234,179,8,0.16), transparent 34%)",
  },
  decorLine:
    "absolute bottom-0 left-1/2 h-px w-4/5 -translate-x-1/2 bg-linear-to-r from-transparent via-yellow-300/70 to-transparent",

  // Section
  section:
    "relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8",

  // Form
  formWrapper:
    "mx-auto w-full max-w-md rounded-4xl border border-yellow-300/20 bg-white p-6 text-black shadow-2xl shadow-yellow-500/10 sm:p-8",
  formHeader: "mb-7",
  formLabel:
    "font-store-label text-sm font-black uppercase tracking-wide text-yellow-600",
  formTitle:
    "font-store-display mt-2 text-3xl font-black tracking-wide text-black",
  formSubtext: "mt-2 text-sm font-semibold leading-6 text-black/55",

  formFields: "space-y-4",

  inputLabel:
    "font-store-label mb-2 block text-sm font-bold text-black/75",
  inputWrapper:
    "flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3.5 transition focus-within:border-black/25",
  inputIcon: "h-5 w-5 text-yellow-600",
  inputField:
    "auth-field w-full bg-transparent text-sm font-semibold text-black outline-none placeholder:text-black/35",
  togglePasswordButton:
    "rounded-full p-1 text-black/55 transition hover:bg-yellow-200 hover:text-black",

  submitButton:
    "font-store-label mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-5 py-4 text-sm font-black uppercase tracking-wide text-yellow-300 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-yellow-300 hover:text-black disabled:cursor-wait disabled:opacity-80",

  signupPrompt: "mt-6 text-center text-sm font-semibold text-black/60",
  loginLink:
    "font-store-label font-black text-black underline decoration-yellow-400 decoration-2 underline-offset-4",

  // Right column (hidden on mobile)
  rightColumn: "space-y-8 hidden lg:block xl:block",

  // Logo
  logoLink: "inline-flex items-center gap-3",
  logoWrapper:
    "flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-1.5 shadow-xl shadow-yellow-400/15 ring-1 ring-yellow-200/40",
  logoImage: "h-full w-full object-contain",
  logoText:
    "font-serif block text-2xl font-black italic tracking-wide",
  logoSubtext:
    "font-store-label text-xs font-bold uppercase tracking-wide text-yellow-300",

  // Hero
  heroWrapper: "max-w-xl space-y-5",
  heroBadge:
    "font-store-label inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-2 text-sm font-bold text-yellow-200",
  heroHeading:
    "font-store-display text-4xl font-black leading-tight tracking-wide sm:text-5xl",
  heroHighlight: "block text-yellow-300",
  heroDescription:
    "max-w-lg text-base font-medium leading-7 text-white/70",

  // Feature cards
  featureGrid: "grid max-w-xl gap-3 sm:grid-cols-2",
  featureCard: "rounded-2xl border border-white/10 bg-white/5 p-5",
  featureIcon: "h-6 w-6 text-yellow-300",
  featureTitle: "font-store-label mt-4 text-base font-black text-white",
  featureText: "mt-2 text-sm font-medium leading-6 text-white/60",
};

export const forgotPasswordStyles = {
  main: "flex font-mono min-h-screen items-center justify-center bg-[#0b0a08] px-4",

  // Toast
  toastBase:
    "fixed right-5 top-5 z-50 rounded-xl px-5 py-3 text-sm font-semibold shadow-lg transition-all duration-300",
  toastVisible: "translate-y-0 opacity-100",
  toastHidden: "-translate-y-5 opacity-0",
  toastSuccess: "bg-yellow-400 text-black",
  toastError: "bg-black text-yellow-400 border border-yellow-400",

  // Card
  card: "w-full max-w-md rounded-3xl border border-yellow-400/30 bg-black/60 p-8 shadow-xl backdrop-blur-sm",

  heading: "text-center text-3xl font-bold text-yellow-400",
  subtext: "mt-2 text-center text-yellow-400/70",

  form: "mt-8 space-y-5",

  input:
    "w-full rounded-xl border border-yellow-400/30 bg-black/50 p-4 text-yellow-400 placeholder-yellow-400/50 outline-none focus:border-yellow-400",

  submitButton:
    "w-full rounded-full cursor-pointer bg-yellow-400 py-4 font-semibold text-black transition hover:bg-yellow-300 hover:text-black disabled:cursor-not-allowed disabled:opacity-70",

  backLinkWrapper: "mt-8 text-center",
  backLink: "font-semibold text-yellow-400 hover:text-yellow-300 hover:underline",
};

export const resetPasswordStyles = {
  main: "flex min-h-screen items-center justify-center bg-[#0b0a08] px-4 font-mono",

  // Toast
  toastBase:
    "fixed right-5 top-5 z-50 rounded-xl px-5 py-3 text-sm font-semibold shadow-lg transition-all duration-300",
  toastVisible: "translate-y-0 opacity-100",
  toastHidden: "-translate-y-5 opacity-0",
  toastSuccess: "bg-yellow-400 text-black",
  toastError: "border border-yellow-400 bg-black text-yellow-400",

  // Card
  card: "w-full max-w-md rounded-3xl border border-yellow-400/30 bg-black/60 p-8 shadow-xl backdrop-blur-sm",

  heading: "text-center text-3xl font-bold text-yellow-400",
  subtext: "mt-2 text-center text-yellow-400/70",

  form: "mt-8 space-y-5",

  input:
    "w-full rounded-xl border border-yellow-400/30 bg-black/50 p-4 text-yellow-400 placeholder-yellow-400/50 outline-none focus:border-yellow-400",

  inputWithIcon:
    "w-full rounded-xl border border-yellow-400/30 bg-black/50 p-4 pr-12 text-yellow-400 placeholder-yellow-400/50 outline-none focus:border-yellow-400",

  toggleButton:
    "absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-yellow-400 hover:text-yellow-300",

  submitButton:
    "w-full cursor-pointer rounded-full bg-yellow-400 py-4 font-semibold text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-70",

  backLinkWrapper: "mt-8 text-center",
  backLink: "font-semibold text-yellow-400 hover:text-yellow-300 hover:underline",
};

export const verifyEmailStyles = {
  main: "flex min-h-screen items-center justify-center bg-[#0b0a08] px-4",

  // Toast
  toastBase:
    "fixed right-5 top-5 z-50 rounded-xl px-5 py-3 text-sm font-semibold shadow-lg transition-all duration-300",
  toastVisible: "translate-y-0 opacity-100",
  toastHidden: "-translate-y-5 opacity-0",
  toastSuccess: "bg-yellow-400 text-black",
  toastError: "bg-black text-yellow-400 border border-yellow-400",

  // Card
  card: "w-full max-w-md rounded-3xl border border-yellow-400/30 bg-black/60 p-8 shadow-xl backdrop-blur-sm",

  heading: "text-center text-3xl font-bold text-yellow-400",
  subtext: "mt-2 text-center text-yellow-400/70",
  emailDisplay: "text-center font-semibold text-yellow-400",

  form: "mt-8 space-y-5",

  otpInput:
    "w-full rounded-xl border border-yellow-400/30 bg-black/50 p-4 text-center text-2xl tracking-[12px] text-yellow-400 placeholder-yellow-400/50 outline-none focus:border-yellow-400",

  submitButton:
    "w-full rounded-full cursor-pointer bg-yellow-400 py-4 font-semibold text-black transition hover:bg-yellow-300 hover:text-black disabled:cursor-not-allowed disabled:opacity-70",

  resendWrapper: "mt-6 text-center",
  resendButton:
    "font-semibold cursor-pointer text-yellow-400 hover:text-yellow-300 hover:underline",
};