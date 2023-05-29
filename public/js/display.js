const movBtn = document.querySelectorAll("#saveMovie")

// adds event listener to each button
movBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        myEl = btn.parentElement
        // myEl = btn.nextElementSibling
        console.log(myEl);
        console.log(myEl.firstChild.nextSibling.firstChild.nextSibling.innerText)
    })
});
