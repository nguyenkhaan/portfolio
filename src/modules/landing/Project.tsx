import Button from "@/src/shared/components/Button"
import { Play } from "lucide-react"
const ProjectCard = () => 
{
    return (
        <div className="w-[330px] flex flex-col text-text items-center justify-between border border-white">
            <div className="shrink-0 h-50 grow-0 w-full bg-green-500">
             
            </div> 
            <div className="grow-0 w-full min-h-50">
                <div className="text-base px-3 py-2 w-full border-y border-y-white">
                    HTML, CSS, Javascript
                </div>
                <div className="p-3">
                    <h1 className="font-semibold text-[24px] line-clamp-2">Chert Notes</h1>
                    <p className="my-2 text-gray-400"> 
                        Minecraft servers hosting Minecraft servers hosting Minecraft servers hosting Minecraft servers hosting Minecraft servers hosting 
                        Minecraft servers hosting Minecraft servers hosting Minecraft servers hosting Minecraft servers hosting Minecraft servers hosting 
                        Minecraft servers hosting Minecraft servers hosting Minecraft servers hosting Minecraft servers hosting Minecraft servers hosting 
                        Minecraft servers hosting Minecraft servers hosting Minecraft servers hosting Minecraft servers hosting Minecraft servers hosting 
                    </p>    

                    <div className="my-2 flex items-center justify-start gap-3">
                        <Button size={'lg'} fill icon={ <Play /> }>Live</Button>
                        <Button fill>Live</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProjectCard