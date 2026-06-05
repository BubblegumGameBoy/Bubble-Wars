document.addEventListener("keydown", function(event) {
    document.getElementById("output").textContent =
        "押されたキー: " + event.key;
});
