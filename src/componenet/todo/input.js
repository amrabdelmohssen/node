export const Input = ({title,type,name,value,validFun,valid})=>{

    return(
<div className="div">    
            <input className ={ "inp"}
            placeholder= {`Enter ${title}`}
            type = {type}
            name = {name}
            value = {value}
            onChange = {validFun}>
            
            </input>
<small>{valid}</small>
            </div>
    )   
}