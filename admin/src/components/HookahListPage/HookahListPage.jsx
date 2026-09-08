

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