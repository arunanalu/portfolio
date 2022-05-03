import Layout from "../components/layout";
import styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={styles.firstScreen}>
        <h2>Título</h2>
        <div className={styles.buttonBox}>
          <button className={styles.arrowButton}>
            <div className={styles.arrowBox}>
              <div className={styles.arrow} />
              <div className={styles.arrow} />
              <div className={styles.arrow} />
            </div>
          </button>
        </div>
      </div>
      <div className={styles.secondScreen}>
        div2
      </div>
    </Layout>
  )
}