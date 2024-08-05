const senhaDigitada = document.getElementById("password");
let senhas = [];

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

    // Adicionar números ao alfabeto
    for (var i = 48; i <= 57; i++) { // Números 0-9
        alfabeto += String.fromCharCode(i);
    }

    for( var i = 33; i <= 38; i++) {
        alfabeto += String.fromCharCode(i)
    }
    
    // Gerar a senha
    for (var i = 0; i < num; i++) {
        var r = Math.floor(Math.random() * alfabeto.length);
        senha += alfabeto[r];
    }

    return senha;
}

let passwordDigits = document.getElementById("input");
let gerarSenha = document.getElementById("gerarSenha");

gerarSenha.addEventListener("click", () => {
    let tamanhoSenha = parseInt(passwordDigits.value);
    if (isNaN(tamanhoSenha) || tamanhoSenha <= 0) {
        tamanhoSenha = 15;
    } else if (tamanhoSenha > 15) {
        tamanhoSenha = 15;
    }
    
    let senha = geraSenha(tamanhoSenha);
    
    while (senhas.includes(senha)) {
        senha = geraSenha(tamanhoSenha);
        console.log("Já há senha")
    }
    
    senhas.push(senha);
    senhaDigitada.innerHTML = senha;
    console.log(senhas);
});

let senha = geraSenha(tamanhoSenha);

let copiar = document.getElementById("copiar")


copiar.addEventListener("click", () => {
    const senha = senhaDigitada.innerText; // Pega o texto da senha
    if (senha) {
        navigator.clipboard.writeText(senha).then(() => {
            alert('Senha copiada para o clipboard!');
        }).catch(err => {
            console.error('Erro ao copiar a senha: ', err);
        });
    } else {
        alert('Nenhuma senha gerada para copiar.');
    }
});