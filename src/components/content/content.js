/* eslint-disable no-throw-literal */
import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";
import PropTypes from "prop-types";
import styles from "./content.module.scss";

const Content = ({ page = "home" }) => {
  const [error, setErrors] = useState(false);
  const [data, setData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setErrors(false);
      const url = `./pages/${page}.md`;
      try {
        const response = await fetch(url);
        if (response.status === 404) {
          setData(false);
          throw "Page Not Found";
        }
        const markDown = await response.text();
        setData(markDown);
      } catch (err) {
        setErrors(err);
      }
    };
    fetchData();
  }, [page]);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {error && <p>{error}</p>}
        {data && <Markdown escapeHtml source={data} />}
      </div>
    </div>
  );
};

Content.defaultProps = {
  page: "home"
};

Content.propTypes = {
  page: PropTypes.string
};

export default Content;
