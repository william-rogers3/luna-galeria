function toggleMenu() {
    const bars = document.getElementsByClassName("bar");
    const container = document.querySelector('.content-container');
    const linkContainer = document.querySelector('.links-container');

    for (let i = 0; i < bars.length; i++) {
        bars[i].classList.toggle("active");
    }

    container.classList.toggle('active');
    document.body.classList.toggle('active');
    linkContainer.classList.toggle('active');
};

function nextImage(x) {
    const galleryImage = document.querySelector(".gallery-image");

    currentImage += x;

    if (currentImage < 1) {
        currentImage = 12;
    }
    else if (currentImage > 12) {
        currentImage = 1;
    }


    galleryImage.src=`./images/portraits/portrait_${currentImage}.jpg`;
}

let currentImage = 1;

const linkContainer = document.querySelector('.links-container');
linkContainer.style.transition = "opacity .4s, translate .75s";