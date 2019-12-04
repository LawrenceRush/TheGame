import React from 'react'

function WallBoard(p) {
    this.render = function (xpos) {
        p.push()
        p.stroke(0)
        p.line(xpos, 0, xpos, p.windowHeight * .75 / 6);
        p.pop()
    }
}

export default WallBoard
