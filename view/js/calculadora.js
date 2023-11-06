document.querySelectorAll('.container-objetivo button').forEach(button => {
    button.addEventListener('click', function() {
        // Remova a classe "selecionado" de todos os botões
        document.querySelectorAll('.container-objetivo button').forEach(btn => {
            btn.classList.remove('selecionado');
        });

        // Adicione a classe "selecionado" ao botão clicado
        this.classList.add('selecionado');

        // Defina o valor da opção selecionada no campo de entrada escondido
        const valor = this.getAttribute('data-value');
        document.querySelector('input[name="objetivo"]').value = valor;
    });
});

document.getElementById('btn-calccalor').addEventListener('click', calcularCalorias);

function calcularCalorias() {
    const peso = parseFloat(document.getElementById('peso').value);
    const idade = parseInt(document.getElementById('idade').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const objetivo = document.querySelector('input[name="objetivo"]').value;

    if (!peso || isNaN(idade) || !altura || !objetivo) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const bmr = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade);

    let tdee;
    if (objetivo === 'emagrecer') {
        tdee = bmr * 1.2;
    } else if (objetivo === 'manter') {
        tdee = bmr * 1.375;
    } else if (objetivo === 'engordar') {
        tdee = bmr * 1.55;
    }

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Calorias Diárias: ${tdee.toFixed(2)}`;
}
