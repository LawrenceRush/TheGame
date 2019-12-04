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



function App() {
  const [books, setBooks] = useState([])
  const [location, setLocation] = useState({library: false, livingRoom: true, bedroom: false, kitchen: false});
  const[modalStatus, changeModalStatus] = useState(true)
  const [modalContent, changeModalContent] = useState(dialogue.baseState)

  if(dialogue){
   
  }

  const changeModalContentHandler = (name) =>{
    console.log("attempt to change",dialogue[name].line1)
    changeModalContent(dialogue[name].line1)
  }


  useEffect(() => {
    API.getTitle()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
      console.log(books)
}, [books]);

  return (
   
    <div>
      
    {location.livingRoom && <P5Wrapper  sketch={sketch} props={[modalStatus,changeModalContentHandler, setLocation]} />}
    {location.kitchen && <P5Wrapper sketch={kitchen} />}
    {location.library && <P5Wrapper sketch={library} />}
    {location.bedroom && <P5Wrapper sketch={bedroom} />}
    {modalStatus && <Modal props ={modalContent}/>}
    </div>
  );
}

export default App;
