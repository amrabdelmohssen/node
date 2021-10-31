import './search.css'
import axios from 'axios';
import { useState } from 'react';
import { BookItem } from './bookItem';
import Cookies from "js-cookie";
export const Search = ()=>{

    const [books,setBooks] = useState([])
    const [flag ,setFlag] = useState(false)
    const[cat,setCat] = useState("")


    const val = (e)=>{
        setCat(e.target.value)
    }
    const x = ()=>{
        axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${cat}`)
        .then((res)=>{
            setBooks(res.data)                 
            setFlag(true)
        }).catch((err)=>{
            console.log(err);
        })
    }





    return (
        <div className="div2">
        <h1> Hello {Cookies.get("email")}</h1>
        <input  placeholder="Enter category for example => math" onChange= {(e)=>val(e)}/>
        <button className = "btn" onClick = {x}>get</button>

<div className = "div">
        {
        
        flag?
        books.items.map((m) =>
                 <BookItem image = {m.volumeInfo.imageLinks.smallThumbnail} title = {m.volumeInfo.title}  publisher = {m.volumeInfo.publisher}/>):""
        }        
        
        </div>       
        </div>
          
    )
}
