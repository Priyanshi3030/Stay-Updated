import React from "react";

const NewsItems = (props) => {
  let { title, description, imgURL, newsURL, author, date, source } = props;
  return (
    <div>
      <div className="card" style={{ width: "25rem", padding: "1rem",backgroundColor:"" }}>
        <img src={imgURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h6 className="card-title">
            {" "}
            {title}{" "}
            <span
              style={{ backgroundColor: "grey" , color:"black"}}
              className="badge "
            >
              {source}
            </span>
          </h6>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">Author: {author} </small>
          </p>
          <p className="card-text">
            <small className="text-muted">
              {new Date(date).toGMTString()}{" "}
            </small>
          </p>
          <a 
            href={newsURL}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark "
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
