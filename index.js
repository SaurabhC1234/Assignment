document.querySelectorAll(".faq-question").forEach((q) => {
  q.addEventListener("click", () => {
    const item = q.parentElement;
    item.classList.toggle("active");
    const icon = q.querySelector("i");
    icon.classList.toggle("fa-chevron-down");
    icon.classList.toggle("fa.chevron-up");
  });
});
