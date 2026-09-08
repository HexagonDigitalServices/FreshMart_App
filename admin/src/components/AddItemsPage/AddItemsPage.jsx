import { useEffect, useMemo, useState } from "react";
import {
  BadgeIndianRupee,
  CheckCircle2,
  Edit3,
  Image,
  Loader2,
  PackagePlus,
  Plus,
  Save,
  Search,
  Trash2,
  X,
} from "lucide-react";
import "../DashboardPage/dashboard.css";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} from "../../api/adminApi";
import { addItemsPageStyles as s } from "../../assets/dummyStyles";

// --------------------- Toast Component ---------------------
const Toast = ({ toast, onClose, deleteLoading = false }) => {
  if (!toast) return null;

  return (
    <div
      className={`${s.toastBase} ${
        toast.type === "danger" ? s.toastDanger : s.toastSuccess
      }`}
    >
      <div className="flex items-start gap-3">
        <CheckCircle2 className={s.toastIcon} />
        <div className="flex-1">
          <p className={s.toastMessage}>{toast.message}</p>
          {toast.action && (
            <div className={s.toastActions}>
              <button
                type="button"
                onClick={toast.action.onConfirm}
                disabled={deleteLoading}
                className={s.toastDeleteButton}
              >
                {deleteLoading ? <Loader2 className={s.toastSpinner} /> : null}
                {deleteLoading ? "Deleting..." : "Delete"}
              </button>
              <button
                type="button"
                onClick={onClose}
                className={s.toastCancelButton}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
        <button type="button" onClick={onClose} className={s.toastCloseButton}>
          <X className={s.iconSm} />
        </button>
      </div>
    </div>
  );
};

// --------------------- Field Component ---------------------
const Field = ({ label, icon: Icon, ...props }) => (
  <label className="block">
    <span className={s.fieldLabel}>{label}</span>
    <div className={s.fieldWrapper}>
      {Icon && <Icon className={s.fieldIcon} />}
      <input
        {...props}
        className={`${s.fieldInputBase} ${Icon ? s.fieldInputWithIcon : ""}`}
      />
    </div>
  </label>
);

// --------------------- ImageUpload Component ---------------------
const ImageUpload = ({ label, value, onChange }) => (
  <label className="block">
    <span className={s.uploadLabel}>{label}</span>

    <div className={s.uploadContainer}>
      <div className={s.uploadPreviewBox}>
        {value ? (
          <img
            src={typeof value === "string" ? value : URL.createObjectURL(value)}
            alt="preview"
            className={s.uploadPreviewImage}
          />
        ) : (
          <Image className={s.uploadPlaceholderIcon} />
        )}
      </div>

      <div className="flex-1">
        <p className={s.uploadTextPrimary}>
          {value ? "Image selected" : "Upload image"}
        </p>
        <p className={s.uploadTextSecondary}>
          Choose an image from your computer.
        </p>
      </div>

      <label className={s.uploadBrowseButton}>
        Browse
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) onChange(file);
          }}
        />
      </label>
    </div>
  </label>
);

// --------------------- ActionButton ---------------------
const ActionButton = ({ children, icon: Icon, className = "", ...props }) => (
  <button
    type="button"
    {...props}
    className={`${s.actionButtonBase} ${className}`}
  >
    {Icon && (
      <Icon
        className={`${s.actionButtonIcon} ${
          Icon === Loader2 ? s.actionButtonIconSpin : ""
        }`}
      />
    )}
    {children}
  </button>
);

