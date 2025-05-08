export function modal() {
  const modal = document.getElementById("modal");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const form = document.getElementById("petForm");
  
  const token = "8142977627:AAHkr-mT-a-LKd4r4EupdplQxwHEq-6MKbg";
  const chatIds = ["2023364997", "403277084"];
  const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;
  
  function openModal() {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
  
  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "";
    form.reset();
  }
  
  closeModalBtn.addEventListener("click", closeModal);
  
  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const formData = new FormData(form);
    const message = `
  <b>Nieuw verzoek 🐾</b>
  
  👤 Naam: ${formData.get("name")}
  🐶 Huisdier: ${formData.get("petName")}
  📅 Leeftijd: ${formData.get("petAge")}
  ⚧ Geslacht: ${formData.get("gender")}
  📞 Telefoon: ${formData.get("phone")}
  🛠 Dienst: ${formData.get("service")}
  📆 Start: ${formData.get("startDate")}
  📆 Einde: ${formData.get("endDate")}
  📝 Opmerking: ${formData.get("comment") || "Geen"}
  `.trim();
  

    for (const chatId of chatIds) {
      try {
        await fetch(telegramUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "HTML",
          }),
        });
      } catch (error) {
        console.error("Telegram Error:", error);
      }
    }
  
    alert("Verzonden!");
    closeModal();
  });
}
