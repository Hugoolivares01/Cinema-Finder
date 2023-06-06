const movBtn = document.querySelectorAll("#saveMovie")
let id = 0
movBtn.forEach(btn => {
    btn.addEventListener("click", async function () {
        myEl = btn.parentElement.parentElement.previousSibling.previousSibling
        console.log(myEl)
        id = (myEl.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.innerText)
        console.log(id)

        // try {
        //     response = await fetch('/api/save', {
        //         method: 'POST',
        //         body: JSON.stringify({ id }),
        //         headers: { 'Content-Type': 'application/json' },
        //     });
        //     document.location.reload()

        // } catch (error) {
        //     console.log(error)
        // }
    })
});