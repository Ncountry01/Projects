import React, { useState } from 'react'
import './gallery.css'
import CloseIcon from '@mui/icons-material/Close';

const PhotoGallery=() =>{

    let data = [
        {
            id:1,
            imgSrc:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',

        },
        {
            id:2,
            imgSrc:'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',

        },
        {
            id:3,
            imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6AmNVUJf4GjNqDno-9gliwgm8zr7jMPNfEIU44Yy5yOxiOnbScV9N-YJhCh8PxbWLhyM&usqp=CAU',

        },
        {
            id:4,
            imgSrc:'https://healinghutclinic.com/wp-content/uploads/2021/11/320.png',

        },
        {
            id:5,
            imgSrc:'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',

        },
        {
            id:6,
            imgSrc:'https://media.istockphoto.com/photos/renewable-energy-and-sustainable-development-picture-id1186330948?k=20&m=1186330948&s=612x612&w=0&h=5aNPCcQ8FcZraX44PEhb2mqcHkow2xMITJMHdh28xNg='
        },
        {
      id:7,
      imgSrc:'https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg'
        },
        {
      id:8,
      imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYAxuFPBdamLOPHovVhmYkhYCzH-Ku_fTmiQ&usqp=CAU',
        },
    ]
const [model, setModel] = useState(false);
const[tempimgSrc, setTempImgSrc] = useState('');
     const getImage = (imgSrc)=> {
         setTempImgSrc(imgSrc)
         setModel(true)
console.log(imgSrc)


    }

    return (
        <>
        <div className={model ? "model open" : "model"}>
     <img src={tempimgSrc} />
         <CloseIcon onClick ={() => setModel(false)} />
        </div>
  <h3>Photo Gallery</h3>
<div className='gallery'>
  {
      data.map((item, index)=>
      {
          return (
              <>
<div className='pics' key={index} onClick={()=> getImage(item.imgSrc)}>
<img src={item.imgSrc}  alt={item.title} style={{width:'100%'}} />
</div>


              </>
          )
      })
  }

  </div>
        </>
    )
}

export default PhotoGallery;