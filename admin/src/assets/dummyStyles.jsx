export const addHookahPageStyles = {
  // Main container
  mainContainer:
    "min-h-screen w-full flex items-center justify-center bg-[#0a0a0a] p-4 sm:p-6 font-['Poppins',sans-serif]",

  // Toast
  toastBase:
    "fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl shadow-2xl border backdrop-blur-xl transition-all duration-300",
  toastSuccess: "bg-black/90 text-yellow-400 border-yellow-400/30",
  toastError: "bg-black/90 text-red-400 border-red-400/30",
  toastIconSuccess: "w-5 h-5 text-yellow-400",
  toastIconError: "w-5 h-5 text-red-400",
  toastMessage: "font-medium text-sm tracking-wide",

  // Card
  card: "w-full max-w-3xl bg-black rounded-3xl border border-gray-800 card-glow p-6 sm:p-8 md:p-10 relative overflow-hidden",

  // Decorative glows
  decoGlow1:
    "absolute -top-24 -right-24 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none",
  decoGlow2:
    "absolute -bottom-32 -left-32 w-80 h-80 bg-yellow-400/3 rounded-full blur-3xl pointer-events-none",

  // Header
  header: "mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
  heading: "text-2xl font-extrabold tracking-tight text-white sm:text-3xl",
  headingHighlight:
    "text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-amber-500",
  headerBadge:
    "flex w-fit items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2",
  headerBadgeIcon: "w-4 h-4 text-yellow-400",
  headerBadgeText: "text-xs font-semibold text-yellow-400 tracking-wider uppercase",

  // Form
  form: "space-y-6",

  // Image Upload
  uploadLabel: "block text-sm font-medium text-gray-300 mb-1.5 tracking-wide",

  uploadAreaBase:
    "relative flex flex-col items-center justify-center w-full h-48 rounded-2xl border-2 border-dashed transition-all duration-300 upload-area",
  uploadAreaWithPreview: "border-yellow-400/40 bg-black/50",
  uploadAreaEmpty: "border-gray-700 bg-black/50 hover:border-yellow-400/50",

  uploadPreviewContainer:
    "relative w-full h-full flex items-center justify-center group",
  uploadPreviewImage: "w-full h-full object-contain rounded-2xl p-2",

  removeImageButton:
    "absolute top-3 right-3 bg-black/70 backdrop-blur-sm p-1.5 rounded-full border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-200",

  uploadLabelInner:
    "flex flex-col items-center justify-center w-full h-full cursor-pointer p-4",

  uploadIconWrapper:
    "w-16 h-16 rounded-full bg-yellow-400/10 flex items-center justify-center mb-3 border border-yellow-400/20",
  uploadIcon: "w-8 h-8 text-yellow-400",

  uploadText: "text-sm text-gray-400 font-medium",
  uploadTextHighlight: "text-yellow-400 font-semibold",
  uploadSubtext: "text-xs text-gray-500 mt-1",

  hiddenInput: "hidden",

  // Fields grid
  fieldsGrid: "grid grid-cols-1 md:grid-cols-2 gap-5",

  // InputField styles (used by the helper)
  inputFieldWrapper: "col-span-1",
  inputFieldLabel:
    "block text-sm font-medium text-gray-300 mb-1.5 tracking-wide",
  inputFieldIcon: "inline w-4 h-4 mr-1.5 text-yellow-400",
  inputFieldInner: "relative",
  inputFieldPrefix:
    "absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400 font-semibold",
  inputFieldInput:
    "w-full bg-black border border-gray-700 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:border-yellow-400/70 focus:ring-2 focus:ring-yellow-400/20 focus:bg-black transition-all duration-300 outline-none",
  inputFieldInputWithPrefix: "pl-8",

  // Company field (similar but without icon wrapper)
  companyLabel:
    "block text-sm font-medium text-gray-300 mb-1.5 tracking-wide",
  companyIcon: "inline w-4 h-4 mr-1.5 text-yellow-400",
  companyInput:
    "w-full bg-black border border-gray-700 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:border-yellow-400/70 focus:ring-2 focus:ring-yellow-400/20 focus:bg-black transition-all duration-300 outline-none",

  // Submit
  submitWrapper: "pt-2 flex justify-center",
  submitButton:
    "cursor-pointer px-10 py-3 rounded-full text-black font-bold text-base transition-all duration-300 flex items-center gap-2 border border-yellow-400/30",
  submitIcon: "w-5 h-5 group-hover:translate-x-1 transition-transform",

  // Shared icon size
  iconSm: "w-4 h-4",
};


