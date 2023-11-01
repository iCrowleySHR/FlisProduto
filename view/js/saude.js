const btnAnalizar = document.querySelector('#btn-analizar');

btnAnalizar.addEventListener('click', () => {
    const elementoIndex = document.querySelector('#text-resultado');
    const textoIndex = "Sinal, do latim signalis, que significa indício ou manifestação, é um termo usado para referir-se às manifestações clínicas que são reconhecíveis por outra pessoa, em geral, por um profissional da área da saúde, por meio da observação direta do paciente. Nesse caso, são manifestações que o médico ou outra pessoa consegue sentir, visualizar ou ainda escutar.";

    if (elementoIndex != null) {

        function trocandoTexto(elementoIndex, textoIndex) {
        
            const caracters = textoIndex.split("").reverse();

            const digitando = setInterval(() => {
            
                if (!caracters.length) {
                    return clearInterval(digitando);
                }

                const proxima = caracters.pop();

                elementoIndex.innerHTML += (proxima);

            }, 60);

        }

        trocandoTexto(elementoIndex, textoIndex);

    }
});