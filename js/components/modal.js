export function modal() {
  document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openModalBtn");
    const closeBtn = document.getElementById("closeModalBtn");
    const modal = document.getElementById("modal");

    openBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });

    document.getElementById("petForm").addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Nice!");
      modal.style.display = "none";
      this.reset();
    });
  });

  document.getElementById("petForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    const message = `
  🐾 Новая заявка!
  
  👤 Имя: ${formData.get("name")}
  🐶 Кличка: ${formData.get("pet")}
  📅 Возраст: ${formData.get("age")}
  🚻 Пол: ${formData.get("gender")}
  📞 Телефон: ${formData.get("phone")}
  🛠 Услуга: ${formData.get("service")}
  📆 С: ${formData.get("start")}
  📆 По: ${formData.get("end")}
  📝 Комментарий: ${formData.get("comment") || "—"}
  `;

    const token = "8142977627:AAHkr-mT-a-LKd4r4EupdplQxwHEq-6MKbg";
    const chatId = "2023364997";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      }),
    })
      .then((res) => {
        if (res.ok) {
          alert("Done");
          this.reset();
          document.getElementById("modal").classList.remove("modal--active");
          document.body.style.overflow = "";
        } else {
          alert("Error");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error.");
      });
  });
}
