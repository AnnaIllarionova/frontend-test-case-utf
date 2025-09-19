import { useDispatch } from "react-redux";
import "./card-item.css";

export const CardItem = ({ item }) => {
  const dispatch = useDispatch()
  
  const handleRemoveItem = (id) => {
    dispatch({ type: "app/removeFromCart", payload: id });
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    dispatch({ type: "app/updateQuantity", payload: { id, quantity } });
  };

  return (
    <div className="cart-item">
      <img src={item.image || ''} alt={item.name} />
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>${item.price}</p>
        <div className="quantity-controls">
          <button
            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>
        Удалить
      </button>
    </div>
  );
};
