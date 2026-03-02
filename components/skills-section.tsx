"use client";
import { useState } from "react";
import SkillBadge from "./skill-badge";

import { Button } from "./ui/button";
import { siteConfig } from "@/lib/config";


const VISIBLE_SKILLS = 15;


export default function SkillsSection() {
    const [showAll, setShowAll] = useState(false);

    const visibleSkills = showAll
        ? siteConfig.skills
        : siteConfig.skills.slice(0, VISIBLE_SKILLS);


    return (
        <section className="relative p-5 border-t border-muted">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Skills
            </h2>

            <p className="text-muted-foreground/60 mb-2">
                I have a diverse set of skills, which I can use to solve
                problems and contribute to the community.
            </p>

            <div
                className={`relative overflow-hidden transition-all duration-300 ${showAll ? "max-h-[500px]" : "max-h-32"
                    }`}
            >
                <div className="flex flex-wrap items-center gap-2">
                    {visibleSkills.map((skill) => (
                        <SkillBadge key={skill.name} skill={skill} />
                    ))}
                </div>

                {/* Fade only when collapsed */}
                {!showAll && (
                    <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-background to-transparent" />
                )}
            </div>

            {/* Toggle button */}
            <div className="mt-3 flex justify-center">
                {/* <button
                    onClick={() => setShowAll((prev) => !prev)}
                    className="rounded-full bg-background px-4 py-1.5 text-sm font-medium text-foreground shadow-md hover:bg-muted transition"
                >
                    {showAll ? "Show less" : "Show more"}
                </button> */}
                <Button
                    onClick={() => setShowAll((prev) => !prev)}
                    variant={"link"}
                    size={"sm"}
                    className="">
                    {showAll ? "Show less" : "Show more"}

                </Button>

            </div>
        </section>
    );
}
