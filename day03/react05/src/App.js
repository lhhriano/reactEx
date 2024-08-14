import { useState } from "react";
import Photo from "./Photo";

const App = ()=>{
    const [photoArr, setPhotoArr] = useState([
        {no:1, img:"images/cherries.jpg", title:"The Perfect Sandwich, A Real NYC Classic", content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."},
        {no:2, img:"images/croissant.jpg", title:"Let Me Tell You About This Steak", content:"Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum."},
        {no:3, img:"images/popsicle.jpg", title:"Cherries, interrupted", content:"Lorem ipsum text praesent tincidunt ipsum lipsum.What else?"},
        {no:4, img:"images/salmon.jpg", title:"Once Again, Robust Wine and Vegetable Pasta", content:"Lorem ipsum text praesent tincidunt ipsum lipsum."},
        {no:5, img:"images/sandwich.jpg", title:"All I Need Is a Popsicle", content:"Lorem ipsum text praesent tincidunt ipsum lipsum"},
        {no:6, img:"images/sandwich.jpg", title:"Salmon For Your Skin", content:"Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum."},
        {no:7, img:"images/steak.jpg", title:"The Perfect Sandwich, A Real Classic", content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."},
        {no:8, img:"images/sandwich.jpg", title:"Le French", content:"Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum."},
    ]);

    return (<div className="w3-content">{
        photoArr.map(function(item, idx){
            return <Photo key={item.no} item={item}/>
        })
    }</div>);
}

export default App;