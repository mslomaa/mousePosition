const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', () => {
    // console.log(event.clientX, event.clientY);
    h1.textContent = `${event.clientX}, ${event.clientY}`;
})