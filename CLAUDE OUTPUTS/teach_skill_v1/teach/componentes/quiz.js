/*
 * Componente de quiz com alternativas embaralhadas.
 *
 * Uso na lição (que deve ter <meta charset="utf-8">):
 *   <div class="quiz" data-explicacao="Por que a certa é a certa.">
 *     <p class="quiz-pergunta">Pergunta?</p>
 *     <ul>
 *       <li data-correta>Alternativa correta</li>
 *       <li>Alternativa errada um</li>
 *       <li>Alternativa errada dois</li>
 *     </ul>
 *   </div>
 *   <script src="../assets/<tema>_quiz_v1.js"></script>
 *
 * A ordem das alternativas é sorteada a cada carregamento da página, então a
 * posição no HTML não revela a resposta. Escreva a correta onde quiser.
 */
(function () {
  function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lista[i], lista[j]] = [lista[j], lista[i]];
    }
    return lista;
  }

  function montar(quiz) {
    const ul = quiz.querySelector("ul");
    if (!ul) return;
    const itens = embaralhar(Array.from(ul.children));
    itens.forEach((li) => ul.appendChild(li));

    const retorno = document.createElement("p");
    retorno.className = "quiz-retorno";
    retorno.setAttribute("aria-live", "polite");
    quiz.appendChild(retorno);

    itens.forEach((li) => {
      li.tabIndex = 0;
      li.setAttribute("role", "button");
      const responder = () => {
        if (quiz.dataset.respondido) return;
        quiz.dataset.respondido = "sim";
        const correta = li.hasAttribute("data-correta");
        li.classList.add(correta ? "quiz-certa" : "quiz-errada");
        itens
          .filter((x) => x.hasAttribute("data-correta"))
          .forEach((x) => x.classList.add("quiz-certa"));
        retorno.textContent =
          (correta ? "Correto. " : "Não é essa. ") +
          (quiz.dataset.explicacao || "");
      };
      li.addEventListener("click", responder);
      li.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          responder();
        }
      });
    });
  }

  function iniciar() {
    document.querySelectorAll(".quiz").forEach(montar);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
