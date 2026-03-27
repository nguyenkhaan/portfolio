import { Variants } from "framer-motion"
export const containerAnimation : Variants = {
    hidden: {
        opacity: 0 
    }, 
    visible: {
        opacity: 1, 
        transition: {
            delayChildren: 0.12, 
            staggerChildren: 0.1 
        }
    }
} 
export const itemContainerAnimation : Variants = {
    hidden: {
        opacity: 0,  
        x: -20, 
        scale: 0.5, 
        filter: "blur(6px)"
    }, 
    visible: {
        opacity: 1,
        x: 0, 
        scale: 1, 
        filter: "blur(0px)", 
        transition: {
            type: "spring", 
            stiffness: 120, 
            damping: 12, 
        }
    }
}
export const avatarCardAnimation : Variants = {
    initial : {
        rotateY: 0, 
    }, 
    hover: {
        rotateY : 30, 
        transition: {
            damping: 20, 
            type: 'spring', 
            stiffness: 200 
        }
    }
}