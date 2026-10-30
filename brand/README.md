# Duna Terrazzo — Design System

Identidade extraída dos materiais da marca (logo, voucher, comanda, campanha) e
aplicada ao app. Os valores para código estão em [`tokens.json`](tokens.json).

## Logo

| Arquivo | Uso |
|---|---|
| `logo/duna-wordmark-terracota.svg` | Wordmark vetorial (sem "Terrazzo") sobre fundo claro |
| `logo/duna-wordmark-creme.svg` | Wordmark vetorial sobre terracota (cabeçalhos dos tablets) |
| `logo/duna-terrazzo-terracota.png` | Logo completo sobre fundo claro (site de reservas) |
| `logo/duna-terrazzo-creme.png` | Logo completo sobre terracota (menu do gestor) |
| `logo/duna-terrazzo-terracota-escuro.png` | Logo completo no terracota escuro |
| `logo/duna-simbolo-tag01.pdf` / `tag02.pdf` | Originais vetoriais enviados |

Regras:
- O logo é **linear**. Não preencher, não aplicar sombra, não distorcer.
- Use só as duas cores oficiais: **terracota** sobre claro e **creme** sobre terracota.

## Cores

Princípio: **superfícies sóbrias, cor nos dados.** O fundo é neutro, os cartões são
brancos, e a marca aparece nos números, gráficos, botões e no estado ativo.

**Terracota (escala tonal da marca)**

| 900 | 700 | 600 (principal) | 500 | 400 | 300 | 200 | 100 |
|---|---|---|---|---|---|---|---|
| `#5E2410` | `#7A2E14` | `#983C1C` | `#B4583A` | `#C97B5C` | `#DCA387` | `#EBCBB8` | `#F6E6DC` |

**Areia:** `#B9A58C` · `#CDB89C` · `#E4D4C0` · `#EEE3D3` · `#F7F1E8`

**Neutros:**
- Fundo `#F3F1EE`
- Cartão `#FFFFFF`
- Linhas `#F1EEEA` / `#ECE8E3`
- Vazio em gráficos `#E2DDD7`
- Texto secundário `#6F6862`
- Tinta `#2A2421`

**Como usar nos dados:**
- Destaque e valor atual: terracota 600.
- Séries, rankings e mapa de calor: escala 700 → 100, do mais importante ao menos.
- Comparação e histórico: areia.
- O que não é dado (fundo de barra, pontos vazios): neutro.
- Erro (`#B42318`) só para falhas reais, nunca para "dado ruim".

## Tipografia

**Jost**, uma geométrica leve que conversa com os arcos do logo.
- Títulos em peso 300, grandes.
- Texto em 400; ênfase em 500.
- Nada acima de 600.
- Rótulos em caixa alta, 11–12px, peso 500, espaçamento 0.2em (eco do "T E R R A Z Z O").

As fontes dos materiais impressos são PP Monument Extended e Niveau Grotesk.
Elas são comerciais e exigem licença web; ficam reservadas para as peças da marca.

## Forma

- Cartões com raio de 24px e painéis com 28px.
- Botões, filtros e campos em pílula.
- Navegação ativa em pílula escura.

## Motivo gráfico

Quartos de círculo e semicírculos, os mesmos arcos do logo, em padrão repetido
(voucher, comanda, campanha). No app, usar com moderação: telas de login, vazias e de boas-vindas.

## Referências

`referencias/` guarda os materiais originais: voucher, comanda e peça da campanha.
