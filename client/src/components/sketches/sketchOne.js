import { func } from "prop-types";
let detective
export default function sketch(p) {
    let rotation = 0;

    p.setup = function () {
        generateCanvas()
        detective = new MainCharacter()



    };
    p.draw = function () {
        generateFloor()
        generateWalls()
        detective.render()
        detective.update()
    };
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
      
    //Making Background. This is a constructor
    function backGroundSquare() {
        this.render = function (xpos, ypos, r, g, b) {
            p.push()
            p.fill(r, g, b)
            p.rect(xpos, ypos, p.windowWidth * .75, (p.windowHeight * .75) / 40);
            p.pop()
        }
    }
    //Uses the backround square constructor
    function generateFloor() {
        let floorBoardYPos = p.windowHeight * .75 / 6
        var square = new backGroundSquare();
        let r = 138
        let g = 76
        let b = 173

        while (floorBoardYPos < p.windowHeight * .75) {
            square.render(0, floorBoardYPos, r, g, b)
            floorBoardYPos += (p.windowHeight * .75) / 40
            if (r == 138) {
                r = 160;
                g = 167;
                b = 219
            } else if (r == 160) {
                r = 138;
                g = 76;
                b = 173
            }
        }

    }

    //Generate Canvas
    function generateCanvas() {
        p.createCanvas(p.windowWidth * .75, p.windowHeight * .75);
        p.stroke(0);
        p.background(160, 167, 219);
    }

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

};