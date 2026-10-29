# Duna App — Especificação (decisões do Grill)

Aplicativo de gestão do restaurante **Duna Terrazzo**: estoque, compras, receitas,
funcionários, reservas, eventos e CRM. Este documento registra as decisões tomadas
com a proprietária e é a referência para o desenvolvimento.

Protótipo visual (canvas): https://claude.ai/artifact/Fg7FMVEoCp1Qh7cNpqyEd2

---

## 1. Plataforma

- **PWA** (app web instalável), sem App Store / Google Play.
- **Stack:** Next.js na **Vercel** + **Supabase** (Postgres, Auth, Storage).
  - Supabase Free durante o desenvolvimento; **Pro antes de dados reais** (backups).
  - Vercel Hobby é não comercial pelos termos; avaliar Pro ou Cloudflare Pages ao entrar em produção.
- Desenvolvimento: Claude. Curadoria de design: proprietária.
- **Dispositivos:**
  - Gestora: computador + celular.
  - Produção / Chef / Líder: **tablet fixo** por setor.
  - Garçons: **celular próprio**.
  - Cliente: site de reserva no celular.
- Tablet compartilhado: tela fica no setor; ações que contam (contagem, checklist) pedem **PIN de 4 dígitos** e registram o autor.
- Tela de receitas funciona **offline** (somente leitura, em cache).

## 2. Setores e perfis

**Setores:** Praça Quente · Garden (cozinha fria, brunch, confeitaria) · Bar / Cafeteria · Salão.

| Perfil | Receitas | Estoque | Compras | Reservas | Funcionários | Relatórios / CRM |
|---|---|---|---|---|---|---|
| Gestora | Tudo + custos | Tudo | **Exclusivo** | Tudo | Tudo | Tudo |
| Chef de Cozinha | Praça Quente + Garden (sem custo) | Contagem dessas áreas | — | Ver | Escala da cozinha | — |
| Líder de Bar e Salão (1 pessoa) | Bar (sem custo) | Contagem do bar | — | Ver, criar, editar | Escala de bar e salão | — |
| Produção | Só do seu setor | Contagem (se delegado) | — | — | Própria escala | — |
| Garçom | — | — | — | Reservas do dia + **check-in** | Própria escala | — |

A equipe **nunca** vê custo, CMV ou margem.

## 3. Receitas (fichas técnicas)

- Fonte inicial: planilha "Ficha tecnica - Duna" (Google Sheets) + PDF "Fichas Bar Duna - Montagem".
- Mantidas pela gestora, editáveis no app.
- **Duas visões da mesma ficha:**
  - Equipe: foto, insumos, quantidade, preparo, rendimento.
  - Gestão: tudo isso + custo, CMV, preço, margem.
- **Pré-preparos** (molhos, ganache, espumas, picles) são receitas usadas como insumo de outras receitas. A baixa é em cascata.
- Cada insumo tem **unidade de compra**, **unidade de uso** e **fator de conversão**. Medidas caseiras (colher, concha, fatia, pacote) precisam de conversão para g/ml/un.
- Campo **origem:** Cardápio principal | Exclusiva de evento. Receitas de evento ficam fora da importação da 55pass e da montagem do dia a dia, e podem ser duplicadas.
- Acesso por setor.

## 4. Estoque

- **Curva ABC:**
  - A: contagem semanal ou diária (proteínas, frios, queijos, bebidas alcoólicas).
  - B: contagem quinzenal.
  - C: sem contagem, apenas custo via Compras (inclui itens Q.B.).
- Bebidas e drinks **entram** no estoque.
- Baixa: **contagem física** + **importação do relatório de vendas da 55pass** (CSV/planilha) × fichas = consumo teórico.
- A API da 55pass é desconhecida; integração automática fica como evolução futura.
- Contagem **cega**: o saldo esperado só aparece após finalizar.
- Indicador central: **CMV teórico × real** e perdas por insumo.

## 5. Compras

- **Exclusivo da gestora.**
- Entrada por **QR Code / chave da NF-e**, **XML** ou **foto** (leitura por IA).
- Etapa de **confirmação**: vincular o item da nota ao insumo. O vínculo fica salvo por fornecedor.
- Itens de curva C entram só como custo.
- Campo **Destino:** Estoque principal (padrão) | Evento X.

## 6. Reservas

**Capacidade reservável online:**
- **Salão:** 72 lugares no total (10 mesas de 2, 10 de 4, 2 de 6). Disponível para reserva: **5 de 2, 5 de 4, 1 de 6** (36 lugares).
- **Terraço:** **6 bistrôs de 2** lugares, todos reserváveis, até 2 pessoas por reserva.

