//obtém o elementos da pagina
const frm = document.querySelector("form");
const outResp1 = document.querySelector("#outResp1");
const outResp2 = document.querySelector("#outResp2");
const outResp3 = document.querySelector("#outResp3");
const reset = document.querySelector("#Limpar")


frm.addEventListener("submit", (e) => { // "escuta" evento submit do form
   e.preventDefault() // evita o envio do form
   
   const saque = Number(frm.inSaque.value) // pega o valor do saque 
    console.log(saque)

    if(saque % 10 != 0){  // se o saque nao é multiplo de dez
        alert('valor invalido para notas disponivel (10, 50, 100)')
        frm.inSaque.value = '' // limpa o valor do saque
        return
    }

    const notasCem  = Math.floor(saque / 100)// calcula a notas de cem
    let resto = saque % 100 // quanto sobra para pagar
        const notasCinquenta = Math.floor(resto / 50); // calcula nostas de 50
        resto = resto % 50 // quanto sobra para pagar
        const notasDez = Math.floor(resto / 10); // calculas as notas de dez

        if (notasCem > 0){
            outResp1.innerText = `Notas de R$ 100: ${notasCem}`
        }
        if (notasCinquenta > 0){
            outResp2.innerText = `Notas de R$ 50: ${notasCinquenta}`
        }
        if (notasDez > 0){
            outResp3.innerText = `Notas de R$ 10: ${notasDez}`
        }

});


reset.addEventListener("click", () => { // "Escuta" evento click do botão reset
    frm.reset(); // Reseta o formulário
    outResp1.innerText = ''; // Limpa os resultados
    outResp2.innerText = '';
    outResp3.innerText = '';
});
    

var imagenTamanho = document.getElementById("img");
var inputSaque = document.getElementById("inSaque");
imagenTamanho.style.width = "50px";
imagenTamanho.style.height = "50px";


inputSaque.style.padding = "6px";
inputSaque.style.border = "1px solid #ccc;"
