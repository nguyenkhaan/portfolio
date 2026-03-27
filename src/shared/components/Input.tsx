import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../lib/ultis';
import { InputHTMLAttributes } from 'react';
const InputVariantProps = cva(
    'relative h-10 text-text min-w-60 outline-0 border border-border p-4',
    {
        variants: {
            typoSize: {
                md: 'text-lg',
                lg: 'text-xl',
            },
        },
        defaultVariants: {
            typoSize: 'md',
        },
    },
);
export interface InputProps
    extends
        InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof InputVariantProps> {
    placeholder: string;
}
const Input = ({ typoSize, className, placeholder, ...props }: InputProps) => {
    return (
        <input
            placeholder={placeholder}
            className={cn(InputVariantProps({ typoSize }), className)}
            {...props}
        />
    );
};
export default Input;
