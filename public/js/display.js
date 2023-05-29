const movBtn = document.querySelectorAll("#saveMovie")

// adds event listener to each button
movBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log(btn.parentElement.firstChild)
    })
});