export const addItemsPageStyles = {
  // ---- Main container ----
  main: "dashboard-font min-h-screen bg-[#080808] px-4 py-6 text-white sm:px-6 lg:px-8 2xl:px-10",

  // ---- Toast ----
  toastBase:
    "fixed right-4 top-4 z-100 w-[320px] rounded-3xl border p-4 shadow-2xl",
  toastSuccess: "border-yellow-400/25 bg-[#171306] text-yellow-100",
  toastDanger: "border-rose-400/25 bg-rose-950 text-rose-100",
  toastIcon: "mt-0.5 h-5 w-5 text-yellow-300",
  toastMessage: "text-sm font-black",
  toastActions: "mt-3 flex gap-2",
  toastDeleteButton:
    "inline-flex items-center justify-center gap-1.5 rounded-xl bg-rose-500 px-3 py-1.5 text-xs font-black text-white hover:bg-rose-400 disabled:cursor-wait disabled:opacity-80",
  toastCancelButton:
    "rounded-xl border border-yellow-400/20 px-3 py-1.5 text-xs font-black text-yellow-200 hover:bg-yellow-400 hover:text-black",
  toastCloseButton: "text-white/50",
  toastSpinner: "h-3 w-3 animate-spin",
  iconSm: "h-4 w-4",

  // ---- Field ----
  fieldLabel:
    "text-xs font-black uppercase tracking-[0.16em] text-yellow-300/80",
  fieldWrapper: "relative mt-2",
  fieldIcon:
    "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-yellow-300",
  fieldInputBase:
    "h-12 w-full rounded-2xl border border-yellow-400/15 bg-black/35 px-4 text-sm font-semibold text-white outline-none placeholder:text-white/30 focus:border-yellow-300",
  fieldInputWithIcon: "pl-11",

  // ---- ImageUpload ----
  uploadLabel:
    "text-xs font-black uppercase tracking-[0.16em] text-yellow-300/80",
  uploadContainer:
    "mt-2 flex items-center gap-3 rounded-2xl border border-yellow-400/15 bg-black/35 p-3",
  uploadPreviewBox:
    "flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-yellow-400/15 bg-black/40",
  uploadPreviewImage: "h-full w-full object-cover",
  uploadPlaceholderIcon: "h-6 w-6 text-yellow-300",
  uploadTextPrimary: "text-sm font-bold text-white",
  uploadTextSecondary: "text-xs text-white/50",
  uploadBrowseButton:
    "cursor-pointer rounded-xl bg-yellow-400 px-3 py-2 text-xs font-black text-black",
  uploadHiddenInput: "hidden",

  // ---- ActionButton ----
  actionButtonBase:
    "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-black transition",
  actionButtonIcon: "h-4 w-4",
  actionButtonIconSpin: "animate-spin",

  // ---- Header ----
  headerSection:
    "rounded-4xl border border-yellow-400/15 bg-[#111111] p-5 shadow-2xl shadow-black/30",
  headerInner:
    "flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between",
  headerBadge:
    "text-xs font-black uppercase tracking-[0.35em] text-yellow-300/80",
  headerTitle: "mt-2 text-3xl font-black",
  headerDescription: "mt-2 max-w-2xl text-sm font-medium text-white/50",
  searchWrapper: "relative w-full xl:w-96",
  searchIcon:
    "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-yellow-300",
  searchInput:
    "h-12 w-full rounded-2xl border border-yellow-400/15 bg-black/35 pl-11 pr-4 text-sm font-semibold outline-none placeholder:text-white/30 focus:border-yellow-300",

  // ---- Two columns ----
  twoColumns:
    "mt-6 grid lg:grid-cols-2 md:grid-cols-2 gap-6 xl:grid-cols-[0.9fr_1.1fr]",

  // ---- Left column (categories) ----
  leftColumn:
    "rounded-4xl border border-yellow-400/15 bg-[#111111] p-5",
  columnTitle: "flex items-center gap-2 text-xl font-black",
  columnIcon: "h-5 w-5 text-yellow-300",
  categoryForm: "mt-5 grid gap-4",
  categoryActionButton: "bg-yellow-400 text-black hover:bg-yellow-300",
  categoryList: "mt-6 grid max-h-105 gap-3 overflow-y-auto pr-1",
  categoryItem:
    "flex items-center gap-3 rounded-2xl border border-yellow-400/10 bg-black/30 p-3",
  categoryItemImage: "h-14 w-14 rounded-xl object-cover",
  categoryItemInfo: "min-w-0 flex-1",
  categoryItemName: "truncate font-black",
  categoryItemSubtext: "text-xs font-semibold text-white/40",
  categoryEditButton:
    "rounded-xl p-2 text-yellow-300 hover:bg-yellow-400 hover:text-black",
  categoryDeleteButton:
    "rounded-xl p-2 text-rose-300 hover:bg-rose-500 hover:text-white",

  // ---- Right column (add item) ----
  rightColumn:
    "rounded-4xl border border-yellow-400/15 bg-[#111111] p-5",
  itemForm: "mt-5 grid gap-4 md:grid-cols-2",
  itemSelectLabel: "block md:col-span-2",
  itemSelect:
    "mt-2 h-12 w-full rounded-2xl border border-yellow-400/15 bg-black/35 px-4 text-sm font-semibold text-white outline-none focus:border-yellow-300",
  itemSelectOption: "bg-[#111111]",
  itemImageUploadWrapper: "md:col-span-2",
  itemActionButton: "bg-yellow-400 text-black hover:bg-yellow-300 md:col-span-2",
};

