function PUE() {
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
      >Power Usage Effectiveness (PUE)</h1>
      <div style={{ background: '#1e293b', padding: '2rem', borderRadius: '8px', marginTop: '1rem' }}>
        <h2 style={{ fontSize: '3rem', color: '#22c55e' }}>1.18</h2>
        <p>Meta regional: &le; 1.20</p>
      </div>
    </div>
  );
}
export default PUE;