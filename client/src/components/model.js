import React from 'react'
import Modal from 'react-bootstrap/Modal'
import dialouge from './dialouge'
import "../index.css"

function modal(props) {
    let playerStim =props.props[0]
    let responses = props.props[1]
    let advanceDialogue = props.props[2]
    console.log(responses)
    return (
       
        <div>
          <Modal.Dialog >
  

  <Modal.Body>
<p>{playerStim}</p>

  </Modal.Body>

  <Modal.Footer>
    <div className = "responses">
    {responses.map(response => (<div className="oneHundred"><button className="response" onClick={advanceDialogue} >{response}</button></div>))}
    </div>
  </Modal.Footer>
</Modal.Dialog>  
        </div>
    )
}

export default modal
