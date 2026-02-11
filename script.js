const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

/* ❌ NO 버튼 도망 */
function moveNoButton() {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

/* ✅ YES 버튼 */
yesBtn.addEventListener("click", () => {

  /* 🎵 노래 생성 & 재생 */
  const music = new Audio("노래.mp3");
  music.volume = 0.7;
  music.loop = true;
  music.play().catch(() => {});

  document.body.innerHTML = `
    <div class="container">
      <h1 class="neon">💖 내꺼하자 💖</h1>
      <div class="dog">🐶</div>
      <p class="sub">YES 눌러줘서 고마워 💗</p>
    </div>

    <div class="hearts"></div>

    <style>
      body {
        margin: 0;
        overflow: hidden;
        background: #ffe6f0;
        font-family: Arial, sans-serif;
      }

      .container {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: relative;
        z-index: 2;
      }

      .neon {
        font-size: 48px;
        color: #fff;
        text-shadow:
          0 0 6px #ff4da6,
          0 0 12px #ff4da6,
          0 0 24px #ff80bf,
          0 0 48px #ff80bf;
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
        50% { transform: rotate(0); }
        75% { transform: rotate(-8deg); }
        100% { transform: rotate(0); }
      }

      .heart {
        position: absolute;
        top: -30px;
        font-size: 24px;
        animation: fall linear forwards;
      }

      @keyframes fall {
        to {
          transform: translateY(110vh);
          opacity: 0;
        }
      }
    </style>
  `;

  /* 💖 하트 비 */
  const hearts = document.querySelector(".hearts");

  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";
    hearts.appendChild(하트);

    setTimeout(() => heart.remove(), 6000);
  }, 200);
});
