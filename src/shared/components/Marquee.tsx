'use client';
import { motion, Variants } from 'framer-motion';
const Marquee = ({ text = '', speed = 0  , reverse = false }) => {
    const doubleText = `${text} ${text} ${text} ${text}`;
    const to = (reverse? ["-100%",0] : [0,"-100%"])
    const duration = doubleText.length / speed;
    const framerVariants: Variants = {
        marquee: {
            x: to,
            transition: {
                duration: duration,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
            },
        },

    };
    return (
        <div className="w-[200vw] -translate-x-1/2 overflow-x-hidden flex whitespace-nowrap select-none my-3">
            <motion.div
                className="flex shrink-0 items-center"
                variants={framerVariants}
                animate="marquee"
                whileHover={{animationPlayState: "paused"}}
            >
                <span className="marquee-text py-2 leading-none text-7xl font-black uppercase tracking-wider px-4">
                    {doubleText}
                </span>
                <span className="text-7xl leading-none py-2 marquee-text font-black uppercase text-text tracking-wider px-4">
                    {doubleText}
                </span>
            </motion.div>
            <motion.div
                className="flex shrink-0 items-center"
                variants={framerVariants}
                animate="marquee"
            >
                <span className="text-7xl leading-none py-2 marquee-text font-black uppercase tracking-wider px-4">
                    {doubleText}
                </span>
                <span className="text-7xl marquee-text leading-none py-2 font-black uppercase text-text tracking-wider px-4">
                    {doubleText}
                </span>
            </motion.div>
        </div>
    );
};
export default Marquee;

/**
 * Cu phap framer motions
 * motion.div
 *     variants = {varaints}  //Object chua cac diem den cua animation
 *      animate = {animate}   //Trang thai muon di chuyen den
 *     transition = {{}} cau hinh cac thong so animation cho tung thuoc tinh
 * 2. Su dung transition
 * - Mo ta cach hie ung/thuoc tinh se thay doi nhu the nay
 * repeat (so lan lap lai hieu ung):
 * repeatType (Trang thai lap lai): loop, reverse, mirror
 * type: Laoi hieu ung (spring, tweet...)
 *
 * motion.div
 */