export const hookahListPageStyles = {
  // ---- Main container ----
  main: "min-h-screen bg-[#0a0a0a] p-4 sm:p-6 font-['Poppins',sans-serif]",

  // ---- Toast ----
  toastBase:
    "fixed top-25 right-4 z-50 flex items-center gap-2 px-4 py-2 rounded-xl shadow-2xl border backdrop-blur-xl",
  toastSuccess: "bg-black/90 text-yellow-400 border-yellow-400/30",
  toastError: "bg-black/90 text-red-400 border-red-400/30",
  toastIcon: "w-4 h-4",
  toastMessage: "text-sm font-medium tracking-wide",

  // ---- Confirm delete modal ----
  confirmModal:
    "fixed top-25 right-4 z-50 w-72 bg-black/95 border border-red-500/30 rounded-xl shadow-2xl backdrop-blur-xl p-4 toast-slide",
  confirmInner: "flex items-start gap-3",
  confirmIcon: "w-5 h-5 text-red-400 shrink-0 mt-0.5",
  confirmTitle: "text-white text-sm font-medium",
  confirmSubtext: "text-gray-400 text-xs mt-0.5",
  confirmActions: "flex gap-2 mt-3",
  confirmDeleteButton:
    "flex-1 bg-red-500 hover:bg-red-600 text-white text-xs font-bold rounded-lg py-1.5 transition inline-flex items-center justify-center gap-1.5 disabled:cursor-wait disabled:opacity-80",
  confirmSpinner: "h-3 w-3 animate-spin",
  confirmCancelButton:
    "flex-1 bg-gray-700 hover:bg-gray-600 text-gray-200 text-xs font-bold rounded-lg py-1.5 transition",

  // ---- Header ----
  headerWrapper:
    "max-w-[1600px] mx-auto mb-6 flex flex-wrap items-center justify-between gap-4",
  headerLeft: "flex min-w-0 flex-wrap items-center gap-3",
  headerIcon: "w-6 h-6 text-yellow-400",
  headerTitle:
    "text-xl font-extrabold tracking-tight text-white sm:text-2xl",
  headerHighlight:
    "text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-amber-500",
  headerBadge:
    "text-xs text-gray-500 bg-black/50 px-3 py-1 rounded-full border border-gray-800",

  // ---- Search ----
  searchWrapper: "relative w-full sm:w-72",
  searchIcon:
    "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500",
  searchInput:
    "w-full bg-black/90 border border-gray-700 rounded-xl pl-10 pr-4 py-2.5 text-white placeholder-gray-500 focus:border-yellow-400/70 focus:ring-2 focus:ring-yellow-400/20 transition-all outline-none text-sm",

  // ---- Grid ----
  grid: "max-w-[1600px] mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7",

  // ---- Card ----
  card: "bg-black/90 border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/5 flex flex-col",

  // ---- Image ----
  imageContainer:
    "relative h-32 bg-black/50 flex items-center justify-center overflow-hidden group",
  cardImage: "h-full w-full object-contain",
  imageOverlay:
    "absolute inset-0 bg-black/60 flex items-center justify-center cursor-pointer hover:bg-black/70 transition flex-col",
  imageOverlayIcon: "w-6 h-6 text-yellow-400",
  imageOverlayText:
    "absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-yellow-400 font-medium bg-black/80 px-3 py-1 rounded-full border border-yellow-400/30 whitespace-nowrap",
  hiddenInput: "hidden",

  // ---- Card content ----
  cardContent: "p-3 flex-1 flex flex-col gap-1.5",

  // ---- Edit mode inputs ----
  editInputName:
    "bg-black/80 border border-gray-700 rounded-lg px-2 py-1 text-white text-sm focus:border-yellow-400/50 outline-none",
  editInputCompany:
    "bg-black/80 border border-gray-700 rounded-lg px-2 py-1 text-gray-300 text-xs focus:border-yellow-400/50 outline-none",
  editPriceRow: "flex gap-2",
  editInputSelling:
    "bg-black/80 border border-gray-700 rounded-lg px-2 py-1 text-yellow-400 text-xs w-1/2 focus:border-yellow-400/50 outline-none",
  editInputOld:
    "bg-black/80 border border-gray-700 rounded-lg px-2 py-1 text-gray-400 text-xs w-1/2 line-through focus:border-yellow-400/50 outline-none",
  editInputSize:
    "bg-black/80 border border-gray-700 rounded-lg px-2 py-1 text-gray-300 text-xs focus:border-yellow-400/50 outline-none",
  editActions: "flex gap-2 mt-1",
  editSaveButton:
    "flex-1 bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-bold rounded-lg py-1.5 flex items-center justify-center gap-1 transition",
  editCancelButton:
    "flex-1 bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs font-bold rounded-lg py-1.5 flex items-center justify-center gap-1 transition",
  editButtonIcon: "w-3 h-3",

  // ---- View mode ----
  itemName: "text-white font-semibold text-sm truncate",
  itemCompany: "text-gray-400 text-xs truncate flex items-center gap-1",
  itemIcon: "w-3 h-3",
  itemPriceRow: "flex items-center gap-2 mt-0.5",
  itemSellingPrice: "text-yellow-400 font-bold text-sm",
  itemOldPrice: "text-gray-500 text-xs line-through",
  itemSize: "text-gray-500 text-xs flex items-center gap-1",
  itemActions: "flex gap-2 mt-1",
  itemEditButton:
    "flex-1 bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400 text-xs font-bold rounded-lg py-1.5 flex items-center justify-center gap-1 transition border border-yellow-400/20",
  itemDeleteButton:
    "flex-1 bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold rounded-lg py-1.5 flex items-center justify-center gap-1 transition border border-red-400/20",
  itemButtonIcon: "w-3 h-3",

  // ---- Empty state ----
  emptyState: "max-w-[1600px] mx-auto mt-16 text-center",
  emptyIcon: "w-16 h-16 text-gray-700 mx-auto mb-4",
  emptyTitle: "text-gray-400 font-medium",
  emptySubtext: "text-gray-600 text-sm",
};

export const itemListPageStyles = {
  // ---- Main ----
  main: "dashboard-font min-h-screen bg-[#080808] px-4 py-6 text-white sm:px-6 lg:px-8 2xl:px-10",

  // ---- Toast ----
  toastBase:
    "fixed right-4 top-4 z-100 w-[320px] rounded-3xl border p-4 shadow-2xl",
  toastSuccess: "border-yellow-400/25 bg-[#171306] text-yellow-100",
  toastDanger: "border-rose-400/25 bg-rose-950 text-rose-100",
  toastIconWrapper:
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-black",
  toastIcon: "h-5 w-5",
  toastMessage: "text-sm font-black",
  toastActions: "mt-3 flex gap-2",
  toastDeleteButton:
    "inline-flex items-center justify-center gap-1.5 rounded-xl bg-rose-500 px-3 py-1.5 text-xs font-black text-white transition hover:bg-rose-400 disabled:cursor-wait disabled:opacity-80",
  toastSpinner: "h-3 w-3 animate-spin",
  toastCancelButton:
    "rounded-xl border border-yellow-400/20 px-3 py-1.5 text-xs font-black text-yellow-200 transition hover:bg-yellow-400 hover:text-black",
  toastCloseButton:
    "text-white/50 transition hover:text-white",
  iconSm: "h-4 w-4",

  // ---- Field ----
  fieldLabel:
    "text-[11px] font-black uppercase tracking-[0.16em] text-yellow-300/80",
  fieldWrapper: "relative mt-2",
  fieldIcon:
    "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-yellow-300",
  fieldInputBase:
    "h-11 w-full rounded-2xl border border-yellow-400/15 bg-black/40 px-4 text-sm font-bold text-white outline-none transition placeholder:text-white/30 focus:border-yellow-300",
  fieldInputWithIcon: "pl-10",

  // ---- Header ----
  headerSection:
    "rounded-4xl border border-yellow-400/15 bg-[#111111] p-5 shadow-2xl shadow-black/30",
  headerInner:
    "flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between",
  headerBadge:
    "flex items-center gap-2 text-xs font-black uppercase tracking-[0.35em] text-yellow-300/80",
  headerBadgeIcon: "h-4 w-4",
  headerTitle: "mt-2 text-3xl font-black",
  searchWrapper: "relative w-full xl:w-96",
  searchIcon:
    "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-yellow-300",
  searchInput:
    "h-12 w-full rounded-2xl border border-yellow-400/15 bg-black/35 pl-11 pr-4 text-sm font-semibold outline-none transition placeholder:text-white/30 focus:border-yellow-300",

  // ---- Filter row ----
  filterRow: "mt-5 flex gap-2 overflow-x-auto pb-1",
  filterButtonBase:
    "inline-flex shrink-0 items-center cursor-pointer gap-2 rounded-2xl border px-4 py-2.5 text-sm font-black transition",
  filterButtonActive:
    "border-yellow-300 bg-yellow-400 text-black",
  filterButtonInactive:
    "border-yellow-400/15 bg-black/30 text-yellow-100 hover:border-yellow-300/60",
  filterIcon: "h-4 w-4",

  // ---- Grid ----
  gridSection: "mt-6",
  grid: "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6",

  // ---- Item Card ----
  itemCard:
    "group overflow-hidden rounded-3xl border border-yellow-400/15 bg-[#111111] shadow-2xl shadow-black/25 transition hover:-translate-y-1 hover:border-yellow-300/50",
  itemImageContainer: "relative h-32 bg-yellow-400",
  itemImage: "h-full w-full object-contain",
  itemCategoryBadge:
    "absolute left-2 top-2 rounded-xl bg-black/85 px-2.5 py-1 text-[10px] font-black text-yellow-200",
  itemContent: "p-3",

  // ---- View mode ----
  itemHeader: "flex items-start justify-between gap-2",
  itemHeaderLeft: "min-w-0",
  itemName: "truncate text-base font-black text-white",
  itemCompany:
    "mt-0.5 flex items-center gap-1 text-xs font-bold text-white/50",
  itemIcon: "h-3 w-3 text-yellow-300",
  itemWeightBadge:
    "rounded-xl border border-yellow-400/25 bg-yellow-400/10 px-2 py-0.5 text-[10px] font-black text-yellow-200",

  itemPriceGrid: "mt-3 grid grid-cols-2 gap-2",
  itemOriginalPrice:
    "rounded-xl border border-white/10 bg-black/30 p-2",
  itemSellingPrice:
    "rounded-xl border border-yellow-400/25 bg-yellow-400 p-2 text-black",
  priceLabel:
    "text-[9px] font-black uppercase tracking-[0.16em] text-white/35",
  priceOriginalValue:
    "mt-0.5 text-sm font-black text-white/55 line-through",
  priceSellingValue:
    "mt-0.5 text-sm font-black",

  // ---- Edit mode ----
  editForm: "grid gap-2",
  editLabel:
    "text-[10px] font-black uppercase tracking-[0.16em] text-yellow-300/80",
  editFileInput:
    "mt-1 w-full rounded-xl border border-yellow-400/15 bg-black/40 px-3 py-2 text-sm font-bold text-white file:mr-3 file:rounded-xl file:border-0 file:bg-yellow-400 file:px-3 file:py-1 file:text-xs file:font-black file:text-black hover:file:bg-yellow-300",
  editSelect:
    "mt-1 h-9 w-full rounded-xl border border-yellow-400/15 bg-black/40 px-3 text-sm font-bold text-white outline-none focus:border-yellow-300",
  editOption: "bg-[#111111]",
  editPriceRow: "grid grid-cols-1 gap-2 sm:grid-cols-2",

  // ---- Actions ----
  itemActions: "mt-3 flex gap-2",
  actionIconSmall: "h-3 w-3",

  saveButton:
    "inline-flex flex-1 items-center justify-center gap-1 rounded-xl bg-yellow-400 px-3 py-2 text-xs font-black text-black transition hover:bg-yellow-300",
  cancelButton:
    "inline-flex items-center justify-center rounded-xl border border-yellow-400/15 px-3 py-2 text-yellow-200 transition hover:bg-yellow-400 hover:text-black",

  editButtonBase:
    "inline-flex flex-1 items-center justify-center gap-1 rounded-xl border border-yellow-400/20 bg-black/30 px-3 py-2 text-xs font-black text-yellow-200 transition",
  editButtonEnabled: "hover:bg-yellow-400 hover:text-black",
  editButtonDisabled: "cursor-not-allowed opacity-50",

  deleteButton:
    "inline-flex items-center justify-center rounded-xl border border-rose-400/20 bg-rose-500/10 px-3 py-2 text-rose-200 transition hover:bg-rose-500 hover:text-white",

  // ---- Empty state ----
  emptyState:
    "mt-6 rounded-4xl border border-yellow-400/15 bg-[#111111] p-8 text-center",
  emptyIcon: "mx-auto h-10 w-10 text-yellow-300",
  emptyTitle: "mt-3 text-xl font-black",
};

