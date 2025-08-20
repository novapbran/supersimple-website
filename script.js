const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");


yesBtn.addEventListener("click" , () => {
    question.innerHTML = "I Love You Too!";
    gif.src =
    "https://media0.giphy.com/media/PAVwUFBg0jG6CQHfKV/giphy.webp"
    
    
});


noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;


    const randimX = Math.floor(Math.random() * maxX);
    const randimY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY +  "px";
} );