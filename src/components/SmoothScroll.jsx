"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

const SmoothScroll = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top smoothly on route change
    gsap.to(window, {
      duration: 0.8,
      scrollTo: 0,
      ease: "power2.inOut",
    });

    // Handle internal anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest("a");
      if (
        target &&
        target.hash &&
        target.origin === window.location.origin &&
        target.pathname === window.location.pathname
      ) {
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: element, offsetY: 80 },
            ease: "power3.inOut",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, [pathname]);

  return null;
};

export default SmoothScroll;
