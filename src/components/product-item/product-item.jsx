import { useDispatch } from "react-redux";
import "./product-item.css";

export const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAction = () => {
    const action = { type: "app/addToCart", payload: product };
    dispatch(action);
  };

  return (
    <div className="product-card">
      <img src={product.image || ''} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="price">${product.price}</div>
      <button onClick={handleAction}>Добавить в корзину</button>
    </div>
  );
};
