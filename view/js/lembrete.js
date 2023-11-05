document.addEventListener("DOMContentLoaded", function () {
    const buttonLembrete = document.querySelector(".button-lembrete");
    const lembreteCriado = document.querySelector(".lembrete-criado");

    buttonLembrete.addEventListener("click", function () {
        const inserirInfo = document.querySelector('.inserir-info');
        inserirInfo.style.display = 'flex';

        const btnInfo = document.querySelector('#btn-info');

        btnInfo.addEventListener('click', () => {
            const txt = document.querySelector('#input-txt').value;
            const data = document.querySelector('#input-data').value;

            if (txt.trim() && data.trim()) { // Verifica se ambos os campos não estão vazios
                const novoLembrete = document.createElement("div");
                novoLembrete.classList.add("criados");
                novoLembrete.innerHTML = `${data}  <br> ${txt}`;

                lembreteCriado.appendChild(novoLembrete);
                inserirInfo.style.display = 'none';

                // Limpa os campos de entrada
                document.querySelector('#input-txt').value = '';
                document.querySelector('#input-data').value = '';
            }
        });
    });
});
