const Footer = ({ isDark }) => {
  return (
    <>
      <div style={{ height: "30px", marginLeft: " 20px" }}>
        <a className="me-4" href="https://www.linkedin.com/" target="_blank">
          <i
            style={{ color: isDark ? "white" : "black" }}
            className="bi bi-linkedin  fs-2"
          ></i>
        </a>
        <a href="#" target="_blank">
          <i
            style={{ color: isDark ? "white" : "black" }}
            className="bi bi-github  fs-2"
          ></i>
        </a>
      </div>
      <p
        style={{
          color: isDark ? "white" : "black",
          fontSize: " 1.5rem",
          textAlign: "center",
          marginTop: "15px",
        }}
      >
        <span>&copy;</span> {new Date().getFullYear()} Roi Gal
      </p>
    </>
  );
};

export default Footer;
