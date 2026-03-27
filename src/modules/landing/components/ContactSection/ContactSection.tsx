'use client';
import Input from '@/src/shared/components/Input';
import LandingLayout from '../../layouts/LandingLayout';
import { NavbarMenuItems } from '@/src/shared/constants/app.constants';
import LabelInput from '@/src/shared/components/LabelInput';
import TextArea from '@/src/shared/components/TextArea';
import Heading from '@/src/shared/components/Header';
import Media from '@/src/shared/components/Mediax';
import { MailMinus, Link, Bird } from 'lucide-react';
import Button from '@/src/shared/components/Button';
import MyMap from '@/src/shared/components/MyMap';
import { motion } from 'framer-motion';
import {
    AppearAnimation,
    SlideInLeft,
    SlideInRight,
} from '../../animations/shared';
import { MediaLinks } from '@/src/shared/constants/me.constants';

const ContactSection = () => {
    return (
        <LandingLayout
            title="Contact"
            shortDescription="Who am I?"
            id={NavbarMenuItems[2].link}
        >
            <motion.div
                variants={AppearAnimation}
                initial="initial"
                whileInView={'visible'}
                className="w-full flex items-center justify-between gap-4"
            >
                <motion.div
                    variants={SlideInLeft}
                    initial="initial"
                    whileInView={'visible'}
                    className="text-gray flex-3 text-base"
                >
                    <p>
                        I’m interested in freelance opportunities. However, if
                        you have other request or question, don’t hesitate to
                        contact me
                    </p>
                </motion.div>

                <motion.div
                    variants={SlideInRight}
                    initial="initial"
                    whileInView={'visible'}
                    className="grid flex-4 grid-cols-2 gap-6"
                >
                    <LabelInput labelText="Name" />
                    <LabelInput labelText="Email" />
                    <Input className="col-span-2" placeholder="Title" />
                    <TextArea className="col-span-2" />
                    <div className="col-span-2 flex justify-end items-start">
                        <Button fill>Hire me</Button>
                    </div>
                </motion.div>
            </motion.div>
            <div className="w-full my-5">
                <MyMap />
            </div>
            <div className="my-8">
                <Heading>all-media</Heading>
                <div className="flex gap-4 items-center justify-start">
                    <Media visit={MediaLinks.email} Icon={<MailMinus />}>Email</Media>
                    <Media visit={MediaLinks.facebook} Icon={<Link />}>Facebook</Media>
                    <Media visit={MediaLinks.linkedin} Icon={<Bird />}>Linkedin</Media>
                </div>
            </div>
        </LandingLayout>
    );
};
export default ContactSection;
