const incrementBtn = document.getElementById("increment-btn");
let countDisplay = document.getElementById('display-count');

let count = 0

incrementBtn.addEventListener('click', () => {
    count+=1
    countDisplay.innerHTML = count
})

// console.log(count)