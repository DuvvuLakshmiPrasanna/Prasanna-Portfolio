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
  bx?: number;
  by?: number;
  life?: number; // for burst nodes
  isBurst?: boolean;
};
const BREAKPOINTS = [
  // reduced clear radius (smaller removal diameter)
  { name: "mobile", maxW: 480, nodes: 38, dist: 108, clear: 50, speed: 0.3 },
  { name: "tablet", maxW: 768, nodes: 56, dist: 128, clear: 65, speed: 0.38 },
  { name: "laptop", maxW: 1280, nodes: 86, dist: 155, clear: 80, speed: 0.46 },
  { name: "desktop", maxW: 1920, nodes: 114, dist: 174, clear: 90, speed: 0.54 },
  { name: "wide", maxW: 99999, nodes: 142, dist: 194, clear: 100, speed: 0.62 },
];

function getConfig(w: number) {
  return BREAKPOINTS.find((b) => w <= b.maxW) || BREAKPOINTS[BREAKPOINTS.length - 1];
}

function createNodes(width: number, height: number, cfg: { nodes: number; speed: number }) {
  const cols = Math.max(3, Math.round(Math.sqrt(cfg.nodes * (width / Math.max(height, 1)))));
  const rows = Math.max(3, Math.ceil(cfg.nodes / cols));
  const cellWidth = width / cols;
  const cellHeight = height / rows;
  const positions = Array.from({ length: rows }, (_, row) =>
    Array.from({ length: cols }, (_, col) => ({
      x: (col + 0.5) * cellWidth,
      y: (row + 0.5) * cellHeight,
    }))
  )
    .flat()
    .sort(() => Math.random() - 0.5);

  return Array.from({ length: cfg.nodes }, (_, index) => {
    const base = positions[index % positions.length];
    const jitterX = (Math.random() - 0.5) * cellWidth * 0.7;
    const jitterY = (Math.random() - 0.5) * cellHeight * 0.7;
    const homeX = Math.min(width - 18, Math.max(18, base.x + jitterX));
    const homeY = Math.min(height - 18, Math.max(18, base.y + jitterY));
    const ang = Math.random() * Math.PI * 2;
    const spd = cfg.speed * (0.5 + Math.random() * 0.8);
    return {
      x: homeX,
      y: homeY,
      homeX,
      homeY,
      bx: Math.cos(ang) * spd,
      by: Math.sin(ang) * spd,
      vx: Math.cos(ang) * spd,
      vy: Math.sin(ang) * spd,
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
    let cfg = getConfig(width);
    let nodes: Node[] = createNodes(width, height, { nodes: cfg.nodes, speed: cfg.speed });
    let animationFrame = 0;
    let mouse = { x: null as number | null, y: null as number | null };
    let palette = {
      line: "rgba(255, 255, 255, 0.18)",
      node: "rgba(245, 249, 255, 0.86)",
      nodeAccent: ["rgba(245, 249, 255, 0.98)"] as string[],
    };
    let frozen = false;

    const syncPalette = () => {
      const theme = document.documentElement.getAttribute("data-theme") || "dark";
      if (theme === "light") {
        palette = {
          line: "rgba(0, 0, 0, 0.42)",
          node: "rgba(0, 0, 0, 0.9)",
          nodeAccent: ["rgba(0, 0, 0, 1)"],
        };
      } else {
        palette = {
          line: "rgba(255, 255, 255, 0.3)",
          node: "rgba(245, 249, 255, 0.92)",
          nodeAccent: ["rgba(245, 249, 255, 0.98)"],
        };
      }
    };

    let currentBp = cfg.name;
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      const newCfg = getConfig(width);
      // if breakpoint changed, reinit nodes with new config
      if (!cfg || newCfg.name !== currentBp) {
        cfg = newCfg;
        currentBp = cfg.name;
        nodes = createNodes(width, height, { nodes: cfg.nodes, speed: cfg.speed });
      } else {
        // otherwise just recreate positions to fit viewport
        nodes = createNodes(width, height, { nodes: cfg.nodes, speed: cfg.speed });
      }
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

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      frozen = !frozen;
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
    window.addEventListener("contextmenu", handleContextMenu);

    let frame = 0;

    const tick = () => {
      frame += 1;
      context.clearRect(0, 0, width, height);

      // update nodes
      if (!frozen) {
        nodes.forEach((node) => {
          // burst life
          if (node.isBurst && node.life !== undefined) {
            node.life -= 1;
            // fade handled in draw
          }

          // spring back to base velocity
          if (node.bx !== undefined && node.by !== undefined) {
            node.vx += (node.bx - node.vx) * 0.02;
            node.vy += (node.by - node.vy) * 0.02;
          }

          // repel from mouse within clear radius
          if (mouse.x !== null && mouse.y !== null) {
            const dx = node.x - mouse.x;
            const dy = node.y - mouse.y;
            const dist = Math.hypot(dx, dy);
            const clearR = cfg?.clear ?? 130;
            if (dist > 0 && dist < clearR) {
              const force = (1 - dist / clearR) * 2.2;
              node.vx += (dx / dist) * force;
              node.vy += (dy / dist) * force;
            }
          }

          // apply damping and move
          node.vx *= 0.995;
          node.vy *= 0.995;
          node.x += node.vx;
          node.y += node.vy;

          // wrap edges
          const margin = 12;
          if (node.x < -margin) node.x = width + margin;
          else if (node.x > width + margin) node.x = -margin;
          if (node.y < -margin) node.y = height + margin;
          else if (node.y > height + margin) node.y = -margin;
        });
      }

      // draw node-node lines, skipping those whose midpoint lies inside clear radius
      const connDist = cfg?.dist ?? 135;
      const clearR = cfg?.clear ?? 130;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d > connDist) continue;

          const mx = (a.x + b.x) * 0.5;
          const my = (a.y + b.y) * 0.5;
          let skip = false;
          if (mouse.x !== null && mouse.y !== null) {
            const md = Math.hypot(mx - mouse.x, my - mouse.y);
            if (md < clearR) skip = true;
          }
          if (skip) continue;

          const t = 1 - d / connDist;
          const alpha = Math.max(0, t * 0.8);
          context.beginPath();
          context.strokeStyle = palette.line;
          context.globalAlpha = alpha;
          context.lineWidth = Math.max(0.7, t * 2.05);
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.stroke();
        }
      }

      context.globalAlpha = 1;

      // (moved) dashed clear circle will be drawn after nodes so it's visible

      // draw nodes
      nodes.forEach((node, idx) => {
        // node glow / fill
        context.save();
        const isBurst = node.isBurst && node.life !== undefined && node.life > 0;
        const nodeAlpha = isBurst ? Math.max(0, Math.min(1, node.life! / 60)) : 1;
        context.beginPath();
        context.fillStyle = palette.node.replace(/0\.86\)$/, `${nodeAlpha * 0.95})`);
        context.shadowBlur = isBurst ? 12 : 6;
        context.shadowColor = palette.nodeAccent[0];
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        context.fill();
        context.restore();

        // no direct node-to-cursor linking per user request
      });

      // intentionally do NOT draw the clear circle so the circle is not visible

      // cleanup dead bursts
      nodes = nodes.filter((n) => !(n.isBurst && n.life !== undefined && n.life <= 0));

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
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 block h-[100dvh] w-screen" />;
}