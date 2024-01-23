import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <section>
        <h1>Social Media App</h1>
        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
          </div>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
