# Formato dos registros de aprendizagem

Os registros ficam em `registros/`, numerados em sequência: `<tema>_registro-0001-<assunto>_v1.md`, `<tema>_registro-0002-<assunto>_v1.md` etc. Crie a pasta só quando o primeiro registro for escrito.

Eles funcionam como atas de decisão do aprendizado: guardam lições não óbvias, insights e conhecimento prévio declarado que vão orientar as próximas sessões. São a base para calcular a zona de desenvolvimento proximal.

## Modelo

```md
# {Título curto do que foi aprendido ou estabelecido}

{1 a 3 frases: o que foi aprendido (ou que conhecimento prévio foi confirmado) e por que isso importa para as próximas sessões.}
```

Esse é o formato completo. Um registro pode ser um único parágrafo.

## Seções opcionais

Use só quando agregarem valor:

- **Status** (`ativo | substituído pelo registro NNNN`): quando um entendimento anterior se mostrou errado.
- **Evidência**: como o usuário demonstrou o entendimento (pergunta respondida, exercício feito, experiência citada).
- **Implicações**: o que isso libera ou descarta para as próximas sessões.

## Numeração

Procure o maior número em `registros/` e some um.

## Quando escrever

1. **O usuário demonstrou entendimento real de algo não trivial**, com evidência, não só exposição.
2. **O usuário declarou conhecimento prévio** ("isso eu já sei"). Registre também a profundidade declarada.
3. **Uma concepção errada foi corrigida.** São os registros mais valiosos: preveem tropeços futuros.
4. **A missão mudou.** Faça referência ao arquivo de missão e atualize-o.
5. **O nível foi corrigido** pelo usuário ("muito básico", "muito avançado").

### O que não entra

- Conteúdo apenas apresentado. Apresentar não é aprender; espere evidência.
- O que já está no glossário como definição.
- Diário de sessões. Registro não é log de atividade.

## Substituição

Quando um registro novo contradiz um antigo, marque o antigo como `Status: substituído pelo registro NNNN` em vez de apagá-lo. A história de como o entendimento evoluiu também é informação útil.
