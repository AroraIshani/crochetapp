function loginUser(event) {
  event.preventDefault();
  document.getElementById("login").style.display = "none";
  document.getElementById("level").style.display = "block";
}

function redirectLevel(page) {
  window.location.href = page;
}

function suggestPattern(event) {
  event.preventDefault();

  const yarn = parseInt(document.getElementById("yarn").value);
  const hook = parseFloat(document.getElementById("hook").value);
  const resultBox = document.getElementById("patternResult");

  let suggestion = "";

  if (yarn <= 2 && hook <= 3.5) {
    suggestion = "✨ Fine yarn + small hook → lace or delicate motifs.";
  } else if (yarn === 4 && hook >= 5) {
    suggestion = "🧣 Perfect for chunky scarves, blankets, or bags.";
  } else if (yarn >= 6) {
    suggestion = "🪢 Thick yarn → great for rugs or sturdy items.";
  } else {
    suggestion = "🌸 Try a granny square — works with most yarns!";
  }

  resultBox.innerHTML = `<p>AI Suggestion: ${suggestion}</p>`;
}
