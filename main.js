// const h1 = document.querySelector('h1');
// document.body.addEventListener('mousemove', () => {
//     const x = event.clientX;
//     const y = event.clientY;
//     const width = window.innerWidth;
//     const height = window.innerHeight;
//     h1.textContent = x + ', ' + y;

//     const red = x / width * 100;
//     const green = y / height * 100;
//     const blue = ((x / width * 100) + (y / height * 100)) / 2;

//     document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`
// })

const h1 = document.querySelector('h1');

document.body.addEventListener('click', () => {
    const x = event.clientX;
    const y = event.clientY;

    if (x % 2 === 0 && y % 2 === 0){
        document.body.style.backgroundColor = 'red';
        console.log(x, y);
    } else if (x % 2 !== 0 && y % 2 !== 0){
        document.body.style.backgroundColor = 'blue';
        console.log(x, y);
    } else if (x % 2 !== 0 || y % 2 !== 0){
        document.body.style.backgroundColor = 'green';
        console.log(x, y);
    }
})