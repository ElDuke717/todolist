import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function WelcomeMessage({ children }) {
  return <p>{children}</p>
}

// deconstructed state passed in as the arguments
const Counter = ({ count, setCount }) => {
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <WelcomeMessage > It's time to really learn React! </WelcomeMessage>
        {/* // State is contained within the React component, but the functions are called here. */}
        <Counter count={count} setCount={setCount} />
      </header>
    </div>
  );
}

export default App;
