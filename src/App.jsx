import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [filters, setFilters] = useState([]);

  const handleAddFilter = (filter) => {
    const newFilter = filters.includes(filter) ? null : filter;
    if (newFilter !== null) {
      setFilters([...filters, newFilter]);
    }
  };

  const handleRemoveFilter = (filter) => {
    if (filter) {
      setFilters(filters.filter((f) => f !== filter));
    }
  };

  const handleClearAllFilters = () => {
    setFilters([]);
  };

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <>
      <Header />
      <Main
        filters={filters}
        handleAddFilter={handleAddFilter}
        onRemoveFilter={handleRemoveFilter}
        onClearAllFilters={handleClearAllFilters}
      />
      <Footer />
    </>
  );
}

export default App;
