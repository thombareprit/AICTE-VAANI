import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Zap, Eye } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
}

type QubitState = '0' | '1' | 'superposition';
type CollapsedState = '0' | '1' | null;

export const QubitSimulator: React.FC = () => {
  const [targetState, setTargetState] = useState<QubitState>('superposition');
  const [collapsedState, setCollapsedState] = useState<CollapsedState>(null);
  const [isCollapsing, setIsCollapsing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rotationRef = useRef<number>(0);

  // Probability definitions
  const getProbabilities = (state: QubitState, collapsed: CollapsedState) => {
    if (collapsed !== null) {
      return { p0: collapsed === '0' ? 100 : 0, p1: collapsed === '1' ? 100 : 0 };
    }
    if (state === '0') return { p0: 100, p1: 0 };
    if (state === '1') return { p0: 0, p1: 100 };
    return { p0: 50, p1: 50 };
  };

  const { p0, p1 } = getProbabilities(targetState, collapsedState);

  // Initialize and run Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpi = window.devicePixelRatio || 1;
    const size = 220;
    canvas.width = size * dpi;
    canvas.height = size * dpi;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpi, dpi);

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = 80;

    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, size, size);

      // Draw Bloch Circle (2D Projection)
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = '#E2E8F0';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw axes
      ctx.beginPath();
      ctx.setLineDash([4, 4]);
      // Z-axis (vertical)
      ctx.moveTo(centerX, centerY - radius - 10);
      ctx.lineTo(centerX, centerY + radius + 10);
      // X-axis (horizontal)
      ctx.moveTo(centerX - radius - 10, centerY);
      ctx.lineTo(centerX + radius + 10, centerY);
      ctx.strokeStyle = '#94A3B8';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw Axis Labels
      ctx.fillStyle = '#475569';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('|0⟩', centerX, centerY - radius - 15);
      ctx.fillText('|1⟩', centerX, centerY + radius + 20);
      ctx.fillText('|+⟩', centerX + radius + 18, centerY + 4);
      ctx.fillText('|-⟩', centerX - radius - 18, centerY + 4);

      // Draw Wave/Oscillation when in superposition
      if (targetState === 'superposition' && collapsedState === null) {
        rotationRef.current += 0.04;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(99, 102, 241, 0.15)';
        ctx.lineWidth = 6;
        ctx.stroke();

        // Pulsing glow rings
        const glowRadius = radius + Math.sin(rotationRef.current * 2) * 4;
        ctx.beginPath();
        ctx.arc(centerX, centerY, glowRadius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(29, 78, 216, 0.08)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Calculate state vector endpoint
      let targetX = centerX;
      let targetY = centerY;

      if (collapsedState !== null) {
        // Collapsed state vector
        targetY = collapsedState === '0' ? centerY - radius : centerY + radius;
      } else {
        if (targetState === '0') {
          targetY = centerY - radius;
        } else if (targetState === '1') {
          targetY = centerY + radius;
        } else {
          // Superposition - dynamic rotation along the equator
          const angle = rotationRef.current;
          targetX = centerX + Math.cos(angle) * radius;
          targetY = centerY + Math.sin(angle) * 20; // 3D perspective effect
        }
      }

      // Draw State Vector line & arrow
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(targetX, targetY);
      ctx.strokeStyle = collapsedState !== null ? '#D97706' : '#1D4ED8';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Vector point circle
      ctx.beginPath();
      ctx.arc(targetX, targetY, 6, 0, Math.PI * 2);
      ctx.fillStyle = collapsedState !== null ? '#D97706' : '#1D4ED8';
      ctx.fill();
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Render collapse particles if active
      if (isCollapsing) {
        const particles = particlesRef.current;
        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          // Gravitate towards the target collapse point
          const destY = collapsedState === '0' ? centerY - radius : centerY + radius;
          const dx = centerX - p.x;
          const dy = destY - p.y;
          p.vx += dx * 0.015;
          p.vy += dy * 0.015;
          // Friction
          p.vx *= 0.92;
          p.vy *= 0.92;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.fill();
          ctx.globalAlpha = 1.0;

          // Fade out as they arrive
          const dist = Math.hypot(dx, dy);
          if (dist < 8) {
            p.alpha *= 0.8;
          }
        });

        // Clean up invisible particles
        particlesRef.current = particles.filter(p => p.alpha > 0.05);
        if (particlesRef.current.length === 0) {
          setIsCollapsing(false);
        }
      }

      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [targetState, collapsedState, isCollapsing]);

  // Trigger quantum measurement / collapse
  const triggerCollapse = () => {
    if (isCollapsing) return;

    setIsCollapsing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const size = 220;
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = 80;

    // Calculate collapse outcome based on probabilities
    let outcome: CollapsedState = '0';
    if (targetState === '0') {
      outcome = '0';
    } else if (targetState === '1') {
      outcome = '1';
    } else {
      outcome = Math.random() < 0.5 ? '0' : '1';
    }

    setCollapsedState(outcome);

    // Generate burst particles
    const particleCount = 45;
    const newParticles: Particle[] = [];
    const colors = ['#1D4ED8', '#6366F1', '#D97706', '#059669'];

    for (let i = 0; i < particleCount; i++) {
      // Start in a ring around the center
      const angle = Math.random() * Math.PI * 2;
      const startRadius = radius * (0.8 + Math.random() * 0.4);
      const px = centerX + Math.cos(angle) * startRadius;
      const py = centerY + Math.sin(angle) * startRadius;

      // Small initial velocity away or random
      const vx = (Math.random() - 0.5) * 4;
      const vy = (Math.random() - 0.5) * 4;

      newParticles.push({
        x: px,
        y: py,
        vx,
        vy,
        alpha: 0.9,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 2 + Math.random() * 3,
      });
    }

    particlesRef.current = newParticles;
  };

  const handleReset = () => {
    setCollapsedState(null);
    setIsCollapsing(false);
    particlesRef.current = [];
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-6 shadow-premium transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
      <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Zap className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base">Qubit Superposition Simulator</h3>
            <p className="text-xs text-slate-500">Real-time state visualizer</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 rounded-full border border-amber-200 text-amber-800 text-[11px] font-semibold">
          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
          2D Hilbert Space
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* State Controller Column */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Select Initial Qubit State
            </label>
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100/80 rounded-xl">
              {(['0', '1', 'superposition'] as QubitState[]).map((state) => (
                <button
                  key={state}
                  onClick={() => {
                    setTargetState(state);
                    setCollapsedState(null);
                  }}
                  className={`relative py-2 px-3 text-xs font-semibold rounded-lg transition-all duration-200 ${
                    targetState === state && collapsedState === null
                      ? 'bg-white text-primary shadow-sm border border-slate-200/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
                  }`}
                >
                  {state === '0' && '|0⟩'}
                  {state === '1' && '|1⟩'}
                  {state === 'superposition' && '|ψ⟩'}
                </button>
              ))}
            </div>
          </div>

          {/* Probability Meters */}
          <div className="space-y-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
            <span className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
              State Probabilities
            </span>
            <div className="space-y-2.5">
              <div>
                <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                  <span>Probability |0⟩ (Ground State)</span>
                  <span className="font-bold text-primary">{p0}%</span>
                </div>
                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    animate={{ width: `${p0}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                  <span>Probability |1⟩ (Excited State)</span>
                  <span className="font-bold text-indigo-600">{p1}%</span>
                </div>
                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-indigo-500"
                    animate={{ width: `${p1}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Trigger Buttons */}
          <div className="flex gap-2.5">
            <button
              onClick={triggerCollapse}
              disabled={isCollapsing}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition-all duration-200 hover:shadow-md disabled:opacity-50"
            >
              <Eye className="w-4 h-4" />
              Observe Qubit
            </button>
            <button
              onClick={handleReset}
              disabled={collapsedState === null && !isCollapsing}
              className="inline-flex items-center justify-center p-2.5 border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 rounded-xl bg-white transition-all duration-200 disabled:opacity-40"
              title="Reset Wavefunction"
            >
              <RefreshCw className={`w-4 h-4 ${isCollapsing ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Canvas Display Column */}
        <div className="flex flex-col items-center justify-center bg-slate-50/50 rounded-xl p-4 border border-slate-100 relative overflow-hidden">
          <canvas ref={canvasRef} className="z-10 cursor-pointer" onClick={triggerCollapse} />

          {/* State overlay indicator */}
          <div className="mt-2 text-center z-10">
            <AnimatePresence mode="wait">
              {collapsedState !== null ? (
                <motion.div
                  key="collapsed"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="bg-amber-50 border border-amber-200 text-amber-800 text-xs px-3.5 py-1.5 rounded-full font-bold shadow-sm inline-flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  Wavefunction Collapsed to |{collapsedState}⟩
                </motion.div>
              ) : (
                <motion.div
                  key="superposition"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="text-xs text-slate-500 font-semibold"
                >
                  {targetState === 'superposition' ? (
                    <span className="text-primary font-bold">In Superposition (|0⟩ + |1⟩)/√2</span>
                  ) : (
                    <span>Pure State |{targetState}⟩</span>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Holographic background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
