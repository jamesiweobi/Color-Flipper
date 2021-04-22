const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const myColor = document.querySelector(".color");

btn.addEventListener("click", (e) => {
    //Get a random number to fetch color from the colors array
    const randomNumber = getRandom();
    document.body.style.backgroundColor = colors[randomNumber];
    myColor.textContent = colors[randomNumber];
});

const getRandom = () => {
    return Math.floor(Math.random() * colors.length);
};
