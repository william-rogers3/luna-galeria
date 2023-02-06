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
    const galleryImage = document.getElementsByClassName('gallery-image-holder');

    for (let i = 0; i < galleryImage.length; i++) {
        galleryImage[i].classList.remove('active');
    }

    currentImage += x;

    if (currentImage < 0) {
        currentImage = 5;
    }
    else if (currentImage > 5) {
        currentImage = 0;
    }
    galleryImage[currentImage].classList.add('active');
}

let currentImage = 0;

const linkContainer = document.querySelector('.links-container');
linkContainer.style.transition = "opacity .4s, translate .75s";
nextImage(0);