let github = document.querySelector('#github');
let time_label = document.querySelector('#time');

github.addEventListener('click', () => {
    window.open('https://github.com/k4ties/')
})

let date = new Date();
time_label.innerHTML = date.toLocaleTimeString()

setInterval(() => {
    let date = new Date();
    time_label.innerHTML = date.toLocaleTimeString()
}, 1000)
