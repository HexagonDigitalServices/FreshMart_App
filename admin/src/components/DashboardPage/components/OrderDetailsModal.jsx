import {
  BadgeIndianRupee,
  Building2,
  CalendarClock,
  Home,
  Landmark,
  MapPinned,
  Package,
  PackageCheck,
  Phone,
  ReceiptText,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import { formatDateOnly, formatMoney } from "../dashboardUtils";
import InfoRow from "./InfoRow";
import OrderItemCard from "./OrderItemCard";
import StatusTimeline from "./StatusTimeline";
import { formatShortOrderId } from "../../../utils/orderIds";
import { orderDetailsModalStyles as s } from "../../../assets/dummyStyles";

// ---- OrderTotalPill (inline helper) ----
const OrderTotalPill = ({ value }) => (
  <div className={s.totalPillContainer}>
    <div className={s.totalPillHeader}>
      <BadgeIndianRupee className={s.totalPillIcon} />
      <span>Order Total</span>
    </div>
    <div className={s.totalPillValueWrapper}>
      <span className={s.totalPillValue}>{value}</span>
    </div>
  </div>
);

// ---- Actions helper ----
const getActions = (status) => ({
  onWay: status === "Processing",
  deliver: status === "Processing" || status === "On the way",
  cancel: status === "Processing" || status === "On the way",
});

// ---- Main component ----
const OrderDetailsModal = ({
  order,
  onClose,
  onCancelOrder,
  onStatusChange,
}) => {
  if (!order) return null;

  const actions = getActions(order.orderStatus);
  const hasActions = actions.onWay || actions.deliver || actions.cancel;

  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        {/* Header */}
        <div className={s.header}>
          <div>
            <h2 className={s.headerTitle}>Order Details</h2>
            <p className={s.headerSubtext}>
              {formatShortOrderId(order.orderId)}
            </p>
          </div>
          <button onClick={onClose} className={s.closeButton}>
            <X className={s.closeIcon} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className={s.content}>
          <div className={s.mainGrid}>
            {/* Order Information */}
            <section className={s.section}>
              <h3 className={s.sectionTitle}>
                <ReceiptText className={s.sectionIcon} />
                Order Information
              </h3>
              <div className={s.infoGrid3}>
                <InfoRow
                  icon={CalendarClock}
                  label="Order Date"
                  value={formatDateOnly(order.createdAt)}
                />
                <InfoRow
                  icon={BadgeIndianRupee}
                  label="Payment Status"
                  value={order.paymentStatus}
                />
                <InfoRow
                  icon={PackageCheck}
                  label="Delivery Status"
                  value={order.orderStatus}
                />
                <InfoRow
                  icon={ShoppingCart}
                  label="Total Items"
                  value={order.products.length}
                />
                <OrderTotalPill value={formatMoney(order.totalAmount)} />
              </div>
            </section>

            {/* Customer Information */}
            <section className={s.section}>
              <h3 className={s.sectionTitle}>
                <User className={s.sectionIcon} />
                Customer Information
              </h3>
              <div className={s.infoGrid2}>
                <InfoRow
                  icon={User}
                  label="Customer Name"
                  value={order.customer.name}
                />
                <InfoRow
                  icon={Phone}
                  label="Mobile"
                  value={order.customer.phone}
                />
                <InfoRow
                  icon={Home}
                  label="Address Type"
                  value={order.address.addressType}
                />
                <InfoRow
                  icon={Building2}
                  label="City"
                  value={order.address.city}
                />
                <InfoRow
                  icon={Landmark}
                  label="Landmark"
                  value={order.address.landmark}
                />
                <InfoRow
                  icon={MapPinned}
                  label="Pincode"
                  value={order.address.pinCode}
                />
                <InfoRow
                  icon={Home}
                  label="Full Address"
                  value={order.address.address}
                  wide
                />
              </div>
            </section>
          </div>

          {/* Order Progress */}
          <section className={s.progressSection}>
            <h3 className={s.progressTitle}>Order Progress</h3>
            <div className={s.progressContent}>
              <StatusTimeline status={order.orderStatus} />
            </div>
          </section>

          {/* Ordered Items */}
          <section className={s.itemsSection}>
            <h3 className={s.sectionTitle}>
              <Package className={s.sectionIcon} />
              Ordered Items
            </h3>
            <div className={s.itemsGrid}>
              {order.products.map((item) => (
                <OrderItemCard key={item.productId} item={item} />
              ))}
            </div>
          </section>

          {/* Admin Actions */}
          {hasActions && (
            <section className={s.actionsSection}>
              <h3 className={s.actionsTitle}>Admin Actions</h3>
              <div className={s.actionsButtons}>
                {actions.onWay && (
                  <button
                    onClick={() => onStatusChange(order.orderId, "On the way")}
                    className={s.actionButtonOnWay}
                  >
                    Mark On the way
                  </button>
                )}
                {actions.deliver && (
                  <button
                    onClick={() => onStatusChange(order.orderId, "Delivered")}
                    className={s.actionButtonDeliver}
                  >
                    Mark Delivered
                  </button>
                )}
                {actions.cancel && (
                  <button
                    onClick={() => onCancelOrder(order)}
                    className={s.actionButtonCancel}
                  >
                    Cancel Order
                  </button>
                )}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;