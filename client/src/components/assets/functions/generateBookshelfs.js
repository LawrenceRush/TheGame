import React from 'react'
import BookShelf from './BookShelf'

function generateBookshelfs(p, bookShelfImage, collisonObj) {
    let posX = p.width/1.06
    let posY =  p.height/2
    let booksShelfOne = new BookShelf(p, bookShelfImage, posX, posY, collisonObj)
    
    booksShelfOne.render()
}

export default generateBookshelfs
