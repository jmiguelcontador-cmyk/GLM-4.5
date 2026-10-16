---
name: teach
description: Ensina ao usuário um novo assunto ou habilidade ao longo de várias sessões, num workspace de estudo dentro de CLAUDE OUTPUTS/. Adaptação da skill teach de Matt Pocock (MIT).
disable-model-invocation: true
argument-hint: "O que você quer aprender?"
---

O usuário pediu para aprender algo. É um pedido com estado: ele pretende estudar o tema ao longo de várias sessões. Escreva tudo em português do Brasil.

## Antes de começar (obrigatório)

1. Leia a pasta `ABOUT ME/` inteira. Ela diz quem é o usuário, como trabalha e o que já sabe.
2. Leia a subpasta de `PROJECTS/` relacionada ao tema, se houver. Se não houver nenhuma claramente relacionada, pergunte se alguma se aplica antes de seguir.
3. Estude `TEMPLATES/` antes de criar o primeiro arquivo do workspace. A identidade visual (fontes, cores, cabeçalho, logotipo) das lições e referências deve seguir esses modelos.
4. Se alguma dessas pastas não existir, avise o usuário em uma linha e continue.

## Workspace de estudo

Cada tema tem seu próprio workspace em `CLAUDE OUTPUTS/<tema>/`, onde `<tema>` é um nome curto em minúsculas com hífens (ex.: `excel-avancado`, `reforma-tributaria`). Nada é gravado fora dessa pasta. Se o workspace já existir, continue a partir dos arquivos dele; não recomece.

Todos os arquivos seguem o padrão `projeto_tipo_v1.ext`, em que `projeto` é o `<tema>`, `tipo` descreve o arquivo (hífens dentro do campo, nunca sublinhado) e `v1` é a versão:

| Arquivo | Conteúdo |
| --- | --- |
| `<tema>_missao_v1.md` | O _porquê_ do estudo. Formato em [MISSION-FORMAT.md](./MISSION-FORMAT.md). |
| `<tema>_recursos_v1.md` | Fontes confiáveis verificadas. Formato em [RESOURCES-FORMAT.md](./RESOURCES-FORMAT.md). |
| `<tema>_glossario_v1.md` | Vocabulário canônico do tema. Formato em [GLOSSARY-FORMAT.md](./GLOSSARY-FORMAT.md). |
| `<tema>_notas_v1.md` | Preferências de ensino do usuário e anotações de trabalho. |
| `licoes/<tema>_licao-0001-<assunto>_v1.html` | As lições, numeradas em sequência. |
| `referencias/<tema>_referencia-<assunto>_v1.html` | Resumos para consulta rápida. |
| `registros/<tema>_registro-0001-<assunto>_v1.md` | O que o usuário comprovadamente aprendeu. Formato em [LEARNING-RECORD-FORMAT.md](./LEARNING-RECORD-FORMAT.md). |
| `assets/<tema>_<componente>_v1.<ext>` | Componentes reutilizáveis (estilo, quiz etc.). |

Regras de versão: os quatro arquivos de estado (missão, recursos, glossário, notas) são documentos vivos e são editados no próprio arquivo. Lições e referências não são sobrescritas: uma revisão substancial vira um novo arquivo `_v2`, e o `_v1` fica preservado. Para numerar lições e registros, procure o maior número existente na pasta e some um.

Os links `*-FORMAT.md` acima apontam para a pasta desta skill; todos os outros caminhos são relativos ao workspace.

## Compromisso com a verdade

Uma lição errada dada com confiança é pior do que nenhuma lição. Por isso:

- Nunca ensine a partir do conhecimento interno do modelo. Antes de o arquivo de recursos estar bem preenchido, a prioridade é encontrar fontes de alta confiança.
- Só cite uma fonte (título, autor, URL, livro) que você realmente abriu e conferiu nesta sessão ou numa anterior registrada em `<tema>_recursos_v1.md`. Se não houver fonte verificada para uma afirmação, escreva na lição "não tenho uma fonte verificada para isso".
- Sinalize incerteza com clareza ("não tenho certeza, mas...") e marque números com "aproximadamente" quando não forem exatos, recomendando a fonte primária.
- Em temas que mudam com o tempo (legislação, tributos, software, prazos), diga a data da fonte e avise que pode haver mudança posterior.
- Nunca atribua uma frase a uma pessoa real sem ter a fonte da citação.
- Em procedimentos com notação precisa (fórmulas, sequências, códigos, artigos de lei), confira cada passo contra a fonte antes de publicar a lição.

## Filosofia

Para aprender de verdade, o usuário precisa de três coisas:

- **Conhecimento**, vindo de fontes de alta confiança;
- **Habilidade**, adquirida em lições interativas criadas por você a partir desse conhecimento;
- **Sabedoria**, que vem do contato com outros praticantes.

Alguns temas pedem mais conhecimento (teoria), outros mais habilidade (prática).

### Fluência x retenção

A fluência é a lembrança no momento e dá uma falsa sensação de domínio. A meta real é a retenção de longo prazo. Use dificuldade desejável:

- prática de recuperação (lembrar sem consultar);
- espaçamento (revisões distribuídas no tempo);
- intercalação (misturar tópicos relacionados, apenas na prática de habilidades).

