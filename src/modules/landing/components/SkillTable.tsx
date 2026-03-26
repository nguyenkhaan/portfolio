import { HTMLAttributes } from "react"

interface SkillsCardProps extends HTMLAttributes<HTMLElement> {
    title : string, 
    skills: string[] 
} 
const SkillsCard = ({
    title, 
    skills, 
    ...props 
} : SkillsCardProps) => 
{
    return (
        <div className="w-[192px] min-h-25 grow-0 border border-border" {...props}>
            <div className="p-3 w-full border-b border-b-border">
                {title}
            </div>
            <ul className="w-full flex flex-col text-gray p-3">
                {
                    skills.map((skill) => <li>{skill}</li>)
                }
            </ul>
        </div>
    )
}
export default SkillsCard