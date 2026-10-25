import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          color: '#f8fafc',
          padding: '40px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          maxWidth: '680px',
          margin: '60px auto',
          background: '#0f1118',
          borderRadius: '16px',
          border: '1px solid rgba(239, 68, 68, 0.4)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
        }}>
          <h2 style={{ color: '#f87171', fontSize: '1.4rem', marginBottom: '12px' }}>
            Application Error
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '20px' }}>
            An unexpected error occurred during rendering:
          </p>
          <pre style={{
            background: 'rgba(0, 0, 0, 0.4)',
            padding: '16px',
            borderRadius: '8px',
            fontSize: '0.85rem',
            color: '#fca5a5',
            overflowX: 'auto',
            marginBottom: '24px'
          }}>
            {this.state.error?.toString()}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              background: '#6366f1',
              color: '#ffffff',
              border: 'none',
              borderRadius: '9999px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Reload Portfolio
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)
