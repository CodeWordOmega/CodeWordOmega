import { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({ end, duration = 1200, label }: { end: number, duration?: number, label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    function update() {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        ref.current = setTimeout(update, 16);
      } else {
        setCount(end);
      }
    }
    update();
    return () => ref.current && clearTimeout(ref.current);
  }, [end, duration]);
  return (
    <div className="animated-counter">
      <span className="counter-value">{count}</span>
      <span className="counter-label">{label}</span>
    </div>
  );
}
