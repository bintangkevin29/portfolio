import { useEffect, useState } from "react";

export const useScroll = (id: string) => {
  const [hit, setHit] = useState<boolean>(true);

  const isInViewport = (el: Element | null) => {
    if (el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
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
