import { cn } from '../lib/ultis';
import { cva, VariantProps } from 'class-variance-authority';

const MediaVariants = cva('font-semibold text-white', {
    variants: {
        typoSize: {
            sm: 'text-base',
            base: 'text-lg',
            lg: 'text-xl',
        },
    },
    compoundVariants: [],
    defaultVariants: {
        typoSize: 'base',
    },
});
export interface HeaderProps
    extends
        React.HTMLAttributes<HTMLElement>,
        VariantProps<typeof MediaVariants> {
    Icon?: React.ReactNode;
}
export default function Media({
    Icon,
    className,
    children,
    typoSize,
    ...props
}: HeaderProps) {
    return (
        <div
            className={cn(
                MediaVariants({ typoSize }),
                'flex items-center justify-between w-fit whitespace-nowrap',
                className
            )}
            {...props}
        >
            {Icon && <div className='shrink-0 w-12 h-12 flex items-center justify-center overflow-hidden'>
                    {Icon} 
                </div>}
            <span>{children}</span>
        </div>
    );
}
