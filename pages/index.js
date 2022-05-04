import Layout from "../components/Layout";
import ProjectSlider from "../components/ProjectSlider";
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
        <a href="https://drive.google.com/u/0/uc?id=1nYofhKGM0kOfAYZscyq_555-QoCqHsrm&export=download">Download CV</a>
        <div className={styles.buttonBox}>
          <a
           className={styles.arrowButton}
           onClick={scrollToelement}
           type="button"
          >
            <div className={styles.arrowBox}>
              <div className={styles.arrow} />
              <div className={styles.arrow} />
              <div className={styles.arrow} />
            </div>
          </a>
        </div>
      </div>
      <div className={styles.secondScreen} id="page2">
        <ProjectSlider />
      </div>
    </Layout>
  )
}