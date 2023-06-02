// const { json } = require("express");

const movBtn = document.querySelectorAll("#saveMovie")
const delBtn = document.querySelectorAll("#deleteMovie")
let id = 0

// adds event listener to each save movie button
movBtn.forEach(btn => {
    btn.addEventListener("click", async function () {
        myEl = btn.parentElement
        // console.log(myEl.firstChild.nextSibling.firstChild.nextSibling.innerText)
        id = (myEl.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.innerText)
        console.log(id)

        try {
            response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify({ id }),
                headers: { 'Content-Type': 'application/json' },
            });
            document.location.reload()
            // console.log(response)
        } catch (error) {
            console.log(error)
        }
    })
});

// adds event listener to each save delete button
delBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        myEl = btn.parentElement
        // console.log(myEl.firstChild.nextSibling.firstChild.nextSibling.innerText)
        id = (myEl.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.innerText)
        console.log(id)
    })
});
