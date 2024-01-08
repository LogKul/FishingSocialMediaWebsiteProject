import { useNavigate } from 'react-router-dom';

import './../Styles/Home.css';
import testImage from './../Images/RainbowTroutTest.jpg'
import profilePic from './../Images/ProfilePic.jpg'


function Post() {

  return (
    <div className="App">
      <div className="post">
        <div className="posterProfile">
          <img src={profilePic} alt="" className="posterPic"/>
          <p className="poster">John Boi</p>
        </div>
        <img src={testImage} alt="postImage" className="postImage" />
        <div className="postStats">
          <p className="statTitle">Species</p>
          <p className="statTitle">Weight</p>
          <p className="statTitle">Length</p>

          <p className="stat">RainbowTrout</p>
          <p className="stat">12lbs</p>
          <p className="stat">40in</p>
        </div>
        <hr />
        <p className="caption">
        This fish is already dead, he just doesn't know it yet.
        </p>
      </div>
    </div>
  );
}

export default Post;