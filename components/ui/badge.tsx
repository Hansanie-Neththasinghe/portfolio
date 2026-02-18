import { cn } from "@/lib/utils";
import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "secondary" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                {
                    "border-transparent bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-sm":
                        variant === "default",
                    "border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100":
                        variant === "secondary",
                    "border-indigo-300 text-indigo-700 hover:bg-indigo-50": variant === "outline",
                },
                className
            )}
            {...props}
        />
    );
}

export { Badge };
