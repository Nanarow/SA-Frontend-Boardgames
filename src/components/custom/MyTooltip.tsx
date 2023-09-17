import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ITooltip {
    label?: string;
    position?: "top" | "bottom" | "left" | "right";
    className?: string;
}

export const MyTooltip: React.FC<React.PropsWithChildren<ITooltip>> = ({
    label = "Error message",
    className = "",
    position = "right",
    children
}) => {
    return (
        <div id="tooltip" className="relative cursor-pointer group flex flex-col justify-center">
            {children}
            <span
                className={twMerge(
                    "absolute group-hover:opacity-100 opacity-0 transition-opacity rotate-45 w-2 h-2",
                    position === "top"
                        ? "left-1/2 -translate-x-1/2 bottom-full bg-black"
                        : "",
                    position === "bottom"
                        ? "left-1/2 -translate-x-1/2 top-full bg-black"
                        : "",
                    position === "left"
                        ? "top-1/2 -translate-y-1/2 right-full bg-black"
                        : "",
                    position === "right"
                        ? "top-1/2 -translate-y-1/2 left-full bg-black"
                        : "",
                    className
                )}
            ></span>
            <span
                className={twMerge(
                    "absolute group-hover:opacity-100 opacity-0 transition-opacity bg-black text-white text-xs p-2 whitespace-nowrap rounded",
                    position === "top"
                        ? "left-1/2 -translate-x-1/2 bottom-[calc(100%+4px)]"
                        : "",
                    position === "bottom"
                        ? "left-1/2 -translate-x-1/2 top-[calc(100%+4px)]"
                        : "",
                    position === "left"
                        ? "top-1/2 -translate-y-1/2 right-[calc(100%+4px)]"
                        : "",
                    position === "right"
                        ? "top-1/2 -translate-y-1/2 left-[calc(100%+4px)]"
                        : "",
                    className
                )}
            >
                {label}
            </span>
        </div>
    )
}
