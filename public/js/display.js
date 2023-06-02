const movBtn = document.querySelectorAll("#saveMovie")
let id = 0

// adds event listener to each save movie button
movBtn.forEach(btn => {
    btn.addEventListener("click", async function () {
        myEl = btn.parentElement
        id = (myEl.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.innerText)
        console.log(id)

        try {
            response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify({ id }),
                headers: { 'Content-Type': 'application/json' },
            });
            console.log(response)
            document.location.reload()
            console.log(response)

        } catch (error) {
            console.log(error)
        }
    })
});