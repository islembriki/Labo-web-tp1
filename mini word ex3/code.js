const paragraph = document.getElementById("test-text");
document.getElementById("color").addEventListener("input", (e) => {
    paragraph.style.color = e.target.value;
});
document.getElementById("size").addEventListener("input", (e) => {
    paragraph.style.fontSize = e.target.value + "px";
});
document.getElementById("text-type").addEventListener("change", (e) => {
    paragraph.style.fontFamily = e.target.value;
});
