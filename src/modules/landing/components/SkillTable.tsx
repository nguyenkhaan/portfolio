'use client'
import { motion } from 'framer-motion'

interface SkillsCardProps {
    title: string
    skills: string[]
}

const SkillsCard = ({ title, skills }: SkillsCardProps) => {
    return (
        <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
                rest: {
                    scale: 1,
                    backgroundColor: 'transparent'
                },
                hover: {
                    scale: [1, 0.8, 1],
                    borderRadius: ["0px", "9999px", "0"],
                }
            }}
            transition={{
                duration: 0.8,
                times: [0, 0.4, 1],
                ease: [0.22, 1, 0.36, 1]
            }}
            className="w-[192px] min-h-25 border border-border overflow-hidden"
        >
            {/* Nội dung giữ nguyên */}
            <div className="p-3 w-full border-b border-b-border">
                {title}
            </div>

            <ul className="w-full flex flex-col text-gray p-3">
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </motion.div>
    )
}

export default SkillsCard