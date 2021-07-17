const appToHome = document.getElementById('alert');
const btnAdd = document.getElementById('btnAdd');
const btnClose = document.getElementById('btnClose');
var prompt;

this.addEventListener('beforeinstallprompt', (event) => {
    appToHome.style.display = 'block';
    event.preventDefault();
    prompt = event;

    btnAdd.addEventListener('click', (event) => {
        prompt.prompt();
        appToHome.style.display = 'none';
    })
});

btnClose.addEventListener('click', (event) => {
    appToHome.style.display = 'none';
});