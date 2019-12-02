import React from 'react'

function BookShelf(p, bookShelfImg, posX, posY, collisionObj) {
   
    var rectDims = {posX:posX, posY:posY, width:bookShelfImg.width,height:bookShelfImg.height };
    this.render = function () {
    
        p.push()
        
        p.fill(0)
        p.rectMode(p.CENTER)
        let rect = p.rect(posX, posY, bookShelfImg.width, bookShelfImg.height)
        
        if(collisionObj.hits){
            collisionObj.hits(rectDims)
        }
        //collsionObj.hits(rect)
        p.imageMode(p.CENTER)
        p.image(bookShelfImg, posX, posY)
    p.pop()
    
    // p.push()
    //     p.stroke('yellow');
    //     p.strokeWeight(10);
    //     p.point( offsetX,  offsetY)
    //     p.pop()
     }
}

export default BookShelf
