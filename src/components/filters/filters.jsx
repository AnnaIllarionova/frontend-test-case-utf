import { useState } from "react";
import { Search } from "../search/search";
import "./filters.css";

export const Filters = ({
  setSearchTerm,
  searchTerm,
  sortBy,
  setSortBy,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [showFilters, setShowFilters] = useState(false);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="filters">
      <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>

      <div className="filter-controls">
        {showFilters ? (
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="all">Все категории</option>
            <option value="phones">Телефоны</option>
            <option value="laptops">Ноутбуки</option>
            <option value="tablets">Планшеты</option>
          </select>
        ) : null}

        {showFilters ? (
          <select value={sortBy} onChange={handleSortChange}>
            <option value="name">По названию</option>
            <option value="price">По цене</option>
          </select>
        ) : null}

        <button onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? "Скрыть фильтры" : "Показать фильтры"}
        </button>
      </div>
    </div>
  );
};
