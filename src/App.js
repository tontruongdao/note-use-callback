import { useState, useEffect, useCallback } from 'react'
import logo from './logo.svg';
import './App.css';

const List = ({ getItems }) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(getItems(5))
    console.log("updating items")
  }, [getItems])

  return items.map(item => <div key={item}>{item}</div>)
}

const App = () => {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)
  
  const getItems = useCallback((incrementor) => {
    return [number, number + 1, number + incrementor]
  }, [number])

  const theme = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: dark ? 'teal' : '#FFF',
    color: dark ? '#FFF' : '#333',
    height: "40vw"
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{ display: "flex", alignItems: "center", height: "5vw", margin: "0" }}>
          useCallback
          <span>
            <img src={logo} className="App-logo" alt="logo" />
          </span>
        </h3>

        <div style={theme}>
          <input 
            type="number"
            value={number}
            onChange={e => setNumber(parseInt(e.target.value))}
          />
          <button onClick={() => setDark(prevDark => !prevDark)}>
            Toggle Theme
          </button>
          <List getItems={getItems} />
        </div>
      </header>
    </div>
  );
}



export default App;
