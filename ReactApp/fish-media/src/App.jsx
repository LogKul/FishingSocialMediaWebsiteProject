import { BrowserRouter, NavLink, Routes, Route} from 'react-router-dom';

import './Styles/Header.css';
import profilePic from './Images/ProfilePic.jpg'
import plusIcon from './Images/plus.png'
import friendsIcon from './Images/friends.png'

import HomePage from './pages/home.page';
import RegisterPage from './pages/register.page';
function App() {

  function profileButton(){
    console.log("baller");
  }

  return (
    <BrowserRouter>
      <nav>
        <header className="App-header">
          <div className="headerContent">
            <a href='/' className="siteName">FishHead</a>
            <div className="navButtons">
              <a className="navButton" href='/register'>
                <img src={plusIcon} alt="addPostButton" className="navButtonIcon" />
              </a>
              <a className="navButton">
                <img src={friendsIcon} alt="addPostButton" className="navButtonIcon" />
              </a>
              <a className="navProfileButton" type="submit" onClick={profileButton}>
                <img src={profilePic} alt="profilePic" className="navProfilePic"/>
              </a>
            </div>
          </div>
        </header>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
