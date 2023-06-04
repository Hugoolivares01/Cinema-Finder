// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];  // Swap elements
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const slide = document.querySelector('.slide');
    let images = [];

    const apiKey = '17d940a1581f95d801b9ca2eecd26ca8';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    // Fetch popular movies
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Shuffle the array of movies
            shuffleArray(data.results);

            // Get the poster path for each movie and create an image URL
            images = data.results.map(movie => `https://image.tmdb.org/t/p/w500${movie.poster_path}`);
            // Insert images into the slide div
            for (const imageUrl of images) {
                const img = document.createElement('img');
                img.src = imageUrl;
                slide.appendChild(img);
            }
        })
        .catch(err => console.error(err));
});