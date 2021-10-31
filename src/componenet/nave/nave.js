// import { Navbar } from 'react-bootstrap';
// import { Nav } from 'react-bootstrap';
// import{NavDropdown}from 'react-bootstrap';
// import{Form}from 'react-bootstrap';
// import{FormControl}from 'react-bootstrap';
// import{Button}from 'react-bootstrap';

import './nav.css'
import { Link } from 'react-router-dom'
export function NavBar(){

    return(   
<ul>
  <li ><Link className="active" to ="/">Home</Link></li>
  <li><Link to ="/search">Search</Link></li>
</ul>
    )

}