function toggleMenu() {
    console.log('hi');
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