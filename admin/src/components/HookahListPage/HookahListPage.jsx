
useEffect(() => {
    const load = async () => {
      try {
        const { data } = await getHookahs();
        setHookahs(
          data.hookahs.map((item) => ({
            ...item,
            image: {
              ...item.image,
              url: `${item.image.url}?t=${Date.now()}`,
            },
          })),
        );
      } catch (err) {
        console.error(err);
      }
    };

    load();

    return () => {
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
        objectUrlRef.current = null;
      }
    };
  }, []);

  const fetchHookahs = async () => {
    try {
      const { data } = await getHookahs();
      setHookahs(data.hookahs);
    } catch (error) {
      console.log(error);
    }
  };

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(
      () => setToast({ show: false, message: "", type: "success" }),
      2000,
    );
  };

  const filtered = hookahs.filter(
    (h) =>
      h.name.toLowerCase().includes(search.toLowerCase()) ||
      h.company.toLowerCase().includes(search.toLowerCase()),
  );

  const startEdit = (h) => {
    setEditingId(h._id);
    setEditData({ ...h });
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditData({});
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    const objectUrl = URL.createObjectURL(file);
    objectUrlRef.current = objectUrl;

    setEditData({
      ...editData,
      image: file,
      _preview: objectUrl,
    });
  };

  const saveEdit = async () => {
    try {
      setSavingId(editingId);
      let imageData;

      if (editData.image instanceof File) {
        const upload = await uploadImage(editData.image);
        imageData = {
          url: upload.image.url,
          public_id: upload.image.public_id,
        };
        if (objectUrlRef.current) {
          URL.revokeObjectURL(objectUrlRef.current);
          objectUrlRef.current = null;
        }
      }

      const payload = {
        name: editData.name,
        company: editData.company,
        sellingPrice: Number(editData.sellingPrice),
        oldPrice: Number(editData.oldPrice),
        size: editData.size,
      };

      if (imageData) {
        payload.image = imageData;
      }

      await updateHookah(editingId, payload);

      await fetchHookahs();
      setEditingId(null);
      setEditData({});
      showToast("Hookah updated successfully!");
    } catch (error) {
      console.error(error);
      showToast("Failed to update hookah.", "error");
    } finally {
      setSavingId(null);
    }
  };

  const requestDelete = (id, name) => {
    setConfirmTarget({ id, name });
  };

  const confirmDelete = async () => {
    try {
      setDeletingId(confirmTarget.id);
      await deleteHookah(confirmTarget.id);
      setConfirmTarget(null);
      fetchHookahs();
      showToast("Hookah deleted successfully!", "error");
    } catch (error) {
      console.log(error);
    } finally {
      setDeletingId(null);
    }
  };

  const cancelDelete = () => {
    setConfirmTarget(null);
  };

  const getImageSrc = (isEditing, editData, hookah) => {
    if (isEditing) {
      if (editData._preview) {
        return editData._preview;
      }

      if (editData.image?.url) {
        return `${editData.image.url}?t=${Date.now()}`;
      }

      return "";
    }

    return hookah.image?.url ? `${hookah.image.url}?t=${Date.now()}` : "";
  };

  return (
    <div className={s.main}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        .toast-slide {
          animation: slideDown 0.25s ease-out forwards;
        }
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-16px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        input, select {
          background: #000 !important;
        }
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0 1000px #000 inset !important;
          -webkit-text-fill-color: #fff !important;
        }
      `}</style>

      {toast.show && (
        <div
          className={`${s.toastBase} ${
            toast.type === "success" ? s.toastSuccess : s.toastError
          } toast-slide`}
        >
          {toast.type === "success" ? (
            <CheckCircle className={s.toastIcon} />
          ) : (
            <AlertCircle className={s.toastIcon} />
          )}
          <span className={s.toastMessage}>{toast.message}</span>
        </div>
      )}

      {confirmTarget && (
        <div className={s.confirmModal}>
          <div className={s.confirmInner}>
            <AlertCircle className={s.confirmIcon} />
            <div className="flex-1">
              <p className={s.confirmTitle}>
                Delete "{confirmTarget.name}"?
              </p>
              <p className={s.confirmSubtext}>
                This action cannot be undone.
              </p>
              <div className={s.confirmActions}>
                <button
                  onClick={confirmDelete}
                  disabled={deletingId === confirmTarget.id}
                  className={s.confirmDeleteButton}
                >
                  {deletingId === confirmTarget.id ? (
                    <Loader2 className={s.confirmSpinner} />
                  ) : null}
                  {deletingId === confirmTarget.id ? "Deleting..." : "Delete"}
                </button>
                <button
                  onClick={cancelDelete}
                  className={s.confirmCancelButton}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={s.headerWrapper}>
        <div className={s.headerLeft}>
          <Package className={s.headerIcon} />
          <h1 className={s.headerTitle}>
            <span className={s.headerHighlight}>Hookah</span> Collection
          </h1>
          <span className={s.headerBadge}>{filtered.length} items</span>
        </div>

        <div className={s.searchWrapper}>
          <Search className={s.searchIcon} />
          <input
            type="text"
            placeholder="Search by name or company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={s.searchInput}
          />
        </div>
      </div>

      <div className={s.grid}>
        {filtered.map((h) => {
          const isEditing = editingId === h._id;
          const data = isEditing ? editData : h;

          return (
            <div key={h._id} className={s.card}>
              <div className={s.imageContainer}>
                <img
                  src={getImageSrc(isEditing, data, h)}
                  alt={isEditing ? data.name : h.name}
                  className={s.cardImage}
                />
                {isEditing && (
                  <label className={s.imageOverlay}>
                    <Camera className={s.imageOverlayIcon} />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className={s.hiddenInput}
                    />
                    <span className={s.imageOverlayText}>Change image</span>
                  </label>
                )}
              </div>

              <div className={s.cardContent}>
                {isEditing ? (
                  <>
                    <input
                      name="name"
                      value={data.name}
                      onChange={handleEditChange}
                      className={s.editInputName}
                    />
                    <input
                      name="company"
                      value={data.company}
                      onChange={handleEditChange}
                      className={s.editInputCompany}
                    />
                    <div className={s.editPriceRow}>
                      <input
                        name="sellingPrice"
                        type="number"
                        value={data.sellingPrice}
                        onChange={handleEditChange}
                        className={s.editInputSelling}
                      />
                      <input
                        name="oldPrice"
                        value={data.oldPrice}
                        type="number"
                        onChange={handleEditChange}
                        className={s.editInputOld}
                      />
                    </div>
                    <input
                      name="size"
                      value={data.size}
                      onChange={handleEditChange}
                      className={s.editInputSize}
                    />
                    <div className={s.editActions}>
                      <button
                        onClick={saveEdit}
                        disabled={savingId === h._id}
                        className={s.editSaveButton}
                      >
                        {savingId === h._id ? (
                          <Loader2 className={s.editButtonIcon} />
                        ) : (
                          <Save className={s.editButtonIcon} />
                        )}
                        {savingId === h._id ? "Saving..." : "Save"}
                      </button>
                      <button
                        onClick={cancelEdit}
                        disabled={savingId === h._id}
                        className={s.editCancelButton}
                      >
                        <X className={s.editButtonIcon} /> Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className={s.itemName}>{h.name}</h3>
                    <p className={s.itemCompany}>
                      <Building className={s.itemIcon} /> {h.company}
                    </p>
                    <div className={s.itemPriceRow}>
                      <span className={s.itemSellingPrice}>
                        ₹{h.sellingPrice}
                      </span>
                      <span className={s.itemOldPrice}>₹{h.oldPrice}</span>
                    </div>
                    <p className={s.itemSize}>
                      <Weight className={s.itemIcon} />
                      {h.size}
                    </p>
                    <div className={s.itemActions}>
                      <button
                        onClick={() => startEdit(h)}
                        className={s.itemEditButton}
                      >
                        <Edit className={s.itemButtonIcon} /> Edit
                      </button>
                      <button
                        onClick={() => requestDelete(h._id, h.name)}
                        className={s.itemDeleteButton}
                      >
                        <Trash2 className={s.itemButtonIcon} /> Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className={s.emptyState}>
          <Package className={s.emptyIcon} />
          <p className={s.emptyTitle}>No hookahs found</p>
          <p className={s.emptySubtext}>Try adjusting your search</p>
        </div>
      )}
    </div>
  );
};

