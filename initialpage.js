// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawInitPage() → what the initial page looks like
// 2) input handlers → how the player navigates from this page
// 3) helper functions specific to this screen

// ------------------------------
// Main draw function for the initial page
// ------------------------------
// drawInitPage() is called from main.js
// only when currentScreen === "initialpage"
function drawInitPage() {
  // Light neutral background
  background(240);

  // ---- Screen title ----
  fill(0);
  textAlign(CENTER, TOP);
  textSize(36);
  text("Chapter 1 — THE FALLEN STAR", width / 2, 80);

  // ---- Instruction text ----
  textSize(18);

  // \n creates a line break in the text
  // This is useful for simple multi-line instructions
  const lines =
    "The star glows softly in the grass. \n It hums when you step closer. \n The forest waits in silence.";

  text(lines, width / 2, 160);

  // ---- Back button ----
  // This button lets the player return to the start screen
  const opt1 = {
    x: width / 4, // centred horizontally
    y: 560,
    w: 220,
    h: 70,
    label: "Star",
  };

  // Draw the back button
  drawPageButton(opt1);

  // Change cursor when hovering over the button
  cursor(isHover(opt1) ? HAND : ARROW);

  // ---- Back button ----
  // This button lets the player return to the start screen
  const opt2 = {
    x: (width / 4) * 3, // centred horizontally
    y: 560,
    w: 220,
    h: 70,
    label: "Forest path",
  };

  // Draw the back button
  drawPageButton(opt2);

  // Change cursor when hovering over the button
  cursor(isHover(opt2) ? HAND : ARROW);
}

// ------------------------------
// Mouse input for the initial page
// ------------------------------
// Called from main.js only when currentScreen === "initialpage"
function initPageMousePressed() {
  // Button data must match the draw position
  const opt1 = {
    x: width / 4, // centred horizontally
    y: 560,
    w: 220,
    h: 70,
    label: "Star",
  };

  const opt2 = {
    x: (width / 4) * 3, // centred horizontally
    y: 560,
    w: 220,
    h: 70,
    label: "Forest path",
  };

  // If the button is clicked, go to the star option
  if (isHover(opt1)) {
    currentScreen = "star";
  } else if (isHover(opt2)) {
    currentScreen = "forest";
  }
}

// ------------------------------
// Keyboard input for the initial page
// ------------------------------
// Provides keyboard-only navigation
function initPageKeyPressed() {
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
// Button drawing helper (initial page)
// ------------------------------
// This function is only responsible for drawing the button.
// It is kept separate so the visual style can be changed
// without touching input or game logic.
function drawPageButton({ x, y, w, h, label }) {
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
