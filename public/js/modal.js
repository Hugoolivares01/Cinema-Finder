const modal = (event) => {
    event.preventDefault();
    document.getElementById('myModal').style.display = 'flex';
    const modalImage = document.getElementById("modalImage");
    const imageUrl = event.currentTarget.querySelector('img').src;
    modalImage.src = imageUrl;
    const Current = event.currentTarget.querySelector('#pictureid').value;
    console.log(Current);


};
document.querySelector('.close-btn').addEventListener('click', function () {
    document.getElementById('myModal').style.display = 'none';
});

const moviepictures = document.querySelectorAll('#modaldisplay');
moviepictures.forEach((picture) => {
    picture.addEventListener('click', modal);
});
