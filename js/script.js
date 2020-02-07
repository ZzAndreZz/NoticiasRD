const API_KEY = "7fc7f9869618478aafc65491d3eb8386";
let config = {
    method: "GET",
}
let boardNoticias = document.querySelector('#boardNoticias')
let btnNoticias = document.querySelector('#verNoticias')



function mostrarNaTela(listaNoticias) {
    listaNoticias.forEach((noticia) => {
        let novaNoticia = ` <div class="col-md-4">
        <div class="card">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src='${noticia.urlToImage}'alt="Card image cap">
                <div class="card-body text-justify">
                    <h5 class="card-title text text-justify">${noticia.title}</h5>
                        <p class="card-text">${noticia.description}</p>
                    <a href="#" class="btn btn-primary">Ver Noticia Completa</a>
                </div>
            </div>
        </div>`

        boardNoticias.insertAdjacentHTML('beforeend', novaNoticia)
        console.log(novaNoticia)
    });

}

btnNoticias.onclick = () => {

    let resposta = fetch("https://newsapi.org/v2/top-headlines?country=br&apiKey=" + API_KEY, config)
        .then((resposta) => {
            return (resposta.json())
        })
        .then((json) => {
            mostrarNaTela(json.articles)
        })

}

