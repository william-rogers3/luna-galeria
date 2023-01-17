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

    galleryImage.src=`../images/lanscapes/landscape_${currentImage}.JPG`;
    currentImage += x;
}

let currentImage = 0;