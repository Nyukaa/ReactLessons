import hero from "../hero.png";

const CustomKideImage = () => {
  const iconPattern = `data:image/svg+xml,${encodeURIComponent(
    '<svg width="48" height="48" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="rgba(254, 247, 237,0.3)" transform="translate(12,12)"/></svg>'
  )}`;
  const styles = {
    container: {
      position: "relative",
      width: "100%",
      height: "100%",
      backgroundColor: "black",
      overflow: "hidden",
      display: "flex",
    },

    leftPanel: {
      width: "50%",
      height: "100%",
      backgroundColor: "black",
      color: "white",
      padding: 20,
    },

    rightPanel: {
      width: "50%",
      height: "100%",
      backgroundColor: "rgb(75, 139, 191)",
      backgroundImage: `url("${iconPattern}")`,
      backgroundRepeat: "repeat",
      backgroundSize: "48px 48px",
      position: "relative",
    },

    kideImage: {
      position: "absolute",
      top: "10%",
      left: "10%",
      width: "50%",
      height: "auto",
      zIndex: 3,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftPanel}></div>
      <img src={hero} alt="Kide Icon" style={styles.kideImage} />
      <div style={styles.rightPanel}></div>
    </div>
  );
};

export default CustomKideImage;

// import hero from "../hero.png";
// const CustomKideImage = () => {
//   const styles = {
//     container: {
//       display: "flex",
//       width: "100%",
//       height: "100%",
//     },
//     blankSpace: {
//       width: "50%",
//       height: "100%",
//       backgroundColor: "black",
//     },
//     iconCanvas: {
//       width: "50%",
//       height: "100%",
//       backgroundColor: "teal",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.blankSpace}>
//         <p style={{ color: "white" }}>Component here</p>
//       </div>
//       <div>
//         <img
//           src={hero}
//           style={{ width: "50%", height: "auto" }}
//           alt="Kide Icon"
//         />
//       </div>
//       <div style={styles.iconCanvas}></div>
//     </div>
//   );
// };

// export default CustomKideImage;
