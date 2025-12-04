import { useNavigate } from "react-router-dom"
import styles from "./Home.module.css"

const Home = () => {

  const navigate = useNavigate()
  return (
    <section className={styles.container}>
      <div className={styles.bluer}></div>
      <div className={styles.wellcome}>
        <h1>Wellcome</h1>
        <button onClick={()=>navigate('/signup')} className={styles.button}>Fazer Login</button>
      </div>
    </section>
  )
}

export default Home