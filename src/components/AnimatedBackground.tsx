import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId: number;
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    const particles = Array.from({length: 60}, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.7,
      dy: (Math.random() - 0.5) * 0.7,
      c: `hsl(${Math.random()*360},100%,70%)`
    }));
    function draw() {
      ctx!.clearRect(0, 0, w, h);
      for (const p of particles) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx!.fillStyle = p.c;
        ctx!.globalAlpha = 0.5;
        ctx!.fill();
        ctx!.globalAlpha = 1;
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;
      }
      animationId = requestAnimationFrame(draw);
    }
    draw();
    window.addEventListener('resize', () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    });
    return () => cancelAnimationFrame(animationId);
  }, []);
  return <canvas ref={ref} className="animated-bg-canvas" style={{position:'fixed',zIndex:0,top:0,left:0,width:'100vw',height:'100vh',pointerEvents:'none'}} />;
}
