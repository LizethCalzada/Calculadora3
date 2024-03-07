// Calcular el área de un cuadrado
function Cuadrado() {
    var lado = parseFloat(document.getElementById("lado").value);
    var area = lado * lado;
    document.getElementById("res").value = area;
}

// Calcular el área de un triángulo
function Triangulo() {
    
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var area = (n1 * n2) / 2;
    document.getElementById("res").value = area;
}

// Calcular el área de un círculo
function Circulo() {
    var radio = parseFloat(document.getElementById("radio").value);
    var area = Math.PI * radio * radio;
    area = area.toFixed(2);
    document.getElementById("res").value = area;
}

// Calcular el área de un rectángulo
function Rectangulo() {
    var longitud = parseFloat(document.getElementById("longitud").value);
    var anchura = parseFloat(document.getElementById("anchura").value);
    var area = longitud * anchura;
    document.getElementById("res").value = area;
}