import React from 'react'
import BookShelf from './BookShelf'
import Furniture from "./Furniture"

//let preFurniture = [bookShelfImg, door, clock, organ,  sideWaysCabinet,  sideWaysCabinetTwo, stairs, window, chessBoard, roundTable ]
function generateFurniture(p, furniture, collisonObj) {
    let posX = p.width/1.06
    let posY =  p.height/2
    let doorSpecs = {posX: p.width/2, posY:p.height/9.5, width: p.width/20, height:p.height/8 }
    let clockSpecs = {posX: p.width/1.1, posY:p.height/8.5, width: p.width/20, height:p.height/6 }
    let organSpecs = {posX: p.width/4.5, posY:p.height/8.5, width: p.width/7, height:p.height/5 }
    let cabinetSpecs = {posX: p.width/42, posY:p.height/1.7, width: p.width/20, height:p.height/5 }
    let roundTableSpecs = {posX: p.width/2, posY:p.height/2, width: p.width/12, height:p.height/7 }
    let chessBoardSpecs = {posX: p.width/2, posY:p.height/2.05, width: p.width/30, height:p.height/20 }
    let booksShelfOne = new BookShelf(p, furniture[0], posX, posY, collisonObj)
    let door = new Furniture(p, furniture[1], doorSpecs.posX, doorSpecs.posY, doorSpecs.width, doorSpecs.height, collisonObj)
    let clock = new Furniture(p, furniture[2], clockSpecs.posX, clockSpecs.posY, clockSpecs.width, clockSpecs.height, collisonObj)
    let organ = new Furniture(p, furniture[3], organSpecs.posX, organSpecs.posY, organSpecs.width, organSpecs.height, collisonObj)
    let sideWaysCabinet = new Furniture(p, furniture[4], cabinetSpecs.posX, cabinetSpecs.posY, cabinetSpecs.width, cabinetSpecs.height, collisonObj)
    let roundTable = new Furniture(p, furniture[9],roundTableSpecs.posX,roundTableSpecs.posY,roundTableSpecs.width,roundTableSpecs.height, collisonObj)
    let chessBoard = new Furniture(p, furniture[8],chessBoardSpecs.posX,chessBoardSpecs.posY,chessBoardSpecs.width,chessBoardSpecs.height, collisonObj)

    door.render()
    clock.render()
    booksShelfOne.render()
    organ.render()
    sideWaysCabinet.render()
    roundTable.render()
    chessBoard.render()
}

export default generateFurniture
