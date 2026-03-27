'use client'
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
    visit : string 
}
export default function Media({
    Icon,
    className,
    children,
    typoSize,
    visit, 
    ...props
}: HeaderProps) {
    return (
        <div
            className={cn(
                MediaVariants({ typoSize }),
                'flex items-center justify-between w-fit whitespace-nowrap cursor-pointer hover:-translate-y-2 hover:opacity-80 transition-all duration-200 ease-linear',
                
                className,
            )}
            {...props}
        >
            {Icon && (
                <div className="shrink-0 w-12 h-12 flex items-center justify-center overflow-hidden">
                    {Icon}
                </div>
            )}
            <a href={visit} target='_blank'>
                <span>{children}</span>
            </a>
        </div>
    );
}
