import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Banknote,
  CheckCircle2,
  CreditCard,
  Loader2,
  Minus,
  Plus,
  ShoppingBag,
  ShoppingCart,
  Trash2,
} from "lucide-react";
import { useCart } from "../../CartContext";
import { useNavigate } from "react-router-dom";
import { createCheckoutSession, getAddresses, placeOrder } from "../../api/api";
import { cartPageStyles as s } from "../../assets/dummyStyles";

const deliveryFee = 10;
const PENDING_ONLINE_ORDER_KEY = "freshmart-pending-online-order";

const CartPage = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    totalItems,
    subtotal,
    addItem,
    decreaseItem,
    removeItem,
    clearCart,
  } = useCart();
  const [paymentMode, setPaymentMode] = useState("cash");
  const [toastMessage, setToastMessage] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [removingCartId, setRemovingCartId] = useState(null);

  const orderTotal = subtotal > 0 ? subtotal + deliveryFee : 0;

  const showToast = (message, redirectTo) => {
    setToastMessage(message);
    window.setTimeout(() => {
      if (redirectTo) {
        navigate(redirectTo);
      }
      setToastMessage("");
    }, 900);
  };

  const handleRemoveItem = (cartId) => {
    setRemovingCartId(cartId);
    window.setTimeout(() => {
      removeItem(cartId);
      setRemovingCartId(null);
    }, 250);
  };

  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) return;

    if (!localStorage.getItem("token")) {
      localStorage.setItem("freshmart-redirect-after-login", "/cart");
      showToast("Login first", "/login");
      return;
    }

    setIsCheckingOut(true);

    let addressId = "";
    try {
      const { data } = await getAddresses();
      const addresses = data.addresses || [];
      const deliveryAddress =
        addresses.find((address) => address.isDefault) || addresses[0];
      addressId = deliveryAddress?._id || "";
    } catch (error) {
      console.log(error);
    }

    if (!addressId) {
      setIsCheckingOut(false);
      showToast("Add delivery address first", "/address?redirect=/cart");
      return;
    }

    try {
      const products = cartItems.map((item) => ({
        product: item.id,
        productModel: item.productModel || "Product",
        quantity: item.quantity,
        name: item.name,
        image: item.image,
        company: item.company,
        category: item.category,
        size: item.size,
        sellingPrice: item.price,
        oldPrice: item.oldPrice,
      }));

      const orderPayload = {
        products,
        address: addressId,
        totalAmount: orderTotal,
      };

      if (paymentMode === "online") {
        localStorage.setItem(
          PENDING_ONLINE_ORDER_KEY,
          JSON.stringify(orderPayload),
        );

        const checkout = await createCheckoutSession(orderPayload);
        window.location.href = checkout.data.url;
        return;
      }

      await placeOrder({
        ...orderPayload,
        paymentMethod: "COD",
        paymentStatus: "Pending",
      });

      clearCart();
      setToastMessage("Order placed successfully");
      window.setTimeout(() => {
        setToastMessage("");
        navigate("/orders");
      }, 1200);
    } catch (error) {
      console.log(error);
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <main className={s.mainContainer}>
      {/* Decorative backgrounds */}
      <div className="pointer-events-none absolute inset-0">
        <div className={s.bgGradient1} />
        <div className={s.bgLine} />
      </div>

      {toastMessage ? (
        <div className={s.toast}>
          <CheckCircle2 className={s.iconMd} />
          {toastMessage}
        </div>
      ) : null}

      <section className={s.section}>
        <div className={s.headerWrapper}>
          <div>
            <p className={s.badge}>
              <ShoppingCart className={s.iconSm} />
              FreshMart cart
            </p>
            <h1 className={s.heading}>Your selected items</h1>
            <p className={s.itemCount}>
              {totalItems} {totalItems === 1 ? "item" : "items"} ready for
              checkout
            </p>
          </div>

          <Link to="/" className={s.continueButton}>
            Continue shopping
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className={s.emptyContainer}>
            <div className={s.emptyIconWrapper}>
              <ShoppingBag className={s.iconLg} />
            </div>
            <h2 className={s.emptyTitle}>Your cart is empty</h2>
            <p className={s.emptySubtext}>
              Add grocery or hookah products and they will appear here with full
              details.
            </p>
          </div>
        ) : (
          <div className={s.cartGrid}>
            <div className={s.productGrid}>
              {cartItems.map((item) => (
                <article key={item.cartId} className={s.productCard}>
                  <div className={s.productImageWrapper}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={s.productImage}
                    />
                  </div>

                  <div className={s.productContent}>
                    <div className={s.productHeader}>
                      <div className={s.productInfo}>
                        <p className={s.productCategory}>{item.category}</p>
                        <h2 className={s.productName}>{item.name}</h2>
                        <p className={s.productCompany}>{item.company}</p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRemoveItem(item.cartId)}
                        disabled={removingCartId === item.cartId}
                        className={s.removeButton}
                        aria-label={`Remove ${item.name}`}
                      >
                        {removingCartId === item.cartId ? (
                          <Loader2 className={s.iconSm} />
                        ) : (
                          <Trash2 className={s.iconSm} />
                        )}
                      </button>
                    </div>

                    <div className={s.sizeWrapper}>
                      <span className={s.sizeBadge}>{item.size}</span>
                    </div>

                    <div className={s.priceContainer}>
                      <div className={s.priceRow}>
                        <span className={s.priceCurrent}>
                          Rs {item.price}
                        </span>
                        {item.oldPrice ? (
                          <span className={s.priceOld}>
                            Rs {item.oldPrice}
                          </span>
                        ) : null}
                      </div>
                      <p className={s.priceTotal}>
                        Item total: Rs {item.price * item.quantity}
                      </p>
                    </div>

                    <div className={s.quantityControls}>
                      <button
                        type="button"
                        onClick={() => decreaseItem(item.cartId)}
                        className={s.qtyButton}
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => addItem(item)}
                        className={s.qtyButton}
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className={s.summaryAside}>
              <p className={s.summaryLabel}>Checkout</p>
              <h2 className={s.summaryTitle}>Order summary</h2>

              <div className={s.summaryDetails}>
                <div className={s.summaryRow}>
                  <span>Subtotal</span>
                  <span>Rs {subtotal}</span>
                </div>
                <div className={s.summaryRow}>
                  <span>Delivery fee</span>
                  <span>Rs {deliveryFee}</span>
                </div>
                <div className={s.summaryDivider} />
                <div className={s.summaryTotal}>
                  <span>Total</span>
                  <span>Rs {orderTotal}</span>
                </div>
              </div>

              <div className={s.paymentSection}>
                <p className={s.paymentLabel}>Payment mode</p>
                <div className={s.paymentOptions}>
                  {[
                    { id: "cash", label: "Cash on delivery", icon: Banknote },
                    { id: "online", label: "Online payment", icon: CreditCard },
                  ].map((option) => {
                    const Icon = option.icon;
                    const isActive = paymentMode === option.id;

                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setPaymentMode(option.id)}
                        className={`${s.paymentButtonBase} ${
                          isActive ? s.paymentButtonActive : s.paymentButtonInactive
                        }`}
                      >
                        <Icon className={s.iconMd} />
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                onClick={handlePlaceOrder}
                disabled={isCheckingOut}
                className={s.checkoutButton}
              >
                {isCheckingOut ? (
                  <Loader2 className={s.iconMd} />
                ) : (
                  <CheckCircle2 className={s.iconMd} />
                )}
                {isCheckingOut ? "Placing..." : "Checkout"}
              </button>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
};

export default CartPage;