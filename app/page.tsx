"use client";
import React, { useEffect, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dithering } from "@paper-design/shaders-react";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileUser } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import SkillsSection from "@/components/skills-section";
import { ExperienceItem } from "@/components/experience-item";
import { ProjectItem } from "@/components/ProjectItem";
import SocialsSection from "@/components/social-section";

import { StripedPattern } from "@/components/magicui/striped-pattern";
import Link from "next/link";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";
import LoadingScreen from "@/components/LoadingScreen";
import { GitHubContributionGraph, GitHubContributionFallback } from "@/components/github-graph";
import { getGitHubContributions } from "@/lib/github";
import { Suspense } from "react";
import { siteConfig } from "@/lib/config";
import GallerySection from "@/components/gallery-section";







export default function Home() {
  const [loading, setLoading] = useState(true);
  const contributionsPromise = getGitHubContributions(siteConfig.githubUsername);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;
  return (

    <>
      {/* Heading */}
      <section className="relative py-24 flex justify-center items-center pt-42 md:pt-32 overflow-hidden">
        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-20">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon-sm" asChild>
                <Link href={siteConfig.resumeUrl} target="_blank">
                  <FileUser />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Resume</p>
            </TooltipContent>
          </Tooltip>

        </div>

        <div className="absolute top-0 left-0 w-full h-40 sm:h-48 md:h-54 bg-gradient-to-b from-background via-background/70 to-transparent -z-10" />

        {/* Dithering background only for this section */}
        <Dithering
          colorBack="#0a0a0a"
          colorFront="#2d2d2d"
          shape="warp"
          type="4x4"
          size={2}
          speed={0.08}
          className="absolute inset-0 opacity-40 -z-20"
        />

        {/* Centered Avatar + Name */}
        <div className="flex items-center space-x-4 relative z-10">
          <Avatar className="rounded-(--radius) size-10 sm:size-12 md:size-16 ring-foreground/10 border border-transparent shadow ring-1">
            <AvatarImage
              src={siteConfig.avatar}
              alt={siteConfig.name}
            />
            <AvatarFallback className="rounded-(--radius)">
              {siteConfig.name[0]}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <span className="text-foreground font-medium text-base sm:text-lg md:text-2xl">
              {siteConfig.name}
            </span>
            <div className="text-muted-foreground text-sm sm:text-base md:text-lg">
              {siteConfig.role}
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="p-4 border-t border-muted">
        <blockquote className="text-center italic">
          &quot;{siteConfig.description}&quot;
        </blockquote>
      </section>

      {/* <section className="relative border-t border-muted flex justify-center">
        <StripedPattern
          direction="left"
          className="text-muted-foreground/20 absolute inset-0 -z-10"
        />
        <Button variant="outline">
          Download Resume
        </Button>
      </section> */}



      <section className="p-4 border-t border-muted">
        <ul
          role="list"
          className="text-muted-foreground space-y-2">
          {siteConfig.stats.map((stat, index) => (
            <li
              key={index}
              className="-ml-0.5 flex items-center gap-1.5">
              <ArrowRight className="size-4 opacity-50" />
              {stat.data} {stat.value ? <span className="text-foreground font-medium">{stat.value}</span> : null}
            </li>
          ))}
        </ul>
      </section>
      <div className="relative z-10 p-2 border-t border-muted"></div>
      <SocialsSection />

      <div className="relative z-10 p-2 border-t border-muted">

        {/* <StripedPattern
          direction="left"
          className="absolute inset-0 text-muted-foreground/40 -z-10 h-full w-full"
        /> */}
        {/* <StripedPattern
          direction="right"
          className="absolute inset-0 text-muted-foreground/40 -z-10 h-full w-full"
        /> */}
      </div>
      <div className="relative z-10 p-2 border-t border-muted flex justify-center gap-2">

        <Button variant="outline" asChild>
          <Link href={siteConfig.resumeUrl} target="_blank">
            Download Resume
          </Link>
        </Button>

        <Button variant="outline" asChild>
          <Link href={siteConfig.meetingUrl} target="_blank">
            Schedule a Meeting
          </Link>
        </Button>

      </div>
      <div className="relative z-10 p-2 border-t border-muted"></div>
      <section className="p-4 border-t border-muted">
        <Suspense fallback={<GitHubContributionFallback />}>
          <GitHubContributionGraph contributions={contributionsPromise} />
        </Suspense>
      </section>


      <section className="p-4 border-t border-muted">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Experience</h2>
        <p className="text-muted-foreground/60 mb-2">
          Professional background and expertise
        </p>

        <div className="border rounded-2xl">
          {siteConfig.experiences.map((exp) => (
            <ExperienceItem
              key={`${exp.company}-${exp.position}`}
              {...exp}
            />
          ))}
        </div>
      </section>

      <SkillsSection />
      <section className="p-4 border-t border-muted">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Projects
        </h2>

        <p className="text-muted-foreground/60 mb-2">
          Selected projects and side work
        </p>

        <div className="rounded-md
        bg-neutral-800/20
        border border-neutral-200 dark:border-neutral-700/50
        ">
          {siteConfig.projects.map((project) => (
            <ProjectItem
              key={project.name}
              {...project}
            />
          ))}
        </div>
      </section>

      <GallerySection />


      <CtaSection />
      <Footer />

      {/* 
      <section className="py-24 border-t border-muted">
        <h2 className="text-2xl font-semibold">Experience</h2>
      </section>
      <section className="py-24 border-t border-muted">
        <h2 className="text-2xl font-semibold">Skills</h2>
      </section>
      <section className="py-24 border-t border-muted">
        <h2 className="text-2xl font-semibold">Contact</h2>
      </section> */}
    </>
  )
}
