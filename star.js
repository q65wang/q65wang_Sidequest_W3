// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawStar() → what the star screen looks like
// 2) input handlers → how the player navigates from this screen
// 3) helper functions specific to this screen

// ------------------------------
// Main draw function for the star screen
// ------------------------------
// drawStar() is called from main.js
// only when currentScreen === "star"
function drawStar() {
  // Light neutral background
  background(240);

  // ---- Screen title ----
  fill(0);
  textAlign(CENTER, TOP);
  textSize(36);
  text("Chapter 2 — THE STAR'S VOICE", width / 2, 80);

  // ---- Instruction text ----
  textSize(18);

  // \n creates a line break in the text
  // This is useful for simple multi-line instructions
  const lines =
    "The star warms your hands. \n You see flashes of power and wonder. \n It feels like it wants something from you.";

  text(lines, width / 2, 160);

  // ---- Option button ----
  // This button lets the player choose to protect the star
  const opt3 = {
    x: width / 4, // centred horizontally
    y: 560,
    w: 220,
    h: 70,
    label: "Protect it",
  };

  // Draw the option button
  drawStarButton(opt3);

  // Change cursor when hovering over the button
  cursor(isHover(opt3) ? HAND : ARROW);

  // ---- option button ----
  // This button lets the player choose to ask for a wish
  const opt4 = {
    x: (width / 4) * 3, // centred horizontally
    y: 560,
    w: 220,
    h: 70,
    label: "Ask for a wish",
  };

  // Draw the option button
  drawStarButton(opt4);

  // Change cursor when hovering over the button
  cursor(isHover(opt4) ? HAND : ARROW);
}

// ------------------------------
// Mouse input for the star screen
// ------------------------------
// Called from main.js only when currentScreen === "star"
function starMousePressed() {
  // Button data must match the draw position
  const opt3 = {
    x: width / 4, // centred horizontally
    y: 560,
    w: 220,
    h: 70,
    label: "Protect it",
  };

  const opt4 = {
    x: (width / 4) * 3, // centred horizontally
    y: 560,
    w: 220,
    h: 70,
    label: "Ask for a wish",
  };

  // If the button is clicked, go to the star option
  if (isHover(opt3)) {
    currentScreen = "win";
  } else if (isHover(opt4)) {
    currentScreen = "lose";
  }
}

// ------------------------------
// Keyboard input for the star screen
// ------------------------------
// Provides keyboard-only navigation
function starKeyPressed() {
  // ESC is a common “go back” key in games and apps
  if (keyCode === ESCAPE) {
    currentScreen = "start";
  }

  // B key is an additional, explicit shortcut for “back”
  if (key === "b" || key === "B") {
    currentScreen = "start";
  }
}

// ------------------------------
// Button drawing helper (star screen)
// ------------------------------
// This function is only responsible for drawing the button.
// It is kept separate so the visual style can be changed
// without touching input or game logic.
function drawStarButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check whether the mouse is hovering over the button
  const hover = isHover({ x, y, w, h });

  noStroke();

  // Subtle colour change on hover for visual feedback
  fill(hover ? color(200, 200, 255, 200) : color(220, 220, 255, 170));

  // Draw the button shape
  rect(x, y, w, h, 12);

  // Draw the button text
  fill(0);
  textSize(26);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
