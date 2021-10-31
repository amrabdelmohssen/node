import{Route} from 'react-router-dom'

import { Search } from '../pages/search/search'
import { Login } from '../componenet/todo/login'
export const Routers =()=>{
    return(
        <>
            <Route path= '/' exact component = {Login}/>
            <Route path= '/search' exact component = {Search}/>
        </>
    )

}