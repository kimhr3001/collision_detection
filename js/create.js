function createNav() {
  const nav = document.querySelector('nav');
  const ul = document.createElement('ul');

  const location = [
    { name: '처음으로', href: 'index.html' },
    { name: '점과 면', href: 'index.html?type=point-rectangle' },
    { name: '면과 면', href: 'index.html?type=rectangle-rectangle' },
    { name: '원과 원', href: 'index.html?type=circle-circle' },
    { name: '점과 선', href: 'index.html?type=point-line' },
    { name: '', href: '' },
    {
      name: '참조',
      href: 'https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection',
      target: '_blank',
    },
  ];
  location.forEach((item) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href', item.href);
    a.setAttribute('class', 'button');
    if (item.target) {
      a.setAttribute('target', item.target);
    }

    a.textContent = item.name;
    li.append(a);
    ul.append(li);
  });

  nav.append(ul);
}

function createField() {
  const container = document.querySelector('section');
  const field = document.createElement('div');
  field.setAttribute('id', 'field');
  field.setAttribute('class', 'field');
  container.append(field);

  window.field = field;
  window.worldWidth = field.clientWidth;
  window.worldHeight = field.clientHeight;
}
function createMoveElement(type) {
  const field = document.querySelector('.field');

  let element;
  switch (type) {
    case 'point':
      element = document.createElement('div');
      element.setAttribute('id', 'move-point');
      element.setAttribute('class', 'move-point');

      const border = document.createElement('a');
      element.append(border);
      break;
    case 'rectangle':
      element = document.createElement('div');
      element.setAttribute('id', 'move-rectangle');
      element.setAttribute('class', 'move-rectangle');
      break;
    case 'circle':
      element = document.createElement('div');
      element.setAttribute('id', 'move-circle');
      element.setAttribute('class', 'move-circle');
      break;
  }
  field.append(element);
}
function createRectangle() {
  const field = document.querySelector('.field');
  const rectangle = document.createElement('div');
  rectangle.setAttribute('id', 'rectangle');
  rectangle.setAttribute('class', 'rectangle');
  field.append(rectangle);

  window.rectangle = rectangle;
}
function createCircle() {
  const field = document.querySelector('.field');
  const circle = document.createElement('div');
  circle.setAttribute('id', 'circle');
  circle.setAttribute('class', 'circle');
  field.append(circle);

  window.circle = circle;
}
function createLine() {
  const field = document.querySelector('.field');
  const vertical = document.createElement('div');
  vertical.setAttribute('id', 'line');
  vertical.setAttribute('class', 'line');
  field.append(vertical);

  const horizon = document.createElement('div');
  horizon.setAttribute('id', 'line-horizon');
  horizon.setAttribute('class', 'line-horizon');
  field.append(horizon);

  window.vertical = vertical;
  window.horizon = horizon;
}
