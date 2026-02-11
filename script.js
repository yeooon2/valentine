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

/* ✅ YES 버튼 클릭 */
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="container">
      <h1 class="neon">💖 내꺼하자 💖</h1>

      <!-- 🐶 공개소스 귀여운 캐릭터 (Wikimedia) -->
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/320px-Golde33443.jpg"
        alt="cute puppy"
        class="dog"
      >

      <p class="sub">
        YES 눌러줘서 고마워 🐶💗
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

      /* ✨ 네온사인 글씨 */
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
        100% { opacity: 0.8; }
      }

      /* 🐶 좌우 흔들 */
      .dog {
        width: 220px;
        border-radius: 20px;
        animation: wiggle 1.2s infinite ease-in-out;
      }

      @keyframes wiggle {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(5deg); }
        50% { transform: rotate(0deg); }
        75% { transform: rotate(-5deg); }
        100% { transform: rotate(0deg); }
      }

      .sub {
        font-size: 20px;
        margin-top: 15px;
      }

      /* 💕 하트 날리기 */
      .heart {
        position: absolute;
        bottom: -20px;
        font-size: 20px;
        animation: floatUp 4s linear forwards;
        opacity: 0.8;
      }

      @keyframes floatUp {
        0% {
          transform: translateY(0) scale(1);
          opacity: 1;
        }
        100% {
          transform: translateY(-100vh) scale(1.5);
          opacity: 0;
        }
      }
    </style>
  `;

  /* 💗 하트 생성 */
  const heartsContainer = document.querySelector(".hearts");

  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 2 + "s";

    heartsContainer.appendChild(하트);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 300);
});
