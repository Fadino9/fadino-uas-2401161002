const form = document.getElementById("chatForm");
const input = document.getElementById("chatInput");
const messages = document.getElementById("chatMessages");

const publicUsers = ["Rafi Rizky", "ImamMakruf", "Fadino"];
const userColors = ["#1abc9c", "#3498db", "#9b59b6"]; // 3 warna untuk publik

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    // Pesan dari kita (kanan)
    const userMsg = document.createElement("div");
    userMsg.classList.add("message", "me");
    userMsg.textContent = `🙋‍♂️ Saya: ${text}`;
    messages.appendChild(userMsg);

    // Simulasi pesan publik dari user lain
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * publicUsers.length);
      const name = publicUsers[randomIndex];
      const color = userColors[randomIndex];

      const publicMsg = document.createElement("div");
      publicMsg.classList.add("message", "public");
      publicMsg.style.backgroundColor = color;
      publicMsg.textContent = `👤 ${name}: ${text}`;
      messages.appendChild(publicMsg);

      messages.scrollTop = messages.scrollHeight;
    }, 1000);

    messages.scrollTop = messages.scrollHeight;
    input.value = "";
  }
});
