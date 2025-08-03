const Filterbar = ({ filters, handleRemoveFilter, handleClearAllFilters }) => {
  return (
    <div className="filters-wrapper">
      <div className="filters text-preset-3-bold">
        {filters.map((filter) => (
          <span key={filter} className="filter-tag">
            {filter}
            <button
              type="button"
              className="remove-filter"
              onClick={() => handleRemoveFilter(filter)}
            >
              X
            </button>
          </span>
        ))}
      </div>

      <div className="clear-btn text-preset-3-bold">
        <button
          type="button"
          className="clear-filters"
          onClick={handleClearAllFilters}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filterbar;
