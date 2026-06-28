const colorBoxes = document.querySelectorAll('.color')

colorBoxes.forEach((box) => {
    box.addEventListener('mouseover', (e) => {
        document.body.className = e.target.classList[1]
        console.log(document.body.classList)
    })
})





// const heading = document.querySelector('.heading2');
// const finalText = heading.innerText + " from Apna College studens";
// heading.innerText = finalText;


// const boxes = document.querySelectorAll('.box');

// let count = 1;
// boxes.forEach((item) => {
//     item.innerText = `New Text ${count}`;
//     count++;
// })


// const btn = document.createElement("button")
// btn.innerText = 'Click Me'
// btn.style.backgroundColor = 'red';
// btn.style.color = 'white';
// document.querySelector('body').prepend(btn)


// const para = document.querySelector('.para');
// para.classList.add('new-para-style')


// const modeBtn = document.querySelector('button');
// let isDark = false;
// modeBtn.addEventListener('click', (e) => {
//     if(isDark){
//         document.body.style.backgroundColor = "white";
//         modeBtn.innerHTML = "Dark Mode";
//         isDark = false;
//     } else {
//         document.body.style.backgroundColor = "black";
//         modeBtn.innerHTML = "Light Mode";
//         isDark = true;
//     }
// })


