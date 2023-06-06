const movBtn = document.querySelector("#saveMovie")
let id = 0


movBtn.addEventListener("click", async function (event) {
    // Use event.currentTarget to get the parent node of the save button
    movieEl = event.currentTarget.parentNode

    // Work down the children from the parent node to find the p tage with the id
    id = movieEl.children[2].innerHTML
    console.log(id)

    try {
        response = await fetch('/api/save', {
            method: 'POST',
            body: JSON.stringify({ id }),
            headers: { 'Content-Type': 'application/json' },
        });
        document.location.reload()

    } catch (error) {
        console.log(error)
    }
});
