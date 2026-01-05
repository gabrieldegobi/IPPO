import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import { useAuth } from "../../Context/AuthContext";
import { IoMdPeople } from "react-icons/io";
import { FaAddressCard } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  return (
    <section className={styles.container}>
      <div className={styles.bluer}></div>
      {!user && (
        <div className={styles.wellcome}>
          <h1>Wellcome</h1>
          <button onClick={() => navigate("/signup")} className={styles.button}>
            Fazer Login
          </button>
        </div>
      )}

      {user && (
        <div className={styles.cards}>
          <div className={styles.card} onClick={() => navigate("/membros")} >
            <IoMdPeople className={styles.icon}  />
            <p>Membros</p>
          </div>
          <div className={styles.card} onClick={() => navigate("/carteirinhas")}>
            <FaAddressCard className={styles.icon} />
            <p>Carteirinhas</p>
          </div>
          <div className={styles.card} onClick={() => navigate("/certificados")}>
            <TbCertificate className={styles.icon} />
            <p>Certificados</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
