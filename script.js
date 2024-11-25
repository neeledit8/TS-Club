document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const color = document.querySelector("#color").value;
    alert(`You predicted the color: ${color}`);
});