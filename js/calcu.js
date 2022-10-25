function decimal() {
    document.getElementById('d2').classList.remove('disappears');
    document.getElementById('d8').classList.remove('disappears');
    document.getElementById('d16').classList.remove('disappears');

    document.getElementById('d10').classList.add('disappears');
    var number = document.getElementById("numero").value;
    var numberReal = parseInt(number);

    document.getElementById("result").innerHTML = "Resultado";
    
    var binary = numberReal.toString(2);
    document.getElementById("binatext").innerHTML = "Numero en binario:";
    document.getElementById("binary").innerHTML = binary;

    var octal = numberReal.toString(8);
    document.getElementById("octatext").innerHTML = "Numero en octal:";
    document.getElementById("octal").innerHTML = octal;

    var hexadecimal = numberReal.toString(16);
    document.getElementById("hexatext").innerHTML = "Numero en hexadecimal:";
    document.getElementById("hexadecimal").innerHTML = hexadecimal;
    
}

function binary() {
    document.getElementById('d10').classList.remove('disappears');
    document.getElementById('d8').classList.remove('disappears');
    document.getElementById('d16').classList.remove('disappears');
    
    document.getElementById('d2').classList.add('disappears');
    var number = document.getElementById("numero").value;
    var binary = parseInt(number, 2);

    document.getElementById("result").innerHTML = "Resultado";

    document.getElementById("decitext").innerHTML = "Numero en decimal:";
    document.getElementById("decimal").innerHTML = binary;

    var octal = binary.toString(8);
    document.getElementById("octatext").innerHTML = "Numero en octal:";
    document.getElementById("octal").innerHTML = octal;

    var hexadecimal = binary.toString(16);
    document.getElementById("hexatext").innerHTML = "Numero en hexadecimal:";
    document.getElementById("hexadecimal").innerHTML = hexadecimal;
    
}

function octal() {
    document.getElementById('d2').classList.remove('disappears');
    document.getElementById('d10').classList.remove('disappears');
    document.getElementById('d16').classList.remove('disappears');

    document.getElementById('d8').classList.add('disappears');
    var number = document.getElementById("numero").value;
    var octal = parseInt(number, 8);

    document.getElementById("result").innerHTML = "Resultado";

    var decimal = octal.toString(10);
    document.getElementById("decitext").innerHTML = "Numero en decimal:";
    document.getElementById("decimal").innerHTML = decimal;

    var binary = octal.toString(2);
    document.getElementById("binatext").innerHTML = "Numero en binario:";
    document.getElementById("binary").innerHTML = binary;

    var hexadecimal = octal.toString(16);
    document.getElementById("hexatext").innerHTML = "Numero en hexadecimal:";
    document.getElementById("hexadecimal").innerHTML = hexadecimal;
    
}

function hexadecimal() {
    document.getElementById('d2').classList.remove('disappears');
    document.getElementById('d10').classList.remove('disappears');
    document.getElementById('d8').classList.remove('disappears');

    document.getElementById('d16').classList.add('disappears');
    var number = document.getElementById("numero").value;
    var hexadecimal = parseInt(number, 16);

    document.getElementById("result").innerHTML = "Resultado";

    var decimal = hexadecimal.toString(10);
    document.getElementById("decitext").innerHTML = "Numero en decimal:";
    document.getElementById("decimal").innerHTML = decimal;

    var binary = hexadecimal.toString(2);
    document.getElementById("binatext").innerHTML = "Numero en binario:";
    document.getElementById("binary").innerHTML = binary;

    var octal = hexadecimal.toString(8);
    document.getElementById("octatext").innerHTML = "Numero en octal:";
    document.getElementById("octal").innerHTML = octal;
    
}