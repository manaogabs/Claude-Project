(() => {
  const { info, setores } = window.DUNA;

  // Ícones em traço fino, na mesma linguagem linear do logo.
  const ICONES = {
    brunch: '<path d="M4 23h24"/><path d="M8.5 23a7.5 7.5 0 0 1 15 0"/><path d="M16 8v3.5M7.2 12.2l2.4 2.4M24.8 12.2l-2.4 2.4"/>',
    garden: '<path d="M7 25C7 14 14 7.5 25.5 6.5 25.5 18 19 25 7 25z"/><path d="M7 25 18.5 13.5"/>',
    quente: '<path d="M5 24h22"/><path d="M7 24a9 9 0 0 1 18 0"/><circle cx="16" cy="13" r="1.4"/>',
    confeitaria: '<path d="M6 26h20v-8H6z"/><path d="M6 22h20"/><path d="M16 18v-4.5"/><path d="M16 10.8c-1.4-1.3 0-3.3 0-3.3s1.4 2 0 3.3z"/>',
    cafe: '<path d="M6 13h16v6.5A6.5 6.5 0 0 1 15.5 26h-3A6.5 6.5 0 0 1 6 19.5z"/><path d="M22 15h2a3 3 0 0 1 0 6h-2.3"/><path d="M11.5 5.5c-1.2 1.6 1.2 2.6 0 4.4M16.5 5.5c-1.2 1.6 1.2 2.6 0 4.4"/>',
    bar: '<path d="M6 9h20c0 5-4.5 8.5-10 8.5S6 14 6 9z"/><path d="M16 17.5V26M11.5 26h9"/>',
    vinho: '<path d="M11 5h10v6.5a5 5 0 0 1-10 0z"/><path d="M11 9h10"/><path d="M16 16.5V26M12 26h8"/>',
    "sem-alcool": '<path d="M9 9h14l-1.6 17H10.6z"/><path d="M9.6 15h12.8"/><path d="M18 9l2.5-4.5"/>',
    arco: '<path d="M6 26V6a20 20 0 0 1 20 20z"/>',
  };

  const icone = (nome) =>
    `<svg class="icone" viewBox="0 0 32 32" aria-hidden="true">${ICONES[nome] || ICONES.arco}</svg>`;

  const esc = (t = "") =>
    String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  const preco = (v) => {
    if (v === undefined || v === null || v === "") return "";
    if (typeof v === "string") return esc(v);
    return Number.isInteger(v) ? String(v) : v.toFixed(2).replace(".", ",");
  };

  const foto = (f, classe) =>
    f && f.src
      ? `<figure class="${classe}"><img src="${esc(f.src)}" alt="${esc(f.alt)}" loading="lazy" decoding="async"></figure>`
      : `<figure class="${classe} foto--vazia" aria-hidden="true"><span class="rotulo">Espaço para foto</span></figure>`;

  const item = (i) => `
    <li class="item${i.foto ? " item--foto" : ""}">
      ${i.foto ? `<img class="item__foto" src="${esc(i.foto)}" alt="" loading="lazy" decoding="async">` : ""}
      <div class="item__texto">
        <div class="item__linha">
          <h4 class="item__nome">${esc(i.nome)}</h4>
          <span class="item__pontos" aria-hidden="true"></span>
          <span class="item__preco">${preco(i.preco)}</span>
        </div>
        ${i.descricao ? `<p class="item__desc">${esc(i.descricao)}</p>` : ""}
        ${i.tags && i.tags.length ? `<p class="item__tags">${i.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</p>` : ""}
      </div>
    </li>`;

  const grupo = (g) => `
    <div class="grupo">
      ${g.titulo ? `<h3 class="grupo__titulo rotulo">${esc(g.titulo)}</h3>` : ""}
      <ul class="itens">${g.itens.map(item).join("")}</ul>
    </div>`;

  const setor = (s, n) => `
    <section class="setor${n % 2 ? " setor--inverso" : ""}" id="${esc(s.id)}" aria-labelledby="t-${esc(s.id)}">
      <div class="setor__midia">${foto(s.foto, "setor__foto")}</div>
      <div class="setor__conteudo">
        <header class="setor__cabeca">
          <span class="setor__selo">${icone(s.icone)}</span>
          <span class="rotulo setor__num">${String(n + 1).padStart(2, "0")}</span>
          <h2 class="setor__nome" id="t-${esc(s.id)}">${esc(s.nome)}</h2>
          ${s.descricao ? `<p class="setor__desc">${esc(s.descricao)}</p>` : ""}
        </header>
        ${s.grupos.map(grupo).join("")}
      </div>
    </section>`;

  // Montagem
  document.getElementById("cardapio").innerHTML = setores.map(setor).join("");

  document.getElementById("menu").innerHTML = setores
    .map((s) => `<li><a class="menu__link" href="#${esc(s.id)}" data-alvo="${esc(s.id)}">${icone(s.icone)}<span>${esc(s.nome)}</span></a></li>`)
    .join("");

  document.getElementById("atalhos").innerHTML = setores
    .map((s) => `<li><a href="#${esc(s.id)}">${icone(s.icone)}<span>${esc(s.nome)}</span></a></li>`)
    .join("");

  document.getElementById("chamada").textContent = info.chamada || "";

  if (info.capa && info.capa.src) {
    const capa = document.getElementById("capa-foto");
    capa.innerHTML = `<img src="${esc(info.capa.src)}" alt="${esc(info.capa.alt)}" decoding="async">`;
    capa.hidden = false;
  }

  const blocos = [];
  if (info.horarios && info.horarios.length)
    blocos.push(`<div><h3 class="rotulo">Horários</h3>${info.horarios.map((h) => `<p>${esc(h)}</p>`).join("")}</div>`);
  if (info.endereco)
    blocos.push(`<div><h3 class="rotulo">Endereço</h3><p><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.endereco)}" target="_blank" rel="noopener">${esc(info.endereco)}</a></p></div>`);
  const contatos = [];
  if (info.instagram) contatos.push(`<a class="pilula" href="https://instagram.com/${esc(info.instagram)}" target="_blank" rel="noopener">@${esc(info.instagram)}</a>`);
  if (info.whatsapp) contatos.push(`<a class="pilula" href="https://wa.me/${esc(info.whatsapp)}" target="_blank" rel="noopener">WhatsApp</a>`);
  if (info.reservas) contatos.push(`<a class="pilula pilula--cheia" href="${esc(info.reservas)}" target="_blank" rel="noopener">Reservar</a>`);
  if (contatos.length) blocos.push(`<div><h3 class="rotulo">Contato</h3><p class="rodape__contatos">${contatos.join("")}</p></div>`);
  document.getElementById("info").innerHTML = blocos.join("");
  document.getElementById("obs").innerHTML = (info.observacoes || []).map((o) => `<li>${esc(o)}</li>`).join("");

  // Menu: marca o setor visível e mantém a pílula ativa à vista.
  const lista = document.getElementById("menu");
  const links = new Map([...lista.querySelectorAll(".menu__link")].map((a) => [a.dataset.alvo, a]));
  let ativo = null;

  const ativar = (id) => {
    if (id === ativo) return;
    ativo = id;
    links.forEach((a, chave) => {
      const sim = chave === id;
      a.classList.toggle("ativo", sim);
      if (sim) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
    const a = links.get(id);
    if (a) {
      const alvo = a.offsetLeft - (lista.clientWidth - a.offsetWidth) / 2;
      lista.scrollTo({ left: alvo, behavior: "smooth" });
    }
  };

  const observador = new IntersectionObserver(
    (entradas) => entradas.forEach((e) => e.isIntersecting && ativar(e.target.id)),
    { rootMargin: "-40% 0px -55% 0px" }
  );
  document.querySelectorAll(".setor").forEach((s) => observador.observe(s));

  // Topo compacto e botão de voltar após a capa.
  const capa = document.getElementById("inicio");
  new IntersectionObserver(([e]) => {
    document.body.classList.toggle("rolado", !e.isIntersecting);
    if (!e.isIntersecting) return;
    ativo = null;
    links.forEach((a) => { a.classList.remove("ativo"); a.removeAttribute("aria-current"); });
  }, { rootMargin: "-120px 0px 0px 0px" }).observe(capa);

  // Entrada suave dos setores.
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revelar = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visivel");
          revelar.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px" });
    document.querySelectorAll(".setor").forEach((s) => {
      s.classList.add("revelar");
      revelar.observe(s);
    });
  }
})();
