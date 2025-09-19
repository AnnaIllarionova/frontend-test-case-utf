import { useSelector } from "react-redux";

export const useFilteredProducts = ({
  searchTerm,
  selectedCategory,
  sortBy,
}) => {
  const products = useSelector((state) => state.app.products);

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "price") return a.price - b.price;
      return 0;
    });

  return { filteredProducts };
};
