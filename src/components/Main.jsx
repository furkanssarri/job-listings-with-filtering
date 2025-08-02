import { useEffect } from "react";
import data from "../data/data.json";

const Main = () => {
  useEffect(() => {
    console.log(data[0]);
  }, []);
  return (
    <main>
      {data &&
        data.map((item) => (
          <article
            key={item.id}
            className={item.featured ? "featured-left-border" : ""}
          >
            <div className="job-info">
              <img
                className="company-logo"
                src={item.logo}
                alt={item.company}
              />
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
                <span>
                  <a href="#">{item.role}</a>
                </span>
                <span>
                  <a href="#">{item.level}</a>
                </span>
                {item.languages &&
                  item.languages.map((language) => (
                    <span key={language}>
                      <a href="#">{language}</a>
                    </span>
                  ))}
                {item.tools &&
                  item.tools.map((tool) => (
                    <span key={tool}>
                      <a href="#">{tool}</a>
                    </span>
                  ))}
              </div>
            </div>
          </article>
        ))}
    </main>
  );
};

export default Main;
