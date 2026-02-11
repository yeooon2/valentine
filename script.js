const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const music = document.getElementById("music");

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

/* ✅ YES 버튼 클릭 */
yesBtn.addEventListener("click", () => {
  // 🎵 노래 재생 (사용자 클릭 이후라 모바일도 OK)
  if (music) {
    music.volume = 0.7;
    music.play().catch(() => {});
  }

  document.body.innerHTML = `
    <div class="container">
      <h1 class="neon">💖 내꺼하자 💖</h1>

      <div class="dog">🐶</div>

      <p class="sub">
        YES 눌러줘서 고마워 💗
      </p>
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
        animation: flicker 1.4s infinite alternate;
        margin-bottom: 20px;
      }

      @keyframes flicker {
        0% { opacity: 1; }
        100% { opacity: 0.85; }
      }

      .dog {
        font-size: 120px;
        animation: wiggle 1.2s infinite ease-in-out;
      }

      @keyframes wiggle {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(8deg); }
        50% { transform: rotate(0deg); }
        75% { transform: rotate(-8deg); }
        100% { transform: rotate(0deg); }
      }

      .sub {
        font-size: 20px;
        margin-top: 10px;
      }

      /* 💖 하트 비 */
      .heart {
        position: absolute;
        top: -30px;
        font-size: 22px;
        animation: fall linear forwards;
        opacity: 0.9;
      }

      @keyframes fall {
        0% { transform: translateY(0); }
        100% { transform: translateY(110vh); opacity: 0; }
      }
    </style>
  `;

  /* 💖 하트 비 생성 */
  const heartsContainer = document.querySelector(".hearts");

  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";

    heartsContainer.appendChild(하트);

    setTimeout(() => heart.remove(), 6000);
  }, 200);
});
