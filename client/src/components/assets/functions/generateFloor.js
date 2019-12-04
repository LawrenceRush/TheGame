import React from 'react'

function generateFloor(p, groundTexture) {
    p.push()
    
      
        let r = 138
        let g = 76
        let b = 173
        for(let currentX = 0; currentX<p.windowWidth*.75; currentX+=groundTexture.width){
            let floorBoardYPos = p.windowHeight * .75 / 6
        while (floorBoardYPos < p.windowHeight * .75) {
            p.image(groundTexture, currentX,  floorBoardYPos)
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
        p.pop()
    }

export default generateFloor
