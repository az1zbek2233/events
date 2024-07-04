let plusBtn = document.querySelector(".plus");
let minusBtn = document.querySelector(".minus");
let p = document.querySelector("p");

plusBtn.addEventListener("click" ,function () {
    p.textContent = Number(p.textContent) +1
})

minusBtn.addEventListener("click" ,function () {
    p.textContent = Number(p.textContent) -1
})
