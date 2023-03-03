function Navbar() {
  const styles = {
    backgroundColor: "blue",
    marginTop: "0px",
    padding: "5px",
    color: "white",
    fontWeight: "bold",
    display: "flex",
  }
  return (
    <div>
      <nav style={styles}>
        <p style={{marginLeft: "50px" }}>WikiCountries</p>
      </nav>
    </div>
  );
}

export default Navbar;
