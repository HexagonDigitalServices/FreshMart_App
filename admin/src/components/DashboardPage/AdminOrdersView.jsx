import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  BadgeIndianRupee,
  Filter,
  PackageCheck,
  Search,
  ShoppingCart,
  XCircle,
} from "lucide-react";
const statusOptions = [
  "All",
  "Processing",
  "On the way",
  "Delivered",
  "Cancelled",
];
import "./dashboard.css";
import { formatMoney, getVisibleOrders } from "./dashboardUtils";
import CancelConfirm from "./components/CancelConfirm";
import OrderDetailsModal from "./components/OrderDetailsModal";
import OrdersTable from "./components/OrdersTable";
import StatsGrid from "./components/StatsGrid";
import Toast from "./components/Toast";
import {
  getDashboard,
  getSingleOrder,
  updateOrderStatus as updateOrderStatusApi,
} from "../../api/adminApi";
import { adminOrdersViewStyles as s } from "../../assets/dummyStyles";

const getPaymentStatusForOrderStatus = (order, orderStatus) => {
  if (order.paymentMethod === "COD") {
    return orderStatus === "Delivered" ? "Paid" : "Pending";
  }
  return "Paid";
};

function AdminOrdersView({
  limit,
  showAllButton = false,
  title = "Admin Dashboard",
  subtitle = "Track orders, revenue, customer details, and delivery progress in one clean workspace.",
  eyebrow = "Store Control",
  showSummary = true,
}) {
  const [orders, setOrders] = useState([]);
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [toast, setToast] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [cancelConfirmOrder, setCancelConfirmOrder] = useState(null);
  const [cancellingOrderId, setCancellingOrderId] = useState(null);

  const fetchDashboard = async () => {
    try {
      setLoading(true);
      const { data } = await getDashboard();
      setDashboard(data.dashboard);
      setOrders(data.dashboard.latestOrders || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(timer);
  }, [toast]);

  const handleViewOrder = async (order) => {
    try {
      const { data } = await getSingleOrder(order.orderId);
      setSelectedOrder(data.order);
    } catch (error) {
      console.log(error);
    }
  };

  const requestOrderStatusChange = async (orderId, status) => {
    if (status === "Cancelled") {
      const order =
        orders.find((item) => item.orderId === orderId) ||
        (selectedOrder?.orderId === orderId ? selectedOrder : null);
      if (order) {
        setCancelConfirmOrder(order);
        return;
      }
    }

    try {
      const { data } = await updateOrderStatusApi(orderId, status);
      if (!data.success) return;

      setOrders((prev) =>
        prev.map((order) =>
          order.orderId === orderId
            ? {
                ...order,
                orderStatus: status,
                paymentStatus: getPaymentStatusForOrderStatus(order, status),
              }
            : order,
        ),
      );
      setSelectedOrder((prev) =>
        prev?.orderId === orderId
          ? {
              ...prev,
              orderStatus: status,
              paymentStatus: getPaymentStatusForOrderStatus(prev, status),
            }
          : prev,
      );
      await fetchDashboard();
      setToast({
        type: status === "Cancelled" ? "warning" : "success",
        message: `Order ${status.toLowerCase()} successfully.`,
      });
    } catch (err) {
      console.log(err.response?.data || err);
    }
  };

  const visibleOrders = useMemo(() => {
    return getVisibleOrders({
      orders,
      search,
      status: filterStatus,
      limit,
    });
  }, [orders, search, filterStatus, limit]);

  const statCards = [
    {
      title: "Total Revenue",
      value: formatMoney(dashboard?.totalRevenue || 0),
      sub: "Successful Payments",
      icon: BadgeIndianRupee,
    },
    {
      title: "Active Orders",
      value: dashboard?.totalActive || 0,
      sub: "In Progress",
      icon: ShoppingCart,
    },
    {
      title: "Cancelled",
      value: dashboard?.totalCancelled || 0,
      sub: "Needs Attention",
      icon: XCircle,
    },
    {
      title: "Delivered",
      value: dashboard?.totalDelivered || 0,
      sub: "Completed Orders",
      icon: PackageCheck,
    },
  ];

  const confirmCancel = async () => {
    if (!cancelConfirmOrder) return;

    try {
      setCancellingOrderId(cancelConfirmOrder.orderId);
      const { data } = await updateOrderStatusApi(
        cancelConfirmOrder.orderId,
        "Cancelled",
      );
      if (!data.success) return;

      setOrders((prev) =>
        prev.map((order) =>
          order.orderId === cancelConfirmOrder.orderId
            ? {
                ...order,
                orderStatus: "Cancelled",
                paymentStatus: getPaymentStatusForOrderStatus(order, "Cancelled"),
              }
            : order,
        ),
      );
      setSelectedOrder((prev) =>
        prev?.orderId === cancelConfirmOrder.orderId
          ? {
              ...prev,
              orderStatus: "Cancelled",
              paymentStatus: getPaymentStatusForOrderStatus(prev, "Cancelled"),
            }
          : prev,
      );
      await fetchDashboard();
      setCancelConfirmOrder(null);
      setToast({
        type: "warning",
        message: "Order cancelled successfully.",
      });
    } catch (err) {
      console.log(err.response?.data || err);
    } finally {
      setCancellingOrderId(null);
    }
  };

  if (loading) {
    return <div className={s.loadingState}>Loading Dashboard...</div>;
  }

  return (
    <main className={s.main}>
      <section className={s.section}>
        {showSummary && (
          <div className={s.summaryCard}>
            <div className={s.summaryHeader}>
              <div>
                <p className={s.eyebrow}>{eyebrow}</p>
                <h1 className={s.title}>{title}</h1>
                <p className={s.subtitle}>{subtitle}</p>
              </div>
            </div>
            <div className={s.statsWrapper}>
              <StatsGrid cards={statCards} />
            </div>
          </div>
        )}

        <div
          className={`${s.ordersCard} ${showSummary ? s.ordersCardWithSummary : ""}`}
        >
          <div className={s.ordersHeader}>
            <div>
              <h2 className={s.ordersTitle}>
                {limit ? `Latest ${limit} Orders` : "All Orders"}
              </h2>
              <p className={s.ordersSubtext}>
                Search, filter, inspect items, and update order status.
              </p>
            </div>

            <div className={s.ordersFilters}>
              <label className={s.searchLabel}>
                <Search className={s.searchIcon} />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search customer, mobile, or order id"
                  className={s.searchInput}
                />
              </label>
              <label className={s.filterLabel}>
                <Filter className={s.filterIcon} />
                <select
                  value={filterStatus}
                  onChange={(event) => setFilterStatus(event.target.value)}
                  className={s.filterSelect}
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status} className={s.filterOption}>
                      {status}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <OrdersTable
            orders={visibleOrders}
            onSelectOrder={handleViewOrder}
            onStatusChange={requestOrderStatusChange}
          />

          {showAllButton && (
            <div className={s.showAllWrapper}>
              <Link to="/orders" className={s.showAllLink}>
                Show All Orders
              </Link>
            </div>
          )}
        </div>
      </section>

      <Toast toast={toast} />
      <CancelConfirm
        order={cancelConfirmOrder}
        onClose={() => setCancelConfirmOrder(null)}
        onConfirm={confirmCancel}
        isLoading={cancellingOrderId === cancelConfirmOrder?.orderId}
      />
      <OrderDetailsModal
        order={selectedOrder}
        onClose={() => setSelectedOrder(null)}
        onCancelOrder={setCancelConfirmOrder}
        onStatusChange={requestOrderStatusChange}
      />
    </main>
  );
}

export default AdminOrdersView;