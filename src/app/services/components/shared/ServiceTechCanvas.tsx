"use client";

import React, { useEffect, useRef } from "react";

export type CanvasThemeMode =
  | "web"
  | "ecommerce"
  | "mobile"
  | "software"
  | "ai-ml"
  | "cloud"
  | "ui-ux"
  | "data-annotation"
  | "digital-marketing"
  | "solutions"
  | "services";

interface ServiceTechCanvasProps {
  mode?: CanvasThemeMode;
}

export function ServiceTechCanvas({ mode = "web" }: ServiceTechCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Theme color schemes
    const themeColors: Record<CanvasThemeMode, { primary: string; secondary: string; pulse: string }> = {
      web: { primary: "rgba(16, 185, 129, ", secondary: "rgba(14, 165, 233, ", pulse: "rgba(52, 211, 153, " },
      ecommerce: { primary: "rgba(16, 185, 129, ", secondary: "rgba(245, 158, 11, ", pulse: "rgba(16, 185, 129, " },
      mobile: { primary: "rgba(59, 130, 246, ", secondary: "rgba(147, 51, 234, ", pulse: "rgba(96, 165, 250, " },
      software: { primary: "rgba(6, 182, 212, ", secondary: "rgba(139, 92, 246, ", pulse: "rgba(34, 211, 238, " },
      "ai-ml": { primary: "rgba(16, 185, 129, ", secondary: "rgba(168, 85, 247, ", pulse: "rgba(216, 180, 254, " },
      cloud: { primary: "rgba(14, 165, 233, ", secondary: "rgba(99, 102, 241, ", pulse: "rgba(56, 189, 248, " },
      "ui-ux": { primary: "rgba(236, 72, 153, ", secondary: "rgba(139, 92, 246, ", pulse: "rgba(244, 114, 182, " },
      "data-annotation": { primary: "rgba(16, 185, 129, ", secondary: "rgba(245, 158, 11, ", pulse: "rgba(52, 211, 153, " },
      "digital-marketing": { primary: "rgba(244, 63, 94, ", secondary: "rgba(16, 185, 129, ", pulse: "rgba(251, 113, 133, " },
      solutions: { primary: "rgba(16, 185, 129, ", secondary: "rgba(14, 165, 233, ", pulse: "rgba(45, 212, 191, " },
      services: { primary: "rgba(16, 185, 129, ", secondary: "rgba(99, 102, 241, ", pulse: "rgba(52, 211, 153, " },
    };

    const scheme = themeColors[mode] || themeColors.web;

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      pulsePhase: number;
      pulseSpeed: number;
      isPacketNode: boolean;
      colorType: "primary" | "secondary";
    }

    const nodeCount = Math.min(Math.floor((width * height) / 22000) + 18, 48);
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.5,
        baseAlpha: Math.random() * 0.4 + 0.25,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
        isPacketNode: i % 4 === 0,
        colorType: i % 3 === 0 ? "secondary" : "primary",
      });
    }

    interface Packet {
      fromNode: number;
      toNode: number;
      progress: number;
      speed: number;
    }

    const packets: Packet[] = [];
    const maxPackets = 6;

    const spawnPacket = () => {
      if (packets.length >= maxPackets || nodes.length < 2) return;
      const fromNode = Math.floor(Math.random() * nodes.length);
      let toNode = Math.floor(Math.random() * nodes.length);
      if (fromNode === toNode) toNode = (toNode + 1) % nodes.length;

      const dx = nodes[fromNode].x - nodes[toNode].x;
      const dy = nodes[fromNode].y - nodes[toNode].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 180) {
        packets.push({
          fromNode,
          toNode,
          progress: 0,
          speed: 0.012 + Math.random() * 0.012,
        });
      }
    };

    let packetInterval = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      packetInterval++;
      if (packetInterval % 35 === 0) {
        spawnPacket();
      }

      // Update and draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.16;
            ctx.beginPath();
            ctx.strokeStyle = `${scheme.primary}${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw packets
      for (let k = packets.length - 1; k >= 0; k--) {
        const p = packets[k];
        p.progress += p.speed;

        if (p.progress >= 1) {
          packets.splice(k, 1);
          continue;
        }

        const start = nodes[p.fromNode];
        const end = nodes[p.toNode];
        if (!start || !end) {
          packets.splice(k, 1);
          continue;
        }

        const px = start.x + (end.x - start.x) * p.progress;
        const py = start.y + (end.y - start.y) * p.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `${scheme.pulse}0.9)`;
        ctx.shadowColor = `${scheme.pulse}0.8)`;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Update & draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0) n.x = width;
        if (n.x > width) n.x = 0;
        if (n.y < 0) n.y = height;
        if (n.y > height) n.y = 0;

        n.pulsePhase += n.pulseSpeed;
        const currentAlpha = n.baseAlpha + Math.sin(n.pulsePhase) * 0.15;
        const prefix = n.colorType === "secondary" ? scheme.secondary : scheme.primary;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${prefix}${Math.max(0.1, currentAlpha)})`;
        ctx.fill();

        if (n.isPacketNode) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius + 3 + Math.sin(n.pulsePhase) * 2, 0, Math.PI * 2);
          ctx.strokeStyle = `${scheme.pulse}0.18)`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mode]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <canvas ref={canvasRef} className="w-full h-full block opacity-75" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none" />
    </div>
  );
}
