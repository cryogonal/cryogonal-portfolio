import { useEffect } from "react";

function PixelCity() {
  useEffect(() => {
    const canvas = document.getElementById("cityCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Seeded RNG for building placement
    let seed = 321;
    function rng() {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    }

    // Stars
    const stars = Array.from({ length: 200 }, () => ({
      x: rng() * canvas.width,
      y: rng() * canvas.height,
    }));

    // Generate buildings
    function generateBuildings(minW, maxW, minH, maxH, spacing, withWindows = false) {
      const buildings = [];
      let x = 0;
      while (x < canvas.width) {
        const w = minW + rng() * (maxW - minW);
        const h = minH + rng() * (maxH - minH);
        const y = canvas.height - h;

        const windows = [];
        if (withWindows) {
          const numWindows = Math.floor(10 + rng() * 30); // 10–40 windows per building
          for (let i = 0; i < numWindows; i++) {
            const wx = x + 5 + rng() * (w - 10);
            const wy = y + 5 + rng() * (h - 10);
            windows.push({
              x: wx,
              y: wy,
              color: rng() > 0.5 ? "#0ff" : "#f0f",
            });
          }
        }

        buildings.push({ x, y, w, h, windows });
        x += w + rng() * spacing;
      }
      return buildings;
    }

    // Layers for depth
    const farBuildings = generateBuildings(20, 50, 100, 200, 15, false); // silhouettes
    const midBuildings = generateBuildings(40, 100, 200, 400, 20, false); // silhouettes
    const foreBuildings = generateBuildings(80, 180, 300, 600, 25, true); // neon windows


    // Draw buildings
    function drawBuildings(buildings, color, outline, drawWindows = false) {
      buildings.forEach((b) => {
        // gradient for depth
        const gradient = ctx.createLinearGradient(b.x, b.y, b.x, canvas.height);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, "#111");
        ctx.fillStyle = gradient;
        ctx.fillRect(b.x, b.y, b.w, b.h);

        // neon outline
        ctx.strokeStyle = outline;
        ctx.lineWidth = 0.8;
        ctx.strokeRect(b.x, b.y, b.w, b.h);

        if (drawWindows && b.windows.length > 0) {
          ctx.globalCompositeOperation = "lighter"; // bloom effect
          ctx.shadowBlur = 8; // apply glow once
          b.windows.forEach((win) => {
            ctx.fillStyle = win.color;
            ctx.shadowColor = win.color;
            ctx.fillRect(win.x, win.y, 3, 6);
          });
          ctx.shadowBlur = 0; // reset
          ctx.globalCompositeOperation = "source-over";
        }
      });
    }

    // Fog overlay
    function drawFog() {
      const fog = ctx.createLinearGradient(
        0,
        canvas.height * 0.5,
        0,
        canvas.height
      );
      fog.addColorStop(0, "rgba(0,0,0,0)");
      fog.addColorStop(1, "rgba(0,0,0,0.6)");
      ctx.fillStyle = fog;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Main draw
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // stars
      stars.forEach((s) => {
        ctx.fillStyle = "white";
        ctx.fillRect(s.x, s.y, 1, 1);
      });

      drawBuildings(farBuildings, "rgba(50,0,80,0.5)", "rgba(255,0,255,0.2)", false);
      drawBuildings(midBuildings, "rgba(30,0,60,0.7)", "rgba(255,0,255,0.4)", false);
      drawBuildings(foreBuildings, "rgba(21,0,48,1)", "#f0f", true);

      drawFog();
    }

    draw();
  }, []);

  return <canvas id="cityCanvas" className="city-canvas"></canvas>;
}

export default PixelCity;