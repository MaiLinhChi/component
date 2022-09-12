
const gallery = document.querySelector(".gallery");
const imgs = document.querySelectorAll(".image");
const closeBtn = document.querySelector(".icon-close");
const prevBtn = document.querySelector(".icon-left");
const nextBtn = document.querySelector(".icon-right");
const prevImg = document.querySelector(".gallery-img");
const prev = document.querySelector(".prev-icon");
const next = document.querySelector(".next-icon");

let currentIndex = 0;
function toggleShow() {
    if(currentIndex === 0) {
        prev.classList.add("hide")
    } else {
        prev.classList.remove("hide")
    }

    if(currentIndex === imgs.length) {
        next.classList.add("hide")
    } else {
        next.classList.remove("hide")
    }
    prevImg.src = imgs[currentIndex].src;
    gallery.classList.add("show");
}

imgs.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        toggleShow();
    })
})
closeBtn.addEventListener("click", () => {
    gallery.classList.remove("show");
})

prevBtn.addEventListener("click", () => {
    if(currentIndex > 0) {
        currentIndex--;
        console.log(currentIndex)
        toggleShow();
    }
})
nextBtn.addEventListener("click", () => {
    if(currentIndex < imgs.length) {
        currentIndex++;
        toggleShow();
    }
})