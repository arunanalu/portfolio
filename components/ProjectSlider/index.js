/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import { useState } from "react"
import { projectData } from "../../data/projectData"
import { 
  IoIosClose,
  IoIosArrowBack,
  IoIosArrowForward,
  IoLogoGithub
} from "react-icons/io";
import { IoArrowUndoOutline } from "react-icons/io5"
import { GoLink } from "react-icons/go"

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
    <section className="pt-2 relative flex flex-col text-center h-full overflow-hidden">
      <IoIosArrowBack onClick={prevSlide} className="absolute left-3 top-[85vh] scale-[2.2] text-mayuGreen cursor-pointer" />
      <IoIosArrowForward onClick={nextSlide} className="absolute right-3 top-[85vh] scale-[2.2] text-mayuGreen cursor-pointer" />
      <IoArrowUndoOutline onClick={scrollToelement} className="ml-2 mt-[0.2rem] -scale-x-[1.6] scale-y-[1.6] rotate-[270deg] text-mayuGreen cursor-pointer" />
      {projectData.map((element, index) => {
        return (
          index === currentSlide && (
            <div key={index}>
              <h1 className="text-xl font-medium">{element.title}</h1>
              <div className="relative m-auto w-[70%] h-[10rem] mt-6">
                <Image 
                  alt="projeto"
                  src={element.image}
                  layout="fill"
                  objectFit="contain"
                  onClick={handleExpand}
                  className="cursor-pointer"
                />
              </div>
              <p className="text-justify w-[90%] m-auto mt-6">{element.description}</p>
              <nav className="flex justify-evenly mt-3">
                <a className="flex items-center" href={element.github} target="_blank" rel="noopener noreferrer">
                  <p className="mr-2 text-[#0070f3]">GitHub</p>
                  <IoLogoGithub className="text-[#0070f3]" />
                </a>
                <a className="flex items-center" href={element.website} target="_blank" rel="noopener noreferrer">
                  <p className="mr-2 text-[#0070f3]">Site</p>
                  <GoLink className="text-[#0070f3]" />
                </a>
              </nav>
              {
                isExpanded && (
                  <div className="animate-scaleInCenter bg-[#000000e6] absolute w-[100%] h-[100%] top-0">
                    <IoIosClose className="cursor-pointer scale-[2.5] mt-3 ml-2" onClick={handleExpand} />
                    <div className="relative h-[80vh] m-auto w-[90%] mt-6">
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