# Cardápio · Duna Terrazzo

Site estático (HTML, CSS e JS, sem build) com a identidade de [`../brand`](../brand).

## Editar o cardápio

Todo o conteúdo fica em **`dados.js`**: setores, grupos, itens, preços, horários,
endereço e contatos. Edite esse arquivo e o site se monta sozinho. Os itens que
estão lá agora são marcadores de posição.

## Fotos

1. Coloque as imagens em `fotos/` (JPG ou WebP, nome sem acento nem espaço).
2. Aponte no `dados.js`:
   - foto do setor: `foto: { src: "fotos/brunch.jpg", alt: "Mesa de brunch ao sol" }`
   - foto de um item (miniatura redonda): `foto: "fotos/croissant.jpg"`
   - foto da capa (opcional, abaixo do logo): `info.capa`

Tamanhos sugeridos:

| Onde | Formato | Largura |
|---|---|---|
| Setor (moldura em arco) | vertical 4:5 | 1200 px |
| Item (miniatura) | quadrada | 300 px |
| Capa | horizontal 16:9 | 2000 px |

O corte é automático (`object-fit: cover`), então deixe o prato no centro da foto.
Mantenha cada arquivo abaixo de ~400 KB para o site abrir rápido no celular.

## Ver no computador

```bash
cd cardapio && python3 -m http.server 8000
```

E abra http://localhost:8000.

## Publicar no Vercel

1. Em vercel.com, **Add New → Project** e importe este repositório do GitHub.
2. Em **Root Directory**, escolha `cardapio`.
3. Framework Preset: **Other**. Deixe build e output em branco.
4. **Deploy**. Cada push no GitHub atualiza o site.
