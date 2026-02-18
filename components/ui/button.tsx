import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
                    {
                        "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-md shadow-indigo-200 hover:from-indigo-600 hover:to-violet-600 hover:shadow-lg hover:shadow-indigo-200":
                            variant === "default",
                        "border border-indigo-200 bg-white text-indigo-700 hover:bg-indigo-50 hover:border-indigo-400 hover:text-indigo-800 shadow-sm":
                            variant === "outline",
                        "text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700": variant === "ghost",
                        "text-indigo-600 underline-offset-4 hover:underline":
                            variant === "link",
                        "h-10 px-4 py-2": size === "default",
                        "h-9 rounded-md px-3": size === "sm",
                        "h-11 rounded-lg px-8": size === "lg",
                        "h-10 w-10": size === "icon",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
