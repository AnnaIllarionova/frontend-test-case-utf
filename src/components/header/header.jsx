import { useSelector } from "react-redux";
import "./header.css";
import { useUser } from "../../hooks/useUser";

export const Header = () => {
  const user = useSelector((state) => state.app.user);

  useUser();

  return (
    <header className="header">
      <h1>🛒 Интернет-магазин</h1>
      <div className="user-info">
        {user ? <span>Привет, {user.name}!</span> : <span>Загрузка...</span>}
      </div>
    </header>
  );
};
