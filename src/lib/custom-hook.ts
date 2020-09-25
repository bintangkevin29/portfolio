import { useEffect, useState } from "react";

export const useScroll = (id: string, initState: boolean = false) => {
  const [hit, setHit] = useState<boolean>(initState);

  const isInViewport = (el: Element | null) => {
    if (el) {
      const rect = el.getBoundingClientRect();
      if (id === "#about-section") {
        console.log(id, rect.top, rect.bottom);
        console.log(rect.top <= 0 && rect.bottom >= 0);
      }

      return rect.top <= 0 && rect.bottom >= 0;
    }
  };

  useEffect(() => {
    const element = document.querySelector(id);

    const listener = () => {
      if (isInViewport(element)) {
        setHit(true);
      } else {
        setHit(false);
      }
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return hit;
};
