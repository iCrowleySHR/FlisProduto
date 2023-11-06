document.addEventListener("DOMContentLoaded", function () {
    const buttonLembrete = document.querySelector(".button-lembrete");
    const lembreteCriado = document.querySelector(".lembrete-criado");

    // Função para carregar lembretes do localStorage
    function carregarLembretes() {
        const lembretes = JSON.parse(localStorage.getItem('lembretes')) || [];
        lembreteCriado.innerHTML = ''; // Limpa a lista de lembretes

        lembretes.forEach((lembrete, index) => {
            const novoLembreteDiv = document.createElement("div");
            novoLembreteDiv.classList.add("criados");
            novoLembreteDiv.innerHTML = `${lembrete.data} <br> ${lembrete.txt}`;

            // Adiciona um botão de exclusão para cada lembrete
            const btnExcluir = document.createElement("div");
            btnExcluir.textContent = "Excluir";
            btnExcluir.classList.add('excluir')
            btnExcluir.addEventListener("click", () => {
                lembretes.splice(index, 1); // Remove o lembrete da lista
                salvarLembretes(lembretes); // Atualiza o localStorage
                carregarLembretes(); // Atualiza a lista na página
            });

            novoLembreteDiv.appendChild(btnExcluir);

            lembreteCriado.appendChild(novoLembreteDiv);
        });
    }

    // Função para salvar lembretes no localStorage
    function salvarLembretes(lembretes) {
        localStorage.setItem('lembretes', JSON.stringify(lembretes));
    }

    carregarLembretes(); // Carrega lembretes quando a página é carregada

    buttonLembrete.addEventListener("click", function () {
        const inserirInfo = document.querySelector('.inserir-info');
        const imgSair = document.querySelector('#img-sair')
        inserirInfo.style.display = 'flex';
        imgSair.addEventListener('click',()=>{
            inserirInfo.style.display='none'
        })

        const btnInfo = document.querySelector('#btn-info');

        btnInfo.addEventListener('click', () => {
            const txt = document.querySelector('#input-txt').value;
            const data = document.querySelector('#input-data').value;

            if (txt.trim() && data.trim()) {
                const lembretes = JSON.parse(localStorage.getItem('lembretes')) || [];
                const novoLembrete = { data, txt };
                lembretes.push(novoLembrete);

                salvarLembretes(lembretes); // Salva os lembretes no localStorage

                carregarLembretes(); // Atualiza a lista na página
                inserirInfo.style.display = 'none';

                // Limpa os campos de entrada
                document.querySelector('#input-txt').value = '';
                document.querySelector('#input-data').value = '';
            }
        });
    });
});


