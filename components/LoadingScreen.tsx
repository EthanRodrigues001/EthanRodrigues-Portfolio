import Image from "next/image";
import { Spinner } from "./ui/spinner";

export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 z-50">
            {/* base color / gradient */}
            <div className="absolute inset-0 bg-background" />

            {/* background image with blend mode */}
            <div
                className="
          absolute inset-0
          bg-cover bg-center
          mix-blend-overlay
        "
                style={{
                    backgroundImage: "url('/asci2.jpeg')",
                }}
            />

            {/* optional dark overlay */}
            {/* <div className="absolute inset-0 bg-black/40" /> */}

            {/* content */}
            <div className="relative flex h-full items-center justify-center text-center text-muted-foreground gap-1 text-sm">
                <Spinner /> Loading
            </div>
        </div>
    );
}
