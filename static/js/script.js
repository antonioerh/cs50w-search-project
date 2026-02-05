function handleSubmit() {
    event.preventDefault()

    let input = document.getElementById("floatingInput").value;
    let url = "https://www.google.com/search?tbm=isch&q=" + input;

    window.location.href = url;
}