import React from 'react'

function generateKitchenFloor(p) {
    p.push()
    let floorBoardYPos = p.windowHeight * .75 / 6
    let floorHeightArea = (p.windowHeight * .75) - (p.windowHeight * .75 / 6)
    let r = 40
    let g = 133
    let b = 209
    
    for(let currentX = 0; currentX<p.windowWidth*.75; currentX+=p.windowWidth * .75/45){
        let floorBoardYPos = p.windowHeight * .75 / 6
        while (floorBoardYPos < p.windowHeight * .75) {
            p.fill(r, g, b);
            p.rect(currentX, floorBoardYPos, p.windowWidth * .75/45, floorHeightArea/39);
            floorBoardYPos += floorHeightArea/39
            if (r == 40) {
                r = 225;
                g = 232;
                b = 231
            } else if (r == 225) {
                r = 40;
                g = 133;
                b = 209
            }
        }
    }
        p.pop()
    }

export default generateKitchenFloor