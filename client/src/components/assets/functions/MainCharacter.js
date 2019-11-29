

function MainCharacter(p, img) {
    this.movemontKey = 0
    p.push()
        this.pos = p.createVector(p.width/2, p.height/2)
        this.currentMove = "none"
        this.rightVel = p.createVector(3, 0)
        this.leftVel = p.createVector(-3, 0)
        this.forwardVel = p.createVector(0, -3)
        this.backVel = p.createVector(0, 3)
        this.backmove = false;
        this.frontmove = false;
        this.leftmove = false;
        this.rightmove = false;
    p.pop()
        this.render = function () {
            p.push()
            p.fill(0)
            p.rectMode(p.CENTER);

            p.rect(this.pos.x,this.pos.y, img.width, img.height)
            p.imageMode(p.CENTER)
            p.image(img, this.pos.x, this.pos.y) 
            p.pop()
            p.push()
            p.stroke(0); // Change the color
            p.strokeWeight(10); // Make the points 10 pixels in size
            p.point(p.width/2, p.height/2);  
            p.pop()      
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
        this.hits = (rectangle) =>{
            if(this && rectangle){
                
              
            if (
               
                this.pos.x - img.width/2 < rectangle.posX+ rectangle.width/2 &&
                this.pos.x + img.width/2 > rectangle.posX - rectangle.width/2 &&
                this.pos.y - img.height/2 < rectangle.posY + rectangle.height/2 &&
                this.pos.y + img.height/2 > rectangle.posY - rectangle.height/2 
            
            ){
                if (this.leftmove){
                    this.stop()
                    console.log('left')
                    this.pos.add(this.leftVel)
                }
                if (this.rightmove){
                    this.stop()
                    console.log('right')
                    this.pos.add(this.leftVel)
                }
                if (this.backmove){
                    this.stop()
                    console.log('right')
                    this.pos.add(this.forwardVel)
                }
                if (this.frontmove){
                    this.stop()
                    console.log('right')
                    this.pos.add(this.backVel)
                }
               
               
               }
            
        }
        }
    }
}

export default MainCharacter
