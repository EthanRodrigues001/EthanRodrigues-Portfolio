import { siteConfig } from "@/lib/config"
import { ExternalLink } from "lucide-react"


export default function SocialsSection() {
    return (
        <section className="border-t border-muted">


            <div className="grid grid-cols-1 sm:grid-cols-3">
                {siteConfig.socials.map((social) => {

                    const Icon = social.icon

                    return (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            className="group flex items-center justify-between border-r last:border-r-0 border-muted/20 px-4 py-4 transition hover:bg-secondary/60 md:border-b md:last:border-b-0"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background">
                                    <Icon className="h-5 w-5" />
                                </div>

                                <div className="leading-tight">
                                    <p className="font-medium">{social.name}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {social.handle}
                                    </p>
                                </div>
                            </div>

                            <ExternalLink className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5" />
                        </a>
                    )
                })}
            </div>
        </section>
    )
}
