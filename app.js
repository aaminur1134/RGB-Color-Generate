window.onload = () => {
    myFunc();
}

// Main Function create
function myFunc() {
    const root = document.querySelector('#root');
    const myBtn = document.querySelector('#btn');
    const rgbNum = document.querySelector('#rgbNum');

    myBtn.addEventListener('click', function(){
        const bgColor = rbgColor();    
        root.style.backgroundColor = bgColor;
        rgbNum.innerHTML = bgColor;
        console.log(bgColor);
    });
}

// Create a RBG Color Function
function rbgColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}
