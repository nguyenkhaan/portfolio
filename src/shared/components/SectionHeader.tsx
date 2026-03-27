import { HTMLAttributes } from 'react';
import { cn } from '../lib/ultis';
export interface SectionHeaderProps extends HTMLAttributes<HTMLElement> {
    title?: string;
    shortDescription?: string;
}
const SectionHeader = ({
    title,
    shortDescription,
    className,
}: SectionHeaderProps) => {
    return (
        <div className={cn('font-bold text-text', className)}>
            <h1 className="md:text-xl xl:text-[32px] text-base">
                <span className="text-primary">/</span>
                {title || 'about-me'}
            </h1>
            <span className="text-base font-light my-2 inline-block">
                {shortDescription || 'Who am I?'}
            </span>
        </div>
    );
};
export default SectionHeader;
