export function deleteCard (){
// Mandar a llamar al boton
const listaDelete = document.querySelectorAll("[data-btn-delete]")

// Agregar un AddEvent y sacar el 
listaDelete.forEach(botones => {
    const ID = botones.getAttribute("data-btn-delete")
    botones.addEventListener("click", ()=> productDelete(ID))
}) 

// crear funcion productDelete para que borre todo el card

function productDelete(id){
    fetch(`http://localhost:3000/productos/${id}`,{
        method: "DELETE"
    })

    .then((res) => console.log(res))
}   

}
