

export const getAllOrders = handle(async (req, res) => {
  const { search = "", status = "All", page = 1, limit = 10 } = req.query;
  const orders = await Order.find()
    .populate("user", "name email phone")
    .populate("address")
    .populate(
      "products.product",
      "name image company category size sellingPrice oldPrice",
    )
    .sort({ createdAt: -1 });

  const filtered = orders.filter((o) => {
    const n = o.user?.name?.toLowerCase() || "";
    const e = o.user?.email?.toLowerCase() || "";
    const p = o.user?.phone || "";
    const matchSearch =
      n.includes(search.toLowerCase()) ||
      e.includes(search.toLowerCase()) ||
      p.includes(search);
    const matchStatus = status === "All" || o.orderStatus === status;
    return matchSearch && matchStatus;
  });

  const currentPage = Number(page),
    pageSize = Number(limit);
  const paginated = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  res.status(200).json({
    success: true,
    totalOrders: filtered.length,
    currentPage,
    totalPages: Math.ceil(filtered.length / pageSize),
    pageSize,
    orders: paginated.map(formatOrder),
  });
});

export const getSingleOrder = handle(async (req, res) => {
  const order = await Order.findById(req.params.id)
    .populate("user", "name email phone")
    .populate("address")
    .populate(
      "products.product",
      "name image company category size sellingPrice oldPrice",
    );
  if (!order)
    return res.status(404).json({ success: false, message: "Order Not Found" });
  res.status(200).json({ success: true, order: formatOrder(order) });
});

export const updateOrderStatus = handle(async (req, res) => {
  const { orderStatus } = req.body;
  if (
    !["Processing", "On the way", "Delivered", "Cancelled"].includes(
      orderStatus,
    )
  )
    return res
      .status(400)
      .json({ success: false, message: "Invalid Order Status" });
  const order = await Order.findById(req.params.id);
  if (!order)
    return res.status(404).json({ success: false, message: "Order Not Found" });
  order.orderStatus = orderStatus;
  if (order.paymentMethod === "COD")
    order.paymentStatus = orderStatus === "Delivered" ? "Paid" : "Pending";
  if (["Online", "Stripe"].includes(order.paymentMethod))
    order.paymentStatus = "Paid";
  await order.save();
  res.status(200).json({
    success: true,
    message: "Order Status Updated Successfully",
    order,
  });
});

export const deleteOrder = handle(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order)
    return res.status(404).json({ success: false, message: "Order Not Found" });
  await order.deleteOne();
  res
    .status(200)
    .json({ success: true, message: "Order Deleted Successfully" });
});
