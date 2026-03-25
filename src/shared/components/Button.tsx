/**
 * Nhiem vu hom nay: 
 * - Dinh dang he thong de su dung cva. Bao go cac truong gi can thiet (variant, typoColor, size, ...), 
 * - 
 */
import React from "react";
import { ButtonHTMLAttributes } from "react";
import { cn } from "../lib/ultis";
import { cva , VariantProps } from "class-variance-authority";

//Tao cac virants cho button de co the de dnag tai su dung va chinh sua 
const buttonVariants = cva(
    "px-5 py-2 font-md hover:opacity-80 transition-all ease-in-out duration-300 cursor-pointer", 
    {
        variants : {
            variant: {
                primary: "border-primary text-primary", 
                gray: "border-white text-white"
            }, 
            size: {
                md: "h-10 border text-base", 
                lg: "h-14 px-6 py-4 border-2 text-2xl"
            },
            fill: {
                true: "", 
                false: "bg-transparent"
            }
        }, 
        compoundVariants: [
            {fill : true, variant : "primary" , className : "bg-primary/20"}, 
            {fill: true, variant : "gray" , className : "bg-gray/80"}
        ], 
        defaultVariants : {
            fill : false, 
            size: 'md', 
            variant : 'primary'
        }
    }
)
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    icon? : React.ReactNode
}  
const Button = ({
    fill = false, variant, size, children, className, icon , ...props 
} : ButtonProps) => 
{

    //Tao ra icon, voi kich thuoc tuan theo size tu proprs truyen vao. Su dung React.cloneElement 
    const iconSizes = {
        md: 'w-5 h-5', 
        lg: 'w-7 h-7' 

    }
    //Viet ham ve lai icon, giup render lai icon theo kich thuoc truyen vao 
    const renderIcon = () => {
        if (!icon || !React.isValidElement(icon)) return null 
        const element = icon as React.ReactElement<{ className?: string }>;
        return React.cloneElement(element, {
            className: `${iconSizes[size || 'md']} ${element.props.className || ''}`
        })
    } 
    
    return (
        <button
            className={cn(buttonVariants({ fill , variant , size }) , "flex items-center justify-between gap-1" , className)}
            {...props}
        >
            {children}
            {renderIcon()}
        </button>
    )
}
export default Button