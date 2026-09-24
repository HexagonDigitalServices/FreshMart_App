      <div className="pointer-events-none absolute inset-0">
        <div className={s.decorGlow1} />
        <div className={s.decorGlow2} />
        <div className={s.decorGlow3} />
      </div>

      <div className={s.container}>
        <div className={s.grid}>
          {/* Brand */}
          <div className={s.brandWrapper}>
            <div className={s.brandHeader}>
              <div className={s.logoContainer}>
                <div className={s.logoDot} />
                <img
                  src={freshmartLogo}
                  alt="FreshMart Grocery logo"
                  className={s.logoImage}
                />
              </div>

              <div>
                <h2 className={s.brandTitle}>
                  FreshMart{" "}
                  <span className={s.brandHighlight}>Grocery</span>
                </h2>
              </div>
            </div>

            <p className={s.brandDescription}>
              Shop fresh items, snacks, drinks, and daily essentials in one
              place with a fast, simple, and premium shopping experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={s.sectionTitle}>Quick Links</h3>
            <ul className={s.linkList}>
              {quickLinks.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <Link
                      to={item.href}
                      className={s.linkItem}
                    >
                      <span className={s.linkBullet} />
                      {item.label}
                      <ArrowUpRight className={s.linkArrow} />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => scrollToSection(item.sectionId)}
                      className={s.linkItem}
                    >
                      <span className={s.linkBullet} />
                      {item.label}
                      <ArrowUpRight className={s.linkArrow} />
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className={s.categoriesTitle}>Grocery Aisles</h3>

            <div className={s.categoriesGrid}>
              {footerCategories.map((category) => (
                <Link
                  key={category.name}
                  to={category.href}
                  className={s.categoryLink}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className={s.sectionTitle}>Contact</h3>

            <div className={s.contactList}>
              <div className={s.contactItem}>
                <Mail className={s.contactIcon} />
                <span>contact@hexagondigitalservices.com</span>
              </div>

              <div className={s.contactItem}>
                <Phone className={s.contactIcon} />
                <span>+91 9336501932</span>
              </div>

              <div className={s.contactItem}>
                <MapPin className={s.contactIcon} />
                <span>India</span>
              </div>

              <a
                href="https://hexagondigitalservices.com/"
                target="_blank"
                rel="noreferrer"
                className={s.websiteButton}
              >
                <Globe className={s.websiteIcon} />
                Visit Website
                <ArrowUpRight className={s.websiteArrow} />
              </a>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className={s.bottomBar}>
          <div className={s.bottomBarInner}>
            <p className={s.copyright}>
              © {new Date().getFullYear()} Hexagon Digital Services. All rights
              reserved.
            </p>

            <div className={s.designerWrapper}>
              <span className={s.designerLabel}>Designed by</span>
              <a
                href="https://hexagondigitalservices.com/"
                target="_blank"
                rel="noreferrer"
                className={s.designerLink}
              >
                Hexagon Digital Services
                <ArrowUpRight className={s.designerArrow} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes torchMove {
          0% { transform: translateX(-20%) translateY(0px); opacity: 0.45; }
          50% { transform: translateX(20%) translateY(8px); opacity: 0.75; }
          100% { transform: translateX(-20%) translateY(0px); opacity: 0.45; }
        }
      `}</style>

      <div
        className={s.glowLine}
        style={s.glowAnimation}
      />