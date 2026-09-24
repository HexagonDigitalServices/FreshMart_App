   {/* Success Toast */}
      <div
        className={`${s.toastBase} ${s.toastSuccess} ${toastVisible ? s.toastVisible : s.toastHidden}`}
        role="status"
        aria-live="polite"
      >
        <span className={s.toastIconWrapperSuccess}>
          <CheckCircle2 className={s.iconMd} />
        </span>
        <span>
          <span className={s.toastTitle}>Signup successful</span>
          <span className={s.toastSubtext}>Redirecting to login...</span>
        </span>
      </div>

      {/* Error Toast */}
      <div
        className={`${s.toastBase} ${s.toastError} ${errorToastVisible ? s.toastVisible : s.toastHidden}`}
        role="alert"
        aria-live="assertive"
      >
        <span className={s.toastIconWrapperError}>
          <XCircle className={s.iconMd} />
        </span>
        <span>
          <span className={s.toastTitle}>{errorMessage}</span>
          <span className={s.toastSubtext}>Please try again</span>
        </span>
      </div>

      {/* background decorations */}
      <div className="pointer-events-none fixed inset-0">
        <div className={s.decorBg} style={s.decorGradients} />
        <div className={s.decorLine} />
      </div>

      <section className={s.section}>
        <div>
          <form onSubmit={handleSignup} className={s.formWrapper}>
            <div className={s.formHeader}>
              <p className={s.formLabel}>Signup</p>
              <h1 className={s.formTitle}>Create your account</h1>
              <p className={s.formSubtext}>
                Join FreshMart and start shopping your daily essentials faster.
              </p>
            </div>

            <div className={s.formFields}>
              <label className="block">
                <span className={s.inputLabel}>Full name</span>
                <span className={s.inputWrapper}>
                  <UserRound className={s.inputIcon} />
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={s.inputField}
                  />
                </span>
              </label>

              <label className="block">
                <span className={s.inputLabel}>Email address</span>
                <span className={s.inputWrapper}>
                  <Mail className={s.inputIcon} />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={s.inputField}
                  />
                </span>
              </label>

              <label className="block">
                <span className={s.inputLabel}>Phone number</span>
                <span className={s.inputWrapper}>
                  <Phone className={s.inputIcon} />
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className={s.inputField}
                  />
                </span>
              </label>

              <label className="block">
                <span className={s.inputLabel}>Password</span>
                <span className={s.inputWrapper}>
                  <LockKeyhole className={s.inputIcon} />
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={6}
                    placeholder="Create password"
                    className={s.inputField}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className={s.togglePasswordButton}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className={s.iconMd} />
                    ) : (
                      <Eye className={s.iconMd} />
                    )}
                  </button>
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={s.submitButton}
            >
              {isSubmitting ? "Redirecting..." : "Create account"}
              <ArrowRight className={s.iconMd} />
            </button>

            <p className={s.signupPrompt}>
              Already have an account?{" "}
              <Link to="/login" className={s.loginLink}>
                Login
              </Link>
            </p>
          </form>
        </div>

        <div className={s.rightColumn}>
          <Link to="/" className={s.logoLink}>
            <span className={s.logoWrapper}>
              <img
                src={freshmartLogo}
                alt="FreshMart Grocery logo"
                className={s.logoImage}
              />
            </span>
            <span>
              <span className={s.logoText}>FreshMart</span>
              <span className={s.logoSubtext}>Grocery delivery</span>
            </span>
          </Link>

          <div className={s.heroWrapper}>
            <div className={s.heroBadge}>
              <Sparkles className={s.iconSm} />
              Fresh starts here
            </div>

            <h2 className={s.heroHeading}>
              Build your basket
              <span className={s.heroHighlight}>in minutes.</span>
            </h2>

            <p className={s.heroDescription}>
              Save your details once, then move through FreshMart with quick
              ordering, cleaner checkout, and bright daily deals.
            </p>
          </div>

          <div className={s.featureGrid}>
            {[
              {
                icon: ShoppingBasket,
                title: "One-tap essentials",
                text: "Daily grocery items ready when you are.",
              },
              {
                icon: Zap,
                title: "Fast checkout",
                text: "Signup redirects you straight to login.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className={s.featureCard}>
                  <Icon className={s.featureIcon} />
                  <h3 className={s.featureTitle}>{item.title}</h3>
                  <p className={s.featureText}>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>