/* eslint-disable react-refresh/only-export-components */
import C1 from "../../assets/C1.png";
import TL1 from "../../assets/TL1.png";
import TR1 from "../../assets/TR1.png";
import LM1 from "../../assets/LM1.png";
import RM1 from "../../assets/RM1.png";
import BL1 from "../../assets/BL1.png";
import BR1 from "../../assets/BR1.png";

// Dummy content for the banner text, buttons, cards, and images
export const bannerData = {
  // Small top badge text
  badge: "Freshness Delivered Daily",

  // Main heading split in two lines for better design control
  heading: {
    line1: "Fresh Vegetables,",
    line2: "Best Deals & Offers",
  },

  // Banner description text
  description:
    "Discover farm-fresh vegetables, healthy greens, and seasonal produce with premium quality and fast delivery.",

  // Button labels and types for the CTA buttons
  buttons: [
    { label: "Shop Now", type: "primary" },
    { label: "View Fresh Picks", type: "secondary" },
  ],

  // Small feature cards shown below the text
  cards: [
    {
      icon: "Leaf",
      title: "100% Organic",
      text: "Clean and fresh produce",
    },
    {
      icon: "BadgePercent",
      title: "Best Offers",
      text: "Save more every week",
    },
    {
      icon: "Truck",
      title: "Fast Delivery",
      text: "Doorstep delivery service",
    },
  ],

  // Images used in the rotating cluster
  images: {
    center: C1,
    topLeft: TL1,
    topRight: TR1,
    leftMiddle: LM1,
    rightMiddle: RM1,
    bottomLeft: BL1,
    bottomRight: BR1,
  },
};

// SVG lines connected between images
export const BannerLines = () => {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 520 340"
      fill="none"
    >
      {/* Line from center to top-left image */}
      <line
        x1="260"
        y1="170"
        x2="170"
        y2="60"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1.5"
      />

      {/* Line from center to top-right image */}
      <line
        x1="260"
        y1="170"
        x2="350"
        y2="60"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1.5"
      />

      {/* Line from center to left-middle image */}
      <line
        x1="260"
        y1="170"
        x2="122"
        y2="208"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1.5"
      />

      {/* Line from center to right-middle image */}
      <line
        x1="260"
        y1="170"
        x2="398"
        y2="208"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1.5"
      />

      {/* Line from center to bottom-left image */}
      <line
        x1="260"
        y1="170"
        x2="170"
        y2="272"
        stroke="rgba(255,255,255,0.14)"
        strokeWidth="1.4"
      />

      {/* Line from center to bottom-right image */}
      <line
        x1="260"
        y1="170"
        x2="350"
        y2="272"
        stroke="rgba(255,255,255,0.14)"
        strokeWidth="1.4"
      />
    </svg>
  );
};

// Image cluster with rotating effect
export const BannerCluster = ({ images }) => {
  return (
    <div className="relative h-85 w-full max-w-130">
      {/* Rotating image group */}
      <div className="absolute inset-0 animate-[spin_24s_linear_infinite]">
        {/* Imported SVG line design */}
        <BannerLines />

        {/* Top-left image */}
        <div className="absolute left-37.5 top-5 h-14 w-14 overflow-hidden rounded-full border-4 border-white shadow-xl sm:h-16 sm:w-16">
          <img
            src={images.topLeft}
            alt="Fresh tomatoes"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Top-right image */}
        <div className="absolute right-37.5 top-5 h-14 w-14 overflow-hidden rounded-full border-4 border-white shadow-xl sm:h-16 sm:w-16">
          <img
            src={images.topRight}
            alt="Organic carrots"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Left-middle image */}
        <div className="absolute left-20.5 top-37.5 h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-xl sm:h-18 sm:w-18">
          <img
            src={images.leftMiddle}
            alt="Fresh greens"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right-middle image */}
        <div className="absolute right-20.5 top-37.5 h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-xl sm:h-18 sm:w-18">
          <img
            src={images.rightMiddle}
            alt="Vegetable bowl"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Bottom-left image */}
        <div className="absolute left-37.5 top-63.5 h-14 w-14 overflow-hidden rounded-full border-4 border-white shadow-xl sm:h-16 sm:w-16">
          <img
            src={images.bottomLeft}
            alt="Farm fresh produce"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Bottom-right image */}
        <div className="absolute right-37.5 top-63.5 h-14 w-14 overflow-hidden rounded-full border-4 border-white shadow-xl sm:h-16 sm:w-16">
          <img
            src={images.bottomRight}
            alt="Healthy vegetables"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Center main image */}
      <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 overflow-hidden  sm:h-44 sm:w-44">
        <img
          src={images.center}
          alt="Fresh vegetables"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

// rounded-full border-4 border-white shadow-2xl
