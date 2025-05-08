const reviewsContainer = document.querySelector(".reviews__list");
const leftArrow = document.querySelector(".reviews__arrow__left");
const rightArrow = document.querySelector(".reviews__arrow__right");
let currentIndex = 0,
  visibleReviews = 1;

const updateArrows = () => {
  const reviewCount = reviewsContainer.children.length;
  leftArrow.style.display = currentIndex ? "block" : "none";
  rightArrow.style.display =
    currentIndex < reviewCount - visibleReviews ? "block" : "none";
};

const scrollToReview = (index) => {
  const reviewWidth = reviewsContainer.children[0].offsetWidth + 20;
  reviewsContainer.style.transform = `translateX(-${index * reviewWidth}px)`;
  currentIndex = index;
  updateArrows();
};

const updateVisibleReviews = () => {
  const reviewWidth = reviewsContainer.children[0].offsetWidth + 20;
  visibleReviews = Math.max(
    1,
    Math.floor(reviewsContainer.parentElement.offsetWidth / reviewWidth)
  );
  currentIndex = Math.min(
    currentIndex,
    reviewsContainer.children.length - visibleReviews
  );
  scrollToReview(currentIndex);
};

const handleSwipe = (startX, endX) => {
  if (Math.abs(endX - startX) > 50)
    scrollToReview(currentIndex + (endX - startX > 0 ? -1 : 1));
};

rightArrow.addEventListener("click", () => scrollToReview(currentIndex + 1));
leftArrow.addEventListener("click", () => scrollToReview(currentIndex - 1));
reviewsContainer.addEventListener(
  "touchstart",
  (e) => (startX = e.touches[0].clientX)
);
reviewsContainer.addEventListener("touchend", (e) =>
  handleSwipe(startX, e.changedTouches[0].clientX)
);
window.addEventListener("resize", updateVisibleReviews);

document.addEventListener("DOMContentLoaded", () => {
  updateVisibleReviews();
  updateArrows();
  document.querySelectorAll(".reviews__rating").forEach((rating) => {
    const ratingValue = parseInt(rating.dataset.rating);
    rating.innerHTML = Array.from(
      { length: ratingValue },
      () => `<img src="img/main/reviews/paw.svg" alt="paw">`
    ).join("");
  });
});

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
