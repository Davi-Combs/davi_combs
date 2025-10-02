const form = document.getElementById("chat-form");
const input = document.getElementById("userInput");
const chat = document.getElementById("chat");

function appendMessage(sender, text) {
  const div = document.createElement("div");
  div.textContent = `${sender}: ${text}`;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const message = input.value.trim();
  if (!message) return;

  appendMessage("YOU", message);
  input.value = "";

  const res = await fetch("davicombs-production.up.railway.app/api/server", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  const data = await res.json();
  appendMessage("ALPACA", data.reply);
});
