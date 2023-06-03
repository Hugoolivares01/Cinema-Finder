const modal = (event) => {
    document.getElementById('myModal').style.display = 'flex';
    const modalImage = document.getElementById("modalImage");
    const imageUrl = event.currentTarget.querySelector('img').src;
    modalImage.src = imageUrl;


};
document.querySelector('.close-btn').addEventListener('click', function () {
    document.getElementById('myModal').style.display = 'none';
});

document.querySelector('#modaldisplay').addEventListener('click', modal);