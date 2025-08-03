import data from "../data/data.json";
import JobCard from "./JobCard";

const Main = ({ filters, handleAddFilter }) => {
  const matchesFilters = (item) => {
    const allTags = [
      item.role,
      item.level,
      ...(item.languages || []),
      ...(item.tools || []),
    ];
    return filters.every((filter) => allTags.includes(filter));
  };

  const filteredData =
    filters.length === 0 ? data : data.filter(matchesFilters);

  return (
    <main>
      {filteredData.map((item) => (
        <JobCard key={item.id} item={item} handleAddFilter={handleAddFilter} />
      ))}
    </main>
  );
};

export default Main;
