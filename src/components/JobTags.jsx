const JobTags = ({ item, handleAddFilter }) => {
  return (
    <div
      className="job-tags text-preset-3-bold"
      role="list"
      aria-label="Job tags"
    >
      <button
        type="button"
        aria-label={`Filter by role: ${item.role}`}
        onClick={() => handleAddFilter(item.role)}
        role="listitem"
      >
        {item.role}
      </button>
      <button
        type="button"
        aria-label={`Filter by level: ${item.level}`}
        onClick={() => handleAddFilter(item.level)}
        role="listitem"
      >
        {item.level}
      </button>
      {item.languages &&
        item.languages.map((language) => (
          <button
            type="button"
            key={language}
            aria-label={`Filter by language: ${language}`}
            onClick={() => handleAddFilter(language)}
            role="listitem"
          >
            {language}
          </button>
        ))}
      {item.tools &&
        item.tools.map((tool) => (
          <button
            type="button"
            key={tool}
            aria-label={`Filter by tool: ${tool}`}
            onClick={() => handleAddFilter(tool)}
            role="listitem"
          >
            {tool}
          </button>
        ))}
    </div>
  );
};

export default JobTags;
