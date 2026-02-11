document.getElementById("yesBtn").addEventListener("click", () => {
  alert("YES 클릭됨"); // ← 이거 뜨지?
  const audio = new Audio("love.mp3");
  audio.play().then(() => {
    alert("노래 재생됨");
  }).catch((e) => {
    alert("노래 실패: " + e);
  });
});
