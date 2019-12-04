import React from 'react'

function generateWall(p, WallBoard) {
    let line = new WallBoard(p)
        let distanceBetweenBoards = (p.windowWidth * .75) / 45
        while (distanceBetweenBoards < (p.windowWidth * .75)) {
            line.render(distanceBetweenBoards)
            distanceBetweenBoards += (p.windowWidth * .75) / 45
        }
}

export default generateWall
