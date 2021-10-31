import './search.css'
export const BookItem = ({image,title,publisher})=>{
    return(
            <div className = "divBook">
            <p>{title}</p>
                <img src ={image}/><br/>
                <small>{publisher}</small><br/>

            </div>

    )
}