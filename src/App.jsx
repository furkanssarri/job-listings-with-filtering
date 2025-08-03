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

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <>
      <Header />
      <Main filters={filters} handleAddFilter={handleAddFilter} />
      <Footer />
    </>
  );
}

export default App;