**Regras:**
- Alocação automática por mesa:
  - 1–2 pessoas → mesa de 2
  - 3–4 → mesa de 4
  - 5–6 → mesa de 6
  - 7–10 → juntar mesas
- **Máximo online: 10 pessoas.** Acima disso, o cliente é direcionado ao WhatsApp e vira reserva interna.
- Horário livre a cada 30 min. Cada reserva ocupa a mesa por **3 h**.
- Funcionamento:
  - Ter–Sex 10h–22h (última reserva às **20h**)
  - Sáb–Dom 9h–23h (última reserva às **21h**)
  - Segunda fechado
- **Calendário de exceções** (gestora): feriado aberto/fechado, dia fechado, dia de evento.
- Sem sinal ou garantia.
- **Equipe:** calendário do mês com filtro por dia (e por ambiente).
- **Garçons:** check-in "Chegou / Não veio", para medir no-show.
- Confirmação e lembrete no dia: **WhatsApp (API oficial)** na fase final. Até lá, por e-mail.

## 7. Eventos

**Tipos:** aniversário, corporativo, casamento, comemorações.

O app **apenas registra** eventos confirmados (sem funil comercial).

**Campos:**
- Tipo, data, horário, ambiente, nº de convidados
- Contato do responsável
- Cardápio (montado caso a caso, com pratos do cardápio ou receitas exclusivas)
- Valor cobrado, pagamento, observações

**Ocupação:** a gestora define ambiente + horário, e só esse espaço sai da reserva online.

**Níveis:**
- **Pequeno** (ex.: 15 pessoas): casa aberta.
- **Grande** (ex.: casamento): salão fechado.

**Estoque:**
- Evento com cardápio próprio → compra específica → **estoque próprio do evento**.
- Uso de item do estoque principal → **transferência** para o evento.
- No fechamento, as sobras podem ser **devolvidas ao estoque principal**. O restante conta como custo do evento.

## 8. Funcionários

- Cadastro (dados, função, setor, acesso, PIN).
- Escala de trabalho.
- Checklists de abertura e fechamento por setor.
- **Fora do app:** ponto eletrônico (usar sistema certificado), folha de pagamento e rateio de gorjeta.

## 9. CRM / pós-venda

- Base: clientes que reservam (site, WhatsApp, eventos). Futuro: QR Code na mesa para captar quem não reservou.
- **NPS:**
  - Reserva: no dia seguinte (~11h).
  - Evento: 2–3 dias depois.
- **Respostas:**
  - Nota 9–10: link de avaliação no Google.
  - Nota 7–8: agradece.
  - Nota 0–6: alerta imediato para a gestora, sem link do Google.
- **Ações:** aniversário, "sentimos sua falta", campanhas, clientes VIP (aviso ao salão).
- **LGPD:** caixa de consentimento de marketing **não pré-marcada**. Mensagens de serviço (confirmação, lembrete, NPS) não dependem dela.

## 10. Gestão / relatórios

Indicadores:
1. CMV teórico × real
2. Ranking de perdas por insumo
3. Margem por prato (engenharia de cardápio)
4. Variação de preço de fornecedor
5. Ocupação das reservas
6. No-show
7. NPS e comentários
8. Escala × movimento
9. Custo e resultado por evento

**Resumo automático diário por e-mail** para a gestora.

## 11. Fases

| Fase | Prazo | Escopo |
|---|---|---|
| **1** | ~10/12 | Base (login, perfis, setores, PIN) · **Receitas** · **Estoque ABC + contagem** · **Compras com leitura de nota** · Cadastro de funcionários |
| **2** | janeiro | Reservas (site, calendário, check-in, exceções) · Escala + checklists · Importação 55pass + CMV teórico × real |
| **3** | fev/mar | Eventos · Dashboard completo · Resumo por e-mail · CRM + WhatsApp |

Prioridade definida: **estoque antes de reservas.** Regras especiais de Natal e Réveillon serão definidas mais perto da data.

## 12. Pendências conhecidas

- Fichas técnicas incompletas:
  - insumos sem preço ou quantidade;
  - Executivo sem quantidades;
  - aba "Bebidas e drinks" vazia;
  - pré-preparos sem insumos.
- Confirmar se a 55pass exporta vendas por item (formato do arquivo).
- Definir estoque mínimo e curva de cada insumo.
- Identidade visual: ver `brand/README.md`. Fontes da marca (PP Monument Extended, Niveau Grotesk) precisam de licença web; o app usa Krona One + Work Sans por enquanto.
