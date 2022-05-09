import Layout from "../components/Layout";
import ProjectSlider from "../components/ProjectSlider";
import ScrollButton from "../components/ScrollButton";
import Image from "next/image"
import Bonfa from "../public/images/bonfa.jpg"
import animations from "../styles/animations.module.css"

export default function Home() {

  return (
    <Layout>
      <div className="h-screen" id="page1">
        <h2>Mayu Satori</h2>
        <div className="w-[10rem] flex rounded-full overflow-hidden saturate-[0] hover:saturate-100 hover:scale-[1.1]">
          <Image 
            alt="bonfa"
            src={Bonfa}
          />
        </div>
        <a 
          className="flex bg-blue-700 justify-center w-[130px] p-1 rounded-lg"
          href="https://drive.google.com/u/0/uc?id=1nYofhKGM0kOfAYZscyq_555-QoCqHsrm&export=download"
        >
          Download CV
        </a>
        <div className="flex justify-center absolute bottom-[10vh] w-full">
          <h3 className={`${animations.textFlickerInGlow} text-lg font-bold`}>PROJETOS</h3> 
        </div>
        <ScrollButton />
      </div>
      <div className="h-screen" id="page2">
        <ProjectSlider />
      </div>
    </Layout>
  )
}