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
  const [modalResponses, changeModalResponses] = useState([])
  const [interactionName, changeInteractionName] = useState('')
  

  const changeModalContentHandler = (name) =>{
    if(dialogue[name]){
      changeInteractionName(name)
    console.log("attempt to change", dialogue[name].line)
    changeModalContent(dialogue[name].line1.line)
      let responses = []
      if(dialogue[name].line1.response1){
        responses.push(dialogue[name].line1.response1)
      }
      if(dialogue[name].line1.response2){
        responses.push(dialogue[name].line1.response2)
      }
      if(dialogue[name].line1.response3){
        responses.push(dialogue[name].line1.response3)
      }
      if(dialogue[name].line1.response4){
        responses.push(dialogue[name].line1.response4)
      }
      changeModalResponses(responses)
    }
  }
  
const advanceDiaglouge = () => {
let name = interactionName;
if(dialogue[name].line1.line == modalContent){
  changeModalContent(dialogue[name].line2.line)
  console.log(dialogue[name])
  let responses = []
  if(dialogue[name].line2.response1){
    responses.push(dialogue[name].line2.response1)
  }
  if(dialogue[name].line2.response2){
    responses.push(dialogue[name].line2.response2)
  }
  if(dialogue[name].line2.response3){
    responses.push(dialogue[name].line2.response3)
  }
  if(dialogue[name].line2.response4){
    responses.push(dialogue[name].line2.response4)
  }
 changeModalResponses(responses)
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
    {modalStatus && <Modal props ={[modalContent, modalResponses, advanceDiaglouge]}/>}
    </div>
    </div>
  );
}

export default App;
