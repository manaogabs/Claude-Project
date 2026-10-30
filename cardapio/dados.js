/*
 * Conteúdo do cardápio do Duna Terrazzo.
 *
 * Tudo o que aparece no site sai deste arquivo: edite aqui e o site se monta sozinho.
 * O texto original, sem revisão, está em conteudo-original.md.
 *
 * SETOR
 *   id         usado na âncora (#entradas). Sem acento nem espaço.
 *   nome       nome no menu e no título.
 *   icone      entradas | garden | sanduiche | quente | confeitaria | kids | brunch
 *              | cafe | bar | vinho | sem-alcool | arco
 *   descricao  frase curta abaixo do título (opcional).
 *   foto       { src: "fotos/entradas.jpg", alt: "descrição da foto" }.
 *              Com src vazio, aparece o espaço reservado para a foto.
 *   grupos     subdivisões do setor (ex.: "Brancos", "Tintos").
 *              Um setor sem subdivisão tem um único grupo, sem título.
 *              Setor sem nenhum item não aparece no site.
 *
 * ITEM
 *   nome, descricao, preco (número: 58 ou 58.9)
 *   nota       linha pequena abaixo da descrição (porções, adicionais).
 *   tags       ex.: ["vegetariano"]
 *   foto       opcional, "fotos/nome-do-prato.jpg": aparece em miniatura ao lado do item.
 */

