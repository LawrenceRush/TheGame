import { func } from "prop-types";
import detectiveImg from "./../assets/images/detectiveSprites/male/detective(male)left-pixilart.png"
import knightIdeZero from "./../assets/images/knightImgs/idle0.png"
import knightIdeOne from "./../assets/images/knightImgs/idle1.png"
import knightIdeTwo from "./../assets/images/knightImgs/idle2.png"
import knightIdeThree from "./../assets/images/knightImgs/idle3.png"
import knightDownRunZero from "./../assets/images/knightImgs/runD0.png"
import knightDownRunOne from "./../assets/images/knightImgs/runD1.png"
import knightDownRunTwo from "./../assets/images/knightImgs/runD2.png"
import knightDownRunThree from "./../assets/images/knightImgs/runD3.png"
import knightRightRunZero from "./../assets/images/knightImgs/runR0.png"
import knightRightRunOne from "./../assets/images/knightImgs/runR1.png"
import knightRightRunTwo from "./../assets/images/knightImgs/runR2.png"
import knightRightRunThree from "./../assets/images/knightImgs/runR3.png"
import knightRightRunFour from "./../assets/images/knightImgs/runR4.png"
import knightRightRunFive from "./../assets/images/knightImgs/runR5.png"
import knightUpRunZero from "./../assets/images/knightImgs/runU0.png"
import knightUpRunOne from "./../assets/images/knightImgs/runU1.png"
import knightUpRunTwo from "./../assets/images/knightImgs/runU2.png"
import knightUpRunThree from "./../assets/images/knightImgs/runU3.png"
import knightUpRunFour from "./../assets/images/knightImgs/runU4.png"
import knightLeftRunZero from "./../assets/images/knightImgs/runL0.png"
import knightLeftRunOne from "./../assets/images/knightImgs/runL1.png"
import knightLeftRunTwo from "./../assets/images/knightImgs/runL2.png"
import knightLeftRunThree from "./../assets/images/knightImgs/runL3.png"
import knightLeftRunFour from "./../assets/images/knightImgs/runL4.png"
import knightLeftRunFive from "./../assets/images/knightImgs/runL5.png"
import bookShelfImg from "./../assets/images/furniture/book-shelve-pixilart.png"
import MainCharacter from "../assets/functions/MainCharacter"
import backGroundSquare from "../assets/functions/backGroundSquare"
import generateFloor from "../assets/functions/generateFloor"
import WallBoard from "../assets/functions/WallBoard";
import generateWall from "../assets/functions/generateWall"
import generateFurniture from "../assets/functions/genBedFur";
import door from "../assets/images/furniture/AnimatedHouseDoor.png"
import clock from "../assets/images/furniture/clock.png"
import organ from "../assets/images/furniture/organ.png"
import sideWaysCabinet from "../assets/images/furniture/sidewaysCabinet.png"
import sideWaysCabinetTwo from "../assets/images/furniture/otherSidewaysCabinet.png"
import stairs from "../assets/images/furniture/stairs.png"
import window from "../assets/images/furniture/window.png"
import chessBoard from "../assets/images/furniture/chessboard.png"
import roundTable from  "../assets/images/furniture/roundTable.png"
import longTable from '../assets/images/furniture/longTable.png'
import bed from '../assets/images/furniture/bed.png'
import kitchenCounter from '../assets/images/furniture/kitchenCounter.png'
import dresser from '../assets/images/furniture/dresser.png'
import dresser2 from '../assets/images/furniture/dresser2.png'
import mirror from '../assets/images/furniture/mirror.png'
import largerCabinet from '../assets/images/furniture/largerCabinet.png'
import filledBookShelf from '../assets/images/furniture/filledBookShelf.png'
import halfFullBookShelf from '../assets/images/furniture/halfFullBookShelf.png'
import woodFloor from '../assets/images/furniture/woodFloor.png'


let preFurniture = [bookShelfImg, door, clock, organ,  sideWaysCabinet,  sideWaysCabinetTwo, stairs, window, chessBoard, roundTable, longTable, bed, kitchenCounter, dresser, dresser2, mirror, largerCabinet, filledBookShelf, halfFullBookShelf]
let detective 
let img
let bookShelf
let groundTexture
let walkDownAnimation =[]
let idleAnimation = []
let leftAnimation = []
let rightAnimation = []
let walkUpAnimation = []
let furniture = []

export default function sketch(p) {
    //Pre Load (Import big things before page loads)
    p.preload=  function () {
         groundTexture = p.loadImage(woodFloor)
         img = p.loadImage(detectiveImg);
         walkDownAnimation.push(p.loadImage(knightDownRunZero))
         walkDownAnimation.push(p.loadImage(knightDownRunOne))
         walkDownAnimation.push(p.loadImage(knightDownRunTwo))
         walkDownAnimation.push(p.loadImage(knightDownRunThree))
         idleAnimation.push(p.loadImage(knightIdeZero))
         idleAnimation.push(p.loadImage(knightIdeOne))
         idleAnimation.push(p.loadImage(knightIdeTwo))
         idleAnimation.push(p.loadImage(knightIdeThree))
         leftAnimation.push(p.loadImage(knightLeftRunZero))
         leftAnimation.push(p.loadImage(knightLeftRunOne))
         leftAnimation.push(p.loadImage(knightLeftRunTwo))
         leftAnimation.push(p.loadImage(knightLeftRunThree))
         leftAnimation.push(p.loadImage(knightLeftRunFour))
         leftAnimation.push(p.loadImage(knightLeftRunFive))
         rightAnimation.push(p.loadImage(knightRightRunZero))
         rightAnimation.push(p.loadImage(knightRightRunOne))
         rightAnimation.push(p.loadImage(knightRightRunTwo))
         rightAnimation.push(p.loadImage(knightRightRunThree))
         rightAnimation.push(p.loadImage(knightRightRunFour))
         rightAnimation.push(p.loadImage(knightRightRunFive))
         walkUpAnimation.push(p.loadImage( knightUpRunZero))
         walkUpAnimation.push(p.loadImage( knightUpRunOne))
         walkUpAnimation.push(p.loadImage( knightUpRunTwo))
         walkUpAnimation.push(p.loadImage( knightUpRunThree))
         walkUpAnimation.push(p.loadImage( knightUpRunFour))
        for (var i=0; i < preFurniture.length; i++){
          furniture.push(p.loadImage(preFurniture[i]))
        }
        
         bookShelf = p.loadImage(bookShelfImg)
      }
    // Setup (Run before page loads)
    p.setup = function () {
        generateCanvas()
        detective = new MainCharacter(p, img, walkDownAnimation, idleAnimation, leftAnimation, rightAnimation, walkUpAnimation)
      
    };
    //Draw (loops once per frame{I believe})
    p.draw = function () {
        p.background(160, 167, 219);
        generateWall(p, WallBoard)
        generateFloor(p, groundTexture)
        generateFurniture(p, furniture, detective)
        detective.render()
        detective.update()
        detective.animate()
        
      
    };
    //Controls (WASD)
    p.keyPressed = function () {
        if (p.keyCode == 68){
          detective.rightmove = true;
        } else if  (p.keyCode == 65){
          detective.leftmove = true;
        } else if (p.keyCode == 87){
          detective.frontmove = true;
        } else if (p.keyCode == 83){
            detective.backmove = true;
        }
      }
    p.keyReleased = function() {
        detective.stop()
    }
    //Generate Canvas
    function generateCanvas() {
        p.createCanvas(p.windowWidth * .75, p.windowHeight * .75);
        p.stroke(0);
        p.background(160, 167, 219);
    }

};