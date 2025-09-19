import { useSelector } from "react-redux";
import { useHandleCheckOut } from "../../hooks/useHandleCheckOut";
import "./card-footer.css";
import { useState } from "react";

export const CardFooter = ({setIsOpen}) => {
  const [showCheckout, setShowCheckout] = useState(false);

  const totalPrice = useSelector((state) => state.app.totalPrice);
  const cart = useSelector((state) => state.app.cart);

  const { handleCheckout } = useHandleCheckOut();

  return (
    <div className="cart-footer">
      <div className="total">Итого: ${totalPrice}</div>
      <button
        className="checkout-btn"
        onClick={() => handleCheckout({ setIsOpen, setShowCheckout })}
        disabled={cart.length === 0 || showCheckout}
      >
        {showCheckout ? "Оформляем..." : "Оформить заказ"}
      </button>
    </div>
  );
};
