import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { add, diff, mult, divide as div} from './utilities/maths/maths'

function App() {
  const [count, setCount] = useState(0)

  const sum = add(2, 4);
  const subs = diff(10, 6);
  const goonfhol = mult(5,10)
  // same name jodi hoi
  const divide = 25 / 5;
  const vhag = div(36/3);

  console.log(sum, subs, goonfhol, vhag)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
