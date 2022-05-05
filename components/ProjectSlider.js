import Image from "next/image"
import { useState } from "react"
import { projectData } from "../data/projectData"
import styles from './projectSlider.module.css'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";


export default function ProjectSlider() {
  const [currentSlide, setSlide] = useState(0)

  const length = projectData.length

  const nextSlide = () => {
    setSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    setSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
  }

  return (
    <section className={styles.slide}>
      <IoIosArrowDropleftCircle onClick={prevSlide} className={styles.prevArrow} />
      <IoIosArrowDroprightCircle onClick={nextSlide} className={styles.nextArrow} />
      {/* <a onClick={prevSlide} className={styles.prevArrow}>Voltar</a> */}
      {/* <a onClick={nextSlide} className={styles.nextArrow}>Avançar</a> */}
      {projectData.map((element, index) => {
        return (
          index === currentSlide && (
            <div key={index} className={styles.projectCardContainer}>
              <p>{element.description}</p>
              <div className={styles.projectImageContainer}>
                <Image 
                  alt="projeto"
                  src={element.image}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          )
        )
      })}
    </section>
  )
}