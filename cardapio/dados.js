/*
 * Conteúdo do cardápio do Duna Terrazzo.
 *
 * Tudo o que aparece no site sai deste arquivo: edite aqui e o site se monta sozinho.
 *
 * SETOR
 *   id         usado na âncora (#brunch). Sem acento nem espaço.
 *   nome       nome no menu e no título.
 *   icone      brunch | garden | quente | confeitaria | cafe | bar | vinho | sem-alcool | arco
 *   descricao  frase curta abaixo do título (opcional).
 *   foto       { src: "fotos/brunch.jpg", alt: "descrição da foto" }.
 *              Com src vazio, aparece o espaço reservado para a foto.
 *   grupos     subdivisões do setor (ex.: "Drinks autorais", "Clássicos").
 *              Um setor sem subdivisão tem um único grupo, sem título.
 *
 * ITEM
 *   nome, descricao, preco (número: 58 ou 58.9), tags (ex.: ["vegano", "sem glúten"])
 *   foto       opcional, "fotos/nome-do-prato.jpg": aparece em miniatura ao lado do item.
 *
 * Os itens abaixo são marcadores de posição: troque pelos do cardápio.
 */

const exemplo = (n) =>
  Array.from({ length: n }, () => ({
    nome: "Nome do item",
    descricao: "Descrição curta com os ingredientes principais.",
    preco: 0,
  }));

window.DUNA = {
  info: {
    // Foto opcional abaixo do logo na capa.
    capa: { src: "", alt: "" },
    chamada: "Cozinha de ingredientes, café e coquetelaria em um terraço sob o sol.",
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
      id: "brunch",
      nome: "Brunch",
      icone: "brunch",
      descricao: "Servido o dia todo.",
      foto: { src: "", alt: "" },
      grupos: [{ titulo: "", itens: exemplo(4) }],
    },
    {
      id: "garden",
      nome: "Garden",
      icone: "garden",
      descricao: "Saladas, bowls e entradas frias.",
      foto: { src: "", alt: "" },
      grupos: [{ titulo: "", itens: exemplo(4) }],
    },
    {
      id: "pratos",
      nome: "Pratos",
      icone: "quente",
      descricao: "Da praça quente.",
      foto: { src: "", alt: "" },
      grupos: [{ titulo: "", itens: exemplo(4) }],
    },
    {
      id: "confeitaria",
      nome: "Confeitaria",
      icone: "confeitaria",
      descricao: "Doces e sobremesas da casa.",
      foto: { src: "", alt: "" },
      grupos: [{ titulo: "", itens: exemplo(3) }],
    },
    {
      id: "cafeteria",
      nome: "Cafeteria",
      icone: "cafe",
      descricao: "",
      foto: { src: "", alt: "" },
      grupos: [
        { titulo: "Cafés", itens: exemplo(3) },
        { titulo: "Bebidas quentes", itens: exemplo(2) },
      ],
    },
    {
      id: "bar",
      nome: "Bar",
      icone: "bar",
      descricao: "",
      foto: { src: "", alt: "" },
      grupos: [
        { titulo: "Drinks autorais", itens: exemplo(3) },
        { titulo: "Clássicos", itens: exemplo(3) },
      ],
    },
    {
      id: "sem-alcool",
      nome: "Sem álcool",
      icone: "sem-alcool",
      descricao: "Sucos, sodas e águas.",
      foto: { src: "", alt: "" },
      grupos: [{ titulo: "", itens: exemplo(3) }],
    },
  ],
};
