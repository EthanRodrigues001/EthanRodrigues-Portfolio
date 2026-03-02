import { Calendar } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import { siteConfig } from "@/lib/config"

export default function CtaSection() {
    return (
        <section className="p-6 py-16 border-t border-muted">
            <div className="mx-auto max-w-xl">

                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight text-muted-foreground text-center">
                    Interested in working together? Lets talk.
                </h2>

                <div className="mt-5 flex justify-center">
                    <Button className="gap-2" variant="outline" asChild size="sm">
                        <Link href={siteConfig.meetingUrl} target="_blank">
                            <Calendar className="h-4 w-4" />
                            Schedule a meeting
                        </Link>
                    </Button>
                </div>

            </div>
        </section>
    )
}
