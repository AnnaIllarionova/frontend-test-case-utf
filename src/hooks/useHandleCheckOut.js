import { useDispatch } from "react-redux";

export const useHandleCheckOut = () => {
  const dispatch = useDispatch();

  const handleCheckout = ({setShowCheckout, setIsOpen}) => {
    setShowCheckout(true);

    setTimeout(() => {
      alert("Заказ оформлен!");
      dispatch({ type: "app/clearCart" });
      setShowCheckout(false);
      setIsOpen(false);
    }, 1000);
  };

  return {handleCheckout}
};
