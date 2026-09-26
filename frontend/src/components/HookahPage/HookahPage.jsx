   <div className={s.productGrid}>
          {visibleProducts.map((item) => {
            const cartItem = {
              cartId: `hookah-${item._id}`,
              source: "Hookah",
              category: "Hookah Products",
              id: item._id,
              productModel: "Hookah",
              image: item.image?.url,
              name: item.name,
              company: item.company,
              price: item.sellingPrice,
              oldPrice: item.oldPrice,
              size: item.size,
            };
            const quantity = getQuantity(cartItem.cartId);

            return (
              <div key={cartItem.cartId} className={s.productCard}>
                <div className={s.cardOverlay1} />
                <div className={s.cardOverlay2} />
                <div className={s.cardOverlay3} />

                <div className={s.cardContent}>
                  <div className={s.imageWrapper}>
                    <img
                      src={item.image?.url}
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
                        <span className={s.priceCurrent}>₹{item.sellingPrice}</span>
                        <span className={s.priceOld}>₹{item.oldPrice}</span>
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
                          Add to Cart
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

        {hasMoreProducts && (
          <div className={s.viewMoreWrapper}>
            <Link to="/hookah-products" className={s.viewMoreLink}>
              View More Products
              <ArrowRight size={18} className={s.viewMoreArrow} />
            </Link>
          </div>
        )}