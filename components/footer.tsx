import { siteConfig } from "@/lib/config"
import { Github } from "lucide-react"
import { Button } from "./ui/button"
import { GitHubStars } from "./github-stars"
import { Dithering } from "@paper-design/shaders-react"

export default function Footer() {
    return (
        <footer className="relative border-t border-muted px-2 py-2">
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
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
                {/* Left */}
                <div className="text-center text-sm text-muted-foreground/70 sm:text-left">
                    <p className="font-semibold text-foreground">
                        Design & Developed by {siteConfig.name}
                    </p>
                    <p>© {new Date().getFullYear()}. All rights reserved.</p>
                </div>

                {/* Right */}
                <GitHubStars repo={`${siteConfig.githubUsername}/EthanRodrigues-Portfolio`} stargazersCount={0} />
            </div>
        </footer>
    )
}

