import ContactSection from "../modules/landing/components/ContactSection/ContactSection" 
import HomeSection from "../modules/landing/components/HomeSection/HomeSection"
import ProjectSection from "../modules/landing/components/ProjectSection/Project"
const Home = () => 
{
  return (
    <div className="h-full mt-16 pb-10">
        <HomeSection /> 
        <ProjectSection /> 
        <ContactSection /> 
    </div>
  )
}
export default Home
