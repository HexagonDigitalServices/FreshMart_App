import { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  BadgeIndianRupee,
  Banknote,
  CheckCircle2,
  Clock3,
  CreditCard,
  Eye,
  Loader2,
  PackageCheck,
  ReceiptText,
  Sparkles,
  Truck,
  XCircle,
} from "lucide-react";
import { cancelOrder, getMyOrders } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { formatShortOrderId } from "../../utils/orderIds";
import { ordersPageStyles as s } from "../../assets/dummyStyles";

const deliveryFee = 10;

const toUiStatus = (status) => {
  const statusMap = {
    Processing: "processing",
    "On the way": "shipped",
    Delivered: "delivered",
    Cancelled: "cancelled",
  };

  return statusMap[status] || "processing";
};

const toUiOrder = (order) => {
  const items = (order.products || []).map((item) => {
    const product = item.product || item;
    const image =
      typeof product.image === "string"
        ? product.image
        : product.image?.url || "";
    const price = product.sellingPrice || 0;

    return {
      cartId: `${order._id}-${product._id || item.product || item.name}`,
      image,
      name: product.name || "",
      company: product.company || "",
      size: product.size || "",
      price,
      oldPrice: product.oldPrice || 0,
      quantity: item.quantity,
    };
  });

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return {
    id: order._id,
    placedAt: order.createdAt,
    status: toUiStatus(order.orderStatus),
    paymentMode: ["Online", "Stripe"].includes(order.paymentMethod)
      ? "online"
      : "cash",
    paymentStatus: order.paymentStatus,
    items,
    totalItems,
    subtotal,
    deliveryFee,
    total: order.totalAmount || subtotal + deliveryFee,
  };
};

const getOrderDate = (date) =>
  new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));

const getPaymentDetails = (order) => {
  const isOnline = order.paymentMode === "online";

  return {
    icon: isOnline ? CreditCard : Banknote,
    label: isOnline ? "Online payment" : "Cash on delivery",
    status: isOnline ? "Paid " : "COD",
    className: isOnline
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : "border-yellow-300 bg-yellow-100 text-yellow-800",
  };
};

const getOrderStatusDetails = (status) => {
  const details = {
    processing: {
      icon: Clock3,
      label: "Processing",
      className: "border-yellow-300 bg-yellow-300 text-black",
    },
    shipped: {
      icon: Truck,
      label: "On the way",
      className: "border-sky-200 bg-sky-50 text-sky-700",
    },
    delivered: {
      icon: CheckCircle2,
      label: "Delivered",
      className: "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    cancelled: {
      icon: XCircle,
      label: "Cancelled",
      className: "border-red-200 bg-red-50 text-red-700",
    },
  };

  return details[status] || details.processing;
};

const getOrderProgress = (status) => {
  const steps = ["processing", "shipped", "delivered"];

  if (status === "cancelled") return 0;

  return Math.max(1, steps.indexOf(status) + 1);
};

const updateCancelledOrder = (orders, orderId) =>
  orders.map((order) =>
    order.id === orderId
      ? {
          ...order,
          status: "cancelled",
          cancelledAt: new Date().toISOString(),
        }
      : order,
  );

