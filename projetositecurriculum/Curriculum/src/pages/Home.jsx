// src/pages/Home.jsx
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>

      {/* ── Banner principal ── */}
      <section style={{
        background: 'linear-gradient(135deg, #1E3A5F 0%, #2563EB 100%)',
        color: 'white',
        padding: '80px 40px',
        textAlign: 'center',
      }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '16px' }}>
          Meu Curriculo
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.85, maxWidth: '600px', margin: '0 auto 32px' }}>
          Me conheça como um profissional
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to='/sobre' style={{
            background: 'white', color: '#1E3A5F',
            padding: '12px 28px', borderRadius: '8px', fontWeight: 'bold'
          }}>
            Meus Dados
          </Link>
          <Link to='/contato' style={{
            background: 'transparent', color: 'white',
            padding: '12px 28px', borderRadius: '8px', fontWeight: 'bold',
            border: '2px solid white'
          }}>
            Formação Academica
          </Link>
        </div>
      </section>



      {/* ── Chamada para ação ── */}
      <section style={{
        background: '#EFF6FF', padding: '50px 40px', textAlign: 'center'
      }}>
        <h2 style={{ color: '#1E3A5F', marginBottom: '12px' }}>
          Onde eu Trabalhei:
        </h2>
        <p style={{ color: '#64748B', marginBottom: '24px' }}>
          Minhas Experiencias
        </p>
        <Link to='/lojas' style={{
          background: '#2563EB', color: 'white',
          padding: '12px 32px', borderRadius: '8px', fontWeight: 'bold',
          display: 'inline-block'
        }}>
          Veja as Minhas Experiencias
        </Link>
      </section>

    </div>
  );
}

export default Home;
