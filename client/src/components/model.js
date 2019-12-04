import React from 'react'
import Modal from 'react-bootstrap/Modal'
import dialouge from './dialouge'
function modal(props) {
    let playerStim =props.props
    return (
       
        <div>
          <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
<p>{playerStim}</p>
  </Modal.Body>

  <Modal.Footer>
  </Modal.Footer>
</Modal.Dialog>  
        </div>
    )
}

export default modal
