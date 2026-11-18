/* =========================================================
   RITMO DE TRIBUNA TV — EXTRAS
   · Modo FANS (por defecto) y modo DUEÑO (?modo=dueno o la APK Dueño)
   · Radio Ritmo de Tribuna 24/7 · Banner "EN VIVO AHORA" · Aviso de actualización
   · Solo DUEÑO: importador de listas M3U (se guardan SOLO en este aparato) y acceso al Tribuna Deck
   ========================================================= */
(function(){
  const qs = new URLSearchParams(location.search);
  let modo = null;
  try{ if(window.Android && Android.modo) modo = Android.modo(); }catch(e){}   // dentro de la APK manda la APK
  if(!modo) modo = qs.get("modo");
  try{ if(modo) localStorage.setItem("rdt_modo", modo); else modo = localStorage.getItem("rdt_modo"); }catch(e){}
  const DUENO = modo === "dueno";
  window.RDT_DUENO = DUENO;
  const leer = (k, d) => { try{ const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; }catch(e){ return d; } };
  const guardar = (k, v) => { try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} };
  const esc = s => String(s||"").replace(/[&<>"']/g, m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));

  /* ---------- 1) preparar la lista de canales (antes de pintar) ---------- */
  window.rdtPrep = function(CFG){
    const c = Object.assign({}, CFG);
    c.categorias = (CFG.categorias || []).slice();
    c.canales = (CFG.canales || []).slice();
    if(!DUENO) c.canales = c.canales.filter(x => x.fuente && !/^PON_AQUI/i.test(x.fuente));
    if(DUENO){
      const listas = leer("rdt_m3u", []);
      listas.forEach((l, i) => {
        const cat = "m3u" + i;
        c.categorias.push({ id: cat, nombre: "📡 " + l.nombre });
        (l.canales || []).forEach((ch, j) => c.canales.push({ id: cat + "_" + j, nombre: ch.nombre, categoria: cat,
          tipo: /\.m3u8(\?|$)/i.test(ch.url) || !/\.(mp4|webm|mp3|aac)(\?|$)/i.test(ch.url) ? "hls" : "mp4", fuente: ch.url, logo: ch.logo || "",
          descripcion: (ch.grupo ? ch.grupo + " · " : "") + "Lista privada (solo en este aparato)", privado: true }));
      });
      c.categorias.push({ id: "dueno", nombre: "🎛 Dueño" });
      const ipDeck = leer("rdt_deck_ip", "");
      c.canales.push({ id: "deck", nombre: "Control del live (Tribuna Deck)", categoria: "dueno", tipo: "enlace",
        fuente: ipDeck ? "http://" + ipDeck + ":8787/deck.html" : "", descripcion: ipDeck ? "Abre los botones del live (misma WiFi de tu casa)" : "Pon la IP de tu laptop en el panel Dueño (abajo)" });
    }
    return c;
  };

  /* ---------- 2) reproducir tipos nuevos ---------- */
  let radio = null;
  window.rdtReproducir = function(c, pantalla){
    if(radio){ try{ radio.audio.pause(); }catch(e){} radio = null; }
    if(c.tipo === "enlace"){
      if(!c.fuente){ pantalla.innerHTML = `<div class="aviso"><div><b>Falta configurar</b>Escribe la IP de tu laptop en el panel Dueño.</div></div>`; return true; }
      pantalla.innerHTML = `<div class="aviso"><div><b>${esc(c.nombre)}</b><a href="${esc(c.fuente)}" style="color:#7fe0ff">Abrir ↗</a></div></div>`;
      location.href = c.fuente; return true;
    }
    if(c.tipo !== "radio") return false;
    const pistas = (c.pistas || []).filter(Boolean), cunas = (c.cunas || []).filter(Boolean);
    if(!pistas.length){   // sin MP3 propios todavía: suena tu lista de YouTube en bucle
      pantalla.innerHTML = `<iframe src="https://www.youtube.com/embed/videoseries?list=${encodeURIComponent(c.fuente || "")}&autoplay=1&playsinline=1&loop=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
      return true;
    }
    const orden = pistas.slice().sort(() => Math.random() - .5);
    let i = 0, desdeCuna = 0;
    pantalla.innerHTML = `<div class="aviso" style="background:radial-gradient(circle at 50% 30%,#1d4fd8,#071a3d 70%)"><div style="text-align:center">
      <div style="font-size:64px">📻</div><b style="font-size:26px">RADIO RITMO DE TRIBUNA</b><span id="rdtRadioT" style="display:block;margin-top:8px;opacity:.85">…</span>
      <audio id="rdtRadioA" controls autoplay style="margin-top:14px;width:min(520px,90%)"></audio></div></div>`;
    const a = pantalla.querySelector("#rdtRadioA"), t = pantalla.querySelector("#rdtRadioT");
    radio = { audio: a };
    const nombre = u => decodeURIComponent(u.split("/").pop().split("?")[0]).replace(/\.[a-z0-9]+$/i, "").replace(/[_]+/g, " ");
    function siguiente(){
      let u;
      if(cunas.length && desdeCuna >= (c.cada || 4)){ u = cunas[Math.floor(Math.random()*cunas.length)]; desdeCuna = 0; t.textContent = "📣 Ritmo de Tribuna"; }
      else { u = orden[i++ % orden.length]; desdeCuna++; t.textContent = "🎵 " + nombre(u); }
      a.src = u; const p = a.play(); if(p && p.catch) p.catch(()=>{});
      if("mediaSession" in navigator){ try{ navigator.mediaSession.metadata = new MediaMetadata({ title: t.textContent.replace(/^\S+\s/, ""), artist: "Ritmo de Tribuna", album: "Radio 24/7" }); }catch(e){} }
    }
    a.onended = siguiente; a.onerror = () => setTimeout(siguiente, 800);
    siguiente();
    return true;
  };

  /* ---------- 3) después de pintar: banner en vivo, actualización y panel dueño ---------- */
  window.rdtIniciado = function(CFG){
    // "EN VIVO AHORA" (lo controlas desde canales.js: "envivoAhora": {"activo": true, "texto": "...", "enlace": "..."})
    let b = document.getElementById("rdtVivo");
    const ev = CFG.envivoAhora;
    if(ev && ev.activo){
      if(!b){ b = document.createElement("a"); b.id = "rdtVivo"; document.body.prepend(b); }
      b.href = ev.enlace || "https://www.tiktok.com/@ritmodetribuna/live";
      b.style.cssText = "display:flex;gap:10px;align-items:center;justify-content:center;padding:10px 14px;background:linear-gradient(90deg,#e0102a,#ff3b5c);color:#fff;font:800 15px system-ui;text-decoration:none;letter-spacing:.5px";
      b.innerHTML = `<span style="width:10px;height:10px;border-radius:50%;background:#fff;animation:rdtLat 1s infinite"></span> 🔴 EN VIVO AHORA · ${esc(ev.texto || "Ritmo de Tribuna está transmitiendo")} <u>Entrar ↗</u>`;
      if(!document.getElementById("rdtLatCss")){ const s = document.createElement("style"); s.id = "rdtLatCss"; s.textContent = "@keyframes rdtLat{50%{opacity:.25}}"; document.head.appendChild(s); }
    } else if(b) b.remove();
    // aviso de actualización (solo dentro de la APK)
    try{
      const ver = window.Android && Android.version ? Android.version() : 0, info = CFG.apk && CFG.apk[DUENO ? "dueno" : "fans"];
      let u = document.getElementById("rdtUpd");
      if(ver && info && info.version > ver && info.url){
        if(!u){ u = document.createElement("a"); u.id = "rdtUpd"; document.body.prepend(u); }
        u.href = info.url;
        u.style.cssText = "display:block;text-align:center;padding:10px;background:#ffd84d;color:#1a1200;font:800 15px system-ui;text-decoration:none";
        u.textContent = "⬆ Hay una versión nueva de la app (" + (info.nombre || "v" + info.version) + "): toca aquí para actualizar";
      } else if(u) u.remove();
    }catch(e){}
    if(DUENO) panelDueno();
  };

  /* ---------- 4) panel DUEÑO: listas M3U privadas + IP del Tribuna Deck ---------- */
  function texto(url){
    try{ if(window.Android && Android.descargarTexto){ const t = Android.descargarTexto(url); if(t) return Promise.resolve(t); } }catch(e){}
    return fetch(url).then(r => r.text());
  }
  function parseM3U(t){
    const out = []; let info = null;
    t.split(/\r?\n/).forEach(l => {
      l = l.trim(); if(!l) return;
      if(l.startsWith("#EXTINF")){ const nom = l.slice(l.lastIndexOf(",") + 1).trim();
        const logo = (/tvg-logo="([^"]*)"/.exec(l) || [])[1] || "", grupo = (/group-title="([^"]*)"/.exec(l) || [])[1] || "";
        info = { nombre: nom || "Canal", logo, grupo }; }
      else if(!l.startsWith("#") && /^https?:\/\//i.test(l)){ out.push(Object.assign({ url: l }, info || { nombre: "Canal " + (out.length + 1) })); info = null; }
    });
    return out.slice(0, 800);
  }
  function panelDueno(){
    if(document.getElementById("rdtDueno")) return;
    const d = document.createElement("section"); d.id = "rdtDueno";
    d.style.cssText = "margin:18px 12px 30px;padding:14px;border-radius:16px;background:#0e1c40;border:1px solid #2a4a92;color:#e6edff;font:14px system-ui";
    d.innerHTML = `<b style="font-size:16px">🎛 Panel Dueño</b> <small style="opacity:.7">(solo en tu versión · nada de esto se sube a internet)</small>
      <div style="margin-top:10px"><b>📡 Agregar lista M3U</b></div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:6px"><input id="rdtM3uNom" placeholder="Nombre (ej. Señal abierta)" style="flex:1;min-width:140px;padding:8px;border-radius:8px;border:1px solid #2a4a92;background:#071330;color:#fff">
      <input id="rdtM3uUrl" placeholder="Enlace .m3u / .m3u8" style="flex:2;min-width:200px;padding:8px;border-radius:8px;border:1px solid #2a4a92;background:#071330;color:#fff">
      <button id="rdtM3uAdd" style="padding:8px 14px;border-radius:8px;border:0;background:#2f7bff;color:#fff;font-weight:800">Agregar</button>
      <label style="padding:8px 12px;border-radius:8px;background:#1d2f63;cursor:pointer">📁 Desde archivo<input id="rdtM3uFile" type="file" accept=".m3u,.m3u8,.txt" hidden></label></div>
      <div style="margin-top:6px"><button id="rdtM3uPeru" style="padding:6px 10px;border-radius:8px;border:1px solid #2a4a92;background:#071330;color:#cfe0ff">＋ Señal abierta de Perú (lista pública iptv-org)</button></div>
      <div id="rdtM3uLista" style="margin-top:8px"></div>
      <div style="margin-top:14px"><b>📱 Tribuna Deck</b> — IP de tu laptop en la WiFi de casa:</div>
      <div style="display:flex;gap:6px;margin-top:6px"><input id="rdtIp" placeholder="ej. 192.168.0.199" style="flex:1;padding:8px;border-radius:8px;border:1px solid #2a4a92;background:#071330;color:#fff">
      <button id="rdtIpOk" style="padding:8px 14px;border-radius:8px;border:0;background:#2f7bff;color:#fff;font-weight:800">Guardar</button></div>
      <div id="rdtMsg" style="margin-top:8px;color:#7fe0ff"></div>`;
    (document.querySelector("main") || document.body).appendChild(d);
    const $ = id => document.getElementById(id), msg = t => $("rdtMsg").textContent = t;
    $("rdtIp").value = leer("rdt_deck_ip", "");
    $("rdtIpOk").onclick = () => { guardar("rdt_deck_ip", $("rdtIp").value.trim()); msg("✓ Guardado. Recargando…"); setTimeout(() => location.reload(), 600); };
    function pintarListas(){
      const ls = leer("rdt_m3u", []);
      $("rdtM3uLista").innerHTML = ls.map((l, i) => `<div style="display:flex;gap:8px;align-items:center;padding:6px 8px;border-radius:8px;background:#071330;margin-top:4px">
        <span style="flex:1">📡 ${esc(l.nombre)} <small style="opacity:.7">· ${(l.canales||[]).length} canales</small></span>
        ${l.url ? `<button data-up="${i}" style="border:0;border-radius:6px;padding:4px 8px">↻</button>` : ""}<button data-del="${i}" style="border:0;border-radius:6px;padding:4px 8px">✕</button></div>`).join("") || `<small style="opacity:.7">Aún no agregaste listas.</small>`;
      $("rdtM3uLista").querySelectorAll("[data-del]").forEach(b => b.onclick = () => { const ls2 = leer("rdt_m3u", []); ls2.splice(+b.dataset.del, 1); guardar("rdt_m3u", ls2); location.reload(); });
      $("rdtM3uLista").querySelectorAll("[data-up]").forEach(b => b.onclick = () => { const ls2 = leer("rdt_m3u", []), l = ls2[+b.dataset.up]; agregar(l.nombre, l.url, +b.dataset.up); });
    }
    function agregar(nombre, url, reemplazar){
      if(!/^https?:\/\//i.test(url)) return msg("Pega un enlace que empiece con http");
      msg("Descargando la lista…");
      texto(url).then(t => {
        const chs = parseM3U(t); if(!chs.length) return msg("No encontré canales en esa lista.");
        const ls = leer("rdt_m3u", []), item = { nombre: nombre || "Mi lista", url, canales: chs };
        if(reemplazar != null) ls[reemplazar] = item; else ls.push(item);
        guardar("rdt_m3u", ls); msg("✓ " + chs.length + " canales. Recargando…"); setTimeout(() => location.reload(), 700);
      }).catch(() => msg("No se pudo descargar esa lista (revisa el enlace)."));
    }
    $("rdtM3uAdd").onclick = () => agregar($("rdtM3uNom").value.trim(), $("rdtM3uUrl").value.trim());
    $("rdtM3uPeru").onclick = () => agregar("Señal abierta Perú", "https://iptv-org.github.io/iptv/countries/pe.m3u");
    $("rdtM3uFile").onchange = e => { const f = e.target.files[0]; if(!f) return; f.text().then(t => { const chs = parseM3U(t); if(!chs.length) return msg("No encontré canales en ese archivo.");
      const ls = leer("rdt_m3u", []); ls.push({ nombre: $("rdtM3uNom").value.trim() || f.name.replace(/\.[^.]+$/, ""), url: "", canales: chs }); guardar("rdt_m3u", ls); location.reload(); }); };
    pintarListas();
  }
})();