// --------------------- Main Component ---------------------
const AddItemsPage = () => {
  // ---------- State ----------
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [productForm, setProductForm] = useState({ name: "", image: "" });
  const [itemForm, setItemForm] = useState({
    image: "",
    name: "",
    company: "",
    originalPrice: "",
    sellingPrice: "",
    size: "",
    productId: "",
  });
  const [editingProductId, setEditingProductId] = useState(null);
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState(null);
  const [savingProduct, setSavingProduct] = useState(false);
  const [savingItem, setSavingItem] = useState(false);
  const [deletingCategoryId, setDeletingCategoryId] = useState(null);

  const [productFile, setProductFile] = useState(null);
  const [itemFile, setItemFile] = useState(null);

  // ---------- Toast helpers ----------
  const showToast = (message, type = "success", action) => {
    setToast({ message, type, action });
    if (!action) setTimeout(() => setToast(null), 2200);
  };

  // ---------- Data fetching ----------
  const fetchCategories = async () => {
    try {
      const { data } = await getCategories();
      setCategories(data.categories);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const { data } = await getProducts();
      setItems(data.products);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  // ---------- Filter categories ----------
  const filteredCategories = useMemo(() => {
    const query = search.toLowerCase().trim();
    return categories.filter((cat) =>
      cat.categoryName.toLowerCase().includes(query),
    );
  }, [categories, search]);

  // ---------- Save / Update Category ----------
  const saveProduct = async () => {
    if (savingProduct) return;

    if (!productForm.name.trim()) {
      return showToast("Product name is required", "danger");
    }

    try {
      setSavingProduct(true);
      if (!productFile && !editingProductId) {
        return showToast("Please select an image", "danger");
      }

      let image = null;

      if (productFile) {
        const uploaded = await uploadImage(productFile);
        image = uploaded.image;
      }

      if (editingProductId) {
        const payload = {
          categoryName: productForm.name.trim(),
        };

        if (image) {
          payload.image = image;
        }

        await updateCategory(editingProductId, payload);

        showToast("Category Updated Successfully");
      } else {
        await createCategory({
          categoryName: productForm.name.trim(),
          image,
        });

        showToast("Category Added Successfully");
      }

      await fetchCategories();

      setProductForm({
        name: "",
        image: "",
      });

      setProductFile(null);
      setEditingProductId(null);
    } catch (error) {
      console.log(error.response?.data);
      console.log(error);

      showToast(error.response?.data?.message || "Upload Failed", "danger");
    } finally {
      setSavingProduct(false);
    }
  };

  // ---------- Delete Category ----------
  const askDelete = (label, onConfirm) => {
    showToast(`Delete ${label}?`, "danger", {
      onConfirm: async () => {
        await onConfirm();
      },
    });
  };

  const handleDeleteCategory = async (categoryId) => {
    try {
      setDeletingCategoryId(categoryId);
      await deleteCategory(categoryId);
      await fetchCategories();
      setToast(null);
      setTimeout(() => showToast("Category deleted successfully"), 50);
    } catch (error) {
      console.error("Error deleting category:", error);
      showToast("Failed to delete category", "danger");
    } finally {
      setDeletingCategoryId(null);
    }
  };

  // ---------- Edit Category ----------
  const editProduct = (category) => {
    setProductForm({
      name: category.categoryName,
      image: category.image?.url,
    });
    setEditingProductId(category._id);
    setProductFile(null);
  };

  // ---------- Save Item ----------
  const saveItem = async () => {
    if (savingItem) return;

    if (!itemForm.productId || !itemForm.name || !itemForm.sellingPrice) {
      return showToast(
        "Select product, item name, and selling price",
        "danger",
      );
    }

    try {
      setSavingItem(true);
      if (!itemFile) {
        return showToast("Please select an item image", "danger");
      }

      let image = itemForm.image;

      if (itemFile) {
        const uploaded = await uploadImage(itemFile);
        image = uploaded.image;
        setItemFile(null);
      }

      await createProduct({
        image,
        name: itemForm.name.trim(),
        company: itemForm.company.trim(),
        sellingPrice: Number(itemForm.sellingPrice),
        oldPrice: Number(itemForm.originalPrice) || 0,
        size: itemForm.size.trim(),
        category: itemForm.productId,
      });

      showToast("Item added successfully");
      await fetchProducts();

      setItemForm({
        image: "",
        name: "",
        company: "",
        originalPrice: "",
        sellingPrice: "",
        size: "",
        productId: "",
      });
      setItemFile(null);
    } catch (error) {
      console.error("Error adding item:", error);
      showToast("Failed to add item", "danger");
    } finally {
      setSavingItem(false);
    }
  };

  // ---------- Image handlers ----------
  const handleProductImageChange = (file) => {
    console.log("Selected file:", file);
    setProductFile(file);
    setProductForm((prev) => ({
      ...prev,
      image: URL.createObjectURL(file),
    }));
  };

  const handleItemImageChange = (file) => {
    setItemFile(file);
    setItemForm((prev) => ({
      ...prev,
      image: URL.createObjectURL(file),
    }));
  };

  // ---------- Render ----------
  return (
    <main className={s.main}>
      <Toast
        toast={toast}
        onClose={() => setToast(null)}
        deleteLoading={Boolean(deletingCategoryId)}
      />

      {/* Header */}
      <section className={s.headerSection}>
        <div className={s.headerInner}>
          <div>
            <p className={s.headerBadge}>Inventory Studio</p>
            <h1 className={s.headerTitle}>Add Categories & Items</h1>
            <p className={s.headerDescription}>
              Create product groups first, then add sellable items under the
              selected product.
            </p>
          </div>
          <label className={s.searchWrapper}>
            <Search className={s.searchIcon} />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products"
              className={s.searchInput}
            />
          </label>
        </div>
      </section>

      {/* Two columns */}
      <section className={s.twoColumns}>
        {/* LEFT: Categories */}
        <div className={s.leftColumn}>
          <h2 className={s.columnTitle}>
            <PackagePlus className={s.columnIcon} />
            Add Categories
          </h2>
          <div className={s.categoryForm}>
            <Field
              label="Category Name"
              icon={PackagePlus}
              value={productForm.name}
              onChange={(event) =>
                setProductForm((prev) => ({
                  ...prev,
                  name: event.target.value,
                }))
              }
              placeholder="Example: Dairy, Bread & Eggs"
            />
            <ImageUpload
              label="Category Image"
              value={productForm.image}
              onChange={handleProductImageChange}
            />
            <ActionButton
              icon={savingProduct ? Loader2 : editingProductId ? Save : Plus}
              onClick={saveProduct}
              disabled={savingProduct}
              className={s.categoryActionButton}
            >
              {savingProduct
                ? editingProductId
                  ? "Saving..."
                  : "Adding..."
                : editingProductId
                  ? "Save Product"
                  : "Add Product"}
            </ActionButton>
          </div>

          {/* List of categories */}
          <div className={s.categoryList}>
            {filteredCategories.map((category) => (
              <article key={category._id} className={s.categoryItem}>
                <img
                  src={category.image?.url}
                  alt={category.categoryName}
                  className={s.categoryItemImage}
                />
                <div className={s.categoryItemInfo}>
                  <h3 className={s.categoryItemName}>
                    {category.categoryName}
                  </h3>
                  <p className={s.categoryItemSubtext}>Product group</p>
                </div>
                <button
                  type="button"
                  onClick={() => editProduct(category)}
                  className={s.categoryEditButton}
                >
                  <Edit3 className={s.iconSm} />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    askDelete(category.categoryName, () =>
                      handleDeleteCategory(category._id),
                    )
                  }
                  className={s.categoryDeleteButton}
                >
                  <Trash2 className={s.iconSm} />
                </button>
              </article>
            ))}
          </div>
        </div>

        {/* RIGHT: Add Item */}
        <div className={s.rightColumn}>
          <h2 className={s.columnTitle}>
            <Plus className={s.columnIcon} />
            Add Item
          </h2>
          <div className={s.itemForm}>
            <label className={s.itemSelectLabel}>
              <span className={s.fieldLabel}>Select Product</span>
              <select
                value={itemForm.productId}
                onChange={(event) =>
                  setItemForm((prev) => ({
                    ...prev,
                    productId: event.target.value,
                  }))
                }
                className={s.itemSelect}
              >
                <option value="" className={s.itemSelectOption}>
                  Choose product
                </option>
                {categories.map((category) => (
                  <option
                    key={category._id}
                    value={category.categoryName}
                    className={s.itemSelectOption}
                  >
                    {category.categoryName}
                  </option>
                ))}
              </select>
            </label>

            <div className={s.itemImageUploadWrapper}>
              <ImageUpload
                label="Item Image"
                value={itemForm.image}
                onChange={handleItemImageChange}
              />
            </div>

            <Field
              label="Item Name"
              value={itemForm.name}
              onChange={(event) =>
                setItemForm((prev) => ({ ...prev, name: event.target.value }))
              }
              placeholder="Amul Butter"
            />
            <Field
              label="Company Name"
              value={itemForm.company}
              onChange={(event) =>
                setItemForm((prev) => ({
                  ...prev,
                  company: event.target.value,
                }))
              }
              placeholder="Amul"
            />
            <Field
              label="Size / Weight / Packet"
              value={itemForm.size}
              onChange={(event) =>
                setItemForm((prev) => ({ ...prev, size: event.target.value }))
              }
              placeholder="500 g / 1 L / 6 pcs"
            />
            <Field
              label="Original Price"
              icon={BadgeIndianRupee}
              value={itemForm.originalPrice}
              onChange={(event) =>
                setItemForm((prev) => ({
                  ...prev,
                  originalPrice: event.target.value,
                }))
              }
              placeholder="120"
              type="number"
            />
            <Field
              label="Selling Price"
              icon={BadgeIndianRupee}
              value={itemForm.sellingPrice}
              onChange={(event) =>
                setItemForm((prev) => ({
                  ...prev,
                  sellingPrice: event.target.value,
                }))
              }
              placeholder="99"
              type="number"
            />
            <ActionButton
              icon={savingItem ? Loader2 : Plus}
              onClick={saveItem}
              disabled={savingItem}
              className={s.itemActionButton}
            >
              {savingItem ? "Adding..." : "Add Item"}
            </ActionButton>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AddItemsPage;
