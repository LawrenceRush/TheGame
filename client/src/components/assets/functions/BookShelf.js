import React from 'react'

function BookShelf(p, img, posX, posY, collisionObj) {
   
    var rectDims = {posX:posX, posY:posY, width:img.width,height:img.height };
    this.render = function () {
    
        p.push()
        
        p.fill(0)
        p.rectMode(p.CENTER)
        //sdlet rect = p.rect(posX, posY, img.width, img.height)
        
        if(collisionObj.hits){
            collisionObj.hits(rectDims)
        }
        //collsionObj.hits(rect)
        p.imageMode(p.CENTER)
        p.image(img, posX, posY)
    p.pop()
    
    // p.push()
    //     p.stroke('yellow');
    //     p.strokeWeight(10);
    //     p.point( offsetX,  offsetY)
    //     p.pop()
     }
}

export default BookShelf
