/* const React = require('react'); */
// 1)tener react en el scope
import React from "react"
// 2)tener reactDOM en scope
import ReactDOM from "react-dom"
import App from "./App"
//metodo que no rederiza("Pinta")  nuestros componentes, aplicacion de reac o componente y b es la etiqueta del dom una unica vez por lo general es toda la aplicacion 
ReactDOM.render(<App/>,document.querySelector("#root"))
