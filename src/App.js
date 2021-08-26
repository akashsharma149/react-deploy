import logo from './logo.svg';
import './App.css';
import profileImage from './img/akash_pic.JPG'

function App() {
  return (
    <div className="App">
     <h1>My React App</h1>
     <h2>Name : Akash Sharma</h2>
     <img src={profileImage} alt="profile image" className = "pic"/>
    </div>
  );
}

export default App;
