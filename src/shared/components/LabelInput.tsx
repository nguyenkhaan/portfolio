'use client';
import { HTMLAttributes, useState } from 'react';
import { cn } from '../lib/ultis';
import { cva, VariantProps } from 'class-variance-authority';
const LabelInputVariants = cva('relative h-10 text-text', {
    variants: {
        typoSize: {
            md: 'text-lg',
            lg: 'text-xl',
            xl: 'text-[32px]',
        },
    },
    defaultVariants: {
        typoSize: 'md',
    },
});
export interface LabelInputProps
    extends
        HTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof LabelInputVariants> {
    labelText: string;
}
const LabelInput = ({ className, typoSize, labelText }: LabelInputProps) => {
    const [value, setValue] = useState('');
    return (
        <div
            className={cn(
                'entryarea w-full block',
                LabelInputVariants({ typoSize }),
                className,
            )}
        >
            <input
                type="text"
                className={cn(
                    'label-input w-full absolute outline-0 h-10 p-4 border',
                )}
                onChange={(e) => setValue(e.target.value)}
            />
            <span
                className={cn(
                    'absolute top-1/2 -translate-y-1/2 left-4 transition-all ease-in-out duration-200',
                    value.length == 0 ? '' : 'fill',
                )}
            >
                {labelText}
            </span>
        </div>
    );
};
export default LabelInput;
