function Toolbar(props) {
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
}

export default Toolbar;
