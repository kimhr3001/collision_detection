window.button = {
  preventDefault: [9, 32, 69, 37, 38, 39, 40], // 브라우져 사용키 제한
  arrowCode: {
    left: [37],
    up: [38],
    right: [39],
    down: [40],
  },
  arrowStatus: {
    right: false,
    left: false,
    down: false,
    up: false,
  },
  keyDownHandler(event) {
    const { keyCode, repeat } = event;
    if (window.button.preventDefault.includes(keyCode)) {
      event.preventDefault();
    }
    const code = {
      arrow: window.button.arrowCode,
    };
    const status = {
      arrow: window.button.arrowStatus,
    };

    Object.keys(code).forEach((key1) => {
      Object.keys(code[key1]).forEach((key2) => {
        if (code[key1][key2].includes(keyCode)) {
          status[key1][key2] = key1 == 'arrow' ? true : !repeat;
        }
      });
    });
  },
  keyUpHandler(event) {
    const { keyCode } = event;
    const code = {
      arrow: window.button.arrowCode,
    };
    const status = {
      arrow: window.button.arrowStatus,
    };
    Object.keys(code).forEach((key1) => {
      Object.keys(code[key1]).forEach((key2) => {
        if (code[key1][key2].includes(keyCode)) {
          status[key1][key2] = false;
        }
      });
    });
  },
  pressToArrows() {
    return Object.keys(window.button.arrowStatus).filter(
      (arrow) => window.button.arrowStatus[arrow] == true
    );
  },

  mouseLeftClickHandler(event) {
    // console.log("mouse left click", event);
  },
  mouseRightClickHandler(event) {
    event.preventDefault();
    // console.log("mouse right click", event);
  },
}; // key-action

/** event listener */
document.addEventListener('keydown', window.button.keyDownHandler, false);
document.addEventListener('keyup', window.button.keyUpHandler, false);
document.addEventListener('click', window.button.mouseLeftClickHandler, false); // mouse left click
document.addEventListener(
  'contextmenu',
  window.button.mouseRightClickHandler,
  false
); // mouse right click
