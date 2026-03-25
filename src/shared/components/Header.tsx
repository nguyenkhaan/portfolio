import { cn } from '../lib/ultis';
import { cva, VariantProps } from 'class-variance-authority';

const headerVariants = cva('font-md', {
    variants: {
        size: {
            md: 'text-lg',
            large: 'md:text-lg xl:text-[32px] text-base'
        },
        typoColor: {
            white: 'text-white',
            gray: 'text-gray',
        },
    },
    compoundVariants: [],
    defaultVariants: {
        typoColor: 'white',
        size: 'large',
    },
});
export interface HeaderProps
    extends
        React.HTMLAttributes<HTMLHeadingElement>,
        VariantProps<typeof headerVariants> {}

const Heading = ({
    children,
    size,
    typoColor,
    className,
    ...props
}: HeaderProps) => {
    return (
        <h1
            className={cn(headerVariants({ size, typoColor }), className)}
            {...props}
        >
            <span className="text-primary font-semibold pr-1">#</span>
            {children}
        </h1>
    );
};
export default Heading;
