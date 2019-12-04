import React from 'react'
import BookShelf from './BookShelf'
import Furniture from "./Furniture"
// [bookShelfImg, door, clock, organ,  sideWaysCabinet,  sideWaysCabinetTwo, stairs, window, chessBoard, roundTable, longTable, bed, kitchenCounter, dresser, dresser2, mirror, largerCabinet, filledBookShelf, halfFullBookShelf]

function generateKitchenFurniture(p, furniture, collisonObj, furnitureNames) {
   
    let posX = p.width/1.06
    let posY =  p.height/2
    
    let coffeeTable1Specs = {posX: p.width/2.4, posY:p.height/2.3, width: p.width/24, height:p.height/7 }
    let coffeeTable2Specs = {posX: p.width/2.4, posY:p.height/1.4, width: p.width/24, height:p.height/7 }
    let coffeeTable3Specs = {posX: p.width/1.7, posY:p.height/1.4, width: p.width/24, height:p.height/7 }
    let coffeeTable4Specs = {posX: p.width/1.7, posY:p.height/2.3, width: p.width/24, height:p.height/7 }
    let purpleRugSpecs = {posX: p.width/2, posY:p.height/1, width: p.width/24, height:p.height/25 }
    let coffeeTable1 = new Furniture(p, furniture[19], coffeeTable1Specs.posX, coffeeTable1Specs.posY, coffeeTable1Specs.width, coffeeTable1Specs.height, collisonObj, furnitureNames[19])
    let coffeeTable2 = new Furniture(p, furniture[19], coffeeTable2Specs.posX, coffeeTable2Specs.posY, coffeeTable2Specs.width, coffeeTable2Specs.height, collisonObj, furnitureNames[19])
    let coffeeTable3 = new Furniture(p, furniture[19], coffeeTable3Specs.posX, coffeeTable3Specs.posY, coffeeTable3Specs.width, coffeeTable3Specs.height, collisonObj, furnitureNames[19])
    let coffeeTable4 = new Furniture(p, furniture[19], coffeeTable4Specs.posX, coffeeTable4Specs.posY, coffeeTable4Specs.width, coffeeTable4Specs.height, collisonObj, furnitureNames[19])
    let purpleRug = new Furniture(p, furniture[21], purpleRugSpecs.posX, purpleRugSpecs.posY, purpleRugSpecs.width, purpleRugSpecs.height, collisonObj, furnitureNames[21])
    coffeeTable1.render()
    coffeeTable2.render()
    coffeeTable3.render()
    coffeeTable4.render()
    purpleRug.render()
    let bookShelfHeight = p.height/7
    let bookShelfWidth =  p.width/19
    for(let wCounter = 0; wCounter<p.windowWidth*.75; wCounter+=bookShelfWidth){
        p.image(furniture[18], wCounter , p.height/20,  bookShelfWidth, p.height/7)
    }
    let row1Starter = p.width/5
    for(let wCounter = 0; wCounter<p.windowWidth*.75; wCounter+=bookShelfWidth){
        p.image(furniture[17], row1Starter , p.height/4,  bookShelfWidth, bookShelfHeight)
        row1Starter = p.width/1.3
    }

    let row2Starter = p.width/5
    for(let i = 0; i<2; i++){
        p.image(furniture[17], row2Starter , p.height/1.4,  bookShelfWidth, bookShelfHeight)
        row2Starter = p.width/1.3
    }

    let row3Starter = p.width/5
    for(let i = 0; i<2; i++){
        p.image(furniture[17], row3Starter , p.height/2,  bookShelfWidth, bookShelfHeight)
        row3Starter = p.width/1.3
    }

  }

  
  


export default generateKitchenFurniture