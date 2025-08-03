import React from "react";

const JobTags = ({ item, handleAddFilter }) => {
  return (
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
  );
};

export default JobTags;
