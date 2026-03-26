import LandingLayout from '../layouts/LandingLayout';
import { NavbarMenuItems } from '@/src/shared/constants/app.constants';
import Heading from '@/src/shared/components/Header';
import Image from 'next/image';
import SkillsCard from './SkillTable';
import { mySkills } from '@/src/shared/constants/me.constants';
const HomeSection = () => {
    return (
        <LandingLayout
            title="about-me"
            shortDescription="Who am I?"
            id={NavbarMenuItems[0].link}
        >
            <div className="flex justify-between items-center gap-36">
                <div className='flex flex-col gap-4 text-gray text-base'>
                    <p>Hello, i’m Elias!</p>
                    <p>
                        I’m a self-taught front-end developer based in Kyiv,
                        Ukraine. I can develop responsive websites from scratch
                        and raise them into modern user-friendly web
                        experiences.
                    </p>
                    <p>
                        Transforming my creativity and knowledge into a websites
                        has been my passion for over a year. I have been helping
                        various clients to establish their presence online. I
                        always strive to learn about the newest technologies and
                        frameworks.
                    </p>
                </div>
                <Image height={500} width={340} alt='' src={'/images/avatar.png'}  /> 
            </div>
            <div className='my-10'>
                <Heading className='mb-4'>skills</Heading>
                <div className='w-full min-h-100 grid grid-cols-5 grid-rows-2 justify-between gap-5 gap-y-6 items-start'>
                    {
                        mySkills.map((skill) => {
                            return <SkillsCard title={skill.title} skills={skill.details}   /> 
                        })
                    }
                </div>
            </div>
        </LandingLayout>
    );
};
export default HomeSection;
