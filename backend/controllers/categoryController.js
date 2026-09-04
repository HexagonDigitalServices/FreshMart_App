

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res
      .status(200)
      .json({ success: true, count: categories.length, categories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category)
      return res
        .status(404)
        .json({ success: false, message: "Category Not Found" });
    res.status(200).json({ success: true, category });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category)
      return res
        .status(404)
        .json({ success: false, message: "Category Not Found" });
    const { categoryName, image } = req.body;
    const prevName = category.categoryName;
    let oldImagePublicId = null;
    if (categoryName) category.categoryName = categoryName;
    if (
      image?.url &&
      image?.public_id &&
      image.public_id !== category.image.public_id
    ) {
      oldImagePublicId = category.image.public_id;
      category.image = { url: image.url, public_id: image.public_id };
    }
    await category.save();
    if (categoryName && categoryName !== prevName) {
      await Product.updateMany(
        { category: prevName },
        { $set: { category: categoryName } },
      );
    }
    if (oldImagePublicId) {
      try {
        await cloudinary.uploader.destroy(oldImagePublicId);
      } catch (cleanupError) {
        console.log("Old category image cleanup failed:", cleanupError.message);
      }
    }
    res
      .status(200)
      .json({
        success: true,
        message: "Category Updated Successfully",
        category,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category)
      return res
        .status(404)
        .json({ success: false, message: "Category Not Found" });
    if (category.image?.public_id)
      await cloudinary.uploader.destroy(category.image.public_id);
    await Category.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Category Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
