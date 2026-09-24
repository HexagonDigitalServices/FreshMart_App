import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  CheckCircle2,
  Edit3,
  Home,
  MapPin,
  Phone,
  Plus,
  Save,
  UserRound,
  Loader2,
} from "lucide-react";
import {
  addAddress,
  getAddresses,
  updateAddress as updateAddressApi,
} from "../../api/api";
import { addressPageStyles as s } from "../../assets/dummyStyles";

const emptyAddress = {
  id: "",
  name: "",
  mobile: "",
  address: "",
  pinCode: "",
  city: "",
  landmark: "",
  addressType: "Home",
};

const createId = () =>
  typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : String(Date.now());

const toUiAddress = (address) => ({
  id: address._id || address.id,
  name: address.fullName || address.name || "",
  mobile: address.mobileNumber || address.mobile || "",
  address: address.address || "",
  pinCode: address.pinCode || "",
  city: address.city || "",
  landmark: address.landmark || "",
  addressType: address.addressType || "Home",
});

const toApiAddress = (address) => ({
  fullName: address.name,
  mobileNumber: address.mobile,
  pinCode: address.pinCode,
  city: address.city || "N/A",
  landmark: address.landmark,
  addressType: address.addressType,
  address: address.address,
});

const AddressPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState("");
  const [formData, setFormData] = useState(emptyAddress);
  const [editingId, setEditingId] = useState(null);
  const [showSaved, setShowSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchAddresses = async () => {
      if (!localStorage.getItem("token")) {
        localStorage.setItem(
          "freshmart-redirect-after-login",
          `${location.pathname}${location.search}`,
        );
        navigate("/login");
        return;
      }

      try {
        const { data } = await getAddresses();
        const nextAddresses = (data.addresses || []).map(toUiAddress);
        setAddresses(nextAddresses);
        if (nextAddresses.length > 0 && !selectedAddressId) {
          setSelectedAddressId(nextAddresses[0].id);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchAddresses();
  }, []);

  useEffect(() => {
    if (!selectedAddressId && addresses.length > 0) {
      setSelectedAddressId(addresses[0].id);
    }
  }, [addresses, selectedAddressId]);

  const selectedAddress = useMemo(
    () => addresses.find((item) => item.id === selectedAddressId) || null,
    [addresses, selectedAddressId],
  );

  const isEditing = editingId !== null;

  const handleChange = (event) => {
    const { name, value } = event.target;

    const nextValue =
      name === "mobile"
        ? value.replace(/\D/g, "").slice(0, 10)
        : name === "pinCode"
          ? value.replace(/\D/g, "").slice(0, 6)
          : value;

    setFormData((current) => ({
      ...current,
      [name]: nextValue,
    }));
  };

  const resetForm = () => {
    setFormData(emptyAddress);
    setEditingId(null);
  };

  const handleSave = async (event) => {
    event.preventDefault();

    const nextAddress = {
      id: editingId || createId(),
      name: formData.name.trim(),
      mobile: formData.mobile.trim(),
      address: formData.address.trim(),
      pinCode: formData.pinCode.trim(),
      city: formData.city.trim(),
      landmark: formData.landmark.trim(),
      addressType: formData.addressType,
    };

    if (
      !nextAddress.name ||
      !nextAddress.mobile ||
      !nextAddress.address ||
      !nextAddress.pinCode
    ) {
      return;
    }

    try {
      setIsSaving(true);
      const payload = toApiAddress(nextAddress);
      const { data } = editingId
        ? await updateAddressApi(editingId, payload)
        : await addAddress(payload);

      const savedAddress = toUiAddress(data.address);

      setAddresses((current) => {
        if (editingId) {
          return current.map((item) =>
            item.id === editingId ? savedAddress : item,
          );
        }
        return [savedAddress, ...current];
      });

      setSelectedAddressId(savedAddress.id);
      setShowSaved(true);
      resetForm();

      window.setTimeout(() => {
        setShowSaved(false);
        const redirectTo = searchParams.get("redirect");
        if (redirectTo) {
          navigate(redirectTo);
        }
      }, 900);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleEdit = (address) => {
    setFormData(address);
    setEditingId(address.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleUseAddress = (addressId) => {
    setSelectedAddressId(addressId);

    const redirectTo = searchParams.get("redirect");
    if (redirectTo) {
      navigate(redirectTo);
    }
  };

  const handleAddNew = () => {
    resetForm();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className={s.mainContainer}>
      <section className={s.section}>
        <div className="pointer-events-none absolute inset-0">
          <div className={s.bgGradient1} />
          <div className={s.bgLine} />
        </div>

        <div className={s.gridContainer}>
          <div className={s.leftColumn}>
            <div className={s.badge}>
              <MapPin className={s.iconBadge} />
              Delivery addresses
            </div>

            <div>
              <h1 className={s.heading}>
                Manage your
                <span className={s.headingSpan}>
                  delivery addresses
                </span>
              </h1>
              <p className={s.subheading}>
                Save multiple addresses, edit them anytime, and choose one for
                order delivery.
              </p>
            </div>

            <div className={s.infoGrid}>
              {[
                { label: "Multiple saved", value: "Home, office, or other" },
                {
                  label: "One selected",
                  value: "Order goes to chosen address",
                },
              ].map((item) => (
                <div key={item.label} className={s.infoCard}>
                  <p className={s.infoLabel}>{item.label}</p>
                  <p className={s.infoValue}>{item.value}</p>
                </div>
              ))}
            </div>

            {selectedAddress && (
              <div className={s.selectedContainer}>
                <p className={s.selectedLabel}>Selected for delivery</p>
                <p className={s.selectedTypeBadge}>
                  {selectedAddress.addressType}
                </p>
                <div className={s.selectedDetails}>
                  <p className={s.selectedName}>{selectedAddress.name}</p>
                  <p>+91 {selectedAddress.mobile}</p>
                  <p>
                    {selectedAddress.address}
                    {selectedAddress.city ? `, ${selectedAddress.city}` : ""}
                  </p>
                  <p>PIN {selectedAddress.pinCode}</p>
                  {selectedAddress.landmark ? (
                    <p>Landmark: {selectedAddress.landmark}</p>
                  ) : null}
                </div>
              </div>
            )}
          </div>

          <div className={s.formContainer}>
            {showSaved && (
              <div className={s.savedAlert}>
                <CheckCircle2 className={s.iconSuccess} />
                Address saved successfully
              </div>
            )}

            <div className={s.formHeader}>
              <div>
                <p className={s.formLabel}>Address details</p>
                <h2 className={s.formTitle}>
                  {isEditing ? "Edit address" : "Add new address"}
                </h2>
              </div>

              <button
                type="button"
                onClick={handleAddNew}
                className={s.addButton}
                aria-label="Add new address"
              >
                <Plus className={s.iconSm} />
              </button>
            </div>

            <form onSubmit={handleSave} className={s.form}>
              <label className="block">
                <span className={s.labelText}>Address type</span>
                <select
                  name="addressType"
                  value={formData.addressType}
                  onChange={handleChange}
                  className={s.selectInput}
                >
                  <option value="Home">Home</option>
                  <option value="Office">Office</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className="block">
                <span className={s.labelText}>Full name</span>
                <span className={s.inputWrapper}>
                  <UserRound className={s.iconInput} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className={s.inputField}
                  />
                </span>
              </label>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className={s.labelText}>Mobile number</span>
                  <span className={s.inputWrapper}>
                    <Phone className={s.iconInput} />
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      placeholder="10 digit number"
                      className={s.inputField}
                    />
                  </span>
                </label>

                <label className="block">
                  <span className={s.labelText}>Pin code</span>
                  <span className={s.inputWrapper}>
                    <MapPin className={s.iconInput} />
                    <input
                      type="text"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleChange}
                      required
                      inputMode="numeric"
                      pattern="[0-9]{6}"
                      maxLength={6}
                      placeholder="6 digit pin"
                      className={s.inputField}
                    />
                  </span>
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className={s.labelText}>City</span>
                  <span className={s.inputWrapper}>
                    <Home className={s.iconInput} />
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                      className={s.inputField}
                    />
                  </span>
                </label>

                <label className="block">
                  <span className={s.labelText}>Landmark</span>
                  <span className={s.inputWrapper}>
                    <MapPin className={s.iconInput} />
                    <input
                      type="text"
                      name="landmark"
                      value={formData.landmark}
                      onChange={handleChange}
                      placeholder="Nearby landmark"
                      className={s.inputField}
                    />
                  </span>
                </label>
              </div>

              <label className="block">
                <span className={s.labelText}>Address</span>
                <span className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3.5 transition focus-within:border-black/25">
                  <Home className="mt-0.5 h-5 w-5 shrink-0 text-yellow-600" />
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="House no, street, area, locality"
                    className={s.textareaField}
                  />
                </span>
              </label>

              <button
                type="submit"
                disabled={isSaving}
                className={s.submitButton}
              >
                {isSaving ? (
                  <Loader2 className={s.loaderIcon} />
                ) : (
                  <Save className={s.iconSm} />
                )}
                {isSaving
                  ? "Saving..."
                  : isEditing
                    ? "Update address"
                    : "Save address"}
              </button>
            </form>
          </div>
        </div>

        <div className={s.addressBookContainer}>
          <div className={s.addressBookHeader}>
            <div>
              <p className={s.addressBookLabel}>Address book</p>
              <h3 className={s.addressBookTitle}>Saved addresses</h3>
            </div>
            {addresses.length > 0 ? (
              <p className={s.addressCount}>
                {addresses.length} saved{" "}
                {addresses.length === 1 ? "address" : "addresses"}
              </p>
            ) : null}
          </div>

          {addresses.length === 0 ? (
            <div className={s.emptyState}>
              No saved addresses yet. Add your first address above.
            </div>
          ) : (
            <div className={s.addressGrid}>
              {addresses.map((address) => {
                const isSelected = address.id === selectedAddressId;

                return (
                  <div
                    key={address.id}
                    className={`${s.addressCardBase} ${
                      isSelected ? s.addressCardSelected : s.addressCardDefault
                    }`}
                  >
                    <div className={s.addressCardTop}>
                      <div className={s.addressCardInfo}>
                        <div className={s.addressCardIcon}>
                          {isSelected ? (
                            <CheckCircle2 className={s.iconSm} />
                          ) : (
                            <Home className={s.iconSm} />
                          )}
                        </div>
                        <p className={s.addressCardName}>{address.name}</p>
                        <p className={s.addressCardMobile}>
                          +91 {address.mobile}
                        </p>
                      </div>

                      <div className={s.addressCardBadges}>
                        {isSelected ? (
                          <span className={s.selectedBadge}>Selected</span>
                        ) : null}
                        <span className={s.typeBadge}>
                          {address.addressType}
                        </span>
                      </div>
                    </div>

                    <div className={s.addressCardDetails}>
                      <p>{address.address}</p>
                      {address.city ? <p>{address.city}</p> : null}
                      <p className={s.pinText}>PIN {address.pinCode}</p>
                      {address.landmark ? (
                        <p className={s.landmarkText}>
                          Landmark: {address.landmark}
                        </p>
                      ) : null}
                    </div>

                    <div className={s.addressCardActions}>
                      <button
                        type="button"
                        onClick={() => handleUseAddress(address.id)}
                        className={`${s.useAddressButtonBase} ${
                          isSelected
                            ? s.useAddressButtonSelected
                            : s.useAddressButtonDefault
                        }`}
                      >
                        {isSelected ? "In use" : "Use address"}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleEdit(address)}
                        className={s.editButton}
                        aria-label={`Edit ${address.name} address`}
                      >
                        <Edit3 className={s.iconSm} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default AddressPage;