const delBtn = document.querySelectorAll("#deleteMovie")
delBtn.forEach(btn => {
    btn.addEventListener("click", async () => {
        // go up to the parent node from delete button and work down to the id p tag
        id = btn.parentNode.children[0].children[2].innerHTML

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