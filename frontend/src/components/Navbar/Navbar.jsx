   {/* Left: Logo + Store Name */}
        <Link to="/" className={s.logoLink}>
          <div className={s.logoWrapper}>
            <div className={s.logoImageWrapper}>
              <img
                src={freshmartLogo}
                alt="FreshMart Grocery logo"
                className={s.logoImage}
              />
            </div>

            <div className={s.logoTextWrapper}>
              <h1 className={s.logoTitle}>FreshMart Grocery</h1>
              <p className={s.logoSubtitle}>Fast Grocery Delivery</p>
            </div>
          </div>
        </Link>

        {/* Center: Search Bar */}
        <form onSubmit={handleSearch} className={s.searchForm}>
          <div className={s.searchContainer}>
            <div className={s.searchInputWrapper}>
              <Search className={s.searchIcon} />
              <input
                type="text"
                placeholder="Search for products, brands, categories..."
                value={searchTerm}
                onChange={handleSearchChange}
                className={s.searchInput}
              />
            </div>

            <button type="submit" className={s.searchButton}>
              Search
            </button>
          </div>
        </form>

        {/* Right: Login + Cart */}
        <div className={s.actionsWrapper}>
          <button
            onClick={() => navigate("/orders")}
            className={s.actionButton}
          >
            <PackageCheck className={s.actionIcon} />
            <span className="truncate">My Orders</span>
          </button>

          <button
            onClick={() => navigate("/cart")}
            className={s.cartButton}
          >
            <ShoppingCart className={s.actionIcon} />
            <span>Cart</span>
            {totalItems > 0 ? (
              <span className={s.cartBadge}>{totalItems}</span>
            ) : null}
          </button>

          {isLoggedIn ? (
            <div className={s.accountDropdownWrapper}>
              <button
                type="button"
                onClick={() => setAccountOpen((open) => !open)}
                className={s.actionButton}
                aria-expanded={accountOpen}
              >
                <UserRound className={s.actionIcon} />
                <span className="truncate">Account</span>
                <ChevronDown className={s.dropdownChevron} />
              </button>

              <div
                className={`${s.dropdownMenu} ${accountOpen ? s.dropdownOpen : s.dropdownClosed}`}
              >
                <button
                  type="button"
                  onClick={() => {
                    setAccountOpen(false);
                    navigate("/address");
                  }}
                  className={s.dropdownItem}
                >
                  <MapPinPlus className={s.dropdownIcon} />
                  Add Address
                </button>

                <button
                  type="button"
                  onClick={handleLogout}
                  className={s.dropdownItem}
                >
                  <LogOut className={s.dropdownIcon} />
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => navigate("/login")}
              className={s.actionButton}
            >
              <LogIn className={s.actionIcon} />
              <span>Login</span>
            </button>
          )}
        </div>