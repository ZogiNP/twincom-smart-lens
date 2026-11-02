import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AILens from './pages/AILens.jsx'
import ScanText from './pages/ScanText.jsx'
import Barcode from './pages/Barcode.jsx'
import History from './pages/History.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      {/* Rute yang dilindungi (harus login) */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="ai-lens" element={<AILens />} />
          <Route path="scan-text" element={<ScanText />} />
          <Route path="barcode" element={<Barcode />} />
          <Route path="history" element={<History />} />
        </Route>
      </Route>
      
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}