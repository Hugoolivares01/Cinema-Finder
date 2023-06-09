document.getElementById('reviewForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const movieName = document.getElementById('movieName').textContent;
  const review = document.getElementById('review').value;

  const response = await fetch('/api/review', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      movieName: movieName,
      review: review,
    }),
  });
  document.location.reload()

  if (response.ok) {
    console.log('Successfully submitted review');
  } else {
    console.error('Error submitting review:', response.statusText);
  }
});
