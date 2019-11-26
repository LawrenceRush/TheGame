import React from 'react'

function BookShelf(p, bookShelfImg, posX, posY) {
   
    this.render = function () {
    p.push()
        let offsetX = posX-(bookShelfImg.width* .5)
        let offsetY = posY-(bookShelfImg.height* .5)
        p.fill(0)
        //p.rect(offsetX, offsetY, bookShelfImg.width, bookShelfImg.height)
        p.image(bookShelfImg, offsetX, offsetY)
    p.pop()
    // p.push()
    //     p.stroke('yellow');
    //     p.strokeWeight(10);
    //     p.point( offsetX,  offsetY)
    //     p.pop()
     }
}

export default BookShelf
