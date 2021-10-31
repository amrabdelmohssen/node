import './App.css';

import {NavBar} from'./componenet/nave/nave'

import{BrowserRouter as Router} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import {Routers} from './routes/routes'
function App() {
  return (
    
    <>
      <Router>
            <NavBar/>   

          <Routers/>
            <hr/>

      </Router>
      
<br/>
<br/>

<hr/>
<br/>
<br/>
</>
  );
}

export default App;
