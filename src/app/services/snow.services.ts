import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SnowService {
  private canvas?: HTMLCanvasElement;
  private ctx?: CanvasRenderingContext2D | null;
  private flakes: { x: number; y: number; r: number; d: number }[] = [];
  private animationFrame?: number;

  start() {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'snow-canvas';
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '9999';
    document.body.appendChild(this.canvas);

    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    for (let i = 0; i < 100; i++) {
      this.flakes.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        r: Math.random() * 3 + 1,
        d: Math.random() * 1,
      });
    }

    this.animate();
  }

  private animate() {
    if (!this.ctx || !this.canvas) return;
    const ctx = this.ctx;
    const flakes = this.flakes;

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.fillStyle = 'white';
    ctx.beginPath();

    for (let i = 0; i < flakes.length; i++) {
      const f = flakes[i];
      ctx.moveTo(f.x, f.y);
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
    }

    ctx.fill();
    this.update();
    this.animationFrame = requestAnimationFrame(() => this.animate());
  }

  private update() {
    for (let i = 0; i < this.flakes.length; i++) {
      const f = this.flakes[i];
      f.y += Math.pow(f.d, 2) + 1;
      if (f.y > window.innerHeight) {
        this.flakes[i] = {
          x: Math.random() * window.innerWidth,
          y: 0,
          r: f.r,
          d: f.d,
        };
      }
    }
  }

  stop() {
    cancelAnimationFrame(this.animationFrame!);
    document.getElementById('snow-canvas')?.remove();
    this.flakes = [];
  }
}