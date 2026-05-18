const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.home__data, .home__image').forEach(el => {
  observer.observe(el);
});


// 🔥 IMAGE SLIDER
let images = [
  "humble.webp",
  "hoodie.png",
  "hoodie1.webp",
  "hoodie2.avif",
  "tshirt.webp"
];

let index = 0;
let offerImg = document.getElementById("offer-img");

setInterval(() => {
  index++;
  if(index >= images.length) index = 0;

  offerImg.style.opacity = 0;

  setTimeout(() => {
    offerImg.src = images[index];
    offerImg.style.opacity = 1;
  }, 300);

}, 5000);