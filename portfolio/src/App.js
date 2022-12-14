import './App.css';

import Landing from './pages/Landing';
import { Routes, Route } from 'react-router-dom';
import { NaviBarComponent } from './components/NavigationBar';
import Projects from './pages/Projects';
import About from './pages/About';
import ParticlesComponent from './components/Particles';

function App() {
  return (
    <div className="App">
      <NaviBarComponent />
      <ParticlesComponent className='particles' />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
    </div>

  );
}

export default App;