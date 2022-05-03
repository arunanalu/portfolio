import Layout from "../components/layout";
import styles from "../styles/home.module.css"

export default function Home() {

  function scrollToelement() {
    const element = document.getElementById('page2');
    element.scrollIntoView({behavior: "smooth"});
  };

  return (
    <Layout>
      <div className={styles.firstScreen}>
        <h2>Título</h2>
        <div className={styles.buttonBox}>
          <button
           className={styles.arrowButton}
           onClick={scrollToelement}
          >
            <div className={styles.arrowBox}>
              <div className={styles.arrow} />
              <div className={styles.arrow} />
              <div className={styles.arrow} />
            </div>
          </button>
        </div>
      </div>
      <div className={styles.secondScreen} id="page2">
        div2
      </div>
    </Layout>
  )
}