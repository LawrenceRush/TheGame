import React from 'react'
import BookShelf from './BookShelf'
import Furniture from "./Furniture"
// [bookShelfImg, door, clock, organ,  sideWaysCabinet,  sideWaysCabinetTwo, stairs, window, chessBoard, roundTable, longTable, bed, kitchenCounter, dresser, dresser2, mirror, largerCabinet, filledBookShelf, halfFullBookShelf]

function generateKitchenFurniture(p, furniture, collisonObj) {
    let posX = p.width/1.06
    let posY =  p.height/2
    let kitchenCounterSpecs = {posX: p.width/8, posY:p.height/7, width: p.width/5, height:p.height/8 }
    let longTableSpecs = {posX: p.width/8, posY:p.height/2.5, width: p.width/5, height:p.height/8 }
    let longTable2Specs = {posX: p.width/8, posY:p.height/1.5, width: p.width/5, height:p.height/8 }
    let longTable3Specs= {posX: p.width/1.15, posY:p.height/2.5, width: p.width/5, height:p.height/8 }
    let longTable4Specs= {posX: p.width/1.15, posY:p.height/1.5, width: p.width/5, height:p.height/8 }
    let kitchenCounter = new Furniture(p, furniture[12], kitchenCounterSpecs.posX, kitchenCounterSpecs.posY, kitchenCounterSpecs.width, kitchenCounterSpecs.height, collisonObj)
    let longTable = new Furniture(p, furniture[10],longTableSpecs.posX,longTableSpecs.posY,longTableSpecs.width, kitchenCounterSpecs.height, collisonObj)
    let longTable2 = new Furniture(p, furniture[10],longTable2Specs.posX,longTable2Specs.posY,longTable2Specs.width, kitchenCounterSpecs.height, collisonObj)
    let longTable3 = new Furniture(p, furniture[10],longTable3Specs.posX,longTable3Specs.posY,longTable3Specs.width, kitchenCounterSpecs.height, collisonObj)
    let longTable4 = new Furniture(p, furniture[10],longTable4Specs.posX,longTable4Specs.posY,longTable4Specs.width, kitchenCounterSpecs.height, collisonObj)

    kitchenCounter.render()
    longTable.render()
    longTable2.render()
    longTable3.render()
    longTable4.render()
}

export default generateKitchenFurniture
