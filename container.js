/* document.addEventListener("DOMContentLoaded", () => {
    const placed = [];

    function overlaps(x, y, w, h) {
      return placed.some(p =>
        !(x + w < p.x || p.x + p.w < x || y + h < p.y || p.y + p.h < y)
      );
    }

    document.querySelectorAll('.container').forEach(div => {
      const width = Math.floor(Math.random() * 200) + 100;
      const height = Math.floor(Math.random() * 200) + 100;

      let tries = 0, x, y;
      do {
        x = Math.floor(Math.random() * (window.innerWidth - width));
        y = Math.floor(Math.random() * (window.innerHeight - height));
        tries++;
      } while (overlaps(x, y, width, height) && tries < 50);

      div.style.width = width + "px";
      div.style.height = height + "px";
      div.style.left = x + "px";
      div.style.top = y + "px";

      placed.push({ x, y, w: width, h: height });
    });
  });  */
