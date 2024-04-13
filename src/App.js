import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import {marked} from 'marked';


const App = () => {
  const [markDown, setMarkDown] =
    useState(`# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine === '\`\`\`' && lastLine === '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
      - With different indentation levels.
        - That look like this.
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`);

  return (
    <div
      className="w-screen flex flex-col p-4 items-center"
      style={{ backgroundColor: "rgb(135,181,181)" }}
    >
      <div
        className="flex flex-col justify-center mb-6 border border-black"
        style={{ maxWidth: "60vw" }}
      >
        <div
          className="w-auto h-10 p-2 font-bold"
          style={{ backgroundColor: "rgb(74,163,163)"}}
        >
          <i className="fas fa-free-code-camp" title="no-stack-dub-sack"></i>
          Editor<i className="fas fa-arrows-alt"></i>
        </div>

        <textarea id="editor"
          className="outline-none focus:outline-none"
          rows={10}
          cols={88}
          value={markDown}
          onChange={(e) => setMarkDown(e.target.value)}
          style={{paddingLeft: "1rem", paddingTop: "0.1rem", backgroundColor: "rgb(192,216,216)"}}
        ></textarea>
      </div>

      <div className="" style={{ backgroundColor: "rgb(192,216,216)", maxWidth: "90%"}}>
        <div
          className="w-auto h-10 p-2 font-bold"
          style={{ backgroundColor: "rgb(74,163,163)"}}
        >
          <i className="fas fa-free-code-camp" title="no-stack-dub-sack"></i>
          Previewer<i className="fas fa-arrows-alt"></i>
        </div>
        <div id="preview"
          className="border border-black"
          style={{ backgroundColor: "rgb(192,216,216)", paddingLeft: "1rem", paddingTop: "0.1rem", paddingBottom: "0.3rem", paddingRight: "1rem"}}
        >
          <div dangerouslySetInnerHTML={{__html:marked(markDown)}}>
          </div>
          {/* <ReactMarkdown>{markDown}</ReactMarkdown> */}
        </div>
      </div>
    </div>
  );
};

export default App;
