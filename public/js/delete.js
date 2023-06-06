const delBtn = document.querySelectorAll("#deleteMovie");
delBtn.forEach(btn => {
    btn.addEventListener("click", async () => {
        // get the id from the sibling p tag of the delete button
        const id = btn.previousElementSibling.innerHTML;

        try {
            const response = await fetch('/api/save', {
                method: 'DELETE',
                body: JSON.stringify({ id }),
                headers: { 'Content-Type': 'application/json' },
            });
            
            if(response.ok) {
                document.location.reload();
            } else {
                throw new Error(`Failed to delete movie with id ${id}`);
            }
        } catch (error) {
            console.log(error);
        }
    })
});
