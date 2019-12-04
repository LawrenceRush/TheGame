import React from 'react'
import BookShelf from './BookShelf'
import Furniture from "./Furniture"

//    let preFurniture = [bookShelfImg, door, clock, organ,  sideWaysCabinet,  sideWaysCabinetTwo, stairs, window, chessBoard, roundTable, longTable, bed, kitchenCounter, dresser, dresser2, mirror, largerCabinet, filledBookShelf, halfFullBookShelf]

function generateFurniture(p, furniture, collisonObj, furnitureNames) {
    let posX = p.width/1.06
    let posY =  p.height/2

    let cabinetSpecs = {posX: p.width/2.50, posY:p.height/3, width: p.width/20, height:p.height/5 }
    let bedSpecs = {posX: p.width/2.05, posY:p.height/4.5, width: p.width/20, height:p.height/5 }
    let mirrorSpecs = {posX: p.width/1.8, posY:p.height/7, width: p.width/24, height:p.height/7}
    let greenRugSpecs = {posX: p.width/2, posY:p.height/1, width: p.width/24, height:p.height/25 }
    let sideWaysCabinet = new Furniture(p, furniture[4], cabinetSpecs.posX, cabinetSpecs.posY, cabinetSpecs.width, cabinetSpecs.height, collisonObj, furnitureNames[4])
    let bed = new Furniture(p, furniture[11], bedSpecs.posX, bedSpecs.posY, bedSpecs.width, bedSpecs.height, collisonObj, furnitureNames[11])
    let mirror =  new Furniture(p, furniture[15], mirrorSpecs.posX, mirrorSpecs.posY, mirrorSpecs.width, mirrorSpecs.height, collisonObj, furnitureNames[15])
    let greenRug = new Furniture(p, furniture[22], greenRugSpecs.posX, greenRugSpecs.posY, greenRugSpecs.width, greenRugSpecs.height, collisonObj, furnitureNames[22])

    sideWaysCabinet.render()
    bed.render()
    mirror.render()
    greenRug.render()
    p.line(p.width/2.7, p.height/20, p.width/2.7, p.height/2.3);
    p.line(p.width/1.7, p.height/20, p.width/1.7, p.height/2.3);
    p.line(p.width/1.7, p.height/20, p.width/2.7, p.height/20);
    p.line(p.width/2.7, p.height/2.3,p.width/1.7, p.height/2.3);
   
    
}

export default generateFurniture
