import "./index.scss";
import Toolbar from "./Toolbar";
import Editor from "./Editor";
import Preview from "./Preview";
import React from "react";
// import ReactDOM from "react-dom/client";

function App() {
  const placeholder = `# Seja bem vindo ao meu Editor de Markdown!

## Este é um subtítulo...
### E aqui tem outras coisas legais:

Aqui temos código em Javascript, \`<div></div>\`, entre 2 backticks/crases.

\`\`\`
// Abaixo, código em multi-linhas:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

Você também pode escrever texto em **negrito**... uau!
Ou _itálico_.
Ou... você também pode usar... **_ambos!_**
E sinta-se à vontade caso ~~queira riscar qualquer coisa~~.

Há também [links](https://github.com/rafael-lima-vasconcelos), e
> Citações em bloco!

E, se você tiver muito empolgado mesmo, também é possível criar tabelas:

Título 1 | Título 2 | Título 3
------------ | ------------- | -------------
Seu conteúdo pode | estar aqui, e ele | pode estar aqui...
E aqui. | Okay. | Acho que você já entendeu.

- E claro, também temos listas.
  - Algumas são com marcadores circulares.
     - Com diferentes níveis de identação.
        - Como neste exemplo.


1. E há também listas numeradas.
1. Use só 1's se quiser!
1. E por último, mas não menos importante, você também pode inserir imagens usando links:

![The Moon](https://freenaturestock.com/wp-content/uploads/freenaturestock-1983-1024x683.jpg)
`;

  const [state, setState] = React.useState({
    editorMaximized: false,
    previewMaximized: false,
    placeholderText: placeholder,
  });

  function handleClick(event) {
    if (event.target.id === "editorToolbar") {
      setState((prevState) => ({
        ...prevState,
        editorMaximized: !state.editorMaximized,
        previewMaximized: false,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        previewMaximized: !state.previewMaximized,
        editorMaximized: false,
      }));
    }
  }

  function handleEditorChange(event) {
    const newValue = event.target.value;
    setState((prevState) => {
      return { ...prevState, placeholderText: newValue };
    });
  }

  if (state.editorMaximized === false && state.previewMaximized === false) {
    return (
      <div className="app">
        <Toolbar
          id="editorToolbar"
          toolbarIcon="fa fa-pencil-square-o"
          text="Editor"
          expandIcon="fa fa-arrows-alt"
          handleClick={handleClick}
        />
        <Editor
          placeholderText={state.placeholderText}
          handleEditorChange={handleEditorChange}
        />
        <Toolbar
          toolbarIcon="fa fa-file-text-o"
          text="Preview"
          id="previewToolbar"
          expandIcon="fa fa-arrows-alt"
          handleClick={handleClick}
        />
        <Preview placeholderText={state.placeholderText} />
      </div>
    );
  } else if (state.editorMaximized && !state.previewMaximized) {
    return (
      <div className="app">
        <Toolbar
          toolbarIcon="fa fa-pencil-square-o"
          text="Editor"
          expandIcon="fa fa-compress"
          handleClick={handleClick}
          id="editorToolbar"
        />
        <Editor
          placeholderText={state.placeholderText}
          handleEditorChange={handleEditorChange}
          handleClick={handleClick}
          maximized={{ height: "95vh" }}
        />
      </div>
    );
  } else {
    return (
      <div className="app">
        <Toolbar
          toolbarIcon="fa fa-file-text-o"
          text="Preview"
          handleClick={handleClick}
          id="previewToolbar"
          expandIcon="fa fa-compress"
        />
        <Preview
          placeholderText={state.placeholderText}
          handleClick={handleClick}
        />
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("root"));

export default App;
