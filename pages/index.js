import Layout from "../components/layout";
import ProjectSlider from "../components/ProjectSlider";
import ScrollButton from "../components/ScrollButton";

export default function Home() {

  return (
    <Layout>
      <div className="h-screen" id="page1">
        <h2>Mayu Satori</h2>
        <a href="https://drive.google.com/u/0/uc?id=1nYofhKGM0kOfAYZscyq_555-QoCqHsrm&export=download">Download CV</a>
        <h3>PROJETOS</h3>
        <ScrollButton />
      </div>
      <div className="h-screen" id="page2">
        <ProjectSlider />
      </div>
    </Layout>
  )
}