function suggestPattern(event) {
  event.preventDefault();

  const yarn = document.getElementById("yarn").value.toLowerCase();
  const hook = parseFloat(document.getElementById("hook").value);
  const resultBox = document.getElementById("patternResult");

  let suggestion = "";

  if (yarn.includes("cotton") && hook <= 3.5) {
    suggestion = "Try a delicate lace doily or summer top 🌸";
  } else if (yarn.includes("wool") && hook >= 5) {
    suggestion = "Perfect for cozy blankets or chunky scarves 🧣";
  } else if (yarn.includes("acrylic")) {
    suggestion = "Versatile choice — granny squares or phone sleeves 📱";
  } else if (yarn.includes("silk")) {
    suggestion = "Elegant shawls or lightweight wraps ✨";
  } else {
    suggestion = "Experiment with a floral granny square — works with most yarns!";
  }

  resultBox.innerHTML = `<p>✨ Suggested Pattern: ${suggestion}</p>`;
}
