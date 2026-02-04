// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawForest() → what the forest screen looks like
// 2) input handlers → how the player navigates from this screen
// 3) helper functions specific to this screen

// ------------------------------
// Main draw function for the forest screen
// ------------------------------
// drawForest() is called from main.js
// only when currentScreen === "forest"
function drawForest() {
  // Light neutral background
  background(240);

  // ---- Screen title ----
  fill(0);
  textAlign(CENTER, TOP);
  textSize(36);
  text("Chapter 2 — THE TALKING FOX", width / 2, 80);

  // ---- Instruction text ----
  textSize(18);

  // \n creates a line break in the text
  // This is useful for simple multi-line instructions
  const lines =
    "A silver fox blocks your way. \n “Not all magic should be kept,” it says. \n Its eyes shine like the night sky.";

  text(lines, width / 2, 160);

  // ---- option button ----
  // This button lets the player choose to follow the fox
  const opt5 = {
    x: width / 4, // centred horizontally
    y: 560,
    w: 220,
    h: 70,
    label: "Follow the fox",
  };

  // Draw the option button
  drawForestButton(opt5);

  // Change cursor when hovering over the button
  cursor(isHover(opt5) ? HAND : ARROW);

  // ---- Option button ----
  // This button lets the player choose to ignore the fox
  const opt6 = {
    x: (width / 4) * 3, // centred horizontally
    y: 560,
    w: 220,
    h: 70,
    label: "Ignore it and walk on",
  };

  // Draw the back button
  drawForestButton(opt6);

  // Change cursor when hovering over the button
  cursor(isHover(opt6) ? HAND : ARROW);
}

// ------------------------------
// Mouse input for the forest screen
// ------------------------------
// Called from main.js only when currentScreen === "forest"
function forestMousePressed() {
  // Button data must match the draw position
  const opt5 = {
    x: width / 4, // centred horizontally
    y: 560,
    w: 220,
    h: 70,
    label: "Follow the fox",
  };

  const opt6 = {
    x: (width / 4) * 3, // centred horizontally
    y: 560,
    w: 220,
    h: 70,
    label: "Ignore it and walk on",
  };

  // If the button is clicked, go to the star option
  if (isHover(opt5)) {
    currentScreen = "win";
  } else if (isHover(opt6)) {
    currentScreen = "lose";
  }
}

// ------------------------------
// Keyboard input for the forest screen
// ------------------------------
// Provides keyboard-only navigation
function forestKeyPressed() {
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
// Button drawing helper (forest screen)
// ------------------------------
// This function is only responsible for drawing the button.
// It is kept separate so the visual style can be changed
// without touching input or game logic.
function drawForestButton({ x, y, w, h, label }) {
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
  textSize(20);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
