/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import P5Wrapper from 'react-p5-wrapper';
import sketch from "./components/sketches/sketchOne.js"



function App() {
  return (
    <P5Wrapper sketch={sketch} />
  );
}

export default App;
