import { useEffect, useMemo, useState } from "react";
import {
  BadgeIndianRupee,
  CheckCircle2,
  Edit3,
  Filter,
  Loader2,
  Package,
  Ruler,
  Save,
  Search,
  Sparkles,
  Store,
  Trash2,
  X,
} from "lucide-react";
import "../DashboardPage/dashboard.css";
import {
  deleteProduct,
  getCategories,
  getProducts,
  updateProduct,
  uploadImage,
} from "../../api/adminApi";
import { itemListPageStyles as s } from "../../assets/dummyStyles";

// Toast component
const Toast = ({ toast, onClose, deleteLoading = false }) => {
  if (!toast) return null;

  return (
    <div
      className={`${s.toastBase} ${
        toast.type === "danger" ? s.toastDanger : s.toastSuccess
      }`}
    >
      <div className="flex items-start gap-3">
        <span className={s.toastIconWrapper}>
          <CheckCircle2 className={s.toastIcon} />
        </span>
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
                {deleteLoading ? (
                  <Loader2 className={s.toastSpinner} />
                ) : null}
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
        <button
          type="button"
          onClick={onClose}
          className={s.toastCloseButton}
        >
          <X className={s.iconSm} />
        </button>
      </div>
    </div>
  );
};

// Field component
const Field = ({ label, icon: Icon, ...props }) => (
  <label className="block">
    <span className={s.fieldLabel}>{label}</span>
    <div className={s.fieldWrapper}>
      {Icon && (
        <Icon className={s.fieldIcon} />
      )}
      <input
        {...props}
        className={`${s.fieldInputBase} ${Icon ? s.fieldInputWithIcon : ""}`}
      />
    </div>
  </label>
);

