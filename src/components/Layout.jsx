import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Layout() {
  const location = useLocation()
  const isActive = (path) => (location.pathname === path ? 'active' : '')
  const { signOut } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await signOut()
    navigate('/login')
  }

  return (
    <div className="layout">
      <header className="topbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong>Twincom Smart Lens</strong>
        <button 
          onClick={handleLogout}
          style={{ background: 'transparent', color: 'white', border: '1px solid white', padding: '4px 8px', borderRadius: 4, cursor: 'pointer', fontSize: 12 }}
        >
          Logout
        </button>
      </header>

      <main className="content">
        <Outlet />
      </main>

      <nav className="bottomnav">
        <Link to="/dashboard" className={isActive('/dashboard')}>🏠 Dashboard</Link>
        <Link to="/ai-lens" className={isActive('/ai-lens')}>🤖 AI</Link>
        <Link to="/scan-text" className={isActive('/scan-text')}>📝 Teks</Link>
        <Link to="/barcode" className={isActive('/barcode')}>📷 Barcode</Link>
        <Link to="/history" className={isActive('/history')}>🕘 Riwayat</Link>
      </nav>
    </div>
  )
}