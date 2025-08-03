import data from "../data/data.json";

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
        <article
          key={item.id}
          className={item.featured ? "featured-left-border" : ""}
        >
          <div className="job-info">
            <img className="company-logo" src={item.logo} alt={item.company} />
            <div className="job-details">
              <div className="job-title-container">
                <h1 className="text-preset-4-medium">{item.company}</h1>
                <div className="job-tags-container text-preset-4-medium">
                  {item.new && <span className="tag new">New!</span>}
                  {item.featured && (
                    <span className="tag featured">Featured</span>
                  )}
                </div>
              </div>
              <h2 className="text-preset-1-bold">{item.position}</h2>

              <div className="job-meta-container">
                <ul className="text-preset-3-medium">
                  <li>{item.postedAt}</li>
                  <li>{item.contract}</li>
                  <li>{item.location}</li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="job-tags text-preset-3-bold">
              <button type="button" onClick={() => handleAddFilter(item.role)}>
                {item.role}
              </button>
              <button type="button" onClick={() => handleAddFilter(item.level)}>
                {item.level}
              </button>
              {item.languages &&
                item.languages.map((language) => (
                  <button
                    type="button"
                    key={language}
                    onClick={() => handleAddFilter(language)}
                  >
                    {language}
                  </button>
                ))}
              {item.tools &&
                item.tools.map((tool) => (
                  <button
                    type="button"
                    key={tool}
                    onClick={() => handleAddFilter(tool)}
                  >
                    {tool}
                  </button>
                ))}
            </div>
          </div>
        </article>
      ))}
    </main>
  );
};

export default Main;
