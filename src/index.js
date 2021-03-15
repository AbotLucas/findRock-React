import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* reportWebVitals(); */

/* let elemento = <p>Hola, soy Lucas desde JSX</p>;
let container = document.getElementById("root");
ReactDOM.render(elemento, container); */

/* let nombree = "Lucas";
let apellido = "Abon";
let jsxMultiple = (
  <div>
    <h1>
      Soy una variable con muchos elementos osea {nombree + " " + apellido}{" "}
    </h1>
    <h3>Queloque</h3>
    <p>parrafito</p>
  </div>
);
let jsx = React.createElement("h1", {}, "Hola soy Lucas desde Create Element");
let container = document.getElementById("root");
ReactDOM.render(jsxMultiple, container); */
