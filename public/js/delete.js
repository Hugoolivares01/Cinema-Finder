const delBtn = document.querySelectorAll("#deleteMovie")

// adds event listener to each  delete button
delBtn.forEach(btn => {
    btn.addEventListener("click", async () => {
        myEl = btn.parentElement
        id = (myEl.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.innerText)
        console.log(id)

        try {
            response = await fetch('/api/save', {
                method: 'DELETE',
                body: JSON.stringify({ id }),
                headers: { 'Content-Type': 'application/json' },
            });
            document.location.reload()
        } catch (error) {
            console.log(error)
        }
    })
});