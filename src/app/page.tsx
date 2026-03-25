import Button from "../shared/components/Button"
import Heading from "../shared/components/Header"
import { Camera } from "lucide-react"
import Media from "../shared/components/Mediax"
import ProjectCard from "../modules/landing/Project"
import LabelInput from "../shared/components/LabelInput"
import Input from "../shared/components/Input"
import SmallProjectCard from "../modules/landing/SmallProject"
const Home = () => 
{
  return (
    <div className="h-full">
        <Button fill={true} variant="primary">
          Hello world 
        </Button>
        <Heading>
          Hello world. This is Kamen rider 
        </Heading>
        <Media Icon={<Camera size={32} />} className="opacity-80" >
          @alias twitter   
        </Media> 
        <ProjectCard /> 
        <LabelInput /> 
        <Input /> 
        <SmallProjectCard /> 
    </div>
  )
}
export default Home
