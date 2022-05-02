import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function WelcomeMessage({ children }) {
  return <p>{children}</p>
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <WelcomeMessage > Hello Everyone, Welcome to React! </WelcomeMessage>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
