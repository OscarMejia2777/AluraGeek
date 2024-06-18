

const form = document.querySelector(".menuForm")
const name = document.querySelector("[data-input-name]")
const precio = document.querySelector("[data-input-price]")
const urlImagen = document.querySelector("[data-input-imagen]")

form.addEventListener("submit", submitData)


function submitData(event){
    event.preventDefault(); 
    console.log(name.value);
    console.log(precio.value);
    console.log(urlImagen.value);

     fetch('http://localhost:3000/productos',{
         method: 'POST',
         headers:{
            'Content-Type':'application/json'
         },
         body: JSON.stringify({
            titulo: name.value,
            precio: precio.value,
            url_imagen: urlImagen.value
         })
     })

     .then(Response => console.log(Response))
     .then(data =>{
         console.log(data);
     })
    
}

