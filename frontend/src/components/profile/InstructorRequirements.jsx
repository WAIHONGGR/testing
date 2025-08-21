import React, { useState, useRef } from 'react'

const InstructorRequirements = () => {
  const [signature, setSignature] = useState('')
  const [documentUploaded, setDocumentUploaded] = useState(false)
  const canvasRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)

  const startDrawing = (e) => {
    setIsDrawing(true)
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const draw = (e) => {
    if (!isDrawing) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    ctx.lineTo(x, y)
    ctx.stroke()
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  const clearSignature = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    setSignature('')
  }

  const saveSignature = () => {
    const canvas = canvasRef.current
    const signatureData = canvas.toDataURL()
    setSignature(signatureData)
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setDocumentUploaded(true)
      // Handle file upload logic here
      console.log('File uploaded:', file.name)
    }
  }

  return (
    <div className="profile-content">
      <div className="profile-section">
        <h2>Submit Requirements</h2>
        
        {/* Digital Signature */}
        <div className="requirement-item">
          <h3>Digital Signature</h3>
          <p>Please draw your digital signature below:</p>
          
          <div className="signature-canvas-container">
            <canvas
              ref={canvasRef}
              width="400"
              height="200"
              className="signature-canvas"
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
            />
            <div className="signature-actions">
              <button className="btn-secondary" onClick={clearSignature}>
                Clear
              </button>
              <button className="btn-primary" onClick={saveSignature}>
                Save Signature
              </button>
            </div>
          </div>
          
          {signature && (
            <div className="signature-preview">
              <h4>Signature Preview:</h4>
              <img src={signature} alt="Digital Signature" className="signature-image" />
            </div>
          )}
        </div>
        
        {/* Document Upload */}
        <div className="requirement-item">
          <h3>Certificate/Qualification Document</h3>
          <p>Please upload your qualification certificate or relevant document:</p>
          
          <div className="document-upload">
            <input
              type="file"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              onChange={handleFileUpload}
              className="file-input"
              id="document-upload"
            />
            <label htmlFor="document-upload" className="file-upload-label">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Choose File
            </label>
            
            {documentUploaded && (
              <div className="upload-success">
                <span className="success-icon">✓</span>
                Document uploaded successfully
              </div>
            )}
          </div>
          
          <div className="upload-info">
            <p><strong>Accepted formats:</strong> PDF, DOC, DOCX, JPG, JPEG, PNG</p>
            <p><strong>Maximum size:</strong> 10MB</p>
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="requirement-submit">
          <button className="btn-primary" disabled={!signature || !documentUploaded}>
            Submit Requirements
          </button>
        </div>
      </div>
    </div>
  )
}

export default InstructorRequirements
