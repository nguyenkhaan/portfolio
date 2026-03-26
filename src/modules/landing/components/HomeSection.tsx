import LandingLayout from '../layouts/LandingLayout';
import { NavbarMenuItems } from '@/src/shared/constants/app.constants';
import Heading from '@/src/shared/components/Header';
import Image from 'next/image';
import SkillsCard from './SkillTable';
import { mySkills } from '@/src/shared/constants/me.constants';
import Marquee from '@/src/shared/components/Marquee';
import FunfactItem from './FunFact';
const HomeSection = () => {
    return (
        <LandingLayout
            title="about-me"
            shortDescription="Who am I?"
            id={NavbarMenuItems[0].link}
        >
            <div className="flex justify-between items-center gap-36">
                <div className="flex flex-col gap-4 text-gray text-base">
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
                <Image
                    height={500}
                    width={340}
                    alt=""
                    src={'/images/avatar.png'}
                />
            </div>
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
