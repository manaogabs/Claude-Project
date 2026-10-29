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

| Token | Hex | Onde |
|---|---|---|
| Terracota | `#983C1C` | Cor principal: menus, cabeçalhos, botões de ação |
| Terracota claro | `#A04824` | Padrões e superfícies secundárias |
| Terracota escuro | `#7A2E14` | Hover, texto sobre creme |
| Cobre (logo) | `#924E2B` | Traço do logo |
| Creme | `#F0E4CC` | Texto e logo sobre terracota, cabeçalho do site |
| Areia | `#E4D4C0` | Linhas e divisórias |
| Fundo | `#F7F1E6` | Fundo das telas |
| Tinta | `#2E1A12` | Texto principal |
| Texto secundário | `#6E5646` | Legendas (contraste ≥ 4.5:1 sobre o fundo) |

As cores de status (sucesso, atenção, erro) são separadas da marca. O vermelho de erro (`#B42318`) foi escolhido para não se confundir com o terracota.

## Tipografia

Fontes encontradas nos PDFs da marca e o substituto web usado no app:

| Papel | Fonte da marca | Substituto web (Google Fonts) |
|---|---|---|
| Display (títulos, rótulos em caixa alta e espaçados) | PP Monument Extended | **Krona One** |
| Texto | Niveau Grotesk | **Work Sans** |
| Apoio | Helvetica Neue Light | Work Sans 400 |

As fontes originais são comerciais. Para usá-las no app é preciso licença **web**
(Pangram Pangram para a Monument; Niveau Grotesk via Adobe Fonts ou fundição).
Com os arquivos `.woff2` e a licença, basta trocar a família nos tokens.

## Motivo gráfico

Quartos de círculo e semicírculos, os mesmos arcos do logo, em padrão repetido
(voucher, comanda, campanha). No app, usar com moderação: telas de login, vazias e de boas-vindas.

## Referências

`referencias/` guarda os materiais originais: voucher, comanda e peça da campanha.
