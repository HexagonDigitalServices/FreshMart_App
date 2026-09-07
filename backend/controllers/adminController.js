

export const getDashboard = handle(async (req, res) => {
  const revenueOrders = await Order.find().select(
    "totalAmount paymentMethod paymentStatus orderStatus",
  );
  const totalRevenue = revenueOrders.reduce((t, o) => {
    if (o.paymentMethod === "COD" && o.orderStatus === "Delivered")
      return t + o.totalAmount;
    if (
      ["Online", "Stripe"].includes(o.paymentMethod) &&
      o.paymentStatus === "Paid" &&
      o.orderStatus !== "Cancelled"
    )
      return t + o.totalAmount;
    return t;
  }, 0);

  const [
    totalOrders,
    totalProducts,
    totalCategories,
    totalDelivered,
    totalCancelled,
    totalActive,
  ] = await Promise.all([
    Order.countDocuments(),
    Product.countDocuments(),
    Category.countDocuments(),
    Order.countDocuments({ orderStatus: "Delivered" }),
    Order.countDocuments({ orderStatus: "Cancelled" }),
    Order.countDocuments({ orderStatus: { $nin: ["Delivered", "Cancelled"] } }),
  ]);

  const latestOrders = await Order.find()
    .populate("user", "name phone")
    .populate("address")
    .populate(
      "products.product",
      "name company category size sellingPrice oldPrice image",
    )
    .sort({ createdAt: -1 });

  const formattedOrders = latestOrders.map((order) => ({
    orderId: order._id,
    customerName: order.user?.name || "",
    phone: order.user?.phone || "",
    totalAmount: order.totalAmount,
    paymentMethod:
      order.paymentMethod === "Stripe" ? "Online" : order.paymentMethod,
    paymentStatus: order.paymentStatus,
    orderStatus: order.orderStatus,
    orderDate: order.createdAt,
    products: order.products.map((item) => {
      const p = item.product || item;
      const sp = p?.sellingPrice || 0;
      const img = typeof p?.image === "string" ? p.image : p?.image?.url || "";
      return {
        productId: item.product?._id || item.product,
        image: img,
        public_id: p?.image?.public_id || "",
        name: p?.name || "",
        company: p?.company || "",
        category: p?.category || item.category || "",
        size: p?.size || "",
        sellingPrice: sp,
        oldPrice: p?.oldPrice || 0,
        quantity: item.quantity,
        subtotal: sp * item.quantity,
      };
    }),
  }));

  res.status(200).json({
    success: true,
    dashboard: {
      totalRevenue,
      totalOrders,
      totalProducts,
      totalCategories,
      totalDelivered,
      totalCancelled,
      totalActive,
      latestOrders: formattedOrders,
    },
  });
});
