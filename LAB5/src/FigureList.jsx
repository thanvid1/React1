import {useState} from 'react';
import BasicFigure from "./BasicFigure";
import "./FigureList.css";

const initialImages=[
    {src: "https://static.toiimg.com/thumb/imgsize-23456,msid-120659563,width-600,resizemode-4/dororo.jpg", caption: "Image 1"},
    {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJATkIxLs24k-TpaUpl56L8tvUX-qLPSm7Q&s", caption: "Image 2"},
    {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD5XKfHJ6uYxSx-vUc-xGa31wLvSwtNAqP1A&s", caption: "Image 3"}
]

const FigureList=()=>{
    const [images,setImages]=useState(initialImages);

    const addImage=()=>{
        const randomId=Math.floor(Math.random()*1000)
        const newImage={
            src:`https://picsum.photos/400/300?random=${randomId}`,
            caption:`Image ${images.length+1}`
        }
        setImages([...images,newImage])
    }
    const removeImage=(index)=>{
        setImages(images.filter((_,i)=>i!==index));
    };
    return(
        <div className="container">
            <h1>Dynamic Image Gallery</h1>
            <div className='buttons'>
                <button onClick={addImage}>Add Image</button>
            </div>
            <div className='gallery'>
                {images.map((image,index)=>(
                    <BasicFigure key={index} src={image.src}
                    caption={image.caption} onRemove={()=>removeImage(index)}/>
                ))}
            </div>
        </div>
    )
}
export default FigureList;
