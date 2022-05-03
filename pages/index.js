import Layout from "../components/layout";
import styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={styles.firstScreen}>
        <h2>Título</h2>
      </div>
      <div className={styles.secondScreen}>
        div2
      </div>
    </Layout>
  )
}