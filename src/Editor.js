import React from "react";
import PropTypes from "prop-types";

const Editor = (props) => {
  Editor.propTypes = {
    placeholderText: PropTypes.string,
    handleEditorChange: PropTypes.func,
    maximized: PropTypes.object,
  };

  return (
    <div className="text-center editor">
      <textarea
        id="editor"
        value={props.placeholderText}
        onChange={(event) => props.handleEditorChange(event)}
        style={props.maximized}
      ></textarea>
    </div>
  );
};

export default Editor;
