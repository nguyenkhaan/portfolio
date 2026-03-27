import { cn } from '@/src/shared/lib/ultis';
import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
const FunfactVariants = cva(
    'p-3 border inline-block w-fit', //Su dung w-fit se giup cho the div khong bi keo dan trong the grid hay container tuong ung, no phu thuoc vao noi dung ben trong

    {
        variants: {
            typoColor: {
                white: 'text-text border-border',
                gray: 'text-gray border-gray',
            },
        },
    },
);
export interface FunfactProps
    extends HTMLAttributes<HTMLElement>, VariantProps<typeof FunfactVariants> {
    fact: string;
}
const FunfactItem = ({
    fact,
    typoColor,
    className,
    ...props
}: FunfactProps) => {
    return (
        <div
            className={cn(FunfactVariants({ typoColor }), className)}
            {...props}
        >
            {fact}
        </div>
    );
};
export default FunfactItem;
