const form = document.getElementById("chatForm");
const input = document.getElementById("chatInput");
const messages = document.getElementById("chatMessages");
const menuToggle = document.getElementById("menuToggle");
const menuItems = document.getElementById("menuItems");

const publicUsers = ["Rafi Rizky", "ImamMakruf", "Fadino"];
const userColors = ["#1abc9c", "#3498db", "#9b59b6"];

// Chat Submit Handler
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    // User message
    const userMsg = document.createElement("div");
    userMsg.classList.add("message", "me");
    userMsg.textContent = `🙋‍♂️ Saya: ${text}`;
    messages.appendChild(userMsg);

    // Simulate public message
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * publicUsers.length);
      const name = publicUsers[randomIndex];

      const publicMsg = document.createElement("div");
      publicMsg.classList.add("message", "public");
      publicMsg.style.backgroundColor = color;
      messages.appendChild(publicMsg);
      messages.scrollTop = messages.scrollHeight;
    }, 1000);

    messages.scrollTop = messages.scrollHeight;
    input.value = "";
  }
});

// Mobile Menu Toggle
menuToggle.addEventListener("click", () => {
  menuItems.classList.toggle("active");
});
