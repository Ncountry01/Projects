import React from "react";

import Img1 from '../img/env.jpg'

const ImageGallery = () => {

let data = [
    {
        id:1,
        imgsrc:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    },
   
    {
        id:2,
        imgsrc:'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
    },   

    {
        id:3,
        imgsrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkHwIfa83tAQNOjJdd9LRhjc9LNakC8v3jZnnOWc1dil6XHmsEdaab8z7DYAhcTiT3DGw&usqp=CAU',
    },
    
    {
        id:4,
        imgsrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6AmNVUJf4GjNqDno-9gliwgm8zr7jMPNfEIU44Yy5yOxiOnbScV9N-YJhCh8PxbWLhyM&usqp=CAU',
    },
    
    {
        id:5,
        imgsrc:'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
    }, 
    {
        id:6,
        imgsrc:Img1,
    },   
]    
return (
    <>
<h2>Gallery</h2>
{
    data.map((item, id)=>{
        <img src={item.imgsrc} alt={item.alt} />
    })
}

    </>
)
}

export default ImageGallery;