import './App.css'
import {Demo} from "./components/Demo.jsx";
import {Hero} from "./components/Hero.jsx";

function App() {

  return (
    <main>
        <div className='main'>
            <div className='gradient'/>
        </div>
        <div className='app'>
            <Hero/>
            <Demo/>
        </div>
    </main>
  )
}

export default App
