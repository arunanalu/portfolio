/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import { useState } from "react"
import { projectData } from "../data/projectData"
import styles from './projectSlider.module.css'
import { 
  IoIosArrowDropleftCircle, 
  IoIosArrowDroprightCircle,
  IoIosExpand,
  IoIosClose,
  IoIosArrowBack,
  IoIosArrowForward,
  IoLogoGithub
} from "react-icons/io";
import { IoArrowUndoOutline } from "react-icons/io5"
import { GoLink } from "react-icons/Go"

export default function ProjectSlider() {
  const [currentSlide, setSlide] = useState(0)
  const [isExpanded, setExpanded] = useState(false)

  const length = projectData.length

  const nextSlide = () => {
    setSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    setSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
  }

  const handleExpand = () => {
    setExpanded(!isExpanded)
  }

  function scrollToelement() {
    const element = document.getElementById('page1');
    element.scrollIntoView({behavior: "smooth"});
  };

  return (
    <section className={styles.slide}>
      <IoIosArrowBack onClick={prevSlide} className={styles.prevArrow} />
      <IoIosArrowForward onClick={nextSlide} className={styles.nextArrow} />
      {/* <a onClick={prevSlide} className={styles.prevArrow}>Voltar</a> */}
      {/* <a onClick={nextSlide} className={styles.nextArrow}>Avançar</a> */}
      <IoArrowUndoOutline onClick={scrollToelement} className={styles.backButton} />
      {projectData.map((element, index) => {
        return (
          index === currentSlide && (
            <div key={index} className={styles.projectCardContainer}>
              <h1>{element.title}</h1>
              <div className={styles.projectImageContainer}>
                {/* <Image 
                  alt="projeto"
                  src={element.image}
                  layout="fill"
                  height="100%"
                  width="100%"
                  objectFit="contain"
                  className={styles.image}
                /> */}
                <img 
                  alt="projeto"
                  src={element.image}
                  loading="lazy"
                  className={styles.image}
                  onClick={handleExpand}
                />
              </div>
              {/* <div onClick={handleExpand} className={styles.openImage}>
                <p>Abrir imagem</p>
                <IoIosExpand className={styles.expandIcon} />
              </div> */}
              <p className={styles.description}>{element.description}</p>
              <nav className={styles.redirectNav}>
                <a href={element.github} target="_blank" rel="noopener noreferrer">
                  <p>GitHub</p>
                  <IoLogoGithub />
                </a>
                <a href={element.website} target="_blank" rel="noopener noreferrer">
                  <p>Site</p>
                  <GoLink />
                </a>
              </nav>
              {
                isExpanded && (
                  <div className={styles.expanded}>
                    <IoIosClose className={styles.closeIcon} onClick={handleExpand} />
                    <div className={styles.projectImageContainerExpanded}>
                      <Image 
                        alt="projeto"
                        src={element.image}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                )
              }
            </div>
          )
        )
      })}
    </section>
  )
}