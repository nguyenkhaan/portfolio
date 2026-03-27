import Input from '@/src/shared/components/Input';
import LandingLayout from '../../layouts/LandingLayout';
import { NavbarMenuItems } from '@/src/shared/constants/app.constants';
import LabelInput from '@/src/shared/components/LabelInput';
import TextArea from '@/src/shared/components/TextArea';
import Heading from '@/src/shared/components/Header';
import Media from '@/src/shared/components/Mediax';
import { MailMinus , Link , Bird } from 'lucide-react';
import Button from '@/src/shared/components/Button';
import MyMap from '@/src/shared/components/MyMap';

const ContactSection = () => {
    return (
        <LandingLayout
            title="Contact"
            shortDescription="Who am I?"
            id={NavbarMenuItems[2].link}
        >
            <div className="w-full flex items-center justify-between gap-4">
                <div className="text-gray flex-3 text-base">
                    <p>
                        I’m interested in freelance opportunities. However, if
                        you have other request or question, don’t hesitate to
                        contact me
                    </p>
                </div>

                    <div className="grid flex-4 grid-cols-2 gap-6">
                        <LabelInput labelText="Name" />
                        <LabelInput labelText="Email" />
                        <Input className="col-span-2" placeholder="Title" />
                        <TextArea className='col-span-2' /> 
                        <div className='col-span-2 flex justify-end items-start'>
                            <Button fill>Hire me</Button>

                        </div>
                    </div>
             
            </div>
            <div className='w-full my-5'>
                <MyMap /> 
            </div>
            <div className='my-8'>
                <Heading>all-media</Heading>
                <div className='flex gap-4 items-center justify-start'>
                    <Media Icon={<MailMinus />}>Email</Media> 
                    <Media Icon={<Link />} >Facebook</Media> 
                    <Media Icon={<Bird />} >Linkedin</Media> 
                    
                </div>
            </div>
        </LandingLayout>
    );
};
export default ContactSection;
