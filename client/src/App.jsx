/* eslint-disable react/prefer-stateless-function */
import React,{useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';

import { BrowserRouter } from "react-router-dom";
import P5Wrapper from 'react-p5-wrapper';
import sketch from "./components/sketches/sketchOne.js"
import kitchen from "./components/sketches/sketchKitchen.js"
import library from "./components/sketches/sketchLibrary" 
import bedroom from "./components/sketches/bedroomSketch"
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './components/model'
import dialogue from './components/dialouge'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import './index.css';
import API from "./utils/API";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    paddingTop: '10px',
    paddingBottom: '10px',
    fontFamily: 'Press+Start+2P !important'
  },
}));



function App() {
  const classes = useStyles();
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
   loadTitle()
    }, []);

async function loadTitle() {
  const { data } = await API.getTitle();
  console.log(data)
  //setBooks(data);
}
  return (
   
    <div>
       <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
     
    </IconButton>
    <Typography variant="h3" className={classes.title}>
      Detective Viking
    </Typography>
  </Toolbar>
</AppBar>
    {location.livingRoom && <P5Wrapper  sketch={sketch} props={[modalStatus,changeModalContentHandler, setLocation]} />}
    {location.kitchen && <P5Wrapper sketch={kitchen} />}
    {location.library && <P5Wrapper sketch={library} />}
    {location.bedroom && <P5Wrapper sketch={bedroom} />}
    {modalStatus && <Modal props ={modalContent}/>}
    </div>
  );
}

export default App;
