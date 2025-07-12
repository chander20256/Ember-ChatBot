import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const styles = {
    navbar: {
      position: 'fixed',         // Makes the navbar fixed
      top: 0,                    // Stick to top
      left: 0,
      right: 0,
      zIndex: 999,              // Keep it above other content
      width: '100%',
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fdfcdc',
      flexWrap: 'nowrap',
      boxSizing: 'border-box',
      // boxShadow: '0 2px 10px rgba(0,0,0,0.05)', // Optional: subtle shadow on scroll
    },

    brand: {
      fontFamily: 'Just Cosmic',
      fontSize: '32px',
      fontWeight: 400,
      letterSpacing: '0.1em',
      color: '#000',
      whiteSpace: 'nowrap',
    },
    rightSide: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      flexShrink: 0,
    },
    navLinks: {
      display: 'flex',
      gap: '20px',
    },
    link: {
      fontSize: '16px',
      fontWeight: 500,
      color: '#333',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
    },
    loginButton: {
      backgroundColor: '#0081A7',
      color: '#fff',
      border: 'none',
      borderRadius: '50px',
      padding: '12px 24px',
      fontWeight: 600,
      fontSize: '14px',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
    },
    hamburger: {
      fontSize: '24px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'none',
    },
    mobileMenu: {
      position: 'absolute',
      top: '100%',
      right: '40px',
      background: '#fff',
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      zIndex: 99,
    },
  };

  return (
    <nav style={styles.navbar}>
      {/* Brand */}
      <h1 style={styles.brand}>EMBER</h1>

      {/* Right side */}
      <div style={styles.rightSide}>
        {/* Desktop Nav Links */}
        <div className="nav-links" style={styles.navLinks}>
          <span style={styles.link}>Privacy Policy</span>
          <span style={styles.link}>Need Help?</span>
        </div>

        {/* Login */}
        <button style={styles.loginButton}>Login</button>

        {/* ☰ Menu Button */}
        <button
          style={styles.hamburger}
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Dropdown on mobile */}
      {menuOpen && (
        <div className="mobile-menu" style={styles.mobileMenu}>
          <span style={styles.link}>Privacy Policy</span>
          <span style={styles.link}>Need Help?</span>
        </div>
      )}

      {/* Responsive overrides */}
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/just-cosmic');

        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
          .hamburger {
            display: inline-block !important;
          }
        }

        @media (max-width: 500px) {
          h1 {
            font-size: 24px !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
