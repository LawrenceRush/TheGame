import { func } from "prop-types";
import detectiveImg from "./../assets/images/detectiveSprites/male/detective(male)left-pixilart.png"
import bookShelfImg from "./../assets/images/furniture/book-shelve-pixilart.png"
import MainCharacter from "../assets/functions/MainCharacter"
import backGroundSquare from "../assets/functions/backGroundSquare"
import generateFloor from "../assets/functions/generateFloor"
import WallBoard from "../assets/functions/WallBoard";
import generateWall from "../assets/functions/generateWall"
import generateBookshelfs from "../assets/functions/generateBookshelfs";
let detective 
let img
let bookShelf


export default function sketch(p) {
    //Pre Load (Import big things before page loads)
    p.preload=  function () {
        console.log("preload")
         img = p.loadImage(detectiveImg);
         bookShelf = p.loadImage(bookShelfImg)
      }
    // Setup (Run before page loads)
    p.setup = function () {
        generateCanvas()
        detective = new MainCharacter(p, img)
    };
    //Draw (loops once per frame{I believe})
    p.draw = function () {
        generateFloor(p, backGroundSquare)
        generateWall(p, WallBoard)
        generateBookshelfs(p, bookShelf, p.width/2, p.height/2)
        detective.render()
        detective.update()
        
      
    };
    //Controls (WASD)
    p.keyPressed = function () {
        if (p.keyCode == 68){
          console.log("right")
          detective.rightmove = true;
          console.log(detective.rightmove)
        } else if  (p.keyCode == 65){
          console.log("left")
          detective.leftmove = true;
        } else if (p.keyCode == 87){
          console.log('forward')
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
        console.log("main values",p.windowWidth * .75, p.windowHeight * .75 )
        p.stroke(0);
        p.background(160, 167, 219);
    }

};