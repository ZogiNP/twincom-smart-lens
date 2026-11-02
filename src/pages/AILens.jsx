import { useState } from 'react'
import ImageCapture from '../components/ImageCapture'

export default function AILens() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)

  const handleImageSelected = (file, url) => {
    setSelectedFile(file)
    setPreviewUrl(url)
  }

  return (
    <div style={{ padding: 16 }}>
      <h2>AI Lens (Uji Kamera)</h2>
      <p style={{ color: '#666', fontSize: 14 }}>
        Fitur identifikasi barang akan diimplementasikan di Fase 5. Saat ini kita uji kamera dan galeri dulu.
      </p>

      <div style={{ marginTop: 20 }}>
        <ImageCapture onImageSelected={handleImageSelected} />
      </div>

      {selectedFile && (
        <div style={{ marginTop: 20, padding: 12, background: '#e0f2fe', borderRadius: 8 }}>
          <p style={{ margin: 0, fontSize: 14 }}>
            ✅ Gambar siap diproses: <strong>{selectedFile.name}</strong> ({(selectedFile.size / 1024).toFixed(1)} KB)
          </p>
        </div>
      )}
    </div>
  )
}