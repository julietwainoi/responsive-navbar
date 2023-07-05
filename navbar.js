const bar = document.getElementById("bar");
const close = document.getElementById("close");
const navlist = document.getElementById("navlist");

if (bar) {
    bar.addEventListener('click', () => {
        navlist.classList.add('active');
    })
}

if (bar) {
    close.addEventListener('click', () => {
        navlist.classList.remove('active');
    })
}