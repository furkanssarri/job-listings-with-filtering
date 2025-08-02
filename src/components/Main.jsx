import data from "../data/data.json";

const Main = () => {
  return (
    <main>
      {data &&
        data.map((item) => (
          <article key={item.id}>
            <div className="job-info">
              <img
                className="company-logo"
                src={item.logo}
                alt={item.company}
              />
              <div className="job-details">
                <div className="job-title-container">
                  <h2>{item.company}</h2>
                  <div className="job-tags-container">
                    {item.new && <span>New!</span>}
                    {item.featured && <span>Featured</span>}
                  </div>
                </div>
                <h1>{item.position}</h1>

                <div className="job-meta-container">
                  <ul>
                    <li>{item.postedAt}</li>
                    <li>{item.contract}</li>
                    <li>{item.location}</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
    </main>
  );
};

export default Main;
