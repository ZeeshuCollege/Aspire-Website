import React from 'react';

export default function PageLoader() {
  return (
    <div 
      className="page-loader-wrap" 
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        width: '100%'
      }}
      role="status"
      aria-live="polite"
      aria-label="Loading page content"
    >
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <div 
          style={{
            width: '42px',
            height: '42px',
            border: '3px solid var(--border-color)',
            borderTopColor: 'var(--color-primary)',
            borderRadius: '50%',
            animation: 'spin 0.75s linear infinite'
          }}
        />
        <span style={{ fontSize: '0.9rem', color: 'var(--text-subtle)', fontWeight: 500 }}>
          Loading ASPIRE Learning Centre...
        </span>
      </div>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
