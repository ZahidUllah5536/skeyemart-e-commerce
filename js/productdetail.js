document.addEventListener('DOMContentLoaded', function() {
  // Thumbnail click event
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.getElementById('mainImage');

  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
          mainImage.src = this.src;
      });
  });

  // Review form submission
  const reviewForm = document.getElementById('review-form');
  reviewForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // Get form values
      const name = document.getElementById('review-name').value.trim();
      const email = document.getElementById('review-email').value.trim();
      const message = document.getElementById('review-message').value.trim();
      const rating = document.querySelector('input[name="rate"]:checked')?.value;

      // Validate input
      if (!name || !email || !message || !rating) {
          alert('Please fill out all fields.');
          return;
      }

      // Create new review element
      const reviewContainer = document.getElementById('reviews-container');
      const newReview = document.createElement('div');
      newReview.classList.add('review');
      newReview.innerHTML = `
          <div class="review-rating">Rating: ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</div>
          <div class="review-name">${name}</div>
          <div class="review-message">${message}</div>
      `;

      // Append new review
      reviewContainer.appendChild(newReview);

      // Reset form
      reviewForm.reset();
  });
});
