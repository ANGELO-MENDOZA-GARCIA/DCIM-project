function Racks() {
  return (
    <div style={{ padding: '2rem', background: '#0f172a' }}>
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
      >
        Estado de Racks y Mapa Térmico
      </h1>

      <p
        style={{
          color: '#ffffff',
          fontSize: '1rem',
          lineHeight: 1.6,          // interlineado cómodo
          letterSpacing: '0.3px',   // separación entre letras
          margin: 0,
          maxWidth: '640px',        // mejora la lectura
        }}
      >
        Detección de puntos calientes en infraestructura bajo clima tropical húmedo.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          marginTop: '2rem',
        }}
      >
        {/* Mockup de mapa térmico */}
        <div
          style={{
            background: '#ef4444',
            padding: '2rem',
            borderRadius: '8px',
            color: '#ffffff',
          }}
        >
          Rack A1 (Crítico)
        </div>
        <div
          style={{
            background: '#22c55e',
            padding: '2rem',
            borderRadius: '8px',
            color: '#ffffff',
          }}
        >
          Rack A2 (Normal)
        </div>
        <div
          style={{
            background: '#eab308',
            padding: '2rem',
            borderRadius: '8px',
            color: '#ffffff',
          }}
        >
          Rack A3 (Alerta)
        </div>
      </div>
    </div>
  );
}

export default Racks;