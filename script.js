 const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

const yesBtn = document.getElementById("yesBtn");

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="text-align:center">
      <h1>💖 Yay!!! 💖</h1>
      <p>발렌타인데이 같이 보내줘서 고마워 💌</p>
    </div>
  `;
});
