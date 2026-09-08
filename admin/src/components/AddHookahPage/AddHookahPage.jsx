

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        
        /* Override browser autofill background */
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 1000px #000 inset !important;
          -webkit-text-fill-color: #fff !important;
          background-color: #000 !important;
          background: #000 !important;
        }
        input:-moz-autofill {
          background-color: #000 !important;
          color: #fff !important;
        }
        
        .card-glow {
          box-shadow: 0 25px 50px -12px rgba(255, 215, 0, 0.12), inset 0 1px 2px rgba(255, 255, 255, 0.03);
        }
        .toast-animate {
          animation: slideDown 0.3s ease-out forwards;
        }
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-20px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .btn-glow {
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          box-shadow: 0 8px 24px -6px rgba(251, 191, 36, 0.4);
        }
        .btn-glow:hover {
          box-shadow: 0 12px 32px -6px rgba(251, 191, 36, 0.6);
          transform: translateY(-2px) scale(1.02);
        }
        .upload-area {
          background: radial-gradient(circle at 30% 30%, rgba(255, 215, 0, 0.03), transparent 70%);
        }
      `}</style>


      
          {/* Fields Grid */}
          <div className={s.fieldsGrid}>
            <InputField
              icon={Tag}
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Pharaoh's Crown"
            />
            <InputField
              icon={Weight}
              label="Weight / Size"
              name="weight"
              value={form.weight}
              onChange={handleChange}
              placeholder="e.g. 1 set (15 mm)"
            />
            <InputField
              icon={BadgeIndianRupee}
              label="Selling Price"
              type="number"
              name="selling"
              value={form.selling}
              onChange={handleChange}
              placeholder="49.99"
              prefix="₹"
            />
            <InputField
              icon={BadgeIndianRupee}
              label="Original Price"
              type="number"
              name="original"
              value={form.original}
              onChange={handleChange}
              placeholder="69.99"
              prefix="₹"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className={s.companyLabel}>
              <Building className={s.companyIcon} /> Company Name
            </label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              autoComplete="off"
              placeholder="e.g. Hookah Masters LLC"
              className={s.companyInput}
            />
          </div>

          {/* Submit Button */}
          <div className={s.submitWrapper}>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${s.submitButton} btn-glow`}
            >
              {isSubmitting ? (
                <Loader2 className={s.submitIcon} />
              ) : (
                <ArrowRight className={s.submitIcon} />
              )}
              <span>{isSubmitting ? "Adding..." : "Add Hookah"}</span>
            </button>
          </div>
  