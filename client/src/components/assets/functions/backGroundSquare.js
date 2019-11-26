import React from 'react'




function backGroundSquare(p) {
    this.render = function (xpos, ypos, r, g, b) {
        p.push()
        p.fill(r, g, b)
        p.rect(xpos, ypos, p.windowWidth * .75, (p.windowHeight * .75) / 40);
        p.pop()
    }
}

export default backGroundSquare
