/* RITMO DE TRIBUNA TV — comodidades para la tele
   · Teclas 1–9 del control: saltan a las pestañas (1 = Todo, 2 = En vivo, 3 = Radio…)
   · Estrenos: canales con "estreno":"AAAA-MM-DD" salen 14 días en la pestaña 🆕 Estrenos
   · Próximo partido: "proximoPartido":{"rival":"…","fecha":"AAAA-MM-DDTHH:MM","lugar":"…"} → cuenta regresiva arriba
   · Reloj en la cabecera · Pantalla bonita si se va el internet · Protector de pantalla a los 10 min sin uso */
(function(){
  const $ = s => document.querySelector(s);
  const esc = s => String(s || "").replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));

  /* ---------- estrenos (se suma a la preparación de canales de rdt-extras) ---------- */
  const prepAnterior = window.rdtPrep;
  window.rdtPrep = function(CFG){
    const c = prepAnterior ? prepAnterior(CFG) : Object.assign({}, CFG);
    const hoy = Date.now(), nuevos = (c.canales || []).filter(x => x.estreno && hoy - Date.parse(x.estreno) < 14 * 864e5 && hoy >= Date.parse(x.estreno));
    if (nuevos.length){
      c.categorias = [{ id: "estrenos", nombre: "🆕 Estrenos" }].concat((c.categorias || []).filter(k => k.id !== "estrenos"));
      c.canales = nuevos.map(x => Object.assign({}, x, { id: "nuevo-" + x.id, categoria: "estrenos", descripcion: "NUEVO · " + (x.descripcion || "") })).concat(c.canales);
    }
    return c;
  };

  /* ---------- próximo partido ---------- */
  const iniAnterior = window.rdtIniciado;
  let partido = null;
  window.rdtIniciado = function(CFG){
    if (iniAnterior) iniAnterior(CFG);
    partido = CFG.proximoPartido && CFG.proximoPartido.fecha ? CFG.proximoPartido : null;
    pintarPartido();
  };
  function pintarPartido(){
    let b = document.getElementById("rdtPartido");
    const t = partido ? Date.parse(partido.fecha) - Date.now() : -1;
    if (!partido || t < -3 * 3600e3){ if (b) b.remove(); return; }
    if (!b){ b = document.createElement("div"); b.id = "rdtPartido";
      b.style.cssText = "display:flex;gap:10px;align-items:center;justify-content:center;padding:8px 14px;background:linear-gradient(90deg,#0a2a7a,#1d4fd8,#0a2a7a);color:#fff;font:800 15px system-ui;border-bottom:2px solid #fff";
      const h = document.querySelector("header"); (h && h.parentNode ? h.parentNode : document.body).insertBefore(b, h ? h.nextSibling : document.body.firstChild); }
    let cuando;
    if (t <= 0) cuando = "⚽ ¡SE ESTÁ JUGANDO!";
    else { const d = Math.floor(t / 864e5), h = Math.floor(t % 864e5 / 36e5), m = Math.floor(t % 36e5 / 6e4);
      cuando = d > 0 ? `Faltan ${d} día${d > 1 ? "s" : ""} ${h} h` : `Faltan ${h} h ${m} min`; }
    b.innerHTML = `⚽ Próximo partido: <b>Alianza Lima vs ${esc(partido.rival || "—")}</b>${partido.lugar ? " · " + esc(partido.lugar) : ""} · <span style="color:#ffd84d">${cuando}</span>`;
  }
  setInterval(pintarPartido, 30000);

  /* ---------- reloj en la cabecera ---------- */
  function reloj(){
    let r = document.getElementById("rdtReloj");
    const h = document.querySelector("header");
    if (!h) return;
    if (!r){ r = document.createElement("div"); r.id = "rdtReloj"; r.style.cssText = "font:800 20px system-ui;color:#fff;margin-left:auto;margin-right:14px;letter-spacing:1px;opacity:.9";
      const fila = h.firstElementChild || h; const btn = [...fila.children].find(x => x.matches("a,button")); fila.insertBefore(r, btn || null); }
    const d = new Date(); r.textContent = String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
  }
  setInterval(reloj, 15000); setTimeout(reloj, 800);

  /* ---------- teclas 1–9 del control ---------- */
  document.addEventListener("keydown", e => {
    if (document.body.classList.contains("full")) return;
    const t = e.target; if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA")) return;
    const n = /^[1-9]$/.test(e.key) ? +e.key : 0; if (!n) return;
    const p = document.querySelectorAll(".pestana")[n - 1];
    if (p){ p.click(); p.focus(); e.preventDefault(); }
  });

  /* ---------- sin internet ---------- */
  function velo(on){
    let v = document.getElementById("rdtSinRed");
    if (!on){ if (v) v.remove(); return; }
    if (v) return;
    v = document.createElement("div"); v.id = "rdtSinRed";
    v.style.cssText = "position:fixed;inset:0;z-index:99998;display:grid;place-items:center;background:radial-gradient(circle at 50% 30%,#1d4fd8,#071a3d 70%);color:#fff;font:800 22px system-ui;text-align:center";
    v.innerHTML = `<div><div style="font-size:64px">📡</div>Sin internet por un momento…<div style="font:500 16px system-ui;opacity:.8;margin-top:8px">Volvemos solos apenas regrese la conexión 💙🤍</div></div>`;
    document.body.appendChild(v);
  }
  window.addEventListener("offline", () => velo(true));
  window.addEventListener("online", () => { velo(false); });
  if (navigator.onLine === false) velo(true);

  /* ---------- protector de pantalla ---------- */
  let quieto = Date.now();
  const despertar = () => { quieto = Date.now(); const p = document.getElementById("rdtProtector"); if (p) p.remove(); };
  ["keydown", "mousemove", "touchstart", "click"].forEach(ev => document.addEventListener(ev, despertar, true));
  setInterval(() => {
    const sonando = document.querySelector("#pantalla iframe, #pantalla video, #pantalla audio");
    if (sonando || document.getElementById("rdtProtector") || document.getElementById("rdtPuerta") || Date.now() - quieto < 10 * 60e3) return;
    const p = document.createElement("div"); p.id = "rdtProtector";
    p.style.cssText = "position:fixed;inset:0;z-index:99997;background:#030a1f;overflow:hidden;cursor:none";
    p.innerHTML = `<div id="rdtProtLogo" style="position:absolute;font:900 44px system-ui;color:#fff;text-shadow:0 0 30px #2f7bff;transition:left 6s ease-in-out,top 6s ease-in-out;white-space:nowrap">🎺 RITMO DE TRIBUNA<div style="font:700 18px system-ui;color:#9fc0ff;text-align:center">💙🤍 Toca cualquier botón</div></div>`;
    document.body.appendChild(p);
    const mover = () => { const l = document.getElementById("rdtProtLogo"); if (!l) return;
      l.style.left = Math.random() * Math.max(10, innerWidth - 520) + "px"; l.style.top = Math.random() * Math.max(10, innerHeight - 120) + "px"; setTimeout(mover, 6500); };
    setTimeout(mover, 50);
  }, 15000);
  /* ---------- ventanita (imagen en imagen): le avisa a Android cuando algo suena ---------- */
  let pipAntes = null;
  setInterval(() => {
    const p = document.getElementById("pantalla");
    const on = !!(p && p.querySelector("iframe, video, audio")) || !!(window.rdtMusicaSonando && window.rdtMusicaSonando());
    const vert = !!(p && p.classList.contains("vertical") && p.querySelector("iframe, video"));
    const k = on + "|" + vert;
    if (k !== pipAntes){ pipAntes = k; try{ window.Android && Android.reproduciendo(on, vert); }catch(e){} }
  }, 1500);
})();
