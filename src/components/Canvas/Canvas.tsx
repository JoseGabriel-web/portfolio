import { FC, MutableRefObject, useEffect, useRef } from "react";
import { useState } from "react";

interface props {
  containerRef: MutableRefObject<any>;
}

interface particleInterface {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
  color: string | CanvasGradient | CanvasPattern;
}

const Canvas: FC<props> = ({ containerRef }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const fillColor = "#1F1D1F";
  const particles: Particle[] = [];
  let mouse = useRef({
    x: 0,
    y: 0,
    radius: (height / 80) * (width / 80),
  });

  class Particle {
    x: number;
    y: number;
    directionX: any;
    directionY: any;
    color: string | CanvasGradient | CanvasPattern;
    size: number;

    constructor({
      x,
      y,
      directionX,
      directionY,
      color,
      size,
    }: particleInterface) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.color = color;
      this.size = size;
    }

    draw() {
      if (ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    checkMouseCollision() {
      /* check for mouse collision */
      let dx = mouse.current.x - this.x;
      let dy = mouse.current.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < mouse.current.radius + this.size) {
        if (mouse.current.x < this.x && this.x < width - this.size * 1) {
          this.x += 1;
        }
        if (mouse.current.x > this.x && this.x > this.size * 1) {
          this.x -= 1;
        }
        if (mouse.current.y < this.y && this.y < height - this.size * 1) {
          this.y += 1;
        }
        if (mouse.current.y > this.y && this.y > this.size * 1) {
          this.y -= 1;
        }
      }
    }

    update() {
      /* Change x Direction if close to limits plus window size*/
      if (this.x - this.size < 0 || this.x + this.size > width) {
        this.directionX = -this.directionX;
      }
      /* Change y Direction if close to limits plus window size*/
      if (this.y - this.size < 0 || this.y + this.size > width) {
        this.directionY = -this.directionY;
      }

      /* Check mouse collision */
      this.checkMouseCollision();

      this.x += this.directionX;
      this.y += this.directionY;
      this.draw();
    }
  }

  function updateSize() {
    if (containerRef.current) {
      const size = containerRef.current.getBoundingClientRect();
      setWidth(size.width);
      setHeight(size.height);
    }
  }

  function getCanvasContext() {
    if (canvasRef.current) {
      setCtx(canvasRef.current.getContext("2d"));
    }
  }

  function animateParticles() {
    requestAnimationFrame(animateParticles);
    ctx?.clearRect(0, 0, width, height);
    if (ctx && canvasRef.current) {
      ctx.fillStyle = fillColor;
      ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
    particles.forEach((particle) => particle.update());
  }

  function randomHexColor(): string {
    let result = [];
    const hexCaracters = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(
        Math.random() * (hexCaracters.length - 0) + 0,
      );
      let caracter = hexCaracters[randomIndex];
      result.push(caracter)
    }
    
    return "#" + result.join("");
  }

  function initializeCanvas() {
    getCanvasContext();
    const particlesQuantity = (height * width) / 9000;
    for (let i = 0; i < particlesQuantity; i++) {
      let size = Math.random() * 4;
      let x = Math.random() * (width - size * 2);
      let y = Math.random() * (height - size * 2);
      let directionX = Math.random() * 0.4 - 0.2;
      let directionY = Math.random() * 0.4 - 0.2;
      let color = "#FFF";
      // let color = randomHexColor();
      particles.push(
        new Particle({
          x,
          y,
          directionX,
          directionY,
          size,
          color,
        }),
      );
    }
  }

  useEffect(() => {
    if (ctx) {
      setTimeout(() => {
        initializeCanvas();
        animateParticles();
      });
    }
  }, [ctx, width, height]);

  /* update width and height on window resize */
  useEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  /* Update canvas size on container's width or height change */
  useEffect(() => {
    if (canvasRef.current && ctx) {
      canvasRef.current.width = width;
      canvasRef.current.height = height;
      ctx.fillStyle = fillColor;
      ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  }, [canvasRef, width, height, ctx]);

  /* Initialize canvas context and update width and height */
  useEffect(() => {
    if (containerRef.current && canvasRef.current && !ctx) {
      containerRef.current.style.position = "relative";
      initializeCanvas();
      updateSize();
    }
  }, [containerRef]);

  /* Mouse Events */
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.x, y: e.y, radius: (height / 80) * (width / 80) };
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [width, height]);

  return (
    <canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: "all",
      }}
      ref={canvasRef}
    />
  );
};

export default Canvas;
