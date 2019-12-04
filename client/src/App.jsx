/* eslint-disable react/prefer-stateless-function */
import React,{useState, useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import P5Wrapper from 'react-p5-wrapper';
import sketch from "./components/sketches/sketchOne.js"
import kitchen from "./components/sketches/sketchKitchen.js"
import library from "./components/sketches/sketchLibrary" 
import bedroom from "./components/sketches/bedroomSketch"
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './components/model'
import dialogue from './components/dialouge'
import API from "./utils/API";
import "./index.css"
import AppBar from "./components/AppBar"


function App() {
  const [title, setTitle] = useState([])
  const [location, setLocation] = useState({library: false, livingRoom: true, bedroom: false, kitchen: false});
  const[modalStatus, changeModalStatus] = useState(true)
  const [modalContent, changeModalContent] = useState(dialogue.baseState)

  if(dialogue){
   
  }

  const changeModalContentHandler = (name) =>{
    if(dialogue[name]){
    console.log("attempt to change", dialogue[name].line1)
    changeModalContent(dialogue[name].line1)
    }
  }


  useEffect(() => {
    API.getTitle()
      .then(res => 
        setTitle(res.data[0].title)
      )
      .catch(err => console.log(err));
     
}, []);

  return (
    <div>
   <AppBar props={title}/>
    <div className = "body">
      <div className = 'container'>
    {location.livingRoom && <P5Wrapper  className = "sketchDiv"sketch={sketch} props={[modalStatus,changeModalContentHandler, setLocation]} />}
    {location.kitchen && <P5Wrapper sketch={kitchen} props={[modalStatus,changeModalContentHandler, setLocation]} />}
    {location.library && <P5Wrapper sketch={library} props={[modalStatus,changeModalContentHandler, setLocation]} />}
    {location.bedroom && <P5Wrapper sketch={bedroom} props={[modalStatus,changeModalContentHandler, setLocation]}/>}
   
    </div>
    {modalStatus && <Modal props ={modalContent}/>}
    </div>
    </div>
  );
}

export default App;
