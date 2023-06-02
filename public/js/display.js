// const { json } = require("express");

const movBtn = document.querySelectorAll("#saveMovie");
const delBtn = document.querySelectorAll("#deleteMovie");
const reviewForms = document.querySelectorAll(".reviewForm");
let id = 0;

// adds event listener to each save movie button
movBtn.forEach((btn) => {
  btn.addEventListener("click", async function () {
    myEl = btn.parentElement;
    id = myEl.querySelector(".movieId").innerText;
    console.log(id);

    try {
      const response = await fetch("/api/save", {
        method: "POST",
        body: JSON.stringify({ id }),
        headers: { "Content-Type": "application/json" },
      });
      document.location.reload();
    } catch (error) {
      console.log(error);
    }
  });
});

reviewForms.forEach((form) => {
  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const movieName = form.querySelector(".movieName").value;
    const review = form.querySelector(".review").value;

    try {
      const response = await fetch("/api/save", {
        method: "UPDATE",
        body: JSON.stringify({ movieName, review }),
        headers: { "Content-Type": "application/json" },
      });
      document.location.reload();
    } catch (error) {
      console.log(error);
    }
  });
});

// adds event listener to each save delete button
delBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    myEl = btn.parentElement;
    id = myEl.querySelector(".movieId").innerText;
    console.log(id);
  });
});


// TODOS: Save Movie
// 1. get the id of the correct element
// 2. query the database to get all the other information related to the movie
// 3. add the saved movie to the saved movie table
// 4. render the movie information from the SQL query as a new element under the SavedMovies List or rerender the handlebars template somehow

// TODOS: Delete Movie
// 1. get the id of the correct element
// 2. Remove the saved movie from the saved movie table
// 3. Delete the saved movie from the saved movie html section or rerender the handlebars template somehow with update table for saved movies
