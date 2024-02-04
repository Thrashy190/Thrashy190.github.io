import { useEffect, useRef } from "react";
import "../index.css";

interface ScrollerProps {
  styles?: string;
  children: JSX.Element | JSX.Element[];
}

const InfiniteCarousel: React.FC<ScrollerProps> = ({ styles, children }) => {
  const refScroller = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      const scrollerInner =
        refScroller.current?.querySelector(".scroller__inner");

      const scrollerContent = Array.from(scrollerInner?.children ?? []);

      scrollerContent.forEach((item: any) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner?.appendChild(duplicatedItem);
      });
    }
  }, []);

  return (
    <div className={`scroller ${styles}`} ref={refScroller}>
      <div className="scroller__inner">{children}</div>
    </div>
  );
};

export default InfiniteCarousel;
