import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav style={{ width: '250px', background: '#1e293b', padding: '2rem' }}>
      <h2 style={{ color: '#38bdf8', marginBottom: '2rem' }}>DCIM Dashboard</h2>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Racks Térmicos</Link></li>
        <li><Link to="/pue" style={{ color: 'white', textDecoration: 'none' }}>Métricas PUE</Link></li>
        <li><Link to="/wue" style={{ color: 'white', textDecoration: 'none' }}>Métricas WUE</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;