


// import React from 'react';

// const HeroSection = () => {
//   const styles = {
//     container: {
//       minHeight: '100vh',
//       width: '100%',
//       padding: '60px 20px',
//       backgroundColor: '#fdfcdc',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       textAlign: 'center',
//       boxSizing: 'border-box',
//     },
//     heading: {
//       fontFamily: 'Cera Pro',
//       fontWeight: 700,
//       fontSize: '48px',
//       lineHeight: '100%',
//       marginBottom: '20px',
//       color: '#000',
//     },
//     subHeading: {
//       fontFamily: 'Cera Pro',
//       fontWeight: 400,
//       fontSize: '20px',
//       marginBottom: '20px',
//       color: '#333',
//     },
//     paragraph: {
//       fontFamily: 'Cera Pro',
//       fontWeight: 400,
//       fontSize: '20px',
//       maxWidth: '804px',
//       marginBottom: '40px',
//       color: '#333',
//       padding: '0 20px',
//     },
//     searchWrapper: {
//       width: '100%',
//       maxWidth: '750px',
//       position: 'relative',
//       padding: '0 20px',
//       boxSizing: 'border-box',
//     },
//     input: {
//       width: '100%',
//       height: '64px',
//       borderRadius: '64px',
//       border: '5px solid #0081A7',
//       padding: '0 160px 0 24px',
//       fontSize: '18px',
//       fontFamily: 'sans-serif',
//       outline: 'none',
//       boxSizing: 'border-box',
//       backgroundColor: '#fed9b7',
//     },
//     button: {
//       position: 'absolute',
//       top: '50%',
//       right: '28px',
//       transform: 'translateY(-50%)',
//       padding: '15px 32px',
//       borderRadius: '54px',
//       backgroundColor: '#0081A7',
//       color: '#fff',
//       fontSize: '16px',
//       fontWeight: 600,
//       border: 'none',
//       cursor: 'pointer',
//       whiteSpace: 'nowrap',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       boxSizing: 'border-box',
//       maxHeight: '52px',
//     },
//     iconWrapper: {
//       position: 'absolute',
//       top: '50%',
//       right: '28px',
//       transform: 'translateY(-50%)',
//       width: '41px',
//       height: '41px',
//       backgroundColor: '#0081A7',
//       borderRadius: '50%',
//       display: 'none',
//       boxSizing: 'border-box',
//       cursor: 'pointer',
//     },
//     glass: {
//       width: '14px',
//       height: '14px',
//       border: '2px solid white',
//       borderRadius: '50%',
//       position: 'absolute',
//       top: '8px',
//       left: '9px',
//       boxSizing: 'border-box',
//     },
//     handle: {
//       width: '10px',
//       height: '2px',
//       backgroundColor: 'white',
//       position: 'absolute',
//       top: '21px',
//       left: '23px',
//       transform: 'rotate(45deg)',
//       transformOrigin: 'top left',
//     },
//   };

//   return (
//     <section style={styles.container}>
//       <h1 style={styles.heading}>Your Safe Space for Healing</h1>
//       <p style={styles.subHeading}>
//         Feeling overwhelmed? Anxious? Or simply need someone to listen?
//       </p>
//       <p style={styles.paragraph}>
//         Our AI-powered mental health companion is here to support you, anytime, anywhere, without judgment.
//         Let’s take the first step toward a calmer, clearer mind—together.
//       </p>

//       <div style={styles.searchWrapper}>
//         <input
//           type="text"
//           placeholder="Type your thoughts or questions..."
//           style={styles.input}
//         />

//         {/* Button on Desktop */}
//         <button style={styles.button} className="desktop-search">Search</button>

//         {/* Icon on Mobile */}
//         <span className="mobile-search-icon" style={styles.iconWrapper}>
//           <span style={styles.glass}></span>
//           <span style={styles.handle}></span>
//         </span>
//       </div>

//       <style>{`
//         @import url('https://fonts.cdnfonts.com/css/cera-pro');

//         @media (max-width: 768px) {
//           h1 {
//             font-size: 32px !important;
//           }
//           p {
//             font-size: 18px !important;
//           }
//           input {
//             font-size: 16px !important;
//             height: 56px !important;
//             padding-right: 80px !important;
//           }
//           .desktop-search {
//             display: none !important;
//           }
//           .mobile-search-icon {
//             display: inline-block !important;
//           }
//         }

//         @media (max-width: 480px) {
//           h1 {
//             font-size: 26px !important;
//           }
//           p {
//             font-size: 16px !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroSection;
import React from 'react';

const HeroSection = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      width: '100%',
      padding: '60px 20px',
      backgroundColor: '#fdfcdc',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
    },
    heading: {
      fontFamily: 'Cera Pro',
      fontWeight: 700,
      fontSize: '48px',
      lineHeight: '100%',
      marginBottom: '20px',
      color: '#000',
      zIndex: 2,
    },
    subHeading: {
      fontFamily: 'Cera Pro',
      fontWeight: 400,
      fontSize: '20px',
      marginBottom: '20px',
      color: '#333',
      zIndex: 2,
    },
    paragraph: {
      fontFamily: 'Cera Pro',
      fontWeight: 400,
      fontSize: '20px',
      maxWidth: '804px',
      marginBottom: '40px',
      color: '#333',
      padding: '0 20px',
      zIndex: 2,
    },
    searchWrapper: {
      width: '100%',
      maxWidth: '750px',
      position: 'relative',
      padding: '0 20px',
      boxSizing: 'border-box',
      zIndex: 2,
    },
    input: {
      width: '100%',
      height: '64px',
      borderRadius: '64px',
      border: '5px solid #0081A7',
      padding: '0 160px 0 24px',
      fontSize: '18px',
      fontFamily: 'sans-serif',
      outline: 'none',
      boxSizing: 'border-box',
      backgroundColor: '#fed9b7',
    },
    button: {
      position: 'absolute',
      top: '50%',
      right: '28px',
      transform: 'translateY(-50%)',
      padding: '15px 32px',
      borderRadius: '54px',
      backgroundColor: '#0081A7',
      color: '#fff',
      fontSize: '16px',
      fontWeight: 600,
      border: 'none',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      maxHeight: '52px',
    },
    iconWrapper: {
      position: 'absolute',
      top: '50%',
      right: '28px',
      transform: 'translateY(-50%)',
      width: '41px',
      height: '41px',
      backgroundColor: '#0081A7',
      borderRadius: '50%',
      display: 'none',
      boxSizing: 'border-box',
      cursor: 'pointer',
    },
    glass: {
      width: '14px',
      height: '14px',
      border: '2px solid white',
      borderRadius: '50%',
      position: 'absolute',
      top: '8px',
      left: '9px',
      boxSizing: 'border-box',
    },
    handle: {
      width: '10px',
      height: '2px',
      backgroundColor: 'white',
      position: 'absolute',
      top: '21px',
      left: '23px',
      transform: 'rotate(45deg)',
      transformOrigin: 'top left',
    },
    gif1: {
      position: 'absolute',
       top: 'clamp(10px, 18vh, 50px)',     // ⬅️ adjust this for Y-axis
  left: 'clamp(30px, 12vw, 130px)',    // ⬅️ adjust this for X-axis
  width: 'clamp(140px, 25vw, 260px)',
    //   height: 'auto',
      zIndex: 1,
      opacity: 1,
      pointerEvents: 'none',
    },
  };

  return (
    <section style={styles.container}>
      {/* 🎞️ Responsive GIF */}
      <img
        src="/animations/3.gif"
        alt="Animated Therapy Illustration"
        style={styles.gif1}
      />

      {/* Text + Search */}
      <h1 style={styles.heading}>Your Safe Space for Healing</h1>
      <p style={styles.subHeading}>
        Feeling overwhelmed? Anxious? Or simply need someone to listen?
      </p>
      <p style={styles.paragraph}>
        Our AI-powered mental health companion is here to support you, anytime, anywhere, without judgment.
        Let’s take the first step toward a calmer, clearer mind—together.
      </p>

      <div style={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Type your thoughts or questions..."
          style={styles.input}
        />
        <button style={styles.button} className="desktop-search">Search</button>
        <span className="mobile-search-icon" style={styles.iconWrapper}>
          <span style={styles.glass}></span>
          <span style={styles.handle}></span>
        </span>
      </div>

      {/* Fonts and Responsive Tweaks */}
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/cera-pro');

        @media (max-width: 768px) {
          h1 { font-size: 32px !important; }
          p { font-size: 18px !important; }
          input {
            font-size: 16px !important;
            height: 56px !important;
            padding-right: 80px !important;
          }
          .desktop-search { display: none !important; }
          .mobile-search-icon { display: inline-block !important; }
        }

        @media (max-width: 480px) {
          h1 { font-size: 26px !important; }
          p { font-size: 16px !important; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
