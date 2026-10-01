import React, { useEffect, useRef, useState } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  brightness: number; // 0.2 to 0.8
  pulsePhase: number;
  targetBrightness: number;
  connectionCount: number;
}

interface DataPacket {
  fromNode: number;
  toNode: number;
  progress: number; // 0 to 1
  speed: number;
  size: number;
}

interface PulseWave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  strength: number; // 1 to 0
}

export const DataNetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean; targetX: number; targetY: number }>({
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    active: false,
  });

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check user accessibility preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive node count based on screen size
    const isMobile = width < 768;
    const nodeCount = isMobile ? 38 : Math.min(85, Math.floor((width * height) / 18000));
    const maxConnectionDist = isMobile ? 110 : 160;
    const cursorInteractionDist = isMobile ? 120 : 180;

    const nodes: Node[] = [];
    const packets: DataPacket[] = [];
    const pulseWaves: PulseWave[] = [];

    // Initialize nodes with subtle organic distribution
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        baseRadius: Math.random() < 0.2 ? 2.2 : Math.random() < 0.6 ? 1.6 : 1.2,
        radius: 1.5,
        brightness: 0.25 + Math.random() * 0.45,
        pulsePhase: Math.random() * Math.PI * 2,
        targetBrightness: 0.4,
        connectionCount: 0,
      });
    }

    // Spawn a rare subtle data packet along an existing connection line
    const maybeSpawnPacket = (connections: Array<[number, number]>) => {
      if (packets.length < 3 && connections.length > 0 && Math.random() < 0.02) {
        const randomConn = connections[Math.floor(Math.random() * connections.length)];
        packets.push({
          fromNode: randomConn[0],
          toNode: randomConn[1],
          progress: 0,
          speed: 0.008 + Math.random() * 0.012,
          size: 1.8,
        });
      }
    };

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    // Click handler: emits a subtle data pulse wave
    const handleClick = (e: MouseEvent) => {
      pulseWaves.push({
        x: e.clientX,
        y: e.clientY,
        radius: 5,
        maxRadius: isMobile ? 140 : 220,
        strength: 1.0,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);

    // Animation loop
    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Smooth cursor lerp
      if (mouseRef.current.active) {
        mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.12;
        mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.12;
      } else {
        mouseRef.current.x = -1000;
        mouseRef.current.y = -1000;
      }

      // Update pulse waves
      for (let w = pulseWaves.length - 1; w >= 0; w--) {
        const wave = pulseWaves[w];
        wave.radius += 180 * dt;
        wave.strength = Math.max(0, 1 - wave.radius / wave.maxRadius);

        // Draw delicate ring
        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(56, 189, 248, ${wave.strength * 0.18})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        if (wave.radius >= wave.maxRadius) {
          pulseWaves.splice(w, 1);
        }
      }

      // Update nodes positions & gentle boundary wrap
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!mediaQuery.matches) {
          node.x += node.vx;
          node.y += node.vy;

          // Wrap edges smoothly
          if (node.x < -20) node.x = width + 20;
          if (node.x > width + 20) node.x = -20;
          if (node.y < -20) node.y = height + 20;
          if (node.y > height + 20) node.y = -20;
        }

        // Pulse phase
        node.pulsePhase += dt * 0.8;
        const subtlePulse = Math.sin(node.pulsePhase) * 0.15;
        node.brightness = Math.max(0.15, Math.min(0.9, node.targetBrightness + subtlePulse));

        // Reaction to mouse
        const dx = node.x - mouseRef.current.x;
        const dy = node.y - mouseRef.current.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distToMouse < cursorInteractionDist && mouseRef.current.active) {
          const factor = (1 - distToMouse / cursorInteractionDist);
          // Very gentle displacement away from cursor (subtle, non-chaotic)
          node.x += (dx / (distToMouse || 1)) * factor * 0.8;
          node.y += (dy / (distToMouse || 1)) * factor * 0.8;
          node.brightness = Math.min(0.95, node.brightness + factor * 0.5);
          node.radius = node.baseRadius * (1 + factor * 0.4);
        } else {
          node.radius = node.baseRadius;
        }

        // Reaction to pulse waves
        for (const wave of pulseWaves) {
          const dwx = node.x - wave.x;
          const dwy = node.y - wave.y;
          const distToWave = Math.sqrt(dwx * dwx + dwy * dwy);
          if (Math.abs(distToWave - wave.radius) < 25) {
            node.brightness = Math.min(1.0, node.brightness + wave.strength * 0.6);
            node.radius = node.baseRadius * 1.5;
          }
        }
      }

      // Calculate connections
      const activeConnections: Array<[number, number]> = [];

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectionDist) {
            activeConnections.push([i, j]);
            const alphaFactor = 1 - dist / maxConnectionDist;

            // Check if connection is near cursor to illuminate local cluster
            const midX = (n1.x + n2.x) / 2;
            const midY = (n1.y + n2.y) / 2;
            const dCursor = Math.sqrt(
              Math.pow(midX - mouseRef.current.x, 2) + Math.pow(midY - mouseRef.current.y, 2)
            );
            const cursorBoost = dCursor < cursorInteractionDist ? (1 - dCursor / cursorInteractionDist) * 0.25 : 0;

            const finalAlpha = Math.min(0.35, alphaFactor * 0.14 + cursorBoost);

            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(148, 163, 184, ${finalAlpha})`;
            ctx.lineWidth = cursorBoost > 0 ? 0.9 : 0.6;
            ctx.stroke();
          }
        }
      }

      // Spawn and update data packets (data moving through the network)
      maybeSpawnPacket(activeConnections);

      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p];
        pkt.progress += pkt.speed;

        const from = nodes[pkt.fromNode];
        const to = nodes[pkt.toNode];

        if (!from || !to) {
          packets.splice(p, 1);
          continue;
        }

        const px = from.x + (to.x - from.x) * pkt.progress;
        const py = from.y + (to.y - from.y) * pkt.progress;

        // Subtle glow packet
        ctx.beginPath();
        ctx.arc(px, py, pkt.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.85)';
        ctx.shadowColor = 'rgba(56, 189, 248, 0.6)';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0; // reset

        if (pkt.progress >= 1) {
          packets.splice(p, 1);
        }
      }

      // Render Nodes (data points)
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);

        // Muted cool blue / steel color with variable brightness
        const isHighlight = node.brightness > 0.6;
        if (isHighlight) {
          ctx.fillStyle = `rgba(56, 189, 248, ${node.brightness})`;
          ctx.shadowColor = 'rgba(56, 189, 248, 0.4)';
          ctx.shadowBlur = 4;
        } else {
          ctx.fillStyle = `rgba(148, 163, 184, ${node.brightness * 0.6})`;
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{
          // Subtly masked so it's strongest in the hero and fades down the viewport
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0.05) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0.05) 100%)',
        }}
      />
    </div>
  );
};
