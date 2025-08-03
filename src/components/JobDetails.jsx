import React from "react";

const JobDetails = ({ item }) => {
  return (
    <div className="job-name">
      <img
        className="company-logo"
        src={item.logo}
        alt={`Logo of ${item.company}`}
      />
      <div className="job-details">
        <div className="job-title-container">
          <h2 className="text-preset-4-medium">{item.company}</h2>
          <div
            className="job-tags-container text-preset-4-medium"
            aria-label="Job status tags"
          >
            {item.new && <span className="tag new">New!</span>}
            {item.featured && <span className="tag featured">Featured</span>}
          </div>
        </div>
        <h1 className="text-preset-3-bold">{item.position}</h1>
        <div className="job-meta-container">
          <ul className="text-preset-3-medium">
            <li>{item.postedAt}</li>
            <li>{item.contract}</li>
            <li>{item.location}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
