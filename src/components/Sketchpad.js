import React from 'react';



function Sketchpad() {
  // create canvas element and append it to document body
  var canvas = document.createElement('canvas');
  window.onload = function() { 
    var sketchpad = document.getElementById('Sketchpad')
    sketchpad.append(canvas);

  // some hotfixes... ( ≖_≖)
  document.body.style.margin = 0;
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.right = '0';
  canvas.style.bottom = '0';
  canvas.style.left = '0';

  // get canvas 2D context and set him correct size
  var ctx = canvas.getContext('2d');
  resize();

  // last known position
  var pos = { x: 0, y: 0 };

  sketchpad.addEventListener('mousemove', draw);
  sketchpad.addEventListener('mousedown', setPosition);
  sketchpad.addEventListener('mouseenter', setPosition);

  // new position from mouse event
  function setPosition(e) {
    pos.x = e.clientX;
    pos.y = e.clientY;
  }

  // resize canvas
  function resize() {
    ctx.canvas.width = sketchpad.offsetWidth;
    ctx.canvas.height = sketchpad.offsetHeight;
  }

  function draw(e) {
    // mouse left button must be pressed
    if (e.buttons !== 1) return;

    ctx.beginPath(); // begin

    ctx.lineWidth = 1;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#ffffff';

    ctx.moveTo(pos.x, pos.y); // from
    setPosition(e);
    ctx.lineTo(pos.x, pos.y); // to

    ctx.stroke(); // draw it!
  }
  }

  return (
    <div id="Sketchpad" className="Sketchpad">
    </div>
  );
}
export default Sketchpad;

