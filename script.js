const images = ["images/latte1.jpeg","images/latte2.jpeg","images/latte3.jpeg"];
let currentIndex = 0;

const galleryImages = documentGetElementById("galleryImg");
const nextBtn = documentGetElementById("nextBtn");
const prevBtn = documentGetElementById("nextBtn")

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    galleryImg.src = images[currentIndex];
});

nextBtn.addEventListener("click", () => {
currentIndex = (currentIdnex + 1 +images.length) %images.length;
galleryImg.src = images[currentIndex];
});