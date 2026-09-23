import React from 'react'

export default {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, fontSize: '18px' }}>
      <span style={{
        background: 'linear-gradient(135deg, #3ECF8E, #FF9100)',
        borderRadius: '8px',
        padding: '3px 8px',
        color: '#000000',
        fontSize: '14px',
        fontWeight: 900,
        boxShadow: '0 2px 8px rgba(62, 207, 142, 0.4)'
      }}>⚡</span>
      <span style={{ letterSpacing: '-0.5px' }}>Rabin CLI</span>
      <span style={{
        fontSize: '11px',
        padding: '2px 6px',
        background: 'rgba(62, 207, 142, 0.15)',
        color: '#3ECF8E',
        borderRadius: '12px',
        border: '1px solid rgba(62, 207, 142, 0.3)',
        marginLeft: '4px',
        fontWeight: 600
      }}>v1.0.0</span>
    </div>
  ),
  project: {
    link: 'https://github.com/rabinacharya/rabin-cli',
  },
  docsRepositoryBase: 'https://github.com/rabinacharya/rabin-cli/tree/main/docs-site',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Rabin CLI ("Laravel for Flutter")'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />
      <style>{`
        :root {
          --font-body: 'Plus Jakarta Sans', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
        }

        body,
        button,
        input,
        textarea,
        select {
          font-family: var(--font-body);
        }

        code, pre, kbd {
          font-family: var(--font-mono) !important;
        }
      `}</style>
      <meta property="og:title" content="Rabin CLI — Laravel for Flutter" />
      <meta property="og:description" content="An opinionated Flutter framework + CLI. Feature-first, domain-driven, local-first, Supabase-backed." />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220%22><text y=%2222%22 font-size=%2222%22>⚡</text></svg>" />
    </>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  footer: {
    text: (
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
        <span>
          © {new Date().getFullYear()} <strong>Rabin CLI</strong>. Built with ⚡ for high-velocity Flutter developers by <strong>Rabin Acharya</strong>.
        </span>
        <span>
          Laravel for Flutter
        </span>
      </div>
    ),
  },
}