export const adminLoginStyles = {
  // Main container
  mainContainer:
    "relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-12",

  // Glow effects
  glow1:
    "absolute -left-48 -top-48 h-96 w-96 animate-pulse rounded-full bg-yellow-400/10 blur-3xl",
  glow2:
    "absolute -bottom-48 -right-48 h-96 w-96 animate-pulse rounded-full bg-yellow-400/10 blur-3xl delay-1000",
  glow3:
    "animate-spin-slow absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/3 blur-3xl",

  // Content wrapper
  contentWrapper: "relative z-10 w-full max-w-md",

  // Brand header
  brandHeader: "mb-8 text-center",
  brandInner: "mb-4 flex items-center justify-center gap-3",
  logoWrapper:
    "flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 p-2 shadow-lg shadow-yellow-400/20 ring-1 ring-yellow-200/50",
  logoImage: "h-full w-full object-contain",
  adminLabel:
    "text-[10px] font-black uppercase tracking-[0.5em] text-yellow-300/60",
  brandTitle: "text-3xl font-black tracking-tight text-white",

  // Card
  card:
    "relative rounded-3xl border border-yellow-400/10 bg-white/3 p-8 shadow-2xl shadow-black/60 ring-1 ring-white/5 backdrop-blur-xl",
  cardTopLine:
    "absolute -top-px left-8 right-8 h-px bg-linear-to-r from-transparent via-yellow-400/40 to-transparent",

  // Form
  form: "space-y-5",

  // Error
  errorContainer:
    "flex items-center gap-2 rounded-2xl border border-red-500/40 bg-black/80 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-red-500/10",
  errorDot: "h-1.5 w-1.5 animate-pulse rounded-full bg-red-400",

  // Field group
  fieldGroup: "space-y-1.5",
  fieldLabel:
    "flex items-center justify-between text-xs font-bold uppercase tracking-wider text-yellow-300/60",
  fieldWrapper: "group relative",
  fieldGlow:
    "absolute inset-0 rounded-2xl bg-linear-to-r from-yellow-400/10 to-yellow-400/5 opacity-0 blur-sm transition group-focus-within:opacity-100",
  fieldInputContainer:
    "relative flex items-center rounded-2xl border border-white/10 bg-black/60 transition-all duration-300 group-hover:border-white/20 focus-within:border-yellow-400/60 focus-within:shadow-[0_0_30px_rgba(250,204,21,0.06)]",
  fieldIcon:
    "ml-4 h-5 w-5 text-yellow-400/40 transition group-focus-within:text-yellow-400",
  fieldInput:
    "w-full bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none",
  fieldInputPassword:
    "w-full bg-transparent px-4 py-3.5 pr-12 text-sm text-white placeholder:text-white/30 outline-none",

  // Toggle password
  toggleButton:
    "absolute right-4 cursor-pointer text-yellow-400/50 transition hover:text-yellow-400",
  toggleIcon: "h-5 w-5",

  // Submit button
  submitButton:
    "group relative w-full cursor-pointer overflow-hidden rounded-2xl bg-yellow-400 px-5 py-2 text-sm font-black text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(250,204,21,0.3)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0",
  submitInner: "relative z-10 flex items-center justify-center gap-2",
  spinner: "h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black",
  submitIcon: "h-4 w-4 transition group-hover:translate-x-0.5",
};

