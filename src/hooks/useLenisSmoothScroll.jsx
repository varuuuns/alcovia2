import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenisSmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            smoothWheel: true,
            lerp: 0.1, // lower = smoother (0.1–0.2 is best)
            wheelMultiplier: 0.8,
        });

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);
}
