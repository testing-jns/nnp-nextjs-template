"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

const ScrollToPricing = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url.includes("#pricing")) {
        const section = document.getElementById("pricing");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return null;
};

export default ScrollToPricing;
