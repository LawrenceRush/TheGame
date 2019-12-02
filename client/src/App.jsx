/* eslint-disable react/prefer-stateless-function */
import React,{useState} from "react";
import { BrowserRouter } from "react-router-dom";
import P5Wrapper from 'react-p5-wrapper';
import sketch from "./components/sketches/sketchOne.js"
import kitchen from "./components/sketches/sketchKitchen.js"
import library from "./components/sketches/sketchLibrary" 
import bedroom from "./components/sketches/bedroomSketch"



function App() {
  const [location, setLocation] = useState({library: false, livingRoom: false, bedRoom: false, kitchen: false, bedroom: true});
  const[modalStatus, changeModalStatus] = useState(false)
  return (
    <div>
    {location.livingRoom && <P5Wrapper props={modalStatus} sketch={sketch} />}
    {location.kitchen && <P5Wrapper sketch={kitchen} />}
    {location.library && <P5Wrapper sketch={library} />}
    {location.bedroom && <P5Wrapper sketch={bedroom} />}
    </div>
  );
}

export default App;
