'use client';
import LandingLayout from '../../layouts/LandingLayout';
import { NavbarMenuItems } from '@/src/shared/constants/app.constants';
import Heading from '@/src/shared/components/Header';
import Image from 'next/image';
import SkillsCard from '../SkillTable';
import { mySkills } from '@/src/shared/constants/me.constants';
import Marquee from '@/src/shared/components/Marquee';
import FunfactItem from '../FunFact';
import Button from '@/src/shared/components/Button';
import { motion } from 'framer-motion';
import {
    avatarCardAnimation,
    containerAnimation,
    itemContainerAnimation,
} from './home.animations';
const HomeSection = () => {
    const MotionImage = motion(Image);
    return (
        <LandingLayout
            title="about-me"
            shortDescription="Who am I?"
            id={NavbarMenuItems[0].link}
        >
            <motion.div
                className="flex justify-between items-center gap-36"
                variants={containerAnimation}
                initial="hidden"
                animate="visible"
            >
                <div className="flex flex-col gap-4 text-gray text-base">
                    <motion.p variants={itemContainerAnimation}>
                        Hello, i’m Elias!
                    </motion.p>
                    <motion.p variants={itemContainerAnimation}>
                        I’m a self-taught front-end developer based in Kyiv,
                        Ukraine. I can develop responsive websites from scratch
                        and raise them into modern user-friendly web
                        experiences.
                    </motion.p>
                    <motion.p variants={itemContainerAnimation}>
                        Transforming my creativity and knowledge into a websites
                        has been my passion for over a year. I have been helping
                        various clients to establish their presence online. I
                        always strive to learn about the newest technologies and
                        frameworks.
                    </motion.p>
                    <div className="my-3 flex items-end justify-end w-full">
                        <Button>Download my CV</Button>
                    </div>
                </div>
                <MotionImage
                    style={{
                        // perspective: 10000,
                        transformStyle: 'preserve-3d',
                    }}
                    variants={avatarCardAnimation}
                    height={500}
                    width={340}
                    alt=""
                    className="cursor-pointer"
                    loading="eager"
                    src={'/images/avatar.png'}
                    animate={{
                        y: [0, -16, 0],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </motion.div>
            <div className="my-10">
                <Heading className="mb-4">skills</Heading>
                <div className="w-full grid grid-cols-5 grid-rows-1 justify-between gap-5 gap-y-6 items-start">
                    {mySkills.map((skill, index) => {
                        return (
                            <SkillsCard
                                key={index}
                                title={skill.title}
                                skills={skill.details}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="mx-auto my-6">
                <Marquee
                    text=" Javascript </> Java Python Postgres-SQL ☁︎ ˚｡⋆｡˚☽˚｡⋆ "
                    speed={2}
                />
                <Marquee
                    text="𖤓 ExpressJS Nestjs ReactJS </> NextJS DevOps"
                    speed={2}
                    reverse={true}
                />
            </div>
            <div className="flex flex-col gap-4 items-start w-fit">
                <Heading className="mb-4">my-fun-facts</Heading>
                <div className="flex gap-4 w-fit">
                    <FunfactItem
                        typoColor={'white'}
                        fact="I love Mini Cloudyyyyy very much"
                    />
                    <FunfactItem
                        typoColor={'gray'}
                        fact="I like winter more than summer"
                    />
                </div>
                <div className="flex gap-4 w-fit">
                    <FunfactItem
                        typoColor={'gray'}
                        fact="I am playing Yugioh. My partner: Crystron K9, Dracotail, Branded"
                    />
                    <FunfactItem
                        typoColor={'white'}
                        fact="I was in Khanh Hoa, VietNam"
                    />
                </div>
                <div className="flex gap-4 w-fit">
                    <FunfactItem
                        typoColor={'white'}
                        fact="Recently, I love traveling"
                    />
                    <FunfactItem
                        typoColor={'white'}
                        fact="I was still in school"
                    />
                </div>
                <div className="flex gap-4 w-fit">
                    <FunfactItem
                        typoColor={'gray'}
                        fact="I always wanna become a Hero"
                    />
                </div>
            </div>
        </LandingLayout>
    );
};
export default HomeSection;