export const adminNavbarStyles = {
  // ---- Header ----
  headerBase:
    "sticky top-0 z-50 w-full border-b border-yellow-400/15 bg-[#080808]/95 backdrop-blur-xl transition-transform duration-300",
  headerVisible: "translate-y-0",
  headerHidden: "-translate-y-full",

  // ---- Inner wrapper ----
  innerWrapper:
    "flex w-full items-center justify-between px-4 py-3 sm:px-6 lg:px-0 xl:px-8 2xl:px-10",

  // ---- Logo ----
  logoWrapper: "flex items-center gap-3",
  logoImageWrapper:
    "flex h-10 w-10 items-center justify-center rounded-2xl bg-yellow-400 p-1.5 shadow-lg shadow-yellow-400/20 ring-1 ring-yellow-200/50 sm:h-12 sm:w-12",
  logoImage: "h-full w-full object-contain",
  logoTextWrapper: "leading-tight",
  logoLabel:
    "text-[10px] font-black uppercase tracking-[0.4em] text-yellow-300/80 sm:text-[11px]",
  logoTitle: "text-xl font-black tracking-tight text-white sm:text-2xl lg:text-lg",

  // ---- Nav links (desktop) ----
  navLinks: "hidden items-center gap-1 lg:flex xl:gap-2",
  navLinkBase:
    "group relative inline-flex items-center gap-1.5 rounded-2xl border px-3 xl:gap-2 py-2 text-xs font-black transition-all duration-300 lg:gap-0 lg:px-2.5 xl:px-3 xl:py-3 lg:py-2.5 lg:text-xs",
  navLinkActive:
    "border-yellow-400 bg-yellow-400 text-black shadow-[0_12px_26px_rgba(250,204,21,0.24)]",
  navLinkInactive:
    "border-yellow-400/10 bg-white/[0.04] text-white/80 hover:-translate-y-0.5 hover:border-yellow-400/60 hover:bg-yellow-400 hover:text-black hover:shadow-[0_10px_24px_rgba(250,204,21,0.18)]",

  navIconBase: "h-3.5 w-3.5 transition lg:h-4 lg:w-4",
  navIconActive: "text-black",
  navIconInactive: "text-yellow-300 group-hover:text-black",

  navChevronBase: "h-3.5 w-3.5 transition lg:h-4 lg:w-4",
  navChevronActive: "opacity-100 text-black",
  navChevronInactive: "opacity-0 group-hover:opacity-100",

  // ---- Auth buttons ----
  authButtons: "hidden items-center gap-2 sm:flex",

  logoutButton:
    "group cursor-pointer inline-flex items-center gap-1.5 rounded-2xl border border-red-400/40 bg-red-500 px-4 py-2 text-xs font-black text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 lg:gap-2 lg:px-5 lg:py-2.5 lg:text-sm",
  loginButton:
    "group cursor-pointer inline-flex items-center gap-1.5 rounded-2xl border border-yellow-400/40 bg-yellow-400 px-4 py-2 text-xs font-black text-black shadow-lg shadow-yellow-400/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 lg:gap-2 lg:px-5 lg:py-2.5 lg:text-sm",
  authIcon: "h-3.5 w-3.5 transition group-hover:translate-x-0.5 lg:h-4 lg:w-4",

  // ---- Mobile toggle ----
  mobileToggle:
    "inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-yellow-400/20 bg-white/5 text-yellow-300 transition hover:bg-yellow-400 hover:text-black lg:hidden",
  mobileIcon: "h-5 w-5",

  // ---- Mobile menu ----
  mobileMenuContainer:
    "border-t border-yellow-400/10 bg-[#0d0d0d] px-4 py-4 lg:hidden",
  mobileMenuGrid: "grid gap-2",

  mobileNavLinkBase:
    "flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-black transition",
  mobileNavLinkActive:
    "border-yellow-400 bg-yellow-400 text-black",
  mobileNavLinkInactive:
    "border-white/10 bg-white/5 text-white hover:border-yellow-400/50 hover:bg-yellow-400 hover:text-black",

  mobileNavLinkLeft: "flex items-center gap-3",
  mobileNavIcon: "h-4 w-4",
  mobileNavIconActive: "text-black",
  mobileNavIconInactive: "text-yellow-300",
  mobileNavChevron: "h-4 w-4 opacity-70",

  mobileLogoutButton:
    "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-red-500 px-4 py-3 text-sm font-black text-white shadow-lg shadow-red-500/20",
  mobileLoginButton:
    "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-4 py-3 text-sm font-black text-black shadow-lg shadow-yellow-400/20",
  mobileAuthIcon: "h-4 w-4",
};

export const adminOrdersViewStyles = {
  // ---- Loading state ----
  loadingState:
    "flex min-h-screen items-center justify-center bg-[#080808] text-white text-xl font-bold",

  // ---- Main layout ----
  main: "dashboard-font min-h-screen bg-[#080808] text-white",
  section: "w-full px-4 py-6 sm:px-6 lg:px-8 2xl:px-10",

  // ---- Summary card (visible when showSummary = true) ----
  summaryCard:
    "rounded-4xl border border-yellow-400/15 bg-[#111111] p-5 shadow-2xl shadow-black/30 sm:p-6",
  summaryHeader:
    "flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between",
  eyebrow:
    "text-xs font-extrabold uppercase tracking-[0.35em] text-yellow-300/80",
  title: "mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl",
  subtitle: "mt-2 max-w-2xl text-sm font-medium leading-6 text-white/55",
  statsWrapper: "mt-6",

  // ---- Orders card (table container) ----
  ordersCard:
    "rounded-4xl border border-yellow-400/15 bg-[#111111] p-4 shadow-2xl shadow-black/25 sm:p-5",
  ordersCardWithSummary: "mt-6", // conditional class

  // ---- Orders header ----
  ordersHeader:
    "flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between",
  ordersTitle: "text-xl font-black text-white",
  ordersSubtext: "mt-1 text-sm font-medium text-white/50",

  // ---- Filters (search + status dropdown) ----
  ordersFilters:
    "flex w-full flex-col gap-3 md:flex-row xl:w-auto",

  searchLabel: "relative w-full md:w-96",
  searchIcon:
    "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-yellow-300",
  searchInput:
    "h-12 w-full rounded-2xl border border-yellow-400/15 bg-black/45 pl-11 pr-4 text-sm font-semibold text-white outline-none placeholder:text-white/30 focus:border-yellow-300",

  filterLabel: "relative w-full md:w-56",
  filterIcon:
    "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-yellow-300",
  filterSelect:
    "h-12 w-full appearance-none rounded-2xl border border-yellow-400/15 bg-black/45 pl-11 pr-4 text-sm font-bold text-white outline-none focus:border-yellow-300",
  filterOption: "bg-[#101010]",

  // ---- "Show All Orders" button ----
  showAllWrapper: "mt-5 flex justify-center",
  showAllLink:
    "inline-flex items-center justify-center rounded-2xl border border-yellow-400/25 bg-yellow-400 px-6 py-3 text-sm font-black text-black shadow-lg shadow-yellow-400/20 transition hover:-translate-y-0.5 hover:bg-yellow-300",
};


