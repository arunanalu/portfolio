import styles from './scrollButton.module.css'

export default function ScrollButton() {
  
  function scrollToelement() {
    const element = document.getElementById('page2');
    element.scrollIntoView({behavior: "smooth"});
  };

  return (
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
  )
}