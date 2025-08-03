import React from "react";
import JobDetails from "./JobDetails";
import JobTags from "./JobTags";

const JobCard = ({ item, handleAddFilter }) => {
  return (
    <article className={item.featured ? "featured-left-border" : ""}>
      <div className="job-info">
        <JobDetails item={item} />
        <hr />
        <JobTags item={item} handleAddFilter={handleAddFilter} />
      </div>
    </article>
  );
};

export default JobCard;