export const cancelConfirmStyles = {
  container:
    "fixed right-4 top-4 z-100 w-[320px] rounded-3xl border border-rose-400/25 bg-[#111111] p-4 shadow-2xl shadow-black/60",
  inner: "flex gap-3",
  iconWrapper:
    "flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-200",
  icon: "h-5 w-5",
  content: "flex-1",
  header: "flex items-center justify-between gap-3",
  title: "font-black text-white",
  closeButton:
    "rounded-full p-1 text-white/50 hover:bg-white/10 hover:text-white",
  closeIcon: "h-4 w-4",
  description: "mt-1 text-sm font-medium text-white/55",
  actions: "mt-4 flex gap-2",
  confirmButton:
    "inline-flex items-center justify-center gap-2 rounded-xl bg-rose-500 px-4 py-2 text-sm font-black text-white hover:bg-rose-400 disabled:cursor-wait disabled:opacity-80",
  loader: "h-4 w-4 animate-spin",
  cancelButton:
    "rounded-xl border border-yellow-400/20 px-4 py-2 text-sm font-black text-yellow-200 hover:bg-yellow-400 hover:text-black",
};

export const infoRowStyles = {
  container:
    "rounded-2xl border border-yellow-400/10 bg-black/35 p-4",
  wide: "sm:col-span-2",
  header:
    "flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-yellow-300/75",
  icon: "h-3.5 w-3.5",
  value: "mt-2 wrap-break-word text-sm font-semibold text-white",
};

export const orderDetailsModalStyles = {
  // Overlay
  overlay:
    "fixed inset-0 z-95 flex items-center justify-center bg-black/75 px-3 py-5 backdrop-blur-sm",

  // Modal container
  modal:
    "max-h-[92vh] w-full max-w-7xl overflow-hidden rounded-4xl border border-yellow-400/15 bg-[#101010]",

  // Header
  header:
    "flex items-center justify-between border-b border-yellow-400/10 bg-black/25 px-5 py-4",
  headerTitle: "text-xl font-black text-white",
  headerSubtext: "text-sm text-white/50",
  closeButton: "",
  closeIcon: "h-5 w-5 cursor-pointer text-white",

  // Scrollable content
  content: "max-h-[calc(92vh-70px)] overflow-y-auto p-5",

  // Main grid (Order Info + Customer Info)
  mainGrid: "grid gap-5 xl:grid-cols-2",

  // Shared section styles
  section: "rounded-3xl border border-yellow-400/10 p-5",
  sectionTitle: "flex items-center gap-2 text-lg font-black",
  sectionIcon: "h-5 w-5 text-yellow-300",

  // Info grids
  infoGrid3: "mt-4 grid gap-3 md:grid-cols-3",
  infoGrid2: "mt-4 grid gap-3 sm:grid-cols-2",

  // OrderTotalPill – extracted
  totalPillContainer:
    "rounded-2xl border border-yellow-400/10 bg-black/35 p-4",
  totalPillHeader:
    "flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-yellow-300/75",
  totalPillIcon: "h-3.5 w-3.5",
  totalPillValueWrapper: "mt-3",
  totalPillValue:
    "inline-flex rounded-full border border-yellow-400/25 bg-yellow-400 px-3 py-1.5 text-sm font-black text-black",

  // Progress section
  progressSection: "mt-5 rounded-3xl border border-yellow-400/10 p-5",
  progressTitle: "text-lg font-black",
  progressContent: "mt-4",

  // Items section
  itemsSection: "mt-5 rounded-3xl border border-yellow-400/10 p-5",
  itemsGrid:
    "mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6",

  // Actions section
  actionsSection: "mt-5 rounded-3xl border border-yellow-400/10 p-5",
  actionsTitle: "text-lg font-black",
  actionsButtons: "mt-4 flex flex-wrap gap-2",

  // Action buttons
  actionButtonOnWay:
    "rounded-full bg-sky-500 px-4 py-2 text-sm font-bold",
  actionButtonDeliver:
    "rounded-full bg-green-500 px-4 py-2 text-sm font-bold",
  actionButtonCancel:
    "rounded-full bg-red-500 px-4 py-2 text-sm font-bold",
};

