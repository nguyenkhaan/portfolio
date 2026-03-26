import { NavbarMenuItems } from '@/src/shared/constants/app.constants';
import LandingLayout from '../layouts/LandingLayout';
import Heading from '@/src/shared/components/Header';
import ProjectCard from './CompleteProject';
import { CompleteProjects } from '@/src/shared/constants/me.constants';

const ProjectSection = () => {
    return (
        <LandingLayout
            title="projects"
            shortDescription="List of all my projects"
            id={NavbarMenuItems[1].link}
            className='my-18'
        >
            <div className='w-full my-8 flex flex-col gap-8'>
                <Heading>complete-apps</Heading>
                <div className='w-full grid grid-cols-3 gap-5 justify-between'>
                    {
                        CompleteProjects.map((project , index) => 
                            <ProjectCard 
                                key={index}
                                imageUrl={project.imageUrl}
                                name={project.name} 
                                description={project.description}
                                techstack={project.techstack} 
                                visit={project.visit}
                            /> 
                        )
                    }
                </div>
            </div>

        </LandingLayout>
    );
};
export default ProjectSection;
