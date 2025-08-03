const Filterbar = ({ filters, handleRemoveFilter, handleClearAllFilters }) => {
  return (
    <div className="filters-wrapper">
      {filters.map((filter) => (
        <div key={filter} className="filters">
          <span className="filter-tag">
            {filter}
            <button
              type="button"
              className="remove-filter"
              onClick={() => handleRemoveFilter(filter)}
            >
              X
            </button>
          </span>
        </div>
      ))}
      <div className="clear-btn">
        <span className="clear-all">
          <button
            type="button"
            className="clear-filters"
            onClick={handleClearAllFilters}
          >
            Clear All
          </button>
        </span>
      </div>
    </div>
  );
};

export default Filterbar;