window.DUNA = {
  info: {
    // Foto opcional abaixo do logo na capa.
    capa: { src: "", alt: "" },
    chamada: "",
    horarios: [],      // ex.: ["Terça a sexta · 8h às 18h", "Sábado e domingo · 9h às 19h"]
    endereco: "",      // ex.: "Rua Exemplo, 123 · Bairro · Cidade"
    instagram: "",     // ex.: "dunaterrazzo" (sem @)
    whatsapp: "",      // ex.: "5511999999999" (só números, com DDI e DDD)
    reservas: "",      // link de reservas, se houver
    observacoes: [
      "Valores em reais.",
      "Informe a equipe sobre alergias e restrições alimentares.",
    ],
  },

  setores: [
    {
      id: "entradas",
      nome: "Entradas",
      icone: "entradas",
      foto: { src: "", alt: "" },
      grupos: [{
        titulo: "",
        itens: [
          { nome: "Duna Fries", preco: 49, descricao: "Batata rústica da casa finalizada com parmesão.", nota: "Adicional aioli trufado + R$ 12" },
          { nome: "Salmon Fries", preco: 67, descricao: "Batata rústica da casa, salmão curado, cream cheese de ervas e limão-siciliano, picles de cebola roxa." },
          { nome: "Burrata com Tomate Confit", preco: 78, descricao: "Burrata fresca, molho pomodoro, tomates confit e pesto. Servida com focaccia artesanal da casa." },
          { nome: "Croquetas de Ragu", preco: 59, descricao: "Croquetas de ragu de carne lentamente cozida, desfiada, e aioli de alho.", nota: "6 unidades" },
          { nome: "Polenta", preco: 57, descricao: "Polenta, molho pomodoro, pesto e stracciatella.", nota: "6 unidades" },
          { nome: "Arancini Ragu de Linguiça", preco: 49, descricao: "Bolinho de risoto, linguiça e mussarela de búfala. Acompanha aioli romesco e aioli de alho.", nota: "4 unidades" },
          { nome: "Bruschetta Caprese", preco: 47, descricao: "Tomate, manjericão, búfala e redução de balsâmico.", nota: "6 unidades" },
        ],
      }],
    },
    {
      id: "saladas",
      nome: "Saladas",
      icone: "garden",
      foto: { src: "", alt: "" },
      grupos: [{
        titulo: "",
        itens: [
          { nome: "Chicken", preco: 59, descricao: "Mix de folhas, rúcula, guacamole, frango grelhado, lascas de parmesão, picles de cebola roxa, nozes e redução de cidra." },
          { nome: "Salmão", preco: 72, descricao: "Mix de folhas, salmão grelhado, mussarela de búfala, tomate confit, amêndoas laminadas e molho pesto." },
          { nome: "Gorgonzola", preco: 64, descricao: "Mix de folhas, presunto parma em lascas, queijo gorgonzola, pera caramelizada, pistache e redução de balsâmico." },
        ],
      }],
    },
    {
      id: "sanduiches",
      nome: "Sanduíches",
      icone: "sanduiche",
      foto: { src: "", alt: "" },
      grupos: [{
        titulo: "",
        itens: [
          { nome: "The Burger", preco: 59, descricao: "Blend da casa, pão brioche com gergelim tostado, queijo cheddar maturado e bacon. Acompanha fritas." },
          { nome: "Burger Trufado", preco: 67, descricao: "Blend da casa, pão brioche, queijo cheddar, picles artesanal e molho trufado com mix de cogumelos. Acompanha fritas com parmesão." },
          { nome: "Parma", preco: 54, descricao: "Ciabatta, presunto parma, stracciatella, tomate confit, pesto, redução de balsâmico e rúcula." },
          { nome: "Caesar", preco: 52, descricao: "Wrap, frango empanado no panko crocante, aioli caesar com anchova e alface-americana, finalizado com parmesão ralado." },
          { nome: "Veg", preco: 49, descricao: "Focaccia, falafel, molho romesco, rúcula, tomate, cebola roxa e mussarela de búfala." },
          { nome: "Shrimp Roll", preco: 67, descricao: "Pão brioche tostado na manteiga, camarões salteados com aioli de ervas e limão-siciliano, cenoura brunoise, finalizado com cebolete." },
        ],
      }],
    },
    {
      id: "pratos",
      nome: "Pratos individuais",
      icone: "quente",
      foto: { src: "", alt: "" },
      grupos: [{
        titulo: "",
        itens: [
          { nome: "Risoto de Moqueca com Camarão", preco: 98, descricao: "Risoto cremoso de moqueca, camarão grelhado e farofa de coco." },
          { nome: "Risoto Siciliano com Salmão", preco: 89, descricao: "Risoto de limão-siciliano, posta de salmão, farofa de pistache, finalizado com parmesão." },
          { nome: "Risoto de Parmesão com Mignon", preco: 92, descricao: "Risoto de parmesão e mignon feito no sous vide, grelhado e com molho rôti." },
          { nome: "Risoto Funghi", preco: 79, descricao: "Risoto com mix de cogumelos salteados e parmesão, finalizado com cebolete." },
          { nome: "Ancho na Brasa", preco: 89, descricao: "Ancho grelhado na brasa, arroz biro-biro, batata frita artesanal e chimichurri da casa." },
          { nome: "Carbonara", preco: 79, descricao: "Spaghetti, gema, parmesão, guanciale e pimenta-do-reino." },
          { nome: "Rigatoni Duna", preco: 84, descricao: "Rigatoni, molho bechamel trufado, gorgonzola, crispy de presunto parma e salsa trufada, finalizado com nozes." },
        ],
      }],
    },
    {
      id: "sobremesas",
      nome: "Sobremesas",
      icone: "confeitaria",
      foto: { src: "", alt: "" },
      grupos: [{
        titulo: "",
        itens: [
          { nome: "Cheesecake de Mirtilo", preco: 48, descricao: "Fatia de cheesecake com calda artesanal de mirtilo." },
          { nome: "Brownie com Caramelo Salgado", preco: 42, descricao: "Brownie, creme de caramelo salgado, quenelle de sorvete de creme, nuts de avelã e flor de sal." },
        ],
      }],
    },
    {
      id: "kids",
      nome: "Kids",
      icone: "kids",
      foto: { src: "", alt: "" },
      grupos: [{
        titulo: "",
        itens: [
          { nome: "Frango", preco: 49, descricao: "Filé de frango grelhado em iscas, arroz branco e fritas." },
          { nome: "Mignon", preco: 59, descricao: "Iscas de mignon grelhado, arroz branco e fritas." },
          { nome: "Spaghetti", preco: 42, descricao: "Ao molho pomodoro." },
        ],
      }],
    },
    {
      id: "brunch",
      nome: "Brunch",
      icone: "brunch",
      descricao: "Disponível até as 18h.",
      foto: { src: "", alt: "" },
      grupos: [
        {
          titulo: "Toasts",
          itens: [
            { nome: "Avocado Toast", preco: 39, descricao: "Pão de fermentação natural, creme de avocado, ovo pochê, ricota, pimenta calabresa e flor de sal." },
            { nome: "Salmão Toast", preco: 49, descricao: "Pão de fermentação natural, creme de avocado, salmão gravlax, sour cream, picles de cebola roxa e raspas de limão-siciliano." },
            { nome: "Parma Trufado", preco: 42, descricao: "Pão de fermentação natural, pesto, creme de ricota, presunto parma, nuts de pistache e mel trufado." },
            { nome: "Cogumelos", preco: 39, descricao: "Pão de fermentação natural, mix de cogumelos, creme de ricota e pimenta calabresa, finalizado com redução de balsâmico." },
            { nome: "Rouge", preco: 39, descricao: "Pão de fermentação natural tostado, queijo brie levemente derretido, bacon crocante e redução de frutas vermelhas." },
          ],
        },
        {
          titulo: "Bagel",
          itens: [
            { nome: "Breakfast Bagel", preco: 36, descricao: "Bagel com gergelim, cream cheese, ovos rosalete, queijo e bacon." },
          ],
        },
        {
          titulo: "Doces",
          itens: [
            { nome: "French Toast", preco: 38, descricao: "Brioche na manteiga, creme de natas, calda de frutas vermelhas frescas e pistache tostado." },
            { nome: "French Toast Tiramisu", preco: 38, descricao: "Brioche na manteiga, mascarpone, cacau 70% e creme de espresso." },
            { nome: "Bolo Triplo Chocolate", preco: 49, descricao: "Bolo de chocolate nobre com tripla camada de recheio: chocolate 70%, chocolate ao leite e chocolate branco." },
          ],
        },
      ],
    },
    {
      id: "cafeteria",
      nome: "Cafeteria",
      icone: "cafe",
      foto: { src: "", alt: "" },
      grupos: [
        {
          titulo: "Bebidas quentes",
          itens: [
            { nome: "Cappuccino", preco: 18 },
            { nome: "Espresso Simples", preco: 8 },
            { nome: "Espresso Duplo", preco: 12 },
            { nome: "Latte", preco: 16 },
            { nome: "Matcha Latte", preco: 22 },
            { nome: "Chocolate Quente", preco: 26 },
          ],
        },
        {
          titulo: "Iced",
          itens: [
            { nome: "Iced Latte", preco: 22 },
            { nome: "Caramelo Salgado Latte", preco: 22 },
            { nome: "Matcha Latte", preco: 24 },
            { nome: "Strawberry Matcha", preco: 26 },
          ],
        },
        {
          titulo: "Iced zero açúcar",
          itens: [
            { nome: "Iced Latte", preco: 28 },
            { nome: "Matcha Latte", preco: 28 },
          ],
        },
      ],
    },
    {
      id: "bebidas",
      nome: "Bebidas",
      icone: "sem-alcool",
      descricao: "Smoothies, sucos, refrigerantes e água.",
      foto: { src: "", alt: "" },
      grupos: [
        {
          titulo: "Smoothies zero açúcar",
          itens: [
            { nome: "Frutas Vermelhas", preco: 38, descricao: "Frutas vermelhas, iogurte grego, leite, xarope de baunilha zero, proteína de colágeno e creme de coco." },
            { nome: "Tropical", preco: 38, descricao: "Manga, maracujá, leite, iogurte grego, xarope de baunilha zero e proteína de colágeno." },
            { nome: "Blue", preco: 38, descricao: "Abacaxi, banana, iogurte grego, leite de coco, xarope de baunilha zero e spirulina azul." },
          ],
        },
        {
          titulo: "Sucos",
          itens: [
            { nome: "Sucos Naturais", preco: 18, descricao: "Laranja, abacaxi, limão, morango e maracujá.", nota: "Com duas frutas + R$ 6" },
            { nome: "Abacaxi com Hortelã", preco: 26, descricao: "Abacaxi, água de coco, hortelã, limão e eletrólitos Jungle.", tags: ["Funcional Jungle"] },
            { nome: "Morango com Gengibre", preco: 26, descricao: "Morango, água de coco, gengibre, limão e eletrólitos Jungle.", tags: ["Funcional Jungle"] },
          ],
        },
        {
          titulo: "Refrigerantes e água",
          itens: [
            { nome: "Refrigerante", preco: 10, descricao: "Coca-Cola, Coca-Cola Zero, Guaraná, Guaraná Zero, Sprite e Sprite Zero." },
            { nome: "Água com e sem gás", preco: 7 },
          ],
        },
      ],
    },
    {
      id: "bar",
      nome: "Bar",
      icone: "bar",
      descricao: "Drinks e cervejas.",
      foto: { src: "", alt: "" },
      grupos: [
        {
          titulo: "Drinks",
          itens: [
            { nome: "Negroni", preco: 42, descricao: "Gin, Campari, vermute e rodela de laranja." },
            { nome: "Aperol Spritz", preco: 39, descricao: "Aperol, prosecco, água com gás e laranja-baía." },
            { nome: "Hugo Spritz", preco: 42, descricao: "Licor de flor de sabugueiro, prosecco, água com gás, hortelã e limão-siciliano." },
            { nome: "Limoncello Spritz", preco: 42, descricao: "Limoncello, prosecco e água com gás." },
            { nome: "Moscow Mule", preco: 39, descricao: "Vodka, limão, xarope de capim-santo e espuma de gengibre." },
            { nome: "Gin Tônica", preco: 38, descricao: "Gin, suco de limão-siciliano e água tônica." },
            { nome: "Fitzgerald", preco: 42, descricao: "Gin, suco de limão fresco, xarope de açúcar e angostura." },
            { nome: "Cosmopolitan", preco: 39, descricao: "Vodka, Cointreau, suco de limão-siciliano e cranberry." },
          ],
        },
        {
          titulo: "Cervejas",
          itens: [
            { nome: "Heineken e Heineken Zero", preco: 17 },
            { nome: "Corona e Corona Zero", preco: 17 },
          ],
        },
      ],
    },
    {
      id: "vinhos",
      nome: "Vinhos",
      icone: "vinho",
      foto: { src: "", alt: "" },
      grupos: [
        {
          titulo: "Espumantes e frisantes",
          itens: [
            { nome: "Santa Colina Brut", preco: 89, descricao: "Espumante brut fresco, de bolhas finas. O coringa da casa: entradas, saladas, frutos do mar e carnes brancas." },
            { nome: "Mayos Pink", preco: 110, descricao: "Frisante rosé leve, com um toque de dulçor. Para saladas e pratos leves." },
          ],
        },
        {
          titulo: "Brancos",
          itens: [
            { nome: "Mapuche Sauvignon Blanc", preco: 110, descricao: "Fresco, aromático e de acidez viva. Para peixes leves, saladas e risotos de queijo ou vegetais." },
            { nome: "Casal Barcelos Vinho Verde", preco: 120, descricao: "Vinho Verde português, leve, jovem e refrescante. Para peixes, frutos do mar e saladas." },
            { nome: "Ola Po Chardonnay", preco: 105, descricao: "Corpo médio, macio e redondo. Para peixes grelhados, carnes brancas e massas de molho suave." },
          ],
        },
        {
          titulo: "Rosé",
          itens: [
            { nome: "Toro de Piedra Rosé", preco: 120, descricao: "Fresco e frutado. Para saladas, frutos do mar, peixes grelhados, aperitivos e massas leves." },
          ],
        },
        {
          titulo: "Tintos",
          itens: [
            { nome: "La Grive Musicienne Pinot Noir", preco: 180, descricao: "Leve e elegante, com notas de frutas vermelhas. Para aperitivos, massas e risotos leves, aves e queijos maduros." },
            { nome: "Mayos Malbec", preco: 140, descricao: "Frutado e macio, de taninos suaves. Para queijos amarelos, embutidos e hambúrguer." },
            { nome: "Cumbres Cabernet Sauvignon", preco: 150, descricao: "Estruturado, com frutas escuras e taninos firmes. Para carnes vermelhas, pratos condimentados e massas." },
            { nome: "Primitivo di Salento", preco: 195, descricao: "Italiano encorpado e aveludado, de frutas maduras e final longo. Para carnes grelhadas, massas, queijos curados e risotos." },
          ],
        },
      ],
    },
  ],
};
