const divProductos = document.getElementById("divProductos");
const alertError = document.getElementById("alertError");
const URLMain = "https://fakestoreapi.com/products/";

function getData() {
  fetch(URLMain) 
    .then((response) => {
      console.log(response); 
      return response.json(); 
    })
    .then((res) => {
      createCards(res); // Aquí se llama a la función createCards con la lista de productos
    })
    .catch((err) => {
      alertError.innerText = `Problema al traer la información: ${err}`;
      alertError.style.display = "block";
    });
}//getData

function createCards(res) {
  // con el ForEach itermos sobre cada producto para generar una card
  res.forEach((product) => {
    divProductos.insertAdjacentHTML(
      "beforeend",
      `
      <div class= "card">
        <img src="${product.image}" alt="${product.title}">
        <h3>Producto: ${product.title}</h3>
        <p>Precio: $${product.price}</p>
        <p>Descripción: $${product.description}</p>
        <h6>Categoria: ${product.category}</h6>
      </div>
      `
    );
  });
}//createCards
//intente mostrar estas dos pero aún no lo logró, me salen $undefined
//<p>Rating: $${product.rate}</p>
//<p>Precio: $${product.count}</p>
getData(); 

