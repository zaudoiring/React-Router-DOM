import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a class="navbar-brand" href="">Shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">

      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active"
            to="/"
            style={({ isActive }) => {
              return { color: isActive ? "tomato" : "gray" };
            }}
          >
            home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link "
            to="/about"
            style={({ isActive }) => {
              return { color: isActive ? "tomato" : "gray" };
            }}
          >
            about
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link "
            to="/contact"
            style={({ isActive }) => {
              return { color: isActive ? "tomato" : "gray" };
            }}
          >
            contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"
            to="/products"
            style={({ isActive }) => {
              return { color: isActive ? "tomato" : "gray" };
            }}
          >
            products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"
            to="/login"
            style={({ isActive }) => {
              return { color: isActive ? "tomato" : "gray" };
            }}
          >
            login
          </NavLink>
        </li>
      </ul>
    </div>
   </div>
    </nav>
  );
}

export default NavBar;
