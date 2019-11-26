

function MainCharacter(p, img) {
    p.push()
        this.pos = p.createVector(p.width/2, p.height/2)

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
            p.rectMode("CENTER"); 
            p.rect(this.pos.x,this.pos.y, img.width, img.height)
            p.image(img, this.pos.x, this.pos.y) 
             p.pop()
            p.push()
            p.stroke("yellow"); // Change the color
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
        this.hits = () =>{
            
        }
    }
}

export default MainCharacter
