import { deleteCard } from "./DeleteCard.js";

let globalData = []
const contenedorProducto = document.querySelector("[data-contentProduct]");
let contentTemplate = ""


fetch('http://localhost:3000/productos')
.then(Response => Response.json()) 
.then(data =>{
    globalData = data
    updateCards()
    deleteCard()

});


function updateCards() {
    globalData.forEach((product) => {
        const template = `
        <div class="producto1" data-productoCard="${product.id}">
            <img class="imagenProducto" src="${product.url_imagen}" alt="">
            <div class="menuTitulo">
                <div class="tituloPrecio"> 
                <p>${product.titulo}</p>
                <p class="precio">${product.precio}</p>
            </div>
                <img  class="delete" src="image/borrar.png" alt="delete" data-btn-delete="${product.id}">
            </div>
        </div>
        `
        contentTemplate += template;
    });

    if (globalData.length === 0){
        contenedorProducto.innerHTML ="<p>No hay productos que vender</p>"
    } else {    
        contenedorProducto.innerHTML = contentTemplate 
    }
}





