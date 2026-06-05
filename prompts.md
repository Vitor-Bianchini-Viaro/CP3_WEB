# 1. IAs consultadas
* IA 1: Chat GPT
* IA 2: Claude
* IA 3: Gemini

# 2. Prompt Utilizado
Contexto Académico: Atue como um Desenvolvedor Front-End. Preciso que crie uma aplicação Web (SPA) dividida estritamente em três arquivos: index.html, style.css e script.js. O projeto consiste numa tela de login que, após autenticação com sucesso, liberta o acesso a um CRUD de uma Lista de Filmes Assistidos. Restrições Rígidas de Sintaxe: Organização das Funções: O código JavaScript não pode ter lógica solta e deve ser estruturado obrigatoriamente seguindo a arquitetura de funções nomeadas tradicionais: Funções de Coleta: Para capturar dados dos inputs do DOM. Funções de Validação: Para verificar campos vazios e credenciais, retornando erros ou booleanos. Funções de Exibição: Para renderizar os dados na tela e alternar a visibilidade das seções. Funções de Lógica/Orquestradoras: Para manipular o array e coordenar a execução das outras funções, credenciais fixas: usuario: aluno / Palavra-passe: fiap2025, se falhar ou os campos forem enviados vazios, exiba uma mensagem de erro numa div estilizada diretamente na tela 2 lista com CRUD Completo: A lista de strings deve iniciar com pelo menos 3 filmes predefinidos, adicionar ao Final: Inserir o filme no fim do array. Adicionar ao Início: Inserir o filme no início do array. Editar: Botão individual que permite alterar o texto do filme com base na sua posição no array. Se o utilizador confirmar o campo vazio ou cancelar, o item original permanece intacto. Remover: Botão individual que remove o filme do array usando estritamente a sua posição através do método, evitando apagar duplicados por valor. Atualização Automática: Qualquer alteração no array deve disparar a função orquestradora que limpa o campo e renderiza novamente a lista atualizada. 3. Validações de Campos: Nenhum filme pode ser adicionado ou editado se o campo estiver vazio, mostre um aviso caso aconteça, forneça o código limpo.

# 3. Comentario sobre cada resposta:
Chat GPT: Ele entregou um site simple sem muitas caracteristicas mas ele seguiu a ideia de forma clara sem apresentar um erro no código e não acresentou itens a mais e se demonstrou uma ia com boa leitura e clareza do código.

Gemini: Ele se mostro superior ao chat gpt conseguindo uma melhor separação de responsabilidades entre funções e fazer os códigos de html, css e js de uma forma clara onde apresentou com um modelo simples similar em estrutura ao do chatgtp.

Claude: Ele se mostrou superiores aos outros ao montar um site utilizando a página inteira modificando o html e css para um estilo unico e a parte do js se mostrou eficaz mantendo as validações e requizitos obrigatorios e adicionou mais do que foi pedido como um botão que volta a tela de login.

# 4. justificativa da ia escolhida:
O modelo Claude foi escolhido, pois como base inicial para a estruturação lógica do JavaScript devido à sua alta precisão em seguir restrições de sintaxe rígidas e específicas de programação a arquitetura exigida pelo projeto demandava uma separação estrita de responsabilidades e demonstrou forte aderência as diretrizes aplicadas, e gerou código limpo e organizado.