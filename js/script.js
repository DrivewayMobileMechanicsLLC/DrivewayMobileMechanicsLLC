document.addEventListener("DOMContentLoaded", () => {
  const chatModal = document.getElementById("chat-modal"),
        chatBox = document.getElementById("chat-box"),
        chatInput = document.getElementById("chat-input"),
        chatSend = document.getElementById("chat-send"),
        closeBtn = document.querySelector(".close");

  document.querySelectorAll(".chat-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      chatModal.style.display = "block";
      chatBox.innerHTML = '<p><strong>AI:</strong> How can I assist you with your vehicle today?</p>';
      chatInput.focus();
    });
  });

  closeBtn.addEventListener("click", () => chatModal.style.display = "none");
  window.addEventListener("click", e => { if (e.target === chatModal) chatModal.style.display = "none"; });

  const API_KEY = "AIzaSyBif74XTvwt7VtFUAZnahNNiXHDZhKj02s";
  const apiURL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=" + API_KEY;

  async function sendChat(message) {
    chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
    try {
      const response = await fetch(apiURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are an AI assistant for Driveway Mobile Mechanics LLC. A user asks: "${message}". Provide a helpful response related to vehicle repair or direct them to book a service.`
            }]
          }]
        })
      });
      const data = await response.json();
      if (data.candidates && data.candidates[0].content) {
        chatBox.innerHTML += `<p><strong>AI:</strong> ${data.candidates[0].content.parts[0].text}</p>`;
      } else {
        chatBox.innerHTML += "<p><strong>AI:</strong> Sorry, I couldn’t process that. Call us at (423) 302-8474.</p>";
      }
    } catch (error) {
      chatBox.innerHTML += "<p><strong>AI:</strong> Error occurred. Contact us at (423) 302-8474.</p>";
    }
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  chatSend.addEventListener("click", () => {
    const msg = chatInput.value.trim();
    if (msg) { sendChat(msg); chatInput.value = ""; }
  });

  chatInput.addEventListener("keypress", e => { if (e.key === "Enter") chatSend.click(); });
});
