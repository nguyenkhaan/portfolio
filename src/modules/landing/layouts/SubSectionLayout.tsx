import { HTMLAttributes } from 'react';
import { cn } from '@/src/shared/lib/ultis';

export interface SubSectionLayoutProps extends HTMLAttributes<HTMLElement> {}
const SubSectionLayout = ({
    children,
    className,
    ...props
}: SubSectionLayoutProps) => {
    return (
        <div {...props} className={cn('w-full', className)}>
            {children}
        </div>
    );
};
export default SubSectionLayout;
