"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface ExperienceItemProps {
    position: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string[];
    badges: string[];
}

export function ExperienceItem({
    position,
    company,
    startDate,
    endDate,
    description,
    badges,
}: ExperienceItemProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="py-4 px-3 border-b border-muted last:border-b-0">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                    <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
                        {position}
                    </h3>
                    <p className="text-muted-foreground/60 leading-6">
                        {company}
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <p className="text-sm text-muted-foreground whitespace-nowrap">
                        {startDate} – {endDate}
                    </p>

                    <Button
                        variant="outline"
                        size="icon-sm"
                        onClick={() => setOpen((prev) => !prev)}
                    >
                        <ChevronDown
                            className={`transition-transform ${open ? "rotate-180" : ""
                                }`}
                        />
                    </Button>
                </div>
            </div>

            {/* Dropdown */}
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
            >


                {/* Description */}
                <ul className="space-y-2">
                    {description.map((point, index) => (
                        <li
                            key={index}
                            className="text-sm text-muted-foreground flex gap-3"
                        >
                            <span className="text-primary mt-1">▪</span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
                {/* Badges */}
                <div className="flex flex-wrap gap-2 my-2">
                    {badges.map((badge) => (
                        <Badge key={badge} variant="secondary">
                            {badge}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
}