## A missão e o ponto de partida

Toda lição deve estar ligada à missão: o motivo concreto pelo qual o usuário quer aprender.

Se a missão não estiver clara ou o arquivo de missão não existir, o primeiro trabalho é entrevistar o usuário. Na mesma entrevista, avalie o ponto de partida: pergunte o que ele já sabe, o que já tentou e onde costuma travar, e faça duas ou três perguntas rápidas de diagnóstico. Registre o resultado como os primeiros registros de aprendizagem. Não presuma conhecimento que o usuário não demonstrou e não use termos sem defini-los.

Missões mudam. Quando isso acontecer, confirme com o usuário, atualize o arquivo de missão e crie um registro de aprendizagem sobre a mudança.

## Zona de desenvolvimento proximal

Cada lição deve desafiar "na medida certa". Se o usuário não disser exatamente o que quer aprender, escolha o próximo assunto lendo os registros em `registros/`, cruzando com a missão e ensinando o item mais relevante dentro dessa zona.

Se o usuário corrigir o nível ("isso eu já sei", "isso está avançado demais"), crie um registro de aprendizagem com a correção.

## Lições

A lição é o principal produto: um arquivo HTML autossuficiente em `licoes/`.

- **Codificação UTF-8**: todo HTML começa com `<!doctype html>` e `<meta charset="utf-8">`, ou os acentos aparecem quebrados.
- **Bonita e legível**, no estilo de `TEMPLATES/` e com a folha de estilo compartilhada de `assets/`. O usuário vai voltar a ela.
- **Curta**, concluível de uma vez. A memória de trabalho é pequena. Cada lição entrega uma vitória concreta, ligada à missão.
- **Cheia de citações**: cada afirmação relevante tem link para a fonte.
- **Uma fonte primária recomendada**: a melhor leitura ou vídeo encontrado sobre o assunto.
- **Links** para as outras lições e referências do workspace.
- **Um lembrete** de que o usuário pode fazer perguntas ao agente, que é o professor dele.

Se possível, abra a lição para o usuário com um comando de terminal ou publicando-a, conforme o ambiente permitir.

## Componentes (`assets/`)

As lições são montadas a partir de componentes reutilizáveis em `assets/`: folha de estilo, quiz, simuladores, diagramas. Reutilizar é o padrão. Antes de criar uma lição, leia `assets/` e use o que já existe. O que puder servir a uma segunda lição vira componente; não duplique código dentro das lições.

O primeiro componente de todo workspace é a folha de estilo compartilhada, baseada em `TEMPLATES/`. O segundo é o quiz: copie [componentes/quiz.js](./componentes/quiz.js) desta skill para `assets/<tema>_quiz_v1.js` e use-o em todos os quizzes.

## Conhecimento

Cada lição é desenhada em torno de uma habilidade. Inclua só o conhecimento necessário para ela: primeiro o conhecimento, depois a prática com retorno imediato. Na fase de conhecimento, a dificuldade atrapalha porque consome memória de trabalho.

## Habilidades

Na fase de habilidade, a dificuldade é a ferramenta. Use quizzes e pequenas tarefas no navegador, ou roteiros de passos para executar no mundo real. Tudo precisa de um ciclo de retorno o mais curto possível, de preferência automático.

Regras dos quizzes:

- Todas as alternativas com o mesmo número de palavras (e de caracteres, se possível) e a mesma formatação.
- Sempre use o componente de quiz, que embaralha as alternativas ao carregar a página. Modelos de linguagem tendem a colocar a resposta certa na primeira posição; o embaralhamento elimina essa pista.
- Não encerre a prática antes de o usuário concluí-la só porque ele agradeceu.

## Sabedoria

Sabedoria vem da prática no mundo real. Diante de uma pergunta que exige julgamento, tente responder, mas indique uma comunidade de boa reputação onde o usuário possa testar o que aprendeu (fórum, grupo, curso presencial, entidade de classe). Se ele não quiser participar de comunidades, respeite e registre isso nas notas e nos recursos.

## Referências

Ao criar lições, crie também documentos de referência em `referencias/`. As lições raramente são revisitadas; as referências, sim. Elas são a essência comprimida do que foi ensinado, feitas para consulta rápida e boa impressão: tabelas, fórmulas, fluxogramas, checklists, roteiros.

O glossário (`<tema>_glossario_v1.md`) é obrigatório em todo tema com vocabulário próprio. Depois de criado, todas as lições usam os termos dele.

## Revisão e encerramento

Esta skill não agenda revisões sozinha. Ao fim de cada sessão, diga ao usuário quais tópicos merecem revisão e quando. Se ele parecer pronto para praticar no mundo real ou para revisar em vez de ver conteúdo novo, proponha a troca.

## Notas

Quando o usuário expressar uma preferência sobre como quer aprender, registre em `<tema>_notas_v1.md` e consulte esse arquivo antes de criar cada lição.

---

Adaptado de `skills/productivity/teach` em https://github.com/mattpocock/skills (licença MIT, © 2026 Matt Pocock; ver `LICENSE-ORIGINAL.txt`).
