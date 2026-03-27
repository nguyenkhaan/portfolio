'use client';
import Button from '@/src/shared/components/Button';
import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';
const ProjectCard = ({
    imageUrl = 'https://miro.medium.com/1*VxKBalu5Y_BaNsLjt9W_mg.png',
    name = '',
    techstack = '',
    description = '',
    detailDescription = '',
    visit = 'https://github.com/nguyenkhaan',
}) => {
    return (
        <div
            style={{
                perspective: 1000,
            }}
        >
            <motion.div
                initial={{ rotateY: 0 }}
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
                style={{
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                }}
                className="w-[330px] flex relative flex-col text-text items-center border border-white h-fit"
            >
                <div
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                    }}
                    className="shrink-0 h-50 grow-0 w-full bg-primary bg-no-repeat bg-cover bg-center"
                ></div>
                <div className="grow-0 w-full">
                    <div className="text-base px-3 py-2 w-full border-y text-gray border-y-white">
                        {techstack}
                    </div>
                    <div className="p-3">
                        <h1 className="font-semibold text-[24px] line-clamp-2">
                            {name}
                        </h1>
                        <p className="my-2 text-gray-400">{description}</p>

                        <div className="mt-4 flex items-center justify-start gap-3">
                            <a href={visit} target="_blank">
                                <Button fill icon={<Zap />}>
                                    Visit
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Back Face */}
                <div
                    className="absolute w-full h-full p-4 bg-transparent border border-white"
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                    }}
                >
                    <p className="font-semibold text-gray">
                        {detailDescription}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};
export default ProjectCard;
