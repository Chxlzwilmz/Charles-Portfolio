// For Project Cards
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => card.style.border = "1px solid #00ffff");
  card.addEventListener('mouseleave', () => card.style.border = "1px solid #333333");
});

// For Resume Cards
document.querySelectorAll('.resume-card').forEach(card => {
  card.addEventListener('mouseenter', () => card.style.border = "1px solid #00ffff");
  card.addEventListener('mouseleave', () => card.style.border = "1px solid #333333");
});
