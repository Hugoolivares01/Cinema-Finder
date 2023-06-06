const modal = (event) => {
    event.preventDefault();

    // Get the modalID
    let modalId = document.getElementById('ModalId')

    // Work backwords from current target up to get the parent div
    let firstNode = event.currentTarget.parentNode.parentNode.parentNode

    // Work down from the parent div to get the p tag with the movie id
    modalId.innerHTML = firstNode.children[0].children[2].innerHTML
    console.log(modalId.innerHTML)

    document.getElementById('myModal').style.display = 'flex';
    const modalImage = document.getElementById("modalImage");
    const imageUrl = event.currentTarget.querySelector('img').src;
    modalImage.src = imageUrl;

    let reviewname = document.getElementById("movieName");
    const Initialmovie = firstNode.querySelector('.review1').textContent;
    const movieArray = Initialmovie.split(',');
    const title = movieArray[1].trim();
    reviewname.textContent = title;
    console.log(reviewname.textContent);



};
document.querySelector('.close-btn').addEventListener('click', function () {
    document.getElementById('myModal').style.display = 'none';
});

const moviepictures = document.querySelectorAll('#modaldisplay');
moviepictures.forEach((picture) => {
    picture.addEventListener('click', modal);
});

