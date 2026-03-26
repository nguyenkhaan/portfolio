import Button from "@/src/shared/components/Button"
import { GitFork } from "lucide-react"
const SmallProjectCard = ({
    techstack = '', 
    name = '', 
    description = '', 
    visit = '' 
}) => 
{
    return (
        <div className="w-[330px] h-fit border border-border">
            <div className="border-b-white border-b text-gray text-base p-2 h-10">
                {techstack}
            </div>  
            <div className="w-full text-text p-4 text-2xl">
                <h1 className="line-clamp-2">{name}</h1>
                <p className="text-base text-gray my-3">
                    {description}
                </p>
            <a href={visit} target="_blank">
                <Button icon={<GitFork />}>
                    Github 
                </Button>
            </a>
            </div>
        </div>
    )
}
export default SmallProjectCard