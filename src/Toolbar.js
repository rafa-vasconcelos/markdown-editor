import React from "react";
import PropTypes from "prop-types";

const Toolbar = (props) => {
  Toolbar.propTypes = {
    id: PropTypes.string,
    toolbarIcon: PropTypes.string,
    text: PropTypes.string,
    expandIcon: PropTypes.string,
    handleClick: PropTypes.func,
  };

  return (
    <div
      id="toolbar"
      className={props.id === "editorToolbar" ? "editorWidth" : "previewWidth"}
    >
      <i className={props.toolbarIcon} /> {props.text}
      <i
        className={props.expandIcon}
        id={props.id}
        onClick={props.handleClick}
      />
    </div>
  );
};

export default Toolbar;
