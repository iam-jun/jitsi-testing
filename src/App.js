import logo from './logo.png';
import './App.css';
import { useState } from 'react';
import JitsiModal from './components/JitsiModal';

function App() {
  const [jitsiVisible, setJitsiVisible] = useState(false)

  const toggleJitsi = () => {
    setJitsiVisible(!jitsiVisible)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Jitsi IFrame Demo
        </p>
        <a
          className="App-link"
          href="https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more about Jitsi IFrame API
        </a>
      </header>
      <button className="float" onClick={toggleJitsi}>
        Open Jitsi
      </button>
      <JitsiModal visible={jitsiVisible} hide={toggleJitsi} />
    </div>
  );
}

export default App;
