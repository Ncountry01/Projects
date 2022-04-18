import React, { useState } from 'react';
//import CloseIcon from '/@mui/icons-material/Close';
import './Gallery.css';


//import Img1 from '';


const PhotoGallery =() =>{
let data = [

{
    id:1,
    imgSrc: 'https://cdn.pixabay.com/photo/2017/08/30/17/26/please-2697951_960_720.jpg',
     title:'Awesome',
},

{
    id:2,
    imgSrc: 'https://cdn.pixabay.com/photo/2013/05/11/08/28/sunset-110305__480.jpg',
    title:'Awesome',
},

{
    id:3,
    imgSrc: 'https://media.istockphoto.com/photos/backlight-of-a-woman-raising-arms-with-thumbs-up-picture-id922496674?k=20&m=922496674&s=612x612&w=0&h=7tWgriNy2h3fWM3jxRI0K7MpzYg1pQyGAtIoZ56IEXc=',
    title:'Awesome',

},

{
    id:4,
    imgSrc: 'https://cdn.pixabay.com/photo/2019/03/18/13/40/eye-4063134_960_720.jpg',
    title:'Awesome',
},

{
    id:5,
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0lzHABYaZ6gMZ2e-8ytdFV3jw0NBuQQmMdGd5xsJ2scujOYzv-ZSovGAQzI1NIF6dD1E&usqp=CAU',
    title:'Awesome',
},

{
    id:6,
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl9jLO-OYF_3mWqueO-f97BLerilLMk7PNoCMoN_R8u6oSp03WPAAA4lB97Qyxw9onK6U&usqp=CAU',
    title:'fantastic',
},

]


const [model, setModel] = useState(false);
const [tempimgSrc, setTempImgSrc] = useState('');
const getImg =(imgSrc) => {

    setTempImgSrc(imgSrc);
    setModel(true);
console.log(imgSrc)
}

  return (
      <>
      <div className={model ? "model open" :"model"}>
          <img src={tempimgSrc} />
          {/**<CloseIcon  onClick ={()=>setModel(false)}/> */}
      </div>
<div className='gallery'>
    {data.map((item, index)=>{
        return (
            <div className='photo' key ={index}  onClick={() =>  getImg(item.imgSrc)}>
           <img src={item.imgSrc}  alt={item.title} style={{width:'100%'}}/>

            </div>
        )
    })}
</div>

    <div>
    {  
console.warn(data)
    }
    </div>
      </>
  )
}

export default PhotoGallery;
