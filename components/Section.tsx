import { cn } from "@/lib/utils"

export function Section({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <section
            className={cn(
                "relative py-20 border-b border-muted/40 last:border-b-0",
                className
            )}
        >
            {children}
        </section>
    )
}
