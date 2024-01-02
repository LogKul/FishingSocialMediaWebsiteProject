import './App.css';
import testImage from './Images/RainbowTroutTest.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FishHead</h1>
      </header>
      <div className="post">
        <p className="poster">Gonzo</p>
        <img src={testImage} alt="postImage" className="postImage" />
        <div className="postStats">
          <p className="statTitle">Species</p>
          <p className="statTitle">Weight</p>
          <p className="statTitle">Length</p>

          <p className="stat">RainbowTrout</p>
          <p className="stat">12lbs</p>
          <p className="stat">40in</p>
        </div>
        <p className="caption">
         This fish is already dead, he just doesn't know it yet.
        </p>
      </div>
    </div>
  );
}

export default App;
