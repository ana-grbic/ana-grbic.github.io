import { useEffect, useRef } from "react";
import walkSprite from "./rio_east.png";
import "./Rio.css";

export default function Rio() {
  const animalRef = useRef(null);
  const cursorRef = useRef(null);

  const targetPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const currentPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const cursorPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  const spriteSize = 64;
  const cursorSize = 16;
  const catchDistance = 30;

  useEffect(() => {
    document.body.style.cursor = "none";

    const cursorEl = document.createElement("div");
    cursorEl.style.position = "fixed";
    cursorEl.style.width = `${cursorSize}px`;
    cursorEl.style.height = `${cursorSize}px`;
    cursorEl.style.background = "white";
    cursorEl.style.borderRadius = "50%";
    cursorEl.style.pointerEvents = "none";
    cursorEl.style.top = "0";
    cursorEl.style.left = "0";
    document.body.appendChild(cursorEl);
    cursorRef.current = cursorEl;

    const handleMouseMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      cursorPos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    let dragging = false;
    let dragTime = 0;
    const maxDragFrames = 60;

    let animationFrameId;

    const animate = () => {
      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      currentPos.current.x += dx * 0.02;
      currentPos.current.y += dy * 0.02;

      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      if (animalRef.current) {
        animalRef.current.style.transform = `translate(${currentPos.current.x - spriteSize/2}px, ${currentPos.current.y - spriteSize/2}px) rotate(${angle}deg)`;
      }

      if (distance < catchDistance && !dragging) {
        dragging = true;
        dragTime = 0;

        const dragAngle = Math.random() * 2 * Math.PI;
        const dragDistance = 100;
        targetPos.current.x += Math.cos(dragAngle) * dragDistance;
        targetPos.current.y += Math.sin(dragAngle) * dragDistance;
      }

      if (dragging) {
        const cursorDx = targetPos.current.x - cursorPos.current.x;
        const cursorDy = targetPos.current.y - cursorPos.current.y;

        cursorPos.current.x += cursorDx * 0.1;
        cursorPos.current.y += cursorDy * 0.1;

        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${cursorPos.current.x - cursorSize/2}px, ${cursorPos.current.y - cursorSize/2}px)`;
        }

        dragTime++;
        if (dragTime > maxDragFrames) {
          dragging = false;
        }
      } else {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${cursorPos.current.x - cursorSize/2}px, ${cursorPos.current.y - cursorSize/2}px)`;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      document.body.style.cursor = "default";
      if (cursorRef.current) document.body.removeChild(cursorRef.current);
    };
  }, []);

  return <img ref={animalRef} src={walkSprite} alt="Rio the parakeet" className="rio" />;
}
