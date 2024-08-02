function geraSenha(num) {
    var alfabeto = '';
    var senha = '';
    
    // Gerar alfabeto com letras maiúsculas e minúsculas
    for (var i = 65; i <= 90; i++) { // Letras maiúsculas
        alfabeto += String.fromCharCode(i);
    }
    for (var i = 97; i <= 122; i++) { // Letras minúsculas
        alfabeto += String.fromCharCode(i);
    }
    
    // Gerar a senha
    for (var i = 0; i < num; i++) {
        var r = Math.floor(Math.random() * alfabeto.length);
        senha += alfabeto[r];
    }
    
    console.log(senha);
}

geraSenha(3);
