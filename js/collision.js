function collisionPointAndField(point) {
  if (
    point.x < 0 ||
    point.x > window.worldWidth ||
    point.y < 0 ||
    point.y > window.worldHeight
  ) {
    return true;
  }
}

function innerPoint(x, y, x1, y1, x2, y2) {
  return x >= x1 && x <= x2 && y >= y1 && y <= y2;
}

function collisionPointAndRectangle(point, element) {
  const rectangle = element ?? window.rectangle;
  const rectangleX = rectangle.offsetLeft;
  const rectangleY = rectangle.offsetTop;
  const width = rectangle.clientWidth;
  const height = rectangle.clientHeight;

  const { x, y } = point;
  const x1 = rectangleX;
  const y1 = rectangleY;
  const x2 = rectangleX + width;
  const y2 = rectangleY + height;
  return innerPoint(x, y, x1, y1, x2, y2);
}

function collisionRectangles(element1, element2) {
  const left = element1.offsetLeft;
  const top = element1.offsetTop;
  const width = element1.clientWidth;
  const height = element1.clientHeight;

  const { mX, mY } = getElementTransformXY(element1);

  const x = left + mX;
  const y = top + mY;
  const points = [
    { x, y }, // top-left
    { x: x + width, y }, // top-right
    { x, y: y + height }, // bottom-left
    { x: x + width, y: y + height }, // bottom-right
  ];
  const rectangle = element2 ?? window.rectangle;
  const x1 = rectangle.offsetLeft;
  const y1 = rectangle.offsetTop;
  const x2 = x1 + rectangle.clientWidth;
  const y2 = y1 + rectangle.clientHeight;

  const detected = points.find(({ x, y }) => innerPoint(x, y, x1, y1, x2, y2));
  return detected ? true : false;
}

function collisionCircles(element1, element2) {
  const left = element1.offsetLeft;
  const top = element1.offsetTop;
  const width = element1.clientWidth;
  const height = element1.clientHeight;

  const { mX, mY } = getElementTransformXY(element1);

  const x = left + mX + width / 2;
  const y = top + mY + height / 2;
  const radius = width / 2;

  const circle = element2 ?? window.circle;
  const circleLeft = circle.offsetLeft;
  const circleTop = circle.offsetTop;
  const x1 = circleLeft + circle.clientWidth / 2;
  const y1 = circleTop + circle.clientHeight / 2;
  const radius1 = circle.clientWidth / 2;

  const distance = distanceBetweenPoint(x, y, x1, y1);
  return distance < radius + radius1;
}

function collisionPointAndLine(point, vertical, horizon) {
  const { x, y } = point;

  const circle = document.querySelector('#move-point > a');
  const radius = circle.clientWidth;

  vertical = vertical ?? window.vertical;
  const x1 = vertical.offsetLeft;
  const y1 = vertical.offsetTop;
  const x2 = x1;
  const y2 = y1 + vertical.clientHeight;

  let distance = 0;

  if (y >= y1 && y <= y2) distance = Math.abs(x - x1);
  else if (y < y1) distance = distanceBetweenPoint(x, y, x1, y1);
  else if (y > y2) distance = distanceBetweenPoint(x, y, x2, y2);

  if (distance < radius) return true;

  horizon = horizon ?? window.horizon;
  const x3 = horizon.offsetLeft;
  const y3 = horizon.offsetTop;
  const x4 = x3 + horizon.clientWidth;
  const y4 = y3;

  if (x >= x3 && x <= x4) distance = Math.abs(y - y3);
  else if (x < x3) distance = distanceBetweenPoint(x, y, x3, y3);
  else if (x > x4) distance = distanceBetweenPoint(x, y, x4, y4);

  return distance < radius;
}
