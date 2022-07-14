import { marked } from "marked";
import Prism from "prismjs";
import React from "react";
import PropTypes from "prop-types";

const Preview = (props) => {
  Preview.propTypes = {
    placeholderText: PropTypes.string,
  };

  marked.setOptions({
    breaks: true,
    highlight: function (code) {
      return Prism.highlight(code, Prism.languages.javascript, "javascript");
    },
  });
  const renderer = new marked.Renderer();
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(props.placeholderText, { renderer: renderer }),
      }}
    ></div>
  );
};

export default Preview;
