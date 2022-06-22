let products = [];
let total = 0;

function agregar(Producto, Precio) {
    console.log(Producto, Precio);
    products.push(Producto);
    total = total + Precio;
    document.getElementById("total_display").value = `Pagar $${total}`
}

function pay() {
    window.alert(products.join(", \n"));
}