import { useEffect, useRef, useState } from "react";
import { statusIcons } from "../statusConfig";
import StatusBadge from "./StatusBadge";
import { statusDropdownStyles as s } from "../../../assets/dummyStyles";

const StatusDropdown = ({ order, onStatusChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ left: 0, top: 0 });

  const buttonRef = useRef(null);
  const closeTimer = useRef(null);

  const currentStatus = order.orderStatus;

  const isFinal =
    currentStatus === "Delivered" || currentStatus === "Cancelled";

  const statusFlow = {
    Processing: ["On the way", "Delivered", "Cancelled"],
    "On the way": ["Delivered", "Cancelled"],
    Delivered: [],
    Cancelled: [],
  };

  const options = statusFlow[currentStatus] || [];

  const openMenu = () => {
    clearTimeout(closeTimer.current);
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      setMenuPosition({
        left: rect.left,
        top: rect.bottom + 8,
      });
    }
    setIsOpen(true);
  };

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => {
      setIsOpen(false);
    }, 250);
  };

  useEffect(() => {
    return () => clearTimeout(closeTimer.current);
  }, []);

  if (isFinal) {
    return <StatusBadge status={currentStatus} />;
  }

  return (
    <>
      <div
        className={s.triggerWrapper}
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
      >
        <button ref={buttonRef} type="button" className={s.triggerButton}>
          <StatusBadge status={currentStatus} withChevron />
        </button>
      </div>

      {isOpen && options.length > 0 && (
        <div
          className={s.dropdownMenu}
          style={{
            left: menuPosition.left,
            top: menuPosition.top,
          }}
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
        >
          {options.map((status) => {
            const Icon = statusIcons[status];

            return (
              <button
                key={status}
                type="button"
                onClick={() => {
                  onStatusChange(order.orderId, status);
                  setIsOpen(false);
                }}
                className={s.optionButton}
              >
                {Icon && <Icon className={s.optionIcon} />}
                {status}
              </button>
            );
          })}
        </div>
      )}
    </>
  );
};

export default StatusDropdown;