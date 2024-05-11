import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const useHoverAnimation = () => {
  const cardRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.set(contentRef.current, { autoAlpha: 0 });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, { width: 400, duration: 0.3 }); // Expanded width
    gsap.to(contentRef.current, { autoAlpha: 1, duration: 0.3 }); // Make content visible
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, { width: 230, duration: 0.3 }); // Return to initial width
    gsap.to(contentRef.current, { autoAlpha: 0, duration: 0.3 }); // Hide content
  };

  return { cardRef, contentRef, handleMouseEnter, handleMouseLeave };
};

export default useHoverAnimation;
