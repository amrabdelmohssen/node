import { useState } from "react";
import { Input } from "./input";
import './login.css'
import Cookies from "js-cookie";

export const Login =  ()=>{
const emailRegex = new RegExp('^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]+$')

const [loginInput , setLoginInput] = useState({
    email : "",
    password : "",

})

const [validLoginInput , setValidLoginInput] = useState({
    email : null,
    password : null,
    login :true

})



const validation = (e)=>{
    switch(e.target.name){
        case "email":
            setLoginInput({
                ...loginInput,
                email : e.target.value
            })
            setValidLoginInput({
                ...validLoginInput,
                email : !emailRegex.test(e.target.value) &&"email not valid" ,

            })

            break;

        case 'password':
            setLoginInput({
                ...loginInput,
                password:e.target.value
            })
            setValidLoginInput({
                ...validLoginInput,
                password: e.target.value.length < 6  &&'Password must be greater than 5 letters',
            })    

            break;

            default:

            
    }

}

    
const sendData = ()=>{
    Cookies.set('email', loginInput.email)
   //return alert(JSON.stringify(loginInput))
}



    return (
        <>
        <form action={"/search"} onSubmit = {sendData} className="divLog">
        <Input 
            title = "email" 
            type="text"
            name = "email"
            value = {loginInput.email}
            valid= {validLoginInput.email}
            validFun = {(e)=>validation(e)}


        
        /> 


        <Input 
            title = "password" 
            type="password"
            name = "password"
            value = {loginInput.password}
            valid= {validLoginInput.password}
            validFun = {(e)=>validation(e)}
        /> 

<button className="button"  type="submit" >Log in</button>
</form>
</>
    )



}