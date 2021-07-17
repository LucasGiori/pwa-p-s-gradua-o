const url = "http://www.professorburnes.com.br/api/";

const read = () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach((item) => {
                
                const img = `<img src="${item.tirinha}" alt="${item.titulo}"></div>`;

                const tira = `<div class="tira"><h1>${item.titulo}</h1></div>`;

                document.getElementById('tirinhas').innerHTML += `${img}${tira}`;
            });
        })
        .catch(error => console.log(error))
}

window.addEventListener('load', read)