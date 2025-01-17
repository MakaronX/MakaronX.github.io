const reviewsContainer = document.querySelector('.reviews__list');
const leftArrow = document.querySelector('.reviews__arrow__left');
const rightArrow = document.querySelector('.reviews__arrow__right');
let currentIndex = 0, visibleReviews = 1;

const updateArrows = () => {
  const reviewCount = reviewsContainer.children.length;
  leftArrow.style.display = currentIndex ? 'block' : 'none';
  rightArrow.style.display = currentIndex < reviewCount - visibleReviews ? 'block' : 'none';
};

const scrollToReview = (index) => {
  const reviewWidth = reviewsContainer.children[0].offsetWidth + 20;
  reviewsContainer.style.transform = `translateX(-${index * reviewWidth}px)`;
  currentIndex = index;
  updateArrows();
};

const updateVisibleReviews = () => {
  const reviewWidth = reviewsContainer.children[0].offsetWidth + 20;
  visibleReviews = Math.max(1, Math.floor(reviewsContainer.parentElement.offsetWidth / reviewWidth));
  currentIndex = Math.min(currentIndex, reviewsContainer.children.length - visibleReviews);
  scrollToReview(currentIndex);
};

const handleSwipe = (startX, endX) => {
  if (Math.abs(endX - startX) > 50) scrollToReview(currentIndex + (endX - startX > 0 ? -1 : 1));
};

rightArrow.addEventListener('click', () => scrollToReview(currentIndex + 1));
leftArrow.addEventListener('click', () => scrollToReview(currentIndex - 1));
reviewsContainer.addEventListener('touchstart', (e) => startX = e.touches[0].clientX);
reviewsContainer.addEventListener('touchend', (e) => handleSwipe(startX, e.changedTouches[0].clientX));
window.addEventListener('resize', updateVisibleReviews);

document.addEventListener('DOMContentLoaded', () => {
  updateVisibleReviews();
  updateArrows();
  document.querySelectorAll('.reviews__rating').forEach(rating => {
    const ratingValue = parseInt(rating.dataset.rating);
    rating.innerHTML = Array.from({ length: ratingValue }, () => `<img src="img/main/reviews/paw.svg" alt="paw">`).join('');
  });
});
