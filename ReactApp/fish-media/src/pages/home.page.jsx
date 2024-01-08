import { useNavigate } from 'react-router-dom';

import './../Styles/Home.css';
import testImage from './../Images/RainbowTroutTest.jpg'
import profilePic from './../Images/ProfilePic.jpg'

import Post from '../Components/post.jsx';

function HomePage() {

  function profileButton(){
    console.log("baller");
  }

  return (
    <div>
      <Post/>
    </div>
  );
}

export default HomePage;