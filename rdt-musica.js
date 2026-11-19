/* RITMO DE TRIBUNA TV — 🎧 MI MÚSICA
   Las canciones de Ritmo de Tribuna (MP3 en GitHub Releases) con reproductor, álbumes, favoritas y descarga.
   Catálogo: musica.json (en el repositorio). Para agregar canciones: súbelas al Release «musica» y agrégalas al catálogo. */
(function(){
  const URL_CAT = "https://clazo12.github.io/ritmodetribuna-tv/musica.json";
  const $ = s => document.querySelector(s);
  const esc = s => String(s || "").replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
  const LS = { get: k => { try{ return localStorage.getItem(k); }catch(e){ return null; } }, set: (k, v) => { try{ localStorage.setItem(k, v); }catch(e){} } };
  const mmss = s => { s = Math.max(0, Math.round(s || 0)); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); };
  let cat = null, todas = [], cola = [], idx = -1, aleatorio = false, repetir = false, vista = "albumes", albumSel = null;
  const audio = new Audio(); audio.preload = "none";
  window.rdtMusicaSonando = () => !audio.paused;
  const favKey = () => "rdt_mm_fav_" + (LS.get("rdt_perfil") || "p0");
  const favs = () => { try{ return new Set(JSON.parse(LS.get(favKey()) || "[]")); }catch(e){ return new Set(); } };
  const togFav = a => { const f = favs(); f.has(a) ? f.delete(a) : f.add(a); LS.set(favKey(), JSON.stringify([...f])); pintar(); };

  /* ---------- pestaña ---------- */
  const prepAnterior = window.rdtPrep;
  window.rdtPrep = function(CFG){
    const c = prepAnterior ? prepAnterior(CFG) : Object.assign({}, CFG);
    if (!(c.categorias || []).some(k => k.id === "mimusica")) c.categorias = [{ id: "mimusica", nombre: "🎧 Mi música" }].concat(c.categorias || []);
    return c;
  };
  const activa = () => { const p = document.querySelector(".pestana.activa"); return p && p.dataset.cat === "mimusica"; };
  function cargar(){
    if (cat) return Promise.resolve(cat);
    return fetch(URL_CAT + "?t=" + Math.floor(Date.now() / 6e5)).then(r => r.json()).then(j => {
      cat = j; todas = [];
      (j.albumes || []).forEach(a => (a.canciones || []).forEach(c => todas.push(Object.assign({ album: a.nombre, url: j.base + c.archivo, img: j.base + (c.portada || a.portada) }, c))));
      return cat;
    });
  }

  /* ---------- vista ---------- */
  const css = document.createElement("style");
  css.textContent = `
  #grilla:has(> #mm){display:block !important}
  #mm{color:#fff}
  #mm .barra{display:flex;gap:14px;align-items:center;padding:12px;border-radius:16px;background:linear-gradient(135deg,#123a9c,#071a3d);margin-bottom:14px}
  #mm .barra img{width:64px;height:64px;border-radius:10px;object-fit:cover;background:#0b2a6f}
  #mm .barra .t{flex:1;min-width:0}#mm .barra b{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  #mm .barra small{color:#9fc0ff}#mm .pg{height:5px;border-radius:3px;background:rgba(255,255,255,.18);margin-top:8px;overflow:hidden}
  #mm .pg i{display:block;height:100%;width:0;background:#fff}
  #mm .ctl{display:flex;gap:6px}#mm .ctl button,#mm .chips button{background:rgba(255,255,255,.12);color:#fff;border-radius:999px;padding:9px 12px;font-weight:800;font-size:15px}
  #mm .ctl button.on,#mm .chips button.on{background:#fff;color:#0b2a6f}
  #mm .chips{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 12px}
  #mm .albs{display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:14px}
  #mm .alb{background:var(--panel,#111f45);border-radius:14px;overflow:hidden;text-align:left;color:#fff}
  #mm .alb img{width:100%;aspect-ratio:1;object-fit:cover;display:block}#mm .alb div{padding:8px 10px}#mm .alb small{color:#9fc0ff}
  #mm .lista{display:flex;flex-direction:column;gap:6px}
  #mm .can{display:flex;gap:10px;align-items:center;padding:8px 10px;border-radius:12px;background:var(--panel,#111f45);text-align:left;color:#fff}
  #mm .can.sonando{outline:2px solid #fff}#mm .can img{width:44px;height:44px;border-radius:8px;object-fit:cover}
  #mm .can .t{flex:1;min-width:0}#mm .can b{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:15px}#mm .can small{color:#9fc0ff}
  #mm .can a,#mm .can span.f{padding:6px 9px;border-radius:999px;background:rgba(255,255,255,.1);color:#fff;text-decoration:none;font-size:14px}
  #mm .redes{margin-top:16px;display:flex;gap:8px;flex-wrap:wrap}#mm .redes a{padding:8px 12px;border-radius:999px;color:#fff;text-decoration:none;font-weight:800;font-size:14px}`;
  document.head.appendChild(css);

  function pintar(){
    const g = document.getElementById("grilla"); if (!g || !activa()) return;
    if (!cat){ g.innerHTML = `<div id="mm"><p>Cargando la música…</p></div>`; cargar().then(pintar).catch(() => { g.innerHTML = `<div id="mm"><p>No se pudo cargar la música. Revisa tu internet.</p></div>`; }); return; }
    g.classList.remove("inicio");
    const c = cola[idx], f = favs();
    const barra = `<div class="barra">${c ? `<img src="${esc(c.img)}" alt="">` : `<img alt="">`}<div class="t"><b>${c ? esc(c.titulo) : "Elige una canción"}</b>
      <small>${c ? esc(c.album) + " · Ritmo de Tribuna" : "Toda la música de Ritmo de Tribuna, gratis para la hinchada"}</small><div class="pg"><i id="mmPg"></i></div></div>
      <div class="ctl"><button data-a="ant">⏮</button><button data-a="play">${audio.paused ? "▶" : "⏸"}</button><button data-a="sig">⏭</button>
      <button data-a="alea" class="${aleatorio ? "on" : ""}" title="Aleatorio">🔀</button><button data-a="rep" class="${repetir ? "on" : ""}" title="Repetir">🔁</button></div></div>`;
    const chips = `<div class="chips"><button data-v="albumes" class="${vista === "albumes" ? "on" : ""}">💿 Álbumes</button><button data-v="todas" class="${vista === "todas" ? "on" : ""}">🎵 Todas (${todas.length})</button>
      <button data-v="favs" class="${vista === "favs" ? "on" : ""}">❤️ Mis favoritas (${[...f].length})</button><button data-a="todo">▶ Escuchar todo</button></div>`;
    let cuerpo = "";
    if (vista === "albumes" && !albumSel){
      cuerpo = `<div class="albs">${cat.albumes.map((a, i) => `<button class="alb tarjetaMM" data-alb="${i}"><img src="${esc(cat.base + a.portada)}" alt=""><div><b>${esc(a.nombre)}</b><br><small>${a.canciones.length} canciones</small></div></button>`).join("")}</div>`;
    } else {
      let l = vista === "favs" ? todas.filter(x => f.has(x.archivo)) : vista === "albumes" ? todas.filter(x => x.album === albumSel) : todas;
      cuerpo = (albumSel && vista === "albumes" ? `<div class="chips"><button data-a="volver">← Álbumes</button><button data-a="playalb">▶ Escuchar «${esc(albumSel)}»</button></div>` : "")
        + (l.length ? `<div class="lista">${l.map(x => `<div class="can${c && c.archivo === x.archivo ? " sonando" : ""}"><button class="tarjetaMM" data-play="${esc(x.archivo)}" style="display:flex;gap:10px;align-items:center;flex:1;min-width:0;background:none;color:#fff;text-align:left">
          <img src="${esc(x.img)}" alt="" loading="lazy"><span class="t"><b>${esc(x.titulo)}</b><small>${esc(x.album)} · ${mmss(x.dur)}</small></span></button>
          <span class="f" role="button" tabindex="0" data-fav="${esc(x.archivo)}">${f.has(x.archivo) ? "❤️" : "🤍"}</span><a href="${esc(x.url)}" download="${esc(x.titulo)}.mp3" target="_blank" rel="noopener" title="Descargar">⬇️</a></div>`).join("")}</div>`
          : `<p>Aún no tienes favoritas. Toca 🤍 en una canción para guardarla.</p>`);
    }
    const redes = `<div class="redes"><a href="https://open.spotify.com/artist/3UfsHgWx8pKJIc22zsO9xv" style="background:#1db954">🎧 Escúchame en Spotify</a><a href="https://www.youtube.com/@RitmoDeTribuna" style="background:#e0102a">▶ YouTube</a><a href="https://www.tiktok.com/@ritmodetribuna" style="background:#111">TikTok</a></div>`;
    g.innerHTML = `<div id="mm">${barra}${chips}${cuerpo}${redes}</div>`;
  }

  /* ---------- reproducción ---------- */
  function sonar(i){
    if (!cola.length) return; idx = (i + cola.length) % cola.length; const c = cola[idx];
    audio.src = c.url; const p = audio.play(); if (p && p.catch) p.catch(() => {});
    if ("mediaSession" in navigator){ try{ navigator.mediaSession.metadata = new MediaMetadata({ title: c.titulo, artist: "Ritmo de Tribuna", album: c.album, artwork: [{ src: c.img, sizes: "800x800", type: "image/jpeg" }] });
      navigator.mediaSession.setActionHandler("nexttrack", () => sig()); navigator.mediaSession.setActionHandler("previoustrack", () => sonar(idx - 1)); }catch(e){} }
    try{ window.Android && Android.reproduciendo && Android.reproduciendo(true, false); }catch(e){}
    pintar();
  }
  function sig(){ if (!cola.length) return; if (aleatorio) sonar(Math.floor(Math.random() * cola.length)); else if (idx + 1 < cola.length || repetir) sonar(idx + 1); else { audio.pause(); pintar(); } }
  function ponerCola(lista, empezar){ cola = lista.slice(); idx = -1; sonar(empezar || 0); }
  audio.addEventListener("ended", () => repetir && cola.length === 1 ? sonar(idx) : sig());
  audio.addEventListener("timeupdate", () => { const i = document.getElementById("mmPg"); if (i && audio.duration) i.style.width = (audio.currentTime / audio.duration * 100) + "%"; });
  audio.addEventListener("play", pintar); audio.addEventListener("pause", pintar);

  document.addEventListener("click", e => {
    const mm = e.target.closest("#mm");
    if (!mm){ if (e.target.closest(".tarjeta")) audio.pause(); return; }   // si eliges un canal de video, se pausa la música
    const b = e.target.closest("[data-a],[data-v],[data-alb],[data-play],[data-fav]"); if (!b) return;
    e.stopPropagation();
    if (b.dataset.v){ vista = b.dataset.v; albumSel = null; return pintar(); }
    if (b.dataset.alb){ albumSel = cat.albumes[+b.dataset.alb].nombre; return pintar(); }
    if (b.dataset.fav) return togFav(b.dataset.fav);
    if (b.dataset.play){
      const l = vista === "favs" ? todas.filter(x => favs().has(x.archivo)) : vista === "albumes" && albumSel ? todas.filter(x => x.album === albumSel) : todas;
      return ponerCola(l, Math.max(0, l.findIndex(x => x.archivo === b.dataset.play)));
    }
    const a = b.dataset.a;
    if (a === "play"){ if (!cola.length) ponerCola(todas); else if (audio.paused) audio.play(); else audio.pause(); }
    else if (a === "sig") sig(); else if (a === "ant") sonar(idx - 1);
    else if (a === "alea"){ aleatorio = !aleatorio; pintar(); } else if (a === "rep"){ repetir = !repetir; pintar(); }
    else if (a === "todo"){ aleatorio = true; ponerCola(todas, Math.floor(Math.random() * todas.length)); }
    else if (a === "volver"){ albumSel = null; pintar(); }
    else if (a === "playalb") ponerCola(todas.filter(x => x.album === albumSel));
  }, true);

  // cuando se elige la pestaña «Mi música», se dibuja la vista
  new MutationObserver(() => { if (activa() && !document.getElementById("mm")) pintar(); }).observe(document.body, { childList: true, subtree: true });
})();
