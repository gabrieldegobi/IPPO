import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";
import { useAuth } from "../../Context/AuthContext";


const NavBar = () => {
  const { user, logout } = useAuth();
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.container_logo}>
          <img
            src="https://i.pinimg.com/236x/03/dd/5d/03dd5d27d9c91e2afd1fbd4591c61437.jpg"
            alt=""
          />
        </div>
        <ul>
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
          {/*user && (
            <>
              <li>
                <Link to={"membros"}>Membros</Link>
              </li>
              <li>
                <Link to={"carteirinhas"}>Carteirinhas</Link>
              </li>
              <li>
                <Link to={"certificados"}>Certificados</Link>
              </li>
            </>
          )*/}
          {!user && (
            <li>
              <Link to={"signup"}>Signup</Link>
            </li>
          )}

          {user && <button onClick={() => logout()}>Sair</button>}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
