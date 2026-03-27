'use client';

import { cva, VariantProps } from 'class-variance-authority';
import { TextareaHTMLAttributes } from 'react';
import { cn } from '../lib/ultis';

const TextAreaVariants = cva(
    [
        'w-full h-30',  
        'p-2 resize-none',
        'border',
        'outline-none',
        'transition-all duration-200 ease-in-out',
        'focus:ring focus:ring-white focus:border-white',
        'focus:shadow-sm',
    ].join(' '),
    {
        variants: {
            typoColor: {
                white: 'text-text',
                gray: 'text-gray',
            },
        },
        defaultVariants: {
            typoColor: 'gray',
        },
    },
);

export interface TextAreaProps
    extends
        TextareaHTMLAttributes<HTMLTextAreaElement>,
        VariantProps<typeof TextAreaVariants> {}

const TextArea = ({ className, typoColor, ...props }: TextAreaProps) => {
    return (
        <textarea
            placeholder='Message...'
            className={cn(TextAreaVariants({ typoColor }), className)}
            {...props}
        />
    );
};

export default TextArea;
