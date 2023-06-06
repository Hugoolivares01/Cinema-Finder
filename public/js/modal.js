const modal = (event) => {
    event.preventDefault();

    // Get the modalID
    let modalId = document.getElementById('ModalId')

    // Work backwords from current target up to get the parent div
    let testNode = event.currentTarget.parentNode.parentNode.parentNode

    // Work down from the parent div to get the p tag with the movie id
    modalId.innerHTML = testNode.children[1].innerHTML
    console.log(testNode.children[1].innerHTML)


    document.getElementById('myModal').style.display = 'flex';
    const modalImage = document.getElementById("modalImage");
    const imageUrl = event.currentTarget.querySelector('img').src;
    modalImage.src = imageUrl;


};
document.querySelector('.close-btn').addEventListener('click', function () {
    document.getElementById('myModal').style.display = 'none';
});

const moviepictures = document.querySelectorAll('#modaldisplay');
moviepictures.forEach((picture) => {
    picture.addEventListener('click', modal);
});


