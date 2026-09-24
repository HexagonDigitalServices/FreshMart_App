
const toProductSearchItem = (item) => ({
  id: item._id,
  cartId: `product-${item._id}`,
  source: "Product",
  productModel: "Product",
  category: item.category || "Grocery",
  image: getImageUrl(item.image),
  name: item.name || "",
  company: item.company || "",
  price: item.sellingPrice || 0,
  oldPrice: item.oldPrice || 0,
  size: item.size || "",
});

const toHookahSearchItem = (item) => ({
  id: item._id,
  cartId: `hookah-${item._id}`,
  source: "Hookah",
  productModel: "Hookah",
  category: "Hookah Products",
  image: getImageUrl(item.image),
  name: item.name || "",
  company: item.company || "",
  price: item.sellingPrice || 0,
  oldPrice: item.oldPrice || 0,
  size: item.size || "",
});






      <div className={s.container}>
        {loading ? (
          <div className={s.loadingContainer}>
            <Loader2 className={s.loaderIcon} />
          </div>
        ) : results.length === 0 ? (
          <div className={s.emptyContainer}>
            <SearchX className={s.emptyIcon} />
            <h3 className={s.emptyTitle}>No matching item found</h3>
            <p className={s.emptySubtext}>
              Try searching product names, companies, categories, or hookah
              items.
            </p>
          </div>
        ) : (
          <div className={s.resultsGrid}>
            {results.map((item) => {
              const cartItem = {
                cartId: item.cartId,
                source: item.source,
                category: item.category,
                id: item.id,
                productModel: item.productModel,
                image: item.image,
                name: item.name,
                company: item.company,
                price: item.price,
                oldPrice: item.oldPrice,
                size: item.size,
              };
              const quantity = getQuantity(cartItem.cartId);

              return (
                <div key={item.id} className={s.productCard}>
                  <div className={s.cardOverlay1} />
                  <div className={s.cardOverlay2} />
                  <div className={s.cardOverlay3} />

                  <div className={s.cardContent}>
                    <div className={s.imageWrapper}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className={s.productImage}
                      />
                    </div>

                    <div className={s.productInfo}>
                      <h3 className={s.productName}>{item.name}</h3>
                      <p className={s.productCompany}>{item.company}</p>
                      <div className={s.sizeBadge}>{item.size}</div>

                      <div className={s.priceContainer}>
                        <div className={s.priceRow}>
                          <span className={s.priceCurrent}>
                            Rs {item.price}
                          </span>
                          <span className={s.priceOld}>
                            Rs {item.oldPrice}
                          </span>
                        </div>
                      </div>

                      <div className={s.actionWrapper}>
                        {quantity > 0 ? (
                          <div className={s.quantityControls}>
                            <button
                              type="button"
                              onClick={() => decreaseItem(cartItem.cartId)}
                              className={s.qtyButton}
                              aria-label={`Decrease ${item.name} quantity`}
                            >
                              <Minus size={16} />
                            </button>
                            <span className={s.qtyValue}>{quantity}</span>
                            <button
                              type="button"
                              onClick={() => addItem(cartItem)}
                              className={s.qtyButton}
                              aria-label={`Increase ${item.name} quantity`}
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => addItem(cartItem)}
                            className={s.addButton}
                          >
                            <ShoppingCart size={16} />
                            Add
                            <ArrowRight size={16} />
                          </button>
                        )}
                      </div>
                    </div>

                    <div className={s.cardBottomBar} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
   