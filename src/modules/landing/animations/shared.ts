import { Variants } from 'framer-motion';

export const AppearAnimation: Variants = {
    initial: {
        opacity: 0,
        y: 60,
        scale: 0.96,
        filter: 'blur(8px)',
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const SlideInLeft: Variants = {
    initial: {
        opacity: 0,
        x: -80,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const SlideInRight: Variants = {
    initial: {
        opacity: 0,
        x: 80,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};
