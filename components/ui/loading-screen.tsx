'use client';

import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const canvas = document.getElementById('loading-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    const gap = 40;
    const totalVerticalLines = Math.ceil(canvas.width / gap) + 2;
    const totalHorizontalLines = Math.ceil(canvas.height / gap) + 2;
    const totalDraws = totalVerticalLines + totalHorizontalLines;

    let currentDraw = 0;
    const linesPerFrame = 2;
    const holdFrames = 60; // Hold at end for 1 second before fade
    let holdCounter = 0;
    const fadeSpeed = 0.015;
    let opacity = 1;

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 * opacity})`;
      ctx.lineWidth = 1;

      // Draw vertical lines (one at a time)
      for (let i = 0; i < Math.min(currentDraw, totalVerticalLines); i++) {
        const x = -gap + i * gap;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw horizontal lines (one at a time after vertical)
      const horizontalCount = Math.max(0, currentDraw - totalVerticalLines);
      for (let i = 0; i < horizontalCount; i++) {
        const y = -gap + i * gap;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const animate = () => {
      if (currentDraw < totalDraws) {
        currentDraw += linesPerFrame;
        drawGrid();
        requestAnimationFrame(animate);
      } else {
        // Grid is complete, start fading
        drawGrid();
        if (holdCounter < holdFrames) {
          holdCounter++;
          requestAnimationFrame(animate);
        } else if (opacity > 0) {
          opacity = Math.max(0, opacity - fadeSpeed);
          drawGrid();
          if (opacity > 0) {
            requestAnimationFrame(animate);
          } else {
            setIsComplete(true);
            onComplete();
          }
        }
      }
    };

    window.addEventListener('resize', setCanvasSize);
    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${
        isComplete ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <canvas
        id="loading-canvas"
        className="absolute inset-0"
      />
      
      {/* Logo */}
      <div className={`relative z-10 transition-all duration-500 ${
        isComplete ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}>
        <style>{`
          @keyframes breathe {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.8;
            }
          }
          
          .breathing-logo {
            animation: breathe 2.5s ease-in-out infinite;
          }
        `}</style>
        
        <div className="breathing-logo">
          <img
            src="/logo black.png"
            alt="NP Services LLC"
            className="h-32 w-auto drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
