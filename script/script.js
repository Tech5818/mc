const slideContainer = document.querySelector(".slides ul");
let post = 0;
const slide = setInterval(() => {
  if (post === 3) post = 0;
  goSlide(post);

  post++;
}, 1000);

const goSlide = (post) => {
  slideContainer.style.marginLeft = `-${post * 100}%`;
};

const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
