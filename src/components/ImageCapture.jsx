import { useState, useRef } from 'react'

export default function ImageCapture({ onImageSelected }) {
  const [preview, setPreview] = useState(null)
  const [error, setError] = useState(null)
  
  const cameraRef = useRef(null)
  const galleryRef = useRef(null)

  const handleFileChange = (e) => {
    setError(null)
    const file = e.target.files[0]
    
    if (!file) return

    // Validasi tipe file (hanya gambar)
    if (!file.type.startsWith('image/')) {
      setError('File harus berupa gambar (JPG, PNG, dll).')
      return
    }

    // Validasi ukuran (maksimal 5MB biar gak berat)
    if (file.size > 5 * 1024 * 1024) {
      setError('Ukuran gambar maksimal 5MB.')
      return
    }

    // Buat URL preview
    const objectUrl = URL.createObjectURL(file)
    setPreview(objectUrl)
    
    // Kirim file ke parent component
    if (onImageSelected) {
      onImageSelected(file, objectUrl)
    }
  }

  const handleReset = () => {
    setPreview(null)
    setError(null)
    if (cameraRef.current) cameraRef.current.value = ''
    if (galleryRef.current) galleryRef.current.value = ''
    if (onImageSelected) onImageSelected(null, null)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {error && <p style={{ color: 'red', fontSize: '14px', margin: 0 }}>{error}</p>}

      {!preview ? (
        <div style={{ display: 'flex', gap: '10px' }}>
          {/* Tombol Kamera */}
          <button 
            onClick={() => cameraRef.current?.click()}
            style={{ flex: 1, padding: '12px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
          >
            📷 Buka Kamera
          </button>
          <input 
            type="file" 
            accept="image/*" 
            capture="environment" 
            ref={cameraRef} 
            onChange={handleFileChange} 
            style={{ display: 'none' }} 
          />

          {/* Tombol Galeri */}
          <button 
            onClick={() => galleryRef.current?.click()}
            style={{ flex: 1, padding: '12px', background: '#475569', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
          >
            🖼️ Pilih Galeri
          </button>
          <input 
            type="file" 
            accept="image/*" 
            ref={galleryRef} 
            onChange={handleFileChange} 
            style={{ display: 'none' }} 
          />
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <img 
            src={preview} 
            alt="Preview" 
            style={{ width: '100%', maxHeight: '300px', objectFit: 'contain', borderRadius: '8px', background: '#000' }} 
          />
          <button 
            onClick={handleReset}
            style={{ padding: '10px', background: '#dc2626', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
          >
            ❌ Hapus & Ulangi
          </button>
        </div>
      )}
    </div>
  )
}