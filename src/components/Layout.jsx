import { Outlet, Link, useLocation } from 'react-router-dom'

export default function Layout() {
  const location = useLocation()
  const isActive = (path) => (location.pathname === path ? 'active' : '')

  return (
    <div className="layout">
      <header className="topbar">
        <strong>Twincom Smart Lens</strong>
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