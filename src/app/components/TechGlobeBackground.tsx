"use client";

import React, { useEffect, useRef } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
  isHub?: boolean;
  hubPulse?: number;
}

export function TechGlobeBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = 0;
    let height = 0;
    let rotY = 0;
    let orbitAngle = 0;
    let tick = 0;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 1. Generate 3D Fibonacci sphere points (representing global tech nodes)
    const NUM_POINTS = 320;
    const points: Point3D[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < NUM_POINTS; i++) {
      const y = 1 - (i / (NUM_POINTS - 1)) * 2; // 1 to -1
      const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = phi * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      // Select ~12 points as major digital tech hubs (Delhi NCR, Global Cloud Nodes, etc.)
      const isHub = i % 25 === 0;
      points.push({
        x,
        y,
        z,
        isHub,
        hubPulse: Math.random() * Math.PI * 2,
      });
    }

    // 2. Pre-calculate Latitude and Longitude Rings
    const LAT_RINGS = [-0.65, -0.35, 0, 0.35, 0.65]; // Y coordinates
    const SAMPLES_PER_RING = 48;
    const latRings: Point3D[][] = LAT_RINGS.map((y) => {
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const ringPts: Point3D[] = [];
      for (let s = 0; s < SAMPLES_PER_RING; s++) {
        const rad = (s / SAMPLES_PER_RING) * Math.PI * 2;
        ringPts.push({
          x: Math.cos(rad) * r,
          y: y,
          z: Math.sin(rad) * r,
        });
      }
      return ringPts;
    });

    // 4 Longitude Meridians (at 0, 45, 90, 135 deg)
    const MERIDIANS = [0, Math.PI / 4, Math.PI / 2, (3 * Math.PI) / 4];
    const meridianRings: Point3D[][] = MERIDIANS.map((meridianAngle) => {
      const ringPts: Point3D[] = [];
      for (let s = 0; s < SAMPLES_PER_RING; s++) {
        const rad = (s / SAMPLES_PER_RING) * Math.PI * 2;
        const cy = Math.cos(rad);
        const rAtY = Math.sin(rad);
        ringPts.push({
          x: Math.sin(meridianAngle) * rAtY,
          y: cy,
          z: Math.cos(meridianAngle) * rAtY,
        });
      }
      return ringPts;
    });

    // Handle high DPI resize
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // 3. Transformation & 3D Projection Helper
    const tiltX = 0.24; // ~14 deg tilt
    const tiltZ = -0.16; // ~9 deg lateral tilt
    const cosX = Math.cos(tiltX);
    const sinX = Math.sin(tiltX);
    const cosZ = Math.cos(tiltZ);
    const sinZ = Math.sin(tiltZ);

    const project = (
      p: Point3D,
      globeRadius: number,
      centerX: number,
      centerY: number
    ) => {
      // Rotation around Y axis
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = p.x * cosY + p.z * sinY;
      const z1 = -p.x * sinY + p.z * cosY;

      // Fixed tilt around X axis
      const y2 = p.y * cosX - z1 * sinX;
      const z2 = p.y * sinX + z1 * cosX;

      // Fixed tilt around Z axis
      const x3 = x1 * cosZ - y2 * sinZ;
      const y3 = x1 * sinZ + y2 * cosZ;

      // Perspective projection
      const cameraDistance = 3.2; // Camera distance in radii
      const perspective = cameraDistance / (cameraDistance + z2);

      return {
        screenX: centerX + x3 * globeRadius * perspective,
        screenY: centerY + y3 * globeRadius * perspective,
        z: z2, // Depth: -1 is back, +1 is front
        perspective,
        visible: z2 > -0.25, // Front hemisphere + slight rim
      };
    };

    // 4. Main Animation Render Loop
    const render = () => {
      tick++;
      if (!prefersReducedMotion) {
        rotY += 0.0032;
        orbitAngle += 0.012;
      }

      ctx.clearRect(0, 0, width, height);

      // Determine responsive globe radius & position
      // Position globe comfortably in the center-right of the hero background
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      
      const globeRadius = isMobile 
        ? Math.min(width * 0.42, 190)
        : isTablet 
          ? Math.min(width * 0.32, 260)
          : Math.min(width * 0.28, 340);

      // Center horizontally on mobile; center-biased towards the right column on desktop
      const centerX = isMobile ? width * 0.5 : width * 0.62;
      const centerY = isMobile ? height * 0.36 : height * 0.46;

      // Ambient radial glow behind the globe
      const ambientGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        globeRadius * 0.2,
        centerX,
        centerY,
        globeRadius * 1.55
      );
      ambientGlow.addColorStop(0, "rgba(16, 185, 129, 0.20)");
      ambientGlow.addColorStop(0.5, "rgba(20, 184, 166, 0.10)");
      ambientGlow.addColorStop(0.85, "rgba(5, 150, 105, 0.04)");
      ambientGlow.addColorStop(1, "transparent");

      ctx.fillStyle = ambientGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius * 1.55, 0, Math.PI * 2);
      ctx.fill();

      // Outer Tech Halo Boundary
      ctx.strokeStyle = "rgba(16, 185, 129, 0.26)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius * 1.05, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw Wireframe Latitude Rings
      latRings.forEach((ring) => {
        ctx.beginPath();
        let first = true;
        ring.forEach((pt) => {
          const pr = project(pt, globeRadius, centerX, centerY);
          if (pr.visible) {
            if (first) {
              ctx.moveTo(pr.screenX, pr.screenY);
              first = false;
            } else {
              ctx.lineTo(pr.screenX, pr.screenY);
            }
          } else {
            first = true;
          }
        });
        ctx.strokeStyle = "rgba(16, 185, 129, 0.20)";
        ctx.lineWidth = 1.0;
        ctx.stroke();
      });

      // Draw Wireframe Longitude Meridians
      meridianRings.forEach((ring) => {
        ctx.beginPath();
        let first = true;
        ring.forEach((pt) => {
          const pr = project(pt, globeRadius, centerX, centerY);
          if (pr.visible) {
            if (first) {
              ctx.moveTo(pr.screenX, pr.screenY);
              first = false;
            } else {
              ctx.lineTo(pr.screenX, pr.screenY);
            }
          } else {
            first = true;
          }
        });
        ctx.strokeStyle = "rgba(13, 148, 136, 0.18)";
        ctx.lineWidth = 1.0;
        ctx.stroke();
      });

      // Project all surface nodes
      const projected = points.map((p) => {
        const pr = project(p, globeRadius, centerX, centerY);
        return {
          ...pr,
          isHub: p.isHub,
          hubPulse: p.hubPulse,
        };
      });

      // Draw Tech Network Interconnections between close points on front hemisphere
      ctx.lineWidth = 0.9;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        if (p1.z < 0.1) continue; // Only front side

        // Check nearest neighbors
        for (let j = i + 1; j < Math.min(i + 7, projected.length); j++) {
          const p2 = projected[j];
          if (p2.z < 0.1) continue;

          const dx = p1.screenX - p2.screenX;
          const dy = p1.screenY - p2.screenY;
          const distSq = dx * dx + dy * dy;

          const maxDist = globeRadius * 0.22;
          if (distSq < maxDist * maxDist) {
            const alpha =
              (1 - Math.sqrt(distSq) / maxDist) *
              0.45 *
              Math.min(p1.z, p2.z);
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.screenX, p1.screenY);
            ctx.lineTo(p2.screenX, p2.screenY);
            ctx.stroke();
          }
        }
      }

      // Draw Points / Nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        if (!p.visible) continue;

        const depthAlpha = Math.max(0.18, (p.z + 0.5) / 1.5);

        if (p.isHub && p.z > 0.15) {
          // Major Tech Hub with pulsing ripple ring
          const pulse = Math.sin(tick * 0.05 + (p.hubPulse || 0));
          const hubRadius = 3.2 * p.perspective;
          const pulseRingRadius = (4.5 + pulse * 3) * p.perspective;

          // Outer pulse ring
          ctx.strokeStyle = `rgba(16, 185, 129, ${0.65 * depthAlpha})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.arc(p.screenX, p.screenY, pulseRingRadius, 0, Math.PI * 2);
          ctx.stroke();

          // Hub Core
          ctx.fillStyle = `rgba(5, 150, 105, ${1.0 * depthAlpha})`;
          ctx.beginPath();
          ctx.arc(p.screenX, p.screenY, hubRadius, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(p.screenX, p.screenY, hubRadius * 0.5, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Standard Network Node
          const dotRadius = (p.z > 0 ? 1.9 : 1.3) * p.perspective;
          const pointAlpha = p.z > 0 ? 0.75 * depthAlpha : 0.35 * depthAlpha;

          ctx.fillStyle = `rgba(16, 185, 129, ${pointAlpha})`;
          ctx.beginPath();
          ctx.arc(p.screenX, p.screenY, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 5. Outer Tech Orbit Ring (Satellite / Cloud Network Path)
      const orbitTilt = 0.52; // ~30 deg orbital inclination
      const orbitR = globeRadius * 1.35;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(-0.35); // tilt angle of orbit plane
      ctx.scale(1, Math.cos(orbitTilt));

      // Orbit Ellipse Path
      ctx.strokeStyle = "rgba(13, 148, 136, 0.32)";
      ctx.lineWidth = 1.4;
      ctx.setLineDash([3, 7]);
      ctx.beginPath();
      ctx.arc(0, 0, orbitR, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Satellite 1: Orbiting Data Packet
      const sat1X = Math.cos(orbitAngle) * orbitR;
      const sat1Y = Math.sin(orbitAngle) * orbitR;

      // Glow behind satellite
      const satGlow = ctx.createRadialGradient(sat1X, sat1Y, 1, sat1X, sat1Y, 14);
      satGlow.addColorStop(0, "rgba(16, 185, 129, 0.85)");
      satGlow.addColorStop(1, "transparent");
      ctx.fillStyle = satGlow;
      ctx.beginPath();
      ctx.arc(sat1X, sat1Y, 14, 0, Math.PI * 2);
      ctx.fill();

      // Satellite Beacon Point
      ctx.fillStyle = "#10b981";
      ctx.beginPath();
      ctx.arc(sat1X, sat1Y, 3.4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(sat1X, sat1Y, 1.7, 0, Math.PI * 2);
      ctx.fill();

      // Satellite 2: Counter-orbiting secondary beacon
      const sat2X = Math.cos(-orbitAngle * 0.7 + Math.PI) * (orbitR * 1.08);
      const sat2Y = Math.sin(-orbitAngle * 0.7 + Math.PI) * (orbitR * 1.08);

      ctx.fillStyle = "rgba(13, 148, 136, 0.75)";
      ctx.beginPath();
      ctx.arc(sat2X, sat2Y, 2.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}
