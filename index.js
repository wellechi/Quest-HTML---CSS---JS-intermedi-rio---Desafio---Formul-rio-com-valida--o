function verificarPreenchimento() {
    var input = document.querySelectorAll("#meuInput")
    var novoConteudo = "<h3>CAMPO OBRIGATÓRIO</h3>"

    input.forEach(function(input){
        if(input.value.trim() !== ''){
           input.classList.add("campo-preenchido")
           

        } else {
            input.classList.add("campo-nao-preenchido")
            input.insertAdjacentHTML('afterend', novoConteudo)
        }
    })
}