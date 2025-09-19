import './search.css'

export const Search = ({ setSearchTerm, searchTerm }) => {

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Поиск товаров..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};
