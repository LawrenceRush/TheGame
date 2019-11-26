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

<<<<<<< HEAD
    //Generate walls
    function WallBoard() {
        this.render = function (xpos) {
            p.push()
            p.stroke(0)
            p.line(xpos, 0, xpos, p.windowHeight * .75 / 6);
            p.pop()
        }
    }
    function generateWalls() {
        let line = new WallBoard()
        let distanceBetweenBoards = (p.windowWidth * .75) / 45
        while (distanceBetweenBoards < (p.windowWidth * .75)) {
            line.render(distanceBetweenBoards)
            distanceBetweenBoards += (p.windowWidth * .75) / 45
        }
    }

    function MainCharacter() {
        this.pos = p.createVector(p.width/2, p.height/2)
        this.rightVel = p.createVector(3, 0)
        this.leftVel = p.createVector(-3, 0)
        this.forwardVel = p.createVector(0, -3)
        this.backVel = p.createVector(0, 3)
        this.backmove = false;
        this.frontmove = false;
        this.leftmove = false;
        this.rightmove = false;
        this.render = function () {
            p.push()
            p.fill(0)
            p.image("./assets/images/detectiveSprites/male/maindetective(male).png")
            p.translate(this.pos.x, this.pos.y)
            p.rect(30, 20, 55, 55);
            p.pop()
           
        }
        this.update = () => {
            if (this.rightmove) {
                this.pos.add(this.rightVel)
            }
            if (this.leftmove) {
                this.pos.add(this.leftVel)
            }
            if (this.backmove) {
                this.pos.add(this.backVel)
            }
            if (this.frontmove) {
                this.pos.add(this.forwardVel)
            }
            
        }
        this.stop = () =>{
            this.backmove = false;
            this.frontmove = false;
            this.leftmove = false;
            this.rightmove = false;
        }
    }

=======
>>>>>>> Lawrence
};