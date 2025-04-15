const box = document.getElementById("box");
    const container = document.querySelector(".box-container");

    const boxSize = 50;
    const speed = 10;
    let position = { top: 0, left: 0 };
    let keys = {
      ArrowUp: false,
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false
    };

    const updatePosition = () => {
      const containerRect = container.getBoundingClientRect();

      if (keys.ArrowUp && position.top - speed >= 0)
        position.top -= speed;
      if (keys.ArrowDown && position.top + speed + boxSize <= containerRect.height)
        position.top += speed;
      if (keys.ArrowLeft && position.left - speed >= 0)
        position.left -= speed;
      if (keys.ArrowRight && position.left + speed + boxSize <= containerRect.width)
        position.left += speed;

      box.style.top = position.top + "px";
      box.style.left = position.left + "px";

      requestAnimationFrame(updatePosition);
    };

    document.addEventListener("keydown", (e) => {
      if (keys.hasOwnProperty(e.key)) {
        keys[e.key] = true;
      }
    });

    document.addEventListener("keyup", (e) => {
      if (keys.hasOwnProperty(e.key)) {
        keys[e.key] = false;
      }
    });

    updatePosition();