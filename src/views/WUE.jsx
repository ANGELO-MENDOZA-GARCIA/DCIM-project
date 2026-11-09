function WUE() {
  return (
    <div>
      <h1
        style={{
          color: '#ffffff',
          fontSize: '2rem',
          fontWeight: 700,
          lineHeight: 1.3,          // evita el solapamiento entre líneas
          letterSpacing: '0.5px',   // separa las letras
          wordBreak: 'break-word',  // evita desbordes
          margin: '0 0 1rem 0',     // separa del párrafo
        }}
      >Water Usage Effectiveness (WUE)</h1>
      <div style={{ background: '#1e293b', padding: '2rem', borderRadius: '8px', marginTop: '1rem' }}>
        <h2 style={{ fontSize: '3rem', color: '#3b82f6' }}>0.31 L/kWh</h2>
        <p>Consumo hídrico optimizado para sistemas de refrigeración.</p>
      </div>
    </div>
  );
}
export default WUE;