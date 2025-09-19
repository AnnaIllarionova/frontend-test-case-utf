import { useState } from "react";
import { useSelector } from "react-redux";
import "./card.css";
import { CardItem } from "../card-item/card-item";
import { CardFooter } from "../card-footer/card-footer";

export const Cart = () => {
  const cart = useSelector((state) => state.app.cart);
  const cartCount = useSelector((state) => state.app.cartCount);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cart">
      <button className="cart-toggle" onClick={() => setIsOpen(!isOpen)}>
        Корзина ({cartCount})
      </button>

      {isOpen && (
        <div className="cart-dropdown">
          <div className="cart-header">
            <h3>Корзина</h3>
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>

          <div className="cart-items">
            {cart.length === 0 ? (
              <p>Корзина пуста</p>
            ) : (
              cart.map((item) => <CardItem key={item.id} item={item} />)
            )}
          </div>
          <CardFooter setIsOpen={setIsOpen} />
        </div>
      )}
    </div>
  );
};
