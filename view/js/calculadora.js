function calcularcalo(){

    let	n1 = parseFloat(document.getElementById('num_n1').value);
    let	n2 = parseFloat(document.getElementById('num_n2').value);
    let	n3 = parseFloat(document.getElementById('num_n3').value);

    if ((n1 + n2 > n3) && (n1 + n3 > n2) && (n2 + n3 > n1)){
        alert("Os 3 lados formam um triangulo!")
        if ((n1 == n2) && (n1 == n3)) {
            alert("Equilatero")
        }
        else if((n1 == n2) || (n1 == n3) || (n2 == n3)) {
            alert("Isosceles")
        }
        else {
            alert("Escaleno")
        }} else {
            alert("Não é triangulo")} }