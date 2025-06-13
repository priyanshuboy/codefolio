// components/FadeInOnScroll.tsx
import type { ReactNode } from 'react';

interface FadeInOnScrollProps {
  children: ReactNode;
  animation?: string;
  delay?: number;
  duration?: number;
}

export default function FadeInOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 1200,
}: FadeInOnScrollProps) {
  return (
    <div
      data-aos={animation}
      data-aos-delay={delay}
      data-aos-duration={duration}
    >
      {children}
    </div>
  );
}
