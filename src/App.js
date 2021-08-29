import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

const List = ({ getItems }) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(getItems())
    console.log("updating items")
  }, [getItems])

  return items.map(item => <div key={item}>{item}</div>)
}

const App = () => {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)
  
  const getItems = () => {
    return [number, number + 1, number + 2]
  }

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