export const orderItemCardStyles = {
  card: "rounded-2xl border border-yellow-400/10 bg-black/30 p-3 transition hover:border-yellow-400/30 hover:bg-black/45",
  image: "h-20 w-full rounded-xl object-contain",
  content: "mt-3",
  name: "line-clamp-2 min-h-9 text-sm font-black leading-5 text-white",
  company: "mt-1 truncate text-xs font-bold text-yellow-300",
  metaGrid: "mt-3 grid grid-cols-2 gap-2 text-[11px] font-extrabold",
  sizeBadge: "rounded-xl bg-yellow-400/10 px-2 py-1 text-center text-yellow-200",
  qtyBadge: "rounded-xl bg-white/10 px-2 py-1 text-center text-white/70",
  eachRow: "mt-2 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-2 py-1.5",
  eachLabel: "text-[11px] font-bold text-white/50",
  eachValue: "text-xs font-black text-white",
  totalRow: "mt-2 flex items-center justify-between rounded-xl border border-yellow-400/15 bg-yellow-400/10 px-2 py-1.5",
  totalLabel: "flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-yellow-200",
  totalIcon: "h-3.5 w-3.5",
  totalValue: "text-xs font-black text-yellow-300",
};

export const ordersTableStyles = {
  // Container
  container:
    "mt-5 min-h-72 overflow-x-auto rounded-3xl border border-yellow-400/10 bg-black/25",

  // Table
  table: "w-full min-w-260",

  // Header
  headerRow: "border-b border-yellow-400/10",
  headerCell:
    "px-5 py-4 text-xs font-black uppercase tracking-[0.16em] text-yellow-300/80",

  // Body
  body: "divide-y divide-yellow-400/10",

  // Row
  row: "transition hover:bg-yellow-400/4",

  // Standard cell (used for customer, amount, payment)
  cell: "px-5 py-5",

  // Customer cell inner
  customerName: "font-extrabold text-white",
  customerPhone:
    "mt-1 flex items-center gap-1.5 text-xs font-semibold text-white/45",
  phoneIcon: "h-3.5 w-3.5 text-yellow-300",

  // Order ID cell
  cellOrderId: "px-5 py-5 font-black text-yellow-200",

  // Amount badge
  amountBadge:
    "inline-flex rounded-full border border-yellow-400/20 bg-yellow-400 px-3 py-1.5 text-xs font-black text-black",

  // Payment badge
  paymentBadge:
    "inline-flex rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1.5 text-xs font-extrabold text-orange-200",

  // Status cell
  cellStatus: "relative px-5 py-5",
  statusWrapper: "group relative inline-block",

  // Action cell
  cellAction: "px-5 py-5 text-right",

  // View button
  viewButton:
    "inline-flex cursor-pointer items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-xs font-black text-black transition hover:bg-yellow-300",
  viewIcon: "h-4 w-4",

  // Empty state
  emptyCell: "px-5 py-14 text-center",
  emptyIcon: "mx-auto h-7 w-7 text-yellow-300",
  emptyTitle: "mt-3 font-bold text-white",
  emptySubtext: "mt-1 text-sm text-white/45",
};

export const statsGridStyles = {
  grid: "grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",

  card: "rounded-3xl border border-yellow-400/10 bg-black/35 p-5 transition hover:-translate-y-1 hover:border-yellow-400/35 hover:bg-black/55",

  cardInner: "flex items-start justify-between gap-4",

  cardTitle: "text-sm font-bold text-white/55",

  cardValue: "mt-2 text-3xl font-black text-yellow-300",

  cardIconWrapper:
    "flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-black",

  cardIcon: "h-6 w-6",

  cardSubtext:
    "mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/35",
};

export const statusBadgeStyles = {
  badge:
    "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-extrabold",
  icon: "h-3.5 w-3.5",
  chevron: "h-3.5 w-3.5 opacity-70",
  badgeFallback: "border-white/10 bg-white/10 text-white",
};

export const statusDropdownStyles = {
  triggerWrapper: "inline-block",
  triggerButton: "cursor-pointer",

  dropdownMenu:
    "fixed z-9999 w-48 rounded-2xl border border-yellow-400/20 bg-[#111111] p-2 shadow-2xl shadow-black/60",

  optionButton:
    "flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-bold text-white/80 transition hover:bg-yellow-400 hover:text-black",

  optionIcon: "h-4 w-4",
};

export const statusTimelineStyles = {
  // Cancelled state
  cancelledContainer:
    "inline-flex items-center gap-3 rounded-2xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-rose-200",
  cancelledIcon: "h-5 w-5",
  cancelledText: "text-sm font-bold",

  // Timeline container
  timeline: "flex flex-wrap items-center gap-2",

  // Step wrapper (each step + optional line)
  stepWrapper: "flex items-center gap-2",

  // Inner step (dot + label)
  stepInner: "flex items-center gap-2",

  // Dot
  stepDot: "h-4 w-4 rounded-full border-2",
  stepDotActive: "border-yellow-300 bg-yellow-300",
  stepDotInactive: "border-white/20",

  // Label
  stepLabel: "text-xs font-extrabold uppercase tracking-[0.14em]",
  stepLabelActive: "text-yellow-200",
  stepLabelInactive: "text-white/35",

  // Connecting line
  stepLine: "h-px w-8",
  stepLineActive: "bg-yellow-300",
  stepLineInactive: "bg-white/10",
};

export const toastStyles = {
  toast: "soft-enter fixed right-4 top-4 z-100 max-w-sm rounded-2xl border px-4 py-3 text-sm font-bold shadow-2xl",
  toastSuccess: "border-yellow-400/30 bg-[#141006] text-yellow-100",
  toastWarning: "border-rose-400/30 bg-rose-950 text-rose-100",
};