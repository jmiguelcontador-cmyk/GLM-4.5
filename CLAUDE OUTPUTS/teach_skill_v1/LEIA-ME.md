# teach (adaptada), v1

Adaptação da skill `teach` de Matt Pocock (https://github.com/mattpocock/skills, pasta `skills/productivity/teach`, commit `49dd158`, licença MIT) às regras de trabalho do usuário.

## O que mudou em relação ao original

- Tudo em português do Brasil.
- Antes de começar, a skill lê `ABOUT ME/`, a subpasta relevante de `PROJECTS/` e estuda `TEMPLATES/` (identidade visual das lições).
- O workspace de cada tema fica inteiro em `CLAUDE OUTPUTS/<tema>/`.
- Nomes no padrão `projeto_tipo_v1.ext` (ex.: `excel-avancado_licao-0001-procv_v1.html`). Missão, recursos, glossário e notas são editados no próprio arquivo; lições e referências revisadas viram `_v2`.
- Seção "Compromisso com a verdade" com as regras de incerteza, fontes, números, datas e citações.
- Avaliação do ponto de partida na entrevista inicial (o original não tinha; issue #725 do repositório).
- Glossário obrigatório e linkado (no original o formato existia, mas não era referenciado; issue #559).
- Componente de quiz pronto (`componentes/quiz.js`) que embaralha as alternativas ao carregar a página, para evitar a resposta certa sempre na posição A (problema relatado no original, issue #335). Testado no Chromium.
- Lições em UTF-8 obrigatório.
- Lembrete de revisão ao fim de cada sessão.

## Como instalar

- **Claude Code**: copie a pasta `teach/` para `~/.claude/skills/teach/` (vale em todos os projetos) ou para `.claude/skills/teach/` dentro de uma pasta de projeto. Depois digite `/teach`.
- **Cowork / claude.ai**: compacte a pasta `teach/` (ou use `teach_skill_v1.zip`) e envie em Configurações > Capacidades > Skills. O caminho exato no menu pode ter mudado; confira na interface atual.

Se a skill original também estiver instalada com o nome `teach`, remova uma delas para não haver conflito.