// Main component
const ItemListPage = () => {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([{ id: "all", name: "All Items" }]);
  const [activeProduct, setActiveProduct] = useState("all");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState(null);
  const [toast, setToast] = useState(null);
  const [savingEditId, setSavingEditId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const showToast = (message, type = "success", action) => {
    setToast({ message, type, action });
    if (!action) setTimeout(() => setToast(null), 2200);
  };

  const fetchListData = async () => {
    try {
      const [categoryResponse, productResponse] = await Promise.all([
        getCategories(),
        getProducts(),
      ]);

      setProducts([
        { id: "all", name: "All Items" },
        ...(categoryResponse.data.categories || []).map((category) => ({
          id: category.categoryName,
          name: category.categoryName,
        })),
      ]);
      setItems(productResponse.data.products || []);
    } catch (error) {
      console.error("Failed to fetch item list:", error);
      showToast("Failed to load items", "danger");
    }
  };

  useEffect(() => {
    fetchListData();
  }, []);

  const visibleItems = useMemo(() => {
    const query = search.toLowerCase().trim();
    return items.filter((item) => {
      const matchesProduct =
        activeProduct === "all" || item.category === activeProduct;
      const matchesSearch = [item.name, item.company, item.category, item.size]
        .join(" ")
        .toLowerCase()
        .includes(query);

      return matchesProduct && matchesSearch;
    });
  }, [activeProduct, items, search]);

  const startEdit = (item) => {
    setEditingId(item._id);
    setEditForm({
      id: item._id,
      image: item.image,
      imagePreview: item.image?.url || "",
      imageFile: null,
      productId: item.category,
      productName: item.category,
      name: item.name,
      company: item.company,
      weight: item.size,
      originalPrice: item.oldPrice,
      sellingPrice: item.sellingPrice,
    });
  };

  const updateEdit = (field, value) => {
    setEditForm((prev) => ({ ...prev, [field]: value }));
  };

  const saveEdit = async () => {
    if (savingEditId) return;

    try {
      setSavingEditId(editingId);
      const selectedProduct = products.find(
        (product) => product.id === editForm.productId,
      );
      let image = editForm.image;

      if (editForm.imageFile) {
        const uploaded = await uploadImage(editForm.imageFile);
        image = uploaded.image;
      }

      await updateProduct(editingId, {
        image,
        name: editForm.name.trim(),
        company: editForm.company.trim(),
        size: editForm.weight.trim(),
        oldPrice: Number(editForm.originalPrice),
        sellingPrice: Number(editForm.sellingPrice),
        category: selectedProduct?.name || editForm.productId,
      });

      await fetchListData();
      setEditingId(null);
      setEditForm(null);
      showToast("Item saved successfully");
    } catch (error) {
      console.error("Failed to save item:", error);
      showToast(
        error.response?.data?.message || "Failed to save item",
        "danger",
      );
    } finally {
      setSavingEditId(null);
    }
  };

  const askDelete = (item) => {
    showToast(`Delete ${item.name}?`, "danger", {
      onConfirm: async () => {
        try {
          setDeletingId(item._id);
          await deleteProduct(item._id);
          await fetchListData();
          setToast(null);
          setTimeout(() => showToast(`${item.name} deleted successfully`), 50);
        } catch (error) {
          console.error("Failed to delete item:", error);
          showToast("Failed to delete item", "danger");
        } finally {
          setDeletingId(null);
        }
      },
    });
  };

  return (
    <main className={s.main}>
      <Toast
        toast={toast}
        onClose={() => setToast(null)}
        deleteLoading={Boolean(deletingId)}
      />

      <section className={s.headerSection}>
        <div className={s.headerInner}>
          <div>
            <p className={s.headerBadge}>
              <Sparkles className={s.headerBadgeIcon} />
              Inventory
            </p>
            <h1 className={s.headerTitle}>Item List</h1>
          </div>
          <label className={s.searchWrapper}>
            <Search className={s.searchIcon} />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search item"
              className={s.searchInput}
            />
          </label>
        </div>

        <div className={s.filterRow}>
          {products.map((product) => (
            <button
              key={product.id}
              type="button"
              onClick={() => setActiveProduct(product.id)}
              className={`${s.filterButtonBase} ${
                activeProduct === product.id
                  ? s.filterButtonActive
                  : s.filterButtonInactive
              }`}
            >
              <Filter className={s.filterIcon} />
              {product.name}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className={s.gridSection}>
        <div className={s.grid}>
          {visibleItems.map((item) => {
            const isEditing = editingId === item._id;
            const data = isEditing
              ? editForm
              : {
                  id: item._id,
                  imagePreview: item.image?.url || "",
                  productId: item.category,
                  productName: item.category,
                  name: item.name,
                  company: item.company,
                  weight: item.size,
                  originalPrice: item.oldPrice,
                  sellingPrice: item.sellingPrice,
                };

            return (
              <article key={item._id} className={s.itemCard}>
                <div className={s.itemImageContainer}>
                  <img
                    src={data.imagePreview}
                    alt={data.name}
                    className={s.itemImage}
                  />
                  <span className={s.itemCategoryBadge}>
                    {data.productName}
                  </span>
                </div>

                <div className={s.itemContent}>
                  {isEditing ? (
                    <div className={s.editForm}>
                      {/* Image upload */}
                      <label className="block">
                        <span className={s.editLabel}>Image</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onload = (event) => {
                                setEditForm((prev) => ({
                                  ...prev,
                                  imageFile: file,
                                  imagePreview: event.target.result,
                                }));
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                          className={s.editFileInput}
                        />
                      </label>

                      <label className="block">
                        <span className={s.editLabel}>Product</span>
                        <select
                          value={data.productId}
                          onChange={(event) =>
                            updateEdit("productId", event.target.value)
                          }
                          className={s.editSelect}
                        >
                          {products
                            .filter((product) => product.id !== "all")
                            .map((product) => (
                              <option
                                key={product.id}
                                value={product.id}
                                className={s.editOption}
                              >
                                {product.name}
                              </option>
                            ))}
                        </select>
                      </label>

                      <Field
                        label="Item Name"
                        icon={Package}
                        value={data.name}
                        onChange={(event) =>
                          updateEdit("name", event.target.value)
                        }
                      />
                      <Field
                        label="Company"
                        icon={Store}
                        value={data.company}
                        onChange={(event) =>
                          updateEdit("company", event.target.value)
                        }
                      />
                      <Field
                        label="Weight"
                        icon={Ruler}
                        value={data.weight}
                        onChange={(event) =>
                          updateEdit("weight", event.target.value)
                        }
                      />
                      <div className={s.editPriceRow}>
                        <Field
                          label="Original"
                          icon={BadgeIndianRupee}
                          type="number"
                          value={data.originalPrice}
                          onChange={(event) =>
                            updateEdit("originalPrice", event.target.value)
                          }
                        />
                        <Field
                          label="Selling"
                          icon={BadgeIndianRupee}
                          type="number"
                          value={data.sellingPrice}
                          onChange={(event) =>
                            updateEdit("sellingPrice", event.target.value)
                          }
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className={s.itemHeader}>
                        <div className={s.itemHeaderLeft}>
                          <h2 className={s.itemName}>{data.name}</h2>
                          <p className={s.itemCompany}>
                            <Store className={s.itemIcon} />
                            {data.company}
                          </p>
                        </div>
                        <span className={s.itemWeightBadge}>{data.weight}</span>
                      </div>

                      <div className={s.itemPriceGrid}>
                        <div className={s.itemOriginalPrice}>
                          <p className={s.priceLabel}>Original</p>
                          <p className={s.priceOriginalValue}>
                            ₹{data.originalPrice}
                          </p>
                        </div>
                        <div className={s.itemSellingPrice}>
                          <p className={s.priceLabel}>Selling</p>
                          <p className={s.priceSellingValue}>
                            ₹{data.sellingPrice}
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  <div className={s.itemActions}>
                    {isEditing ? (
                      <>
                        <button
                          type="button"
                          onClick={saveEdit}
                          disabled={savingEditId === item._id}
                          className={s.saveButton}
                        >
                          {savingEditId === item._id ? (
                            <Loader2 className={s.actionIconSmall} />
                          ) : (
                            <Save className={s.actionIconSmall} />
                          )}
                          {savingEditId === item._id ? "Saving..." : "Save"}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setEditingId(null);
                            setEditForm(null);
                          }}
                          className={s.cancelButton}
                        >
                          <X className={s.actionIconSmall} />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => startEdit(item)}
                          disabled={editingId !== null && editingId !== item.id}
                          className={`${s.editButtonBase} ${
                            editingId !== null && editingId !== item.id
                              ? s.editButtonDisabled
                              : s.editButtonEnabled
                          }`}
                        >
                          <Edit3 className={s.actionIconSmall} />
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => askDelete(item)}
                          className={s.deleteButton}
                        >
                          <Trash2 className={s.actionIconSmall} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {!visibleItems.length && (
        <section className={s.emptyState}>
          <Package className={s.emptyIcon} />
          <h2 className={s.emptyTitle}>No items found</h2>
        </section>
      )}
    </main>
  );
};

export default ItemListPage;