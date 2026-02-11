alert("🔥 새 스크립트 로드됨");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

function moveNoButton() {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {
  /* 🎵 음악 */
  const music = new Audio("love.mp3");
  music.volume = 0.7;
  music.loop = true;
  music.play().catch(() => {});

  /* 화면 내용 교체 */
  document.body.innerHTML = `
    <div class="container">
      <h1 class="neon">💖 내꺼하자 💖</h1>
      <div class="dog">🐶</div>
      <p>YES 눌러줘서 고마워 💗</p>
    </div>
  `;

  /* 스타일 추가 */
  const style = document.createElement("style");
  style.innerHTML = `
    body {
      margin: 0;
      overflow: hidden;
      background: #ffe6f0;
      font-family: Arial;
    }
    .container {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .neon {
      font-size: 48px;
      color: white;
      text-shadow: 0 0 8px #ff4da6, 0 0 16px #ff80bf;
      animation: flicker 1.5s infinite alternate;
    }
    @keyframes flicker {
      from { opacity: 1; }
      to { opacity: 0.85; }
    }
    .dog {
      font-size: 120px;
      animation: wiggle 1.2s infinite;
    }
    @keyframes wiggle {
      0% { transform: rotate(0); }
      25% { transform: rotate(8deg); }
      75% { transform: rotate(-8deg); }
      100% { transform: rotate(0); }
    }
    .heart {
      position: fixed;
      top: -20px;
      font-size: 24px;
      animation: fall linear forwards;
    }
    @keyframes fall {
      to {
        transform: translateY(110vh);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  /* 💖 하트 비 */
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";
    document.body.appendChild(하트);

    setTimeout(() => heart.remove(), 6000);
  }, 200);
});
