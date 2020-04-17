const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', () => {
    // console.log(event.clientX, event.clientY);
    h1.textContent = `${event.clientX}, ${event.clientY}`;

    document.body.style.backgroundColor = `rgb(${event.clientX*2}, ${event.clientY}, ${event.clientX/event.clientY*30})`
})