import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Racks from './views/Racks';
import PUE from './views/PUE';
import WUE from './views/WUE';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh', backgroundColor: '#0f172a', color: 'white' }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
          <Routes>
            <Route path="/" element={<Racks />} />
            <Route path="/pue" element={<PUE />} />
            <Route path="/wue" element={<WUE />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;