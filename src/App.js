import React, { Component } from 'react'
import { BrowserRouter , Route ,Routes} from "react-router-dom";
import './App.css';
import FirstPage from './Components/FirstPage'
import Home from './Components/Home'
import SignUp from './Components/SignUp'
import BorrowDetails from './Components/BorrowDetails';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
                   <Route exact path="/" element={<FirstPage/>}/>
                   <Route exact path="/home" element={<Home/>}/>
                   <Route exact path="/signup" element={<SignUp/>}/>
                   <Route exact path="/pay" element={<BorrowDetails/>}/>
                   
        </Routes>            
      </BrowserRouter>
    )
  }   
  
}

export default App;
