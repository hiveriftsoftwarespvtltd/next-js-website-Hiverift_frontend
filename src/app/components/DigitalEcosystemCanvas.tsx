"use client";

import { useEffect, useRef } from "react";

interface NodeItem {
  id: string;
  xPercent: number; // 0-100%
  yPercent: number; // 0-100%
  radius: number;
  color: string;
  pulsePhase: number;
  connections: string[];
}

interface Packet {
  fromNodeId: string;
  toNodeId: string;
  progress: number;
  speed: number;
  color: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  baseAlpha: number;
}

export function DigitalEcosystemCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Organic perimeter and ambient constellation nodes that do NOT overlap text
    const nodes: NodeItem[] = [
      {
        id: "top-left",
        xPercent: 8,
        yPercent: 12,
        radius: 4.5,
        color: "#10b981",
        pulsePhase: 0,
        connections: ["top-mid", "mid-left"],
      },
      {
        id: "top-mid",
        xPercent: 52,
        yPercent: 8,
        radius: 4,
        color: "#34d399",
        pulsePhase: 1.5,
        connections: ["top-right"],
      },
      {
        id: "top-right",
        xPercent: 92,
        yPercent: 14,
        radius: 5,
        color: "#06b6d4",
        pulsePhase: 2.8,
        connections: ["mid-right"],
      },
      {
        id: "mid-left",
        xPercent: 4,
        yPercent: 50,
        radius: 4,
        color: "#10b981",
        pulsePhase: 0.9,
        connections: ["bot-left"],
      },
      {
        id: "mid-right",
        xPercent: 96,
        yPercent: 54,
        radius: 5,
        color: "#38bdf8",
        pulsePhase: 3.2,
        connections: ["bot-right"],
      },
      {
        id: "bot-left",
        xPercent: 10,
        yPercent: 90,
        radius: 4.5,
        color: "#34d399",
        pulsePhase: 2.1,
        connections: ["bot-mid"],
      },
      {
        id: "bot-mid",
        xPercent: 50,
        yPercent: 94,
        radius: 4,
        color: "#10b981",
        pulsePhase: 4.0,
        connections: ["bot-right"],
      },
      {
        id: "bot-right",
        xPercent: 90,
        yPercent: 88,
        radius: 4.5,
        color: "#06b6d4",
        pulsePhase: 1.1,
        connections: [],
      },
    ];

    const packets: Packet[] = [
      { fromNodeId: "top-left", toNodeId: "top-mid", progress: 0.1, speed: 0.005, color: "#34d399" },
      { fromNodeId: "top-mid", toNodeId: "top-right", progress: 0.5, speed: 0.004, color: "#06b6d4" },
      { fromNodeId: "top-right", toNodeId: "mid-right", progress: 0.3, speed: 0.006, color: "#38bdf8" },
      { fromNodeId: "mid-right", toNodeId: "bot-right", progress: 0.8, speed: 0.0045, color: "#10b981" },
      { fromNodeId: "bot-left", toNodeId: "bot-mid", progress: 0.2, speed: 0.005, color: "#34d399" },
      { fromNodeId: "bot-mid", toNodeId: "bot-right", progress: 0.6, speed: 0.004, color: "#06b6d4" },
      { fromNodeId: "top-left", toNodeId: "mid-left", progress: 0.4, speed: 0.0055, color: "#10b981" },
      { fromNodeId: "mid-left", toNodeId: "bot-left", progress: 0.7, speed: 0.0045, color: "#34d399" },
    ];

    const particleCount = 40;
    const particles: Particle[] = [];

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          size: Math.random() * 1.8 + 0.6,
          alpha: Math.random() * 0.35 + 0.08,
          baseAlpha: Math.random() * 0.35 + 0.08,
        });
      }
    };

    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetMouseX = x * 20;
      targetMouseY = y * 20;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleResize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      width = rect.width;
      height = rect.height;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      initParticles();
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const getNodePos = (node: NodeItem) => {
      const rawX = (node.xPercent / 100) * width;
      const rawY = (node.yPercent / 100) * height;
      const x = rawX + currentMouseX * 0.6;
      const y = rawY + currentMouseY * 0.6;
      return { x, y };
    };

    let tick = 0;

    const render = () => {
      tick++;

      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // 1. Subtle, elegant background coordinate grid
      ctx.save();
      ctx.strokeStyle = "rgba(16, 185, 129, 0.035)";
      ctx.lineWidth = 1;
      const gridSize = 64;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();

      // 2. Ambient drifting particles (subtle stardust effect)
      ctx.save();
      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
          p.alpha = p.baseAlpha + Math.sin(tick * 0.02 + p.size) * 0.12;
        }

        ctx.fillStyle = `rgba(52, 211, 153, ${Math.max(0.04, p.alpha)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      // Pos map
      const posMap = new Map<string, { x: number; y: number }>();
      nodes.forEach((node) => {
        posMap.set(node.id, getNodePos(node));
      });

      // 3. Connective radiant vectors (perimeter framing)
      ctx.save();
      nodes.forEach((node) => {
        const fromPos = posMap.get(node.id);
        if (!fromPos) return;

        node.connections.forEach((targetId) => {
          const toPos = posMap.get(targetId);
          if (!toPos) return;

          const grad = ctx.createLinearGradient(fromPos.x, fromPos.y, toPos.x, toPos.y);
          grad.addColorStop(0, "rgba(16, 185, 129, 0.2)");
          grad.addColorStop(0.5, "rgba(52, 211, 153, 0.1)");
          grad.addColorStop(1, "rgba(6, 182, 212, 0.2)");

          ctx.strokeStyle = grad;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(fromPos.x, fromPos.y);
          ctx.lineTo(toPos.x, toPos.y);
          ctx.stroke();
        });
      });
      ctx.restore();

      // 4. Moving data packets along perimeter
      if (!prefersReducedMotion) {
        ctx.save();
        packets.forEach((packet) => {
          const fromPos = posMap.get(packet.fromNodeId);
          const toPos = posMap.get(packet.toNodeId);
          if (!fromPos || !toPos) return;

          packet.progress += packet.speed;
          if (packet.progress > 1) {
            packet.progress = 0;
          }

          const curX = fromPos.x + (toPos.x - fromPos.x) * packet.progress;
          const curY = fromPos.y + (toPos.y - fromPos.y) * packet.progress;

          const glowGrad = ctx.createRadialGradient(curX, curY, 0, curX, curY, 6);
          glowGrad.addColorStop(0, packet.color);
          glowGrad.addColorStop(0.5, "rgba(52, 211, 153, 0.4)");
          glowGrad.addColorStop(1, "transparent");

          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(curX, curY, 6, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(curX, curY, 1.5, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.restore();
      }

      // 5. Constellation node points (Clean glowing halos without any text collisions)
      nodes.forEach((node) => {
        const pos = posMap.get(node.id);
        if (!pos) return;

        const pulse = Math.sin(tick * 0.04 + node.pulsePhase) * 3;
        const outerRadius = node.radius + (prefersReducedMotion ? 2 : Math.max(0, pulse));

        ctx.save();
        const outerGlow = ctx.createRadialGradient(
          pos.x,
          pos.y,
          node.radius * 0.5,
          pos.x,
          pos.y,
          outerRadius * 2.5
        );
        outerGlow.addColorStop(0, `${node.color}40`);
        outerGlow.addColorStop(0.6, `${node.color}10`);
        outerGlow.addColorStop(1, "transparent");

        ctx.fillStyle = outerGlow;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, outerRadius * 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = node.color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, outerRadius, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
