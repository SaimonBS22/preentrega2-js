let boton = document.querySelectorAll('#carrito');
let totalPrecio = 0;
const productos = [
    {nombre:'Ensalada Fresca', precio:11000},
    {nombre:'Wrap Caesar Pollo', precio:13000},
    {nombre:'Hamburguesa del Bajo', precio:12000},
    {nombre:'Facu Monster', precio:13500},
];



let toJson = JSON.stringify(productos);
localStorage.setItem('Productos',toJson);



boton.forEach((botones, index) =>{
botones.addEventListener('click', ()=>{
    carrito();
    total(productos[index].precio)
})
});

function total(precio){
    totalPrecio += precio;
    let miInput = document.getElementById('miInput');
    if(miInput){
         miInput.value = `${totalPrecio}`;
    }
}


function carrito(){
    if(!document.getElementById('img-carrito')){
    let carritoCompras = document.createElement('img');
    carritoCompras.src = './imagenes/carrito-compras.png';
    carritoCompras.alt = 'Descripción de la imagen';
    carritoCompras.width = 50; 
    carritoCompras.height = 50; 
    carritoCompras.style.position = 'fixed';
    carritoCompras.style.bottom = '50px';
    carritoCompras.style.right = '50px';
    carritoCompras.id = 'img-carrito';
    document.getElementById('contenedor').appendChild(carritoCompras);
    carritoCompras.addEventListener('click', input);
}};


function input(){
    
    if(!document.getElementById('miTitulo')){
    let titulo = document.createElement('h4')
    titulo.innerText = 'Total:'
    titulo.id = 'miTitulo';
    
    if(!document.getElementById('miInput')){
    let input = document.createElement('input');
    input.type = 'text';
    input.style.height = '25px';
    input.style.width = '150px';
    input.id = 'miInput';
    input.value = `${totalPrecio}`;
    document.getElementById('contenedor').appendChild(titulo);
    document.getElementById('contenedor').appendChild(input);
}}};


