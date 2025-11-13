import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface UseAnimatedCounterOptions {
  duration?: number;
  startOnView?: boolean;
}

export function useAnimatedCounter(
  targetValue: number,
  options: UseAnimatedCounterOptions = {}
) {
  const { duration = 2000, startOnView = true } = options;
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (startOnView && !inView) {
      return;
    }

    if (targetValue === 0) {
      setCount(0);
      return;
    }

    const startTime = Date.now();
    const startValue = 0;
    const endValue = targetValue;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [targetValue, duration, inView, startOnView]);

  return { count, ref };
}

