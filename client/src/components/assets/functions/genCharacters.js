import React from 'react'
import Sprite from "./spriteConstructor"
// [bookShelfImg, door, clock, organ,  sideWaysCabinet,  sideWaysCabinetTwo, stairs, window, chessBoard, roundTable, longTable, bed, kitchenCounter, dresser, dresser2, mirror, largerCabinet, filledBookShelf, halfFullBookShelf]

function Characters(p, sprites, collisonObj, spriteNames) {
   
    let detectiveSpec = {posX: p.width/3, posY:p.height/2.3, width: p.width/17, height:p.height/8 }
   
    let detectiveSprite = new Sprite (p, sprites[0], detectiveSpec.posX, detectiveSpec.posY, detectiveSpec.width, detectiveSpec.height, collisonObj, spriteNames[0])

    detectiveSprite.render()
    
  }

  
  


export default Characters