'use client';

import React, { useEffect, useRef, useState } from 'react';

interface InfiniteGridProps {
  speed?: number;
  gap?: number;
}

export function InfiniteGrid({ speed = 0.5, gap = 40 }: InfiniteGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const offsetRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const offset = offsetRef.current;

      // Draw grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;

      // Draw vertical lines
      for (let x = -gap + (offset % gap); x < canvas.width; x += gap) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = -gap + (offset % gap); y < canvas.height; y += gap) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw cursor light glow effect
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;
      const glowRadius = 150;

      const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, glowRadius);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.06)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.02)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(mouseX - glowRadius, mouseY - glowRadius, glowRadius * 2, glowRadius * 2);
    };

    const animate = () => {
      offsetRef.current = (offsetRef.current + speed) % gap;
      drawGrid();
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed, gap]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1, background: '#0d0d0d' }}
    />
  );
}
