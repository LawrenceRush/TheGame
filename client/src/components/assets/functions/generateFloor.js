import React from 'react'

function generateFloor(p, backGroundSquare) {
    p.push()
    let floorBoardYPos = p.windowHeight * .75 / 6
        var square = new backGroundSquare(p);
        let r = 138
        let g = 76
        let b = 173

        while (floorBoardYPos < p.windowHeight * .75) {
            square.render(0, floorBoardYPos, r, g, b)
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
        p.pop()
    }

export default generateFloor
