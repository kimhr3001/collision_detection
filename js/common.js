function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getElementTransformXY(element) {
  const style = window.getComputedStyle(element);
  const matrix = new DOMMatrixReadOnly(style.transform);
  const { m41: mX, m42: mY } = matrix;
  return { mX, mY };
}

function distanceBetweenPoint(x1, y1, x2, y2) {
  return Math.sqrt(
    Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2)
  );
}

function initElement(type) {
  switch (type) {
    case 'point-rectangle':
      createMoveElement('point');
      createRectangle();
      setInterval(() => {
        moveElementById('move-point', 'point-rectangle');
      }, 50);
      break;
    case 'rectangle-rectangle':
      createMoveElement('rectangle');
      createRectangle();
      setInterval(() => {
        moveElementById('move-rectangle', 'rectangle-rectangle');
      }, 50);
      break;
    case 'circle-circle':
      createMoveElement('circle');
      createCircle();
      setInterval(() => {
        moveElementById('move-circle', 'circle-circle');
      }, 50);
      break;
    case 'point-line':
      createMoveElement('point');
      createLine();
      setInterval(() => {
        moveElementById('move-point', 'point-line');
      }, 50);
      break;
  }
}
