import SectionHeader from '@/src/shared/components/SectionHeader';
import { HTMLAttributes } from 'react';

export interface LandingProps extends HTMLAttributes<HTMLElement> {
    id: string;
    title: string;
    shortDescription: string;
}
const LandingLayout = ({
    children,
    id,
    title,
    shortDescription,
    ...props
}: LandingProps) => {
    return (
        <div id={id} className="w-full min-h-80 bg-transparent" {...props}>
            <SectionHeader
                title={title}
                shortDescription={shortDescription}
                className="my-4"
            ></SectionHeader>
            {children}
        </div>
    );
};
export default LandingLayout;
