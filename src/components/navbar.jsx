import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav-container">
      <div className="historial">
        <Link to="historial">
          <button title="Ver Historial">Historial</button>
        </Link>
      </div>
      <h1 className="center separador">¡Seguros para tu hogar!</h1>
    </nav>
  );
}
