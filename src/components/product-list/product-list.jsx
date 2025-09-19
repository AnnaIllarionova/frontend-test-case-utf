import { useSelector } from "react-redux";
import { useProducts } from "../../hooks/useProducts";
import "./product-list.css";
import { useState } from "react";
import { Filters } from "../filters/filters";
import { ProductItem } from "../product-item/product-item";
import { useFilteredProducts } from "../../hooks/useFilteredProducts";

export const ProductList = () => {
  const loading = useSelector((state) => state.app.loading);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  useProducts();
  
  const { filteredProducts } = useFilteredProducts({
    searchTerm,
    selectedCategory,
    sortBy,
  });

  if (loading) {
    return <div className="loading">Загрузка товаров...</div>;
  }

  return (
    <div className="product-list">
      <Filters
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <div className="products">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
