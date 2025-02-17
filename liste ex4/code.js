const listItems = document.querySelectorAll("#colorList li");
const resetbtn=document.getElementById("reset");
const coloringnoise=new Audio("161628__crazyfrog249__blop.wav");
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
listItems.forEach((item) => {
    item.addEventListener("click", function () {
        coloringnoise.play();
        this.style.backgroundColor = getRandomColor();
    });
});
resetbtn.addEventListener("click", function () {
    listItems.forEach((item) => {
        item.style.backgroundColor = "#ffe6f2";
    });
});