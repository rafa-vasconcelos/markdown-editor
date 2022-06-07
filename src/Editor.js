function Editor(props) {
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
}

export default Editor;