const OrdersPage = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const [confirmOrderId, setConfirmOrderId] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [cancellingId, setCancellingId] = useState(null);

  const fetchOrders = async () => {
    if (!localStorage.getItem("token")) {
      localStorage.setItem("freshmart-redirect-after-login", "/orders");
      navigate("/login");
      return;
    }

    try {
      setLoading(true);
      const { data } = await getMyOrders();
      setOrders((data.orders || []).map(toUiOrder));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const totalOrders = orders.length;
  const activeOrders = useMemo(
    () =>
      orders.filter(
        (order) => !["delivered", "cancelled"].includes(order.status),
      ).length,
    [orders],
  );

  const totalSpent = useMemo(
    () =>
      orders
        .filter((order) => order.status === "delivered")
        .reduce((total, order) => total + (order.total || 0), 0),
    [orders],
  );

  const showToast = (message) => {
    setToastMessage(message);
    window.setTimeout(() => setToastMessage(""), 2200);
  };

  const handleCancelAsk = (orderId) => {
    setConfirmOrderId(orderId);
  };

  const handleCancelClose = () => {
    setConfirmOrderId(null);
  };

  const handleToggleItems = (orderId) => {
    setExpandedOrderId((currentId) => (currentId === orderId ? null : orderId));
  };

  const handleCancelOrder = async () => {
    try {
      setCancellingId(confirmOrderId);
      await cancelOrder(confirmOrderId);
      setOrders((currentOrders) =>
        updateCancelledOrder(currentOrders, confirmOrderId),
      );
      setConfirmOrderId(null);
      showToast("Order cancelled successfully");
    } catch (error) {
      console.log(error);
    } finally {
      setCancellingId(null);
    }
  };

  const confirmOrder = orders.find((order) => order.id === confirmOrderId);

  return (
    <main className={s.mainContainer}>
      {/* Decorative backgrounds */}
      <div className="pointer-events-none absolute inset-0">
        <div className={s.bgGradient1} />
        <div className={s.bgLine} />
      </div>

      {/* Success Toast */}
      {toastMessage ? (
        <div className={s.toastContainer}>
          <CheckCircle2 className={s.iconMd} />
          {toastMessage}
        </div>
      ) : null}

      {/* Cancel Confirmation Modal */}
      {confirmOrder ? (
        <div className={s.confirmModal}>
          <div className="flex items-start gap-3">
            <span className={s.confirmIconWrapper}>
              <AlertTriangle className={s.iconMd} />
            </span>
            <div>
              <p className={s.confirmTitle}>
                Cancel order {formatShortOrderId(confirmOrder.id)}?
              </p>
              <p className={s.confirmSubtext}>
                This will mark the complete order as cancelled.
              </p>
            </div>
          </div>

          <div className={s.confirmActions}>
            <button
              type="button"
              onClick={handleCancelClose}
              className={s.confirmKeepButton}
            >
              Keep order
            </button>
            <button
              type="button"
              onClick={handleCancelOrder}
              disabled={cancellingId === confirmOrder.id}
              className={s.confirmCancelButton}
            >
              {cancellingId === confirmOrder.id
                ? "Cancelling..."
                : "Cancel now"}
            </button>
          </div>
        </div>
      ) : null}

      <section className={s.section}>
        <div className={s.headerGrid}>
          <div>
            <p className={s.badge}>
              <PackageCheck className={s.iconSm} />
              FreshMart orders
            </p>
            <h1 className={s.heading}>My orders</h1>
            <p className={s.subheading}>
              Track every checkout with product details, payment status, item
              totals, and cancellation control in one clean place.
            </p>
          </div>

          <div className={s.statsGrid}>
            {[
              { label: "Orders", value: totalOrders, icon: ReceiptText },
              { label: "Active", value: activeOrders, icon: Truck },
              {
                label: "Spent",
                value: `Rs ${totalSpent}`,
                icon: BadgeIndianRupee,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className={s.statCard}>
                  <Icon className={s.statIcon} />
                  <p className={s.statValue}>{item.value}</p>
                  <p className={s.statLabel}>{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {loading ? (
          <div className={s.loadingContainer}>
            <Loader2 className={s.loadingSpinner} />
          </div>
        ) : (
          <div className={s.ordersGrid}>
            {orders.map((order) => {
              const payment = getPaymentDetails(order);
              const status = getOrderStatusDetails(order.status);
              const PaymentIcon = payment.icon;
              const StatusIcon = status.icon;
              const progress = getOrderProgress(order.status);
              const canCancel = order.status !== "cancelled";
              const isExpanded = expandedOrderId === order.id;

              return (
                <article key={order.id} className={s.orderCard}>
                  <div className={s.orderHeader}>
                    <div className={s.orderBadges}>
                      <span className={s.orderIdBadge}>
                        <ReceiptText className={s.iconXs} />
                        {formatShortOrderId(order.id)}
                      </span>
                      <span
                        className={`${s.badgeBase} ${status.className}`}
                      >
                        <StatusIcon className={s.iconXs} />
                        {status.label}
                      </span>
                      <span
                        className={`${s.badgeBase} ${payment.className}`}
                      >
                        <PaymentIcon className={s.iconXs} />
                        {payment.status}
                      </span>
                    </div>

                    <h2 className={s.orderItemCount}>
                      {order.totalItems}{" "}
                      {order.totalItems === 1 ? "item" : "items"} ordered
                    </h2>
                    <p className={s.orderDate}>
                      Placed on {getOrderDate(order.placedAt)}
                    </p>

                    <div className={s.orderActions}>
                      <button
                        type="button"
                        onClick={() => handleToggleItems(order.id)}
                        className={`${s.eyeButtonBase} ${
                          isExpanded ? s.eyeButtonActive : s.eyeButtonInactive
                        }`}
                        aria-label={`${isExpanded ? "Hide" : "Show"} ${order.id} items`}
                      >
                        <Eye className={s.iconMd} />
                      </button>

                      {order.status === "cancelled" ? (
                        <div className={s.statusCancelled}>
                          <XCircle className={s.iconMd} />
                          Cancelled
                        </div>
                      ) : order.status === "delivered" ? (
                        <div className={s.statusDelivered}>
                          <CheckCircle2 className={s.iconMd} />
                          Delivered
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleCancelAsk(order.id)}
                          className={s.cancelButton}
                        >
                          <XCircle className={s.iconMd} />
                          Cancel order
                        </button>
                      )}
                    </div>
                  </div>

                  {isExpanded ? (
                    <div className={s.expandedContainer}>
                      <div className={s.expandedItemsGrid}>
                        {order.items.map((item) => (
                          <div
                            key={`${order.id}-${item.cartId}`}
                            className={s.expandedItem}
                          >
                            <div className={s.expandedItemImageWrapper}>
                              <img
                                src={item.image}
                                alt={item.name}
                                className={s.expandedItemImage}
                              />
                            </div>

                            <div className={s.expandedItemContent}>
                              <h3 className={s.expandedItemName}>
                                {item.name}
                              </h3>
                              <p className={s.expandedItemCompany}>
                                {item.company}
                              </p>
                              <p className={s.expandedItemSize}>
                                {item.size}
                              </p>
                              <div className={s.expandedItemFooter}>
                                <span className={s.expandedItemPrice}>
                                  Rs {item.price}
                                </span>
                                <span className={s.expandedItemQty}>
                                  x{item.quantity}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <aside className={s.orderSummary}>
                        <p className={s.summaryTitle}>Order summary</p>
                        <div className={s.summaryDetails}>
                          <div className={s.summaryRow}>
                            <span>Subtotal</span>
                            <span>Rs {order.subtotal}</span>
                          </div>
                          <div className={s.summaryRow}>
                            <span>Delivery fee</span>
                            <span>Rs {order.deliveryFee}</span>
                          </div>
                          <div className={s.summaryRow}>
                            <span>Payment</span>
                            <span>{payment.label}</span>
                          </div>
                          <div className={s.summaryDivider} />
                          <div className={s.summaryTotal}>
                            <span>Total</span>
                            <span>Rs {order.total}</span>
                          </div>
                        </div>

                        <div className={s.progressContainer}>
                          <div className={s.progressLabels}>
                            <span>Processing</span>
                            <span>Delivery</span>
                          </div>
                          <div className={s.progressBar}>
                            {[1, 2, 3].map((step) => (
                              <span
                                key={step}
                                className={`${s.progressStep} ${
                                  step <= progress
                                    ? s.progressStepActive
                                    : s.progressStepInactive
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </aside>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
};

export default OrdersPage;