"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { siteConfig } from "@/lib/config";

export default function GallerySection() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    return (
        <section className="p-4 border-t border-muted">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                UI Gallery
            </h2>
            <p className="text-muted-foreground/60 mb-6">
                Snapshots from various projects and interfaces
            </p>

            <div className="px-12">
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full max-w-5xl mx-auto"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {siteConfig.gallery.map((image, index) => (
                            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                                <div className="p-1">
                                    <div className="overflow-hidden rounded-xl border border-muted bg-neutral-900/50">
                                        <img
                                            src={image}
                                            alt={`Gallery image ${index + 1}`}
                                            className="aspect-video w-full object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex -left-12" />
                    <CarouselNext className="hidden md:flex -right-12" />
                </Carousel>
            </div>
        </section>
    );
}
