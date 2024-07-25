import React from "react";
import ReactDom from "react-dom/client"

// React.createElement => object =>HTMLElement(render)

// const heading=React.createElement("h1",{id:"heading"},"Parent element");

// we need to jsx not  jsx =>react.createlement =>react.object => render htmml

const jsxheading= <h1 className="ead" tabIndex="5">React using jsx syntax</h1>;

// console.log(heading);
// const root=ReactDom.createRoot(document.getElementById("root"));
// root.render(jsxheading);


// React Element
const Head=(
  <h1 className="head" tabIndex="5">
    Namaste React using react element
  </h1>
)

// functional element

const Heading=()=>(
  <h1 className="head" tabIndex="5">
    Namaste React using functional
  </h1>
)
// functional component
const HeadingComponent=()=>(
  <div className="container">
    {Head}
    <Heading/>
  <h1>Reactjs using Jsx via functional component</h1>
  </div>
)

const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
// root.render(heading);