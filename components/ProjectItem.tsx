"use client"

import { useState } from "react"
import { ChevronDown, Github, ExternalLink } from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { ButtonGroup } from "./ui/button-group"

interface ProjectItemProps {
    name: string
    description: string
    banner: string
    badges: string[]
    github?: string
    live?: string
}

export function ProjectItem({
    name,
    description,
    banner,
    badges,
    github,
    live,
}: ProjectItemProps) {
    const [open, setOpen] = useState(false)

    return (
        <div className="border-b border-muted px-3 py-4 last:border-b-0">
            {/* Header */}
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                {/* Title */}
                <div>
                    <h3 className="text-lg font-semibold tracking-tight">{name}</h3>
                    <p className="text-sm text-muted-foreground/70">
                        {description}
                    </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">



                    <ButtonGroup>
                        {github && (
                            <Button
                                asChild
                                size="icon-sm"
                                variant="outline"
                            >
                                <a href={github} target="_blank">
                                    <Github className="h-4 w-4" />
                                </a>
                            </Button>
                        )}

                        {live && (
                            <Button
                                asChild
                                size="icon-sm"
                                variant="outline"
                            >
                                <a href={live} target="_blank">
                                    <ExternalLink className="h-4 w-4" />
                                </a>
                            </Button>
                        )}
                        <Button
                            size="icon-sm"
                            variant="outline"
                            onClick={() => setOpen((prev) => !prev)}
                        >
                            <ChevronDown
                                className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""
                                    }`}
                            />
                        </Button>
                    </ButtonGroup>
                </div>
            </div>

            {/* Dropdown */}
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
            >
                {/* Banner */}
                <div className="mb-4 overflow-hidden rounded-xl border border-border">
                    <img
                        src={banner}
                        alt={name}
                        className="h-[280px] w-full object-cover"
                    />
                </div>



                {/* Badges */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {badges.map((badge) => (
                        <Badge key={badge} variant="secondary">
                            {badge}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    )
}
