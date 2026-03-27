'use client';
import { NavbarMenuItems } from '@/src/shared/constants/app.constants';
import LandingLayout from '../../layouts/LandingLayout';
import Heading from '@/src/shared/components/Header';
import ProjectCard from '../CompleteProject';
import { motion } from 'framer-motion';
import {
    CompleteProjects,
    SmallProjects,
} from '@/src/shared/constants/me.constants';
import SmallProjectCard from '../SmallProject';
import { AppearAnimation } from '../../animations/shared';
const ProjectSection = () => {
    return (
        <LandingLayout
            title="projects"
            shortDescription="List of all my projects"
            id={NavbarMenuItems[1].link}
            className="my-18"
        >
            <motion.div
                className="w-full my-8 flex flex-col gap-8"
                variants={AppearAnimation}
                initial="initial"
                whileInView={'visible'}
            >
                <Heading>complete-apps</Heading>
                <div className="w-full grid grid-cols-3 gap-5 justify-between">
                    {CompleteProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            imageUrl={project.imageUrl}
                            name={project.name}
                            description={project.description}
                            techstack={project.techstack}
                            visit={project.visit}
                            detailDescription={project.detailDescription}
                        />
                    ))}
                </div>
            </motion.div>
            <motion.div
                variants={AppearAnimation}
                initial="initial"
                whileInView={'visible'}
                className="w-full my-8 flex flex-col gap-8"
            >
                <Heading>small-projects</Heading>
                <div className="w-full grid grid-cols-3 gap-5 justify-between">
                    {SmallProjects.map((project, index) => (
                        <SmallProjectCard
                            key={index}
                            name={project.name}
                            techstack={project.techstack}
                            description={project.description}
                            visit={project.visit}
                        />
                    ))}
                </div>
            </motion.div>
            <div className="w-full p-4 border border-white rounded-sm shadow-inner">
                <Heading>snake-contributions</Heading>
                <img
                    src="https://raw.githubusercontent.com/nguyenkhaan/nguyenkhaan/output/github-contribution-grid-snake-dark-custom.svg?v=1"
                    alt="github contribution snake"
                    className="w-full h-auto"
                />
            </div>
        </LandingLayout>
    );
};
export default ProjectSection;
