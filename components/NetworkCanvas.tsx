"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  vx: number;
  vy: number;
  radius: number;
};

const NODE_COUNT_MIN = 82;
const NODE_COUNT_MAX = 98;
const CONNECTION_DISTANCE = 140;
const REPEL_DISTANCE = 165;
const CURSOR_CONNECTION_DISTANCE = 180;

function createNodes(width: number, height: number) {
  const count = Math.round(Math.min(NODE_COUNT_MAX, Math.max(NODE_COUNT_MIN, (width * height) / 24000)));

  return Array.from({ length: count }, () => {
    const homeX = Math.random() * width;
    const homeY = Math.random() * height;

    return {
      x: homeX,
      y: homeY,
      homeX,
        homeY,
      vx: (Math.random() - 0.5) * 0.36,
      vy: (Math.random() - 0.5) * 0.36,
      radius: 1.1 + Math.random() * 1.6,
    } satisfies Node;
  });
}

export default function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes = createNodes(width, height);
    let animationFrame = 0;
    let mouse = { x: null as number | null, y: null as number | null };
    let palette = {
      line: "rgba(220, 232, 255, 0.18)",
      node: "rgba(245, 249, 255, 0.86)",
      nodeAccent: ["rgba(245, 249, 255, 0.98)"] as string[],
    };

    const syncPalette = () => {
      const theme = document.documentElement.getAttribute("data-theme") || "dark";
      palette = theme === "light"
        ? {
            line: "rgba(52, 63, 90, 0.18)",
            node: "rgba(52, 63, 90, 0.82)",
            nodeAccent: ["rgba(52, 63, 90, 0.92)"] as string[],
          }
        : {
            line: "rgba(220, 232, 255, 0.28)",
            node: "rgba(245, 249, 255, 0.95)",
            nodeAccent: ["rgba(245, 249, 255, 0.98)"] as string[],
          };
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = createNodes(width, height);
    };

    const handleViewportChange = () => {
      window.requestAnimationFrame(resize);
    };

    const handlePointerMove = (event: PointerEvent) => {
      mouse = { x: event.clientX, y: event.clientY };
    };

    const handlePointerLeave = () => {
      mouse = { x: null, y: null };
    };

    const handleThemeChange = () => syncPalette();
    const observer = new MutationObserver(handleThemeChange);

    resize();
    syncPalette();
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    window.addEventListener("resize", resize);
    window.visualViewport?.addEventListener("resize", handleViewportChange);
    window.visualViewport?.addEventListener("scroll", handleViewportChange);
    window.addEventListener("orientationchange", handleViewportChange);
    // pointer events cover mouse + touch + pen inputs
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("pointercancel", handlePointerLeave);

    let frame = 0;

    const tick = () => {
      frame += 1;
      context.clearRect(0, 0, width, height);

      nodes.forEach((node) => {
        const waveX = Math.sin((frame + node.homeY) * 0.004) * 0.03;
        const waveY = Math.cos((frame + node.homeX) * 0.0045) * 0.03;

        node.vx += (node.homeX - node.x) * 0.00055 + waveX;
        node.vy += (node.homeY - node.y) * 0.00055 + waveY;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const distance = Math.hypot(dx, dy);

          if (distance > 0 && distance < REPEL_DISTANCE) {
            const force = (1 - distance / REPEL_DISTANCE) * 0.95;
            node.vx += (dx / distance) * force;
            node.vy += (dy / distance) * force;
          }
        }

        node.vx *= 0.992;
        node.vy *= 0.992;
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0) {
          node.x = 0;
          node.vx *= -0.5;
        } else if (node.x > width) {
          node.x = width;
          node.vx *= -0.5;
        }

        if (node.y < 0) {
          node.y = 0;
          node.vy *= -0.5;
        } else if (node.y > height) {
          node.y = height;
          node.vy *= -0.5;
        }
      });

      for (let index = 0; index < nodes.length; index += 1) {
        for (let next = index + 1; next < nodes.length; next += 1) {
          const first = nodes[index];
          const second = nodes[next];
          const dx = first.x - second.x;
          const dy = first.y - second.y;
          const distance = Math.hypot(dx, dy);

            if (distance > CONNECTION_DISTANCE) continue;

            const alpha = Math.max(0, (1 - distance / CONNECTION_DISTANCE) * 0.5);
            context.beginPath();
            context.strokeStyle = palette.line;
            context.globalAlpha = alpha;
            context.lineWidth = 1;
            context.lineCap = "round";
            context.moveTo(first.x, first.y);
            context.lineTo(second.x, second.y);
            context.stroke();
        }
      }

      context.globalAlpha = 1;
        // If the cursor is near, draw connecting lines and add glow to nodes
        nodes.forEach((node, index) => {
          // node glow
          context.save();
          context.beginPath();
          context.fillStyle = palette.nodeAccent[index % palette.nodeAccent.length] || palette.node;
          context.shadowBlur = 10;
          context.shadowColor = (palette.nodeAccent[index % palette.nodeAccent.length] || palette.node) as string;
          context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          context.fill();
          context.restore();

          // draw line to cursor when close
          if (mouse.x !== null && mouse.y !== null) {
            const dxm = node.x - mouse.x;
            const dym = node.y - mouse.y;
            const distMouse = Math.hypot(dxm, dym);
            if (distMouse > 0 && distMouse < CURSOR_CONNECTION_DISTANCE) {
              const alphaM = Math.max(0, (1 - distMouse / CURSOR_CONNECTION_DISTANCE) * 0.9);
              context.beginPath();
              context.strokeStyle = palette.nodeAccent[0] || palette.line;
              context.globalAlpha = alphaM;
              context.lineWidth = 1.2;
              context.moveTo(node.x, node.y);
              context.lineTo(mouse.x, mouse.y);
              context.stroke();
              context.globalAlpha = 1;
            }
          }
        });

      animationFrame = window.requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.visualViewport?.removeEventListener("resize", handleViewportChange);
      window.visualViewport?.removeEventListener("scroll", handleViewportChange);
      window.removeEventListener("orientationchange", handleViewportChange);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointercancel", handlePointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 block h-[100dvh] w-screen" />;
}