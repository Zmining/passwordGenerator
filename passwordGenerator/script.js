// Definir as variáveis
const senhaDigitada = document.getElementById("password");
const maiusculas = document.getElementById("maius");
const minusculas = document.getElementById("minus");
const numeros = document.getElementById("numeros");
const simbolos = document.getElementById("simbolos");

let senhas = []; // Definir o array de senhas

function geraSenha(num) {
    var alfabeto = '';
    var senha = '';

    // Verificar se foi marcado pelo menos uma das opções
    if (!maiusculas.checked && !minusculas.checked && !numeros.checked && !simbolos.checked) {
        senhaDigitada.innerHTML = 'Marque pelo menos uma das opções';
        return a;
    }

    // Somar as opções selecionadas
    if (maiusculas.checked) {
        for (var i = 65; i <= 90; i++) { // Letras maiúsculas
            alfabeto += String.fromCharCode(i);
        }
    }
    if (minusculas.checked) {
        for (var i = 97; i <= 122; i++) { // Letras minúsculas
            alfabeto += String.fromCharCode(i);
        }
    }
    if (numeros.checked) {
        for (var i = 48; i <= 57; i++) { // Números 0-9
            alfabeto += String.fromCharCode(i);
        }
    }
    if (simbolos.checked) {
        for (var i = 33; i <= 47; i++) { // Símbolos
            alfabeto += String.fromCharCode(i);
        }
    }

    // Gerar a senha
    for (var i = 0; i < num; i++) {
        var r = Math.floor(Math.random() * alfabeto.length);
        senha += alfabeto[r];
    }

    return senha;
}

// Chamar a função através do botão de gerar
let passwordDigits = document.getElementById("input"); 
let gerarSenha = document.getElementById("gerarSenha"); 
gerarSenha.addEventListener("click", () => {
    let tamanhoSenha = parseInt(passwordDigits.value);
    if (isNaN(tamanhoSenha) || tamanhoSenha <= 0) {
        tamanhoSenha = 5;
    } else if (tamanhoSenha > 15) {
        senhaDigitada.innerHTML = "Senha muito grande, tente novamente. (1-15)";
        return;
    }

    let senha = geraSenha(tamanhoSenha); // Pega o return da função

    // Sistema de repetição para evitar senhas repetidas
    let counter = 0;
    while (senhas.includes(senha) && counter < 50) {
        senha = geraSenha(tamanhoSenha);
        counter++;
    }
    if (senhas.includes(senha)) {
        senhaDigitada.innerHTML = "Falha ao gerar senha após 50 tentativas.";
    } else {
        senhas.push(senha);
        senhaDigitada.innerHTML = senha;
    }

    // Verificar se está funcionando
    console.log(senhas);
    console.log(minusculas.value);
});

// Sistema de limpar
let limpar = document.getElementById("limpar");
limpar.addEventListener("click", () => {
    senhaDigitada.innerHTML = "";
});

// Copiar a senha
const copiar = document.getElementById('copiar');
copiar.addEventListener('click', copyToClipboard);
async function copyToClipboard() {
    try {
        const text = senhaDigitada.innerHTML;
        await navigator.clipboard.writeText(text);
        alert("Senha copiada com sucesso!");
    } catch (err) {
        alert('Erro ao copiar: ', err);
    }
}
