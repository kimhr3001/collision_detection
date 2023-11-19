function moveElementById(id, type) {
  const element = document.getElementById(id);
  const arrows = window.button.pressToArrows();

  let x = 0;
  let y = 0;
  arrows.forEach((arrow) => {
    switch (arrow) {
      case 'right':
        x += 10;
        break;
      case 'left':
        x -= 10;
        break;
      case 'down':
        y += 10;
        break;
      case 'up':
        y -= 10;
        break;
    }
  });

  const { mX, mY } = getElementTransformXY(element);

  const moveX = mX + x;
  const moveY = mY + y;

  const elementX = element.offsetLeft + moveX;
  const elementY = element.offsetTop + moveY;
  const point = { x: elementX, y: elementY };

  const collisionField = collisionPointAndField(point);
  if (collisionField) return;

  element.style.transform = `translate(${moveX}px, ${moveY}px)`;

  let isCollision = false;
  switch (type) {
    case 'point-rectangle':
      isCollision = collisionPointAndRectangle(point);
      break;
    case 'rectangle-rectangle':
      isCollision = collisionRectangles(element);
      break;
    case 'circle-circle':
      isCollision = collisionCircles(element);
      break;
    case 'point-line':
      isCollision = collisionPointAndLine(point);
      break;
  }
  if (isCollision) {
    element.classList.add('collision');
  } else {
    element.classList.remove('collision');
  }
}
