import { Link } from 'react-router-dom'

export default function Dashboard() {
  const menus = [
    { to: '/ai-lens', title: 'AI Lens', desc: 'Identifikasi barang dari foto' },
    { to: '/scan-text', title: 'Scan Teks', desc: 'Baca teks label / kemasan' },
    { to: '/barcode', title: 'Barcode / QR', desc: 'Scan barcode dan QR code' },
    { to: '/history', title: 'Riwayat', desc: 'Lihat riwayat scan' },
  ]

  return (
    <div style={{ padding: 16 }}>
      <h2>Dashboard</h2>
      <p>Pilih mode kerja:</p>
      <div style={{ display: 'grid', gap: 12 }}>
        {menus.map((m) => (
          <Link key={m.to} to={m.to} className="menu-card">
            <strong>{m.title}</strong>
            <span>{m.desc}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}