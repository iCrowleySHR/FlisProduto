const btnAnalizar = document.querySelector('#btn-analizar');

btnAnalizar.addEventListener('click', () => {
    const elementoIndex = document.querySelector('#text-resultado');
    const textoIndex = "Você pode estar com enxaquecas, frequentemente causam dor latejante que"+
    " pode ser sentida em um ou ambos os lados da cabeça, incluindo atrás dos olhos. "+
    "Outros sintomas, como náusea, vômito e sensibilidade à luz e ao som, geralmente acompanham as enxaquecas."+
    "Se você está enfrentando esses sintomas e "+
    "eles persistirem ou forem graves, é aconselhável procurar um profissional "+
    "de saúde para avaliação e diagnóstico adequados. Eles poderão determinar a "+
    "causa da sua dor de cabeça e recomendar o tratamento apropriado. Lembre-se "+
    "de que apenas um profissional de saúde pode fornecer um diagnóstico preciso "+
    "com base em sua história clínica e em um exame físico detalhado.";

    if (elementoIndex != null) {

        function trocandoTexto(elementoIndex, textoIndex) {
        
            const caracters = textoIndex.split("").reverse();

            const digitando = setInterval(() => {
            
                if (!caracters.length) {
                    return clearInterval(digitando);
                }

                const proxima = caracters.pop();

                elementoIndex.innerHTML += (proxima);

            }, 10);

        }

        trocandoTexto(elementoIndex, textoIndex);

    }
});