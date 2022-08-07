import './App.css';

import Landing from './pages/Landing';
import { NaviBarComponent } from './components/NavigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Classes from './pages/Classes';
import Projects from './pages/Projects';
import About from './pages/About';
import ParticlesComponent from './components/Particles';

function App() {
  return(
    <div className="App">
        <NaviBarComponent />
        <ParticlesComponent className='particles' />
            <Routes>
                <Route exact path="/" element={<Landing />} />
                <Route exact path="/classes" element={<Classes/>} />
                <Route exact path="/projects" element={<Projects/>}/>
                <Route exact path="/about" element={<About/>}/>
            </Routes>
        </div>
  );
}

export default App;