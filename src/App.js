import React, { Component } from 'react'
import { BrowserRouter , Route ,Routes} from "react-router-dom";
import './App.css';
import SignIn from './Components/Sign/SignIn'
import Home from './Components/Home'
import SignUp from './Components/Sign/SignUp'
import AbonnementDetails from './Components/Abonnement/AbonnementDetails';
import BookDetail from './Components/Book/BookDetail'
import Abonnement from './Components/Abonnement/Abonnement'
import Profil from './Components/UserInformation/Profil'
import Abonnements from './Components/UserInformation/Abonnements'
import Emprunts from './Components/UserInformation/Emprunts'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
                   <Route path="/home" element={<Home/>}/>
                   <Route exact path="/signin" element={<SignIn/>}/>
                   <Route exact path="/signup" element={<SignUp/>}/>
                   <Route exact path="/pay" element={<AbonnementDetails/>}/>
                   <Route exact path="/book-detail/:id" element={<BookDetail/>}/>
                   <Route exact path="/abonnement" element={<Abonnement/>}/>
                   <Route exact path="/profil" element={<Profil/>}/>
                   <Route exact path="/abonnements" element={<Abonnements/>}/>
                   <Route exact path="/emprunts" element={<Emprunts/>}/>
        </Routes>            
      </BrowserRouter>
    )
  }   
  
}

export default App;
