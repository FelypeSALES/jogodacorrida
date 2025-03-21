function setup() {
    createCanvas(500, 500);
  }
  
  let xJogador1 = 0;
  let xJogador2 = 0;
  
  function draw() {
    if (focused == true) {
      background("#008080");
    } else {
      background("rgb(194,91,91)");
    }
  
    textSize(40);
    text("🤵🏻", xJogador1, 150);
    text("🥷🏻", xJogador2, 400);
    rect(400, 0, 10, 4050);
    if (xJogador1 > 350) {
      text("Terno venceu!", 50, 200);
      noLoop();
    }
    if (xJogador2 > 350) {
      text("Ninja venceu!", 50, 200);
      noLoop();
    }
  }
  
  function keyReleased() {
    if (key == "a") {
      xJogador1 += random(20);
    }
    if (key == "d") {
      xJogador2 += random(20);
    }
  }
  