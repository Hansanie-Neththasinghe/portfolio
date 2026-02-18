import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
    className?: string;
    children: ReactNode;
}

export function Card({ className, children }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl border border-border bg-card text-card-foreground shadow-sm hover:shadow-lg hover:shadow-indigo-100/60 hover:-translate-y-0.5 transition-all duration-300",
                className
            )}
        >
            {children}
        </div>
    );
}

export function CardHeader({
    className,
    children,
}: {
    className?: string;
    children: ReactNode;
}) {
    return (
        <div className={cn("flex flex-col space-y-1.5 p-6", className)}>
            {children}
        </div>
    );
}

export function CardTitle({
    className,
    children,
}: {
    className?: string;
    children: ReactNode;
}) {
    return (
        <h3
            className={cn(
                "text-lg font-semibold leading-none tracking-tight",
                className
            )}
        >
            {children}
        </h3>
    );
}

export function CardDescription({
    className,
    children,
}: {
    className?: string;
    children: ReactNode;
}) {
    return (
        <p className={cn("text-sm text-muted-foreground", className)}>
            {children}
        </p>
    );
}

export function CardContent({
    className,
    children,
}: {
    className?: string;
    children: ReactNode;
}) {
    return <div className={cn("p-6 pt-0", className)}>{children}</div>;
}

export function CardFooter({
    className,
    children,
}: {
    className?: string;
    children: ReactNode;
}) {
    return (
        <div className={cn("flex items-center p-6 pt-0", className)}>
            {children}
        </div>
    );
}
