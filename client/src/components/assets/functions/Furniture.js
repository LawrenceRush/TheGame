import React from 'react'

function Furniture(p, img, posX, posY, width, height, collisionObj) {
   
    var rectDims = {posX:posX, posY:posY, width:img.width, height:img.height };
    this.render = function () {
    
        p.push()
        
        p.fill(0)
        p.rectMode(p.CENTER)
        //p.rect(posX, posY, width, height)
        
        if(collisionObj.hits){
            collisionObj.hits(rectDims)
        }
        //collsionObj.hits(rect)
        p.imageMode(p.CENTER)
        p.image(img, posX, posY, width, height )
        p.pop()
    
    // p.push()
    //     p.stroke('yellow');
    //     p.strokeWeight(10);
    //     p.point( offsetX,  offsetY)
    //     p.pop()
     }
}

export default Furniture