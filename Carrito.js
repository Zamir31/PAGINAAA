let products = [];
let prices = [];
let total = 0;

function agregar(Producto, Precio) {
    console.log(Producto, Precio);
    products.push(Producto);
    prices.push(Precio);
    total = total + Precio;
    var html='';
    products.forEach(element => {
        html+='<div>'+element+'</div>';
    });
    document.getElementById("productos").innerHTML =html;

    var html2='';
    prices.forEach(element => {
        html2+='<div>'+'$'+element+'</div>';
    });
    document.getElementById("precio").innerHTML =html2;


    document.getElementById("total_products").value = products.length;
    document.getElementById("total_price").value = `Pagar $${total}`
}

function pay() {
    window.alert(products.join(", \n"));
}