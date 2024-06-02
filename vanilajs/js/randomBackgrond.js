const colors = [
"#a3043f",
"#f485d1",
"#d8f11e",
"#77787a",
"#9c8c25",
"#32e65b",
"#87967b",
"#cc1c48",
"#108d2e",
"#081d25",
"#6af424",
"#4ba672",
"#51662a",
"#c96d4e",
"#83b529",
"#8997ca",
"#a35fb4",
"#e66ba0",
"#87c442",
"#8d431f"
  ];
  
  function changeBackground() {
    const a = colors[Math.floor(Math.random() * colors.length)];
    let b = colors[Math.floor(Math.random() * colors.length)];
    while (a === b) {
      b = colors[Math.floor(Math.random() * colors.length)];
    }
    document.body.style.background = `linear-gradient(to left, ${a}, ${b})`;
  }
  
  window.onload = changeBackground;
