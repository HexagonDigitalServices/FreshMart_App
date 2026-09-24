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
          <span className={s.toastTitle}>Login successful</span>
          <span className={s.toastSubtext}>Redirecting to home...</span>
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
          <span className={s.toastSubtext}>
            {errorMessage === "Please sign up first"
              ? "Redirecting to signup..."
              : "Please try again"}
          </span>
        </span>
      </div>

      {/* Decorative backgrounds */}
      <div className="pointer-events-none fixed inset-0">
        <div className={s.decorBg} style={s.decorGradients} />
        <div className={s.decorLine} />
      </div>

      <section className={s.section}>
        <div className={s.leftColumn}>
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
              Welcome back
            </div>

            <h1 className={s.heroHeading}>
              Sign in for your
              <span className={s.heroHighlight}>fresh grocery run.</span>
            </h1>

            <p className={s.heroDescription}>
              Continue shopping fresh essentials, snacks, drinks, and hookah
              products with a faster checkout experience.
            </p>
          </div>

          <div className={s.featureGrid}>
            {[
              { icon: ShoppingBag, label: "Easy cart" },
              { icon: ShieldCheck, label: "Secure login" },
              { icon: Sparkles, label: "Fresh offers" },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className={s.featureCard}>
                  <Icon className={s.featureIcon} />
                  <p className={s.featureLabel}>{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className={s.rightColumn}>
          <form onSubmit={handleLogin} className={s.form}>
            <div className={s.formHeader}>
              <p className={s.formLabel}>Login</p>
              <h2 className={s.formTitle}>Access your account</h2>
            </div>

            <div className={s.formFields}>
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
                <span className={s.inputLabel}>Password</span>
                <span className={s.inputWrapper}>
                  <LockKeyhole className={s.inputIcon} />
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={6}
                    placeholder="Enter password"
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

            <div className={s.forgotPasswordWrapper}>
              <Link
                to="/forgot-password"
                className={s.forgotPasswordLink}
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={s.submitButton}
            >
              {isSubmitting ? "Redirecting..." : "Login now"}
              <ArrowRight className={s.iconMd} />
            </button>

            <p className={s.signupPrompt}>
              New to FreshMart?{" "}
              <Link to="/signup" className={s.signupLink}>
                Create account
              </Link>
            </p>
          </form>
        </div>
      </section>