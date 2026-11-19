/* =========================================================
   RITMO DE TRIBUNA TV — CONFIGURACIÓN DE CANALES
   Para agregar un video: copia un bloque { ... }, cambia "id" y "fuente"
   (el ID de YouTube: lo que va después de v= en el link), "nombre" y "categoria".
   Tipos: "tiktok" (número del video), "spotify" (artist/ID, album/ID o playlist/ID), "playlist" (ID de lista de YouTube), "youtube", "youtube-live" (ID de canal UC...), "hls" (.m3u8), "mp4".
   youtubeApiKey: tu clave de YouTube Data API v3 para que el Player busque en YouTube.
   Luego doble clic en COMPILAR-APK.bat
   ========================================================= */
window.RDT_CONFIG = {
  "nombre": "Ritmo de Tribuna TV",
  "subtitulo": "por DJ Carlos Bazo",
  "urlRemota": "",
  "youtubeApiKey": "",
  "categorias": [
    {
      "id": "envivo",
      "nombre": "En vivo"
    },
    {
      "id": "radio",
      "nombre": "📻 Radio 24/7"
    },
    {
      "id": "musica",
      "nombre": "Música"
    },
    {
      "id": "cumbia",
      "nombre": "Cumbia peruana"
    },
    {
      "id": "barra",
      "nombre": "Barra"
    },
    {
      "id": "tiktok",
      "nombre": "TikTok"
    },
    {
      "id": "tribuna",
      "nombre": "Tribuna"
    },
    {
      "id": "fiesta",
      "nombre": "Fiesta"
    },
    {
      "id": "clips",
      "nombre": "Videoclips"
    },
    {
      "id": "sets",
      "nombre": "🎧 Sets DJ"
    }
  ],
  "canales": [
    {
      "id": "envivo",
      "nombre": "Ritmo de Tribuna EN VIVO",
      "descripcion": "Cuando transmitas en YouTube, se ve aquí.",
      "categoria": "envivo",
      "tipo": "youtube-live",
      "fuente": "UCY3OjJioibg2IrIPgh4QTUQ",
      "envivo": true
    },
    {
      "id": "radio247",
      "nombre": "Radio Ritmo de Tribuna 24/7",
      "descripcion": "Mis canciones sin parar, con cuñas de la radio.",
      "categoria": "radio",
      "tipo": "radio",
      "fuente": "UUY3OjJioibg2IrIPgh4QTUQ",
      "pistas": [],
      "cunas": [],
      "cada": 4
    },
    {
      "id": "setsdj",
      "nombre": "Sets DJ Carlos Bazo",
      "descripcion": "Mezclas y envivos grabados. Cambia la fuente por tu lista de sets.",
      "categoria": "sets",
      "tipo": "playlist",
      "fuente": "PON_AQUI_ID_DE_LISTA_DE_SETS"
    },
    {
      "id": "spotify",
      "nombre": "Ritmo de Tribuna en Spotify",
      "descripcion": "Mi discografía. Toca \"Abrir en Spotify\" para escuchar completo.",
      "categoria": "musica",
      "tipo": "spotify",
      "fuente": "artist/3UfsHgWx8pKJIc22zsO9xv",
      "abrir": "https://open.spotify.com/artist/3UfsHgWx8pKJIc22zsO9xv",
      "textoAbrir": "Abrir en Spotify ↗"
    },
    {
      "id": "ytmusic",
      "nombre": "Todas mis canciones",
      "descripcion": "Playlist completa · también en YouTube Music",
      "categoria": "musica",
      "tipo": "playlist",
      "fuente": "UUY3OjJioibg2IrIPgh4QTUQ",
      "abrir": "https://music.youtube.com/@ritmodetribuna",
      "textoAbrir": "YouTube Music ↗"
    },
    {
      "id": "GTWA0p6QIO4",
      "nombre": "Ritual Íntimo",
      "descripcion": "Video oficial",
      "categoria": "clips",
      "tipo": "youtube",
      "fuente": "GTWA0p6QIO4"
    },
    {
      "id": "yn3gfTDT1ro",
      "nombre": "Fe y Pasión",
      "descripcion": "Música con sentimiento",
      "categoria": "clips",
      "tipo": "youtube",
      "fuente": "yn3gfTDT1ro"
    },
    {
      "id": "Om39QHGkS_E",
      "nombre": "Rumbo al Sentimiento",
      "descripcion": "Kilómetros convertidos en recuerdos",
      "categoria": "clips",
      "tipo": "youtube",
      "fuente": "Om39QHGkS_E"
    },
    {
      "id": "igBWNTGoZaA",
      "nombre": "Activa la Blanquiazul",
      "descripcion": "La pasión de Alianza Lima",
      "categoria": "tribuna",
      "tipo": "youtube",
      "fuente": "igBWNTGoZaA"
    },
    {
      "id": "0zLuEhBg5jo",
      "nombre": "Vamos Alianza",
      "descripcion": "Himno de pasión blanquiazul",
      "categoria": "tribuna",
      "tipo": "youtube",
      "fuente": "0zLuEhBg5jo"
    },
    {
      "id": "u9n9xiZ604c",
      "nombre": "Yo te quiero ver campeón",
      "descripcion": "Canción aliancista",
      "categoria": "tribuna",
      "tipo": "youtube",
      "fuente": "u9n9xiZ604c"
    },
    {
      "id": "5zFyJKG-P04",
      "nombre": "La vida que elegí",
      "descripcion": "Pasé hambre y frío, pero nunca te abandoné",
      "categoria": "tribuna",
      "tipo": "youtube",
      "fuente": "5zFyJKG-P04"
    },
    {
      "id": "bSItgQnZnUw",
      "nombre": "Somos campeones mi amor",
      "descripcion": "Cumbia tribunera 2026",
      "categoria": "tribuna",
      "tipo": "youtube",
      "fuente": "bSItgQnZnUw"
    },
    {
      "id": "dCm4jzIZCZs",
      "nombre": "Llegó el Sábado",
      "descripcion": "Ritmo de Tribuna",
      "categoria": "tribuna",
      "tipo": "youtube",
      "fuente": "dCm4jzIZCZs"
    },
    {
      "id": "A5uLGpVXM10",
      "nombre": "Caminito Íntimo",
      "descripcion": "Canción para Alianza Lima",
      "categoria": "tribuna",
      "tipo": "youtube",
      "fuente": "A5uLGpVXM10"
    },
    {
      "id": "cpMNyaFldt4",
      "nombre": "Mujer Blanquiazul",
      "descripcion": "Ritmo de Tribuna",
      "categoria": "tribuna",
      "tipo": "youtube",
      "fuente": "cpMNyaFldt4"
    },
    {
      "id": "kPxvofMTgpI",
      "nombre": "Fiesta Blanquiazul",
      "descripcion": "Reggaetón dembow blanquiazul",
      "categoria": "fiesta",
      "tipo": "youtube",
      "fuente": "kPxvofMTgpI"
    },
    {
      "id": "e-iHmQPefzs",
      "nombre": "La Noche es Blanquiazul",
      "descripcion": "Reparto chalaco x cubano",
      "categoria": "fiesta",
      "tipo": "youtube",
      "fuente": "e-iHmQPefzs"
    },
    {
      "id": "tt7702794351713225992",
      "nombre": "La noche se viste de azul y blanco",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7702794351713225992",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7702794351713225992",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7699695076976381192",
      "nombre": "Fiesta Blanquiazul",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7699695076976381192",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7699695076976381192",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7671392757193116946",
      "nombre": "Solo falta que llegue el sábado",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7671392757193116946",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7671392757193116946",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7707489496303996168",
      "nombre": "¡Que tiemble la disco! Flow blanquiazul",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7707489496303996168",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7707489496303996168",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7707152237386026247",
      "nombre": "Llegó el dembow del hincha aliancista",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7707152237386026247",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7707152237386026247",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7704908385057049874",
      "nombre": "¡Señores, yo soy de Alianza!",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7704908385057049874",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7704908385057049874",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7701032043953605906",
      "nombre": "Mi Primer Amor",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7701032043953605906",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7701032043953605906",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7700417505357024530",
      "nombre": "Saludo de Martín Farfán",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7700417505357024530",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7700417505357024530",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7697458481862888712",
      "nombre": "Lo mejor de mi vida",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7697458481862888712",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7697458481862888712",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7695593998723124498",
      "nombre": "Alianza Lima, compañero de esta vida",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7695593998723124498",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7695593998723124498",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7690335061660503304",
      "nombre": "Las Íntimas: Mareado, Enchulado, Loco",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7690335061660503304",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7690335061660503304",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7689116364623072519",
      "nombre": "Mi Medio Corazón",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7689116364623072519",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7689116364623072519",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7686216160525716754",
      "nombre": "Yo te quiero ver campeón",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7686216160525716754",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7686216160525716754",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7685116793316248839",
      "nombre": "¡Fuerza, Pirata!",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7685116793316248839",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7685116793316248839",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7683605780829834504",
      "nombre": "Blanquiazul, toda la vida",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7683605780829834504",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7683605780829834504",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7680652426789063943",
      "nombre": "En las buenas y en las malas (salsa timba)",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7680652426789063943",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7680652426789063943",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7679292846368771335",
      "nombre": "Homenaje a Huacho Grone",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7679292846368771335",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7679292846368771335",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7677682852485467399",
      "nombre": "Álbum \"Alma Tribunera\"",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7677682852485467399",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7677682852485467399",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7676661643081747720",
      "nombre": "La Ley del Perro Muerto (versión tribuna)",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7676661643081747720",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7676661643081747720",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7672590643276844306",
      "nombre": "¡Ya somos 10,000 tribuneros!",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7672590643276844306",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7672590643276844306",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7672268382800071954",
      "nombre": "Salsa de estudio",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7672268382800071954",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7672268382800071954",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7669661380051504391",
      "nombre": "Con el Comando Sur",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7669661380051504391",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7669661380051504391",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7667627742707354887",
      "nombre": "¡Ya somos 6,000!",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7667627742707354887",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7667627742707354887",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7666891468749032712",
      "nombre": "Nueva cumbia de Ritmo de Tribuna",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7666891468749032712",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7666891468749032712",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7661715904635456776",
      "nombre": "¡Hoy juega Alianza Lima!",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7661715904635456776",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7661715904635456776",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7660179993242242322",
      "nombre": "Opening de anime blanquiazul",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7660179993242242322",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7660179993242242322",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7658724886096989448",
      "nombre": "Caminito Íntimo",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7658724886096989448",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7658724886096989448",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7656294058536602887",
      "nombre": "Gracias KMG Sport12",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7656294058536602887",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7656294058536602887",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7655184787325472018",
      "nombre": "Hoy hago una excepción",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7655184787325472018",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7655184787325472018",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7654773248319638792",
      "nombre": "El celular de un verdadero aliancista (respuesta)",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7654773248319638792",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7654773248319638792",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7654635243890281736",
      "nombre": "\"Ritual Íntimo\" ya tiene su Radio en Spotify",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7654635243890281736",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7654635243890281736",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7653654587919830279",
      "nombre": "El mejor legado",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7653654587919830279",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7653654587919830279",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7653127215701396754",
      "nombre": "Tono de llamada para Alkangel",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7653127215701396754",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7653127215701396754",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7653111032004496647",
      "nombre": "Tono de llamada para Jorge",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7653111032004496647",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7653111032004496647",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7652831180571577618",
      "nombre": "Las Mañanitas Blanquiazules",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7652831180571577618",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7652831180571577618",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7652563847965871367",
      "nombre": "Tono de llamada para Freddy",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7652563847965871367",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7652563847965871367",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7652542589442247943",
      "nombre": "Comunicado oficial",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7652542589442247943",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7652542589442247943",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7652416970238856456",
      "nombre": "El celular de un verdadero aliancista",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7652416970238856456",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7652416970238856456",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7650934949368859912",
      "nombre": "Te Extraño",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7650934949368859912",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7650934949368859912",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7650352023379938567",
      "nombre": "Amor Verdadero",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7650352023379938567",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7650352023379938567",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7649639449915034887",
      "nombre": "Ritmo de Tribuna ya disponible",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7649639449915034887",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7649639449915034887",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7649452174585515271",
      "nombre": "Ritual Íntimo",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7649452174585515271",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7649452174585515271",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7648862920138362130",
      "nombre": "Hasta que Dios me lleve al cielo",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7648862920138362130",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7648862920138362130",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7648103512093576455",
      "nombre": "Ángeles Negros",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7648103512093576455",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7648103512093576455",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7647774181245029639",
      "nombre": "Alejandro Villanueva",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7647774181245029639",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7647774181245029639",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7646546465245973768",
      "nombre": "Alianza Lima sin fronteras",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7646546465245973768",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7646546465245973768",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7645037808255585544",
      "nombre": "Fe y Tradición",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7645037808255585544",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7645037808255585544",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7644806838063598866",
      "nombre": "Eterno Amor",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7644806838063598866",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7644806838063598866",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7644768913007496456",
      "nombre": "Esperen mis tribuneros",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7644768913007496456",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7644768913007496456",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7644573441676381458",
      "nombre": "Sonido original",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7644573441676381458",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7644573441676381458",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7644310545654467847",
      "nombre": "Rumbo al Sentimiento",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7644310545654467847",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7644310545654467847",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7644215089830153490",
      "nombre": "Gracias a todos los tribuneros",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7644215089830153490",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7644215089830153490",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7643875198604709138",
      "nombre": "Nuestro Amor",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7643875198604709138",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7643875198604709138",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7643849157094001927",
      "nombre": "Jarana en el Cielo",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7643849157094001927",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7643849157094001927",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7643706304707513618",
      "nombre": "Hasta la Eternidad",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7643706304707513618",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7643706304707513618",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7643653569064750343",
      "nombre": "La Noche Blanquiazul (reparto)",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7643653569064750343",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7643653569064750343",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7643579032784735495",
      "nombre": "Somos Campeones",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7643579032784735495",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7643579032784735495",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7643170670024690962",
      "nombre": "Hijos del Corazón",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7643170670024690962",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7643170670024690962",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7643121120501107976",
      "nombre": "La Caldera de Matute",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7643121120501107976",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7643121120501107976",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7642765432625155336",
      "nombre": "Blanquiazul Flow",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7642765432625155336",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7642765432625155336",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7642719332341976338",
      "nombre": "Mujer Blanquiazul (1ra parte)",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7642719332341976338",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7642719332341976338",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7642573460790725906",
      "nombre": "Desde Huacho a Matute",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7642573460790725906",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7642573460790725906",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7642017354817359111",
      "nombre": "Tono de llamada",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7642017354817359111",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7642017354817359111",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7641976648153271560",
      "nombre": "Ritual Íntimo (1ra parte)",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7641976648153271560",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7641976648153271560",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7641807223273835794",
      "nombre": "Se acabó, un guerrero llegó (2da parte)",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7641807223273835794",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7641807223273835794",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7641800742705040647",
      "nombre": "Se acabó, un guerrero llegó (1ra parte)",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7641800742705040647",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7641800742705040647",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7641658606982630664",
      "nombre": "Música para la tribuna (2da parte)",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7641658606982630664",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7641658606982630664",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "tt7641652942960971015",
      "nombre": "Música para la tribuna (1ra parte)",
      "descripcion": "TikTok · @ritmodetribuna",
      "categoria": "tiktok",
      "tipo": "tiktok",
      "fuente": "7641652942960971015",
      "abrir": "https://www.tiktok.com/@ritmodetribuna/video/7641652942960971015",
      "textoAbrir": "Abrir en TikTok ↗"
    },
    {
      "id": "art-UCOQfu4KyKnC3Orfiw72asfA",
      "nombre": "Grupo 5",
      "descripcion": "Canal oficial · todas sus canciones",
      "categoria": "cumbia",
      "tipo": "playlist",
      "fuente": "UUOQfu4KyKnC3Orfiw72asfA",
      "abrir": "https://www.youtube.com/channel/UCOQfu4KyKnC3Orfiw72asfA",
      "textoAbrir": "Ver canal ↗"
    },
    {
      "id": "art-UCp0G1lAScWI2cwzcLDTqJrg",
      "nombre": "La Bella Luz",
      "descripcion": "Canal oficial · todas sus canciones",
      "categoria": "cumbia",
      "tipo": "playlist",
      "fuente": "UUp0G1lAScWI2cwzcLDTqJrg",
      "abrir": "https://www.youtube.com/channel/UCp0G1lAScWI2cwzcLDTqJrg",
      "textoAbrir": "Ver canal ↗"
    },
    {
      "id": "art-UCF-1xB_VwVjN4lUPsh8PryQ",
      "nombre": "Corazón Serrano",
      "descripcion": "Canal oficial · todas sus canciones",
      "categoria": "cumbia",
      "tipo": "playlist",
      "fuente": "UUF-1xB_VwVjN4lUPsh8PryQ",
      "abrir": "https://www.youtube.com/channel/UCF-1xB_VwVjN4lUPsh8PryQ",
      "textoAbrir": "Ver canal ↗"
    },
    {
      "id": "art-UCn8boXRzdYZaVaTXfGZF4-g",
      "nombre": "Agua Marina",
      "descripcion": "Canal oficial · todas sus canciones",
      "categoria": "cumbia",
      "tipo": "playlist",
      "fuente": "UUn8boXRzdYZaVaTXfGZF4-g",
      "abrir": "https://www.youtube.com/channel/UCn8boXRzdYZaVaTXfGZF4-g",
      "textoAbrir": "Ver canal ↗"
    },
    {
      "id": "art-UCn_miKF_BLtV8cB0KJ-UGwg",
      "nombre": "Armonía 10",
      "descripcion": "Canal oficial · todas sus canciones",
      "categoria": "cumbia",
      "tipo": "playlist",
      "fuente": "UUn_miKF_BLtV8cB0KJ-UGwg",
      "abrir": "https://www.youtube.com/channel/UCn_miKF_BLtV8cB0KJ-UGwg",
      "textoAbrir": "Ver canal ↗"
    },
    {
      "id": "art-UCFJg7ibj4fBZAnsphV8_bnA",
      "nombre": "Hermanos Yaipén",
      "descripcion": "Canal oficial · todas sus canciones",
      "categoria": "cumbia",
      "tipo": "playlist",
      "fuente": "UUFJg7ibj4fBZAnsphV8_bnA",
      "abrir": "https://www.youtube.com/channel/UCFJg7ibj4fBZAnsphV8_bnA",
      "textoAbrir": "Ver canal ↗"
    },
    {
      "id": "art-UCEXJImvIreOSIbitMFykMaw",
      "nombre": "Explosión de Iquitos",
      "descripcion": "Canal oficial · todas sus canciones",
      "categoria": "cumbia",
      "tipo": "playlist",
      "fuente": "UUEXJImvIreOSIbitMFykMaw",
      "abrir": "https://www.youtube.com/channel/UCEXJImvIreOSIbitMFykMaw",
      "textoAbrir": "Ver canal ↗"
    },
    {
      "id": "art-UCd5SVvD7bIcfsd-ZEHpIhsg",
      "nombre": "Los Mirlos",
      "descripcion": "Canal oficial · todas sus canciones",
      "categoria": "cumbia",
      "tipo": "playlist",
      "fuente": "UUd5SVvD7bIcfsd-ZEHpIhsg",
      "abrir": "https://www.youtube.com/channel/UCd5SVvD7bIcfsd-ZEHpIhsg",
      "textoAbrir": "Ver canal ↗"
    },
    {
      "id": "art-UCEQEjvOWp_bFr1IDLKgxmrA",
      "nombre": "Chacalón y la Nueva Crema",
      "descripcion": "Canal oficial · todas sus canciones",
      "categoria": "cumbia",
      "tipo": "playlist",
      "fuente": "UUEQEjvOWp_bFr1IDLKgxmrA",
      "abrir": "https://www.youtube.com/channel/UCEQEjvOWp_bFr1IDLKgxmrA",
      "textoAbrir": "Ver canal ↗"
    },
    {
      "id": "alb-IwYhgT3g",
      "nombre": "Juaneco y su Combo · ¡Dale Juaneco!",
      "descripcion": "Álbum oficial",
      "categoria": "cumbia",
      "tipo": "playlist",
      "fuente": "OLAK5uy_mxqcqn6TlgJzzdzXyoXrMIjUZIwYhgT3g",
      "abrir": "https://music.youtube.com/playlist?list=OLAK5uy_mxqcqn6TlgJzzdzXyoXrMIjUZIwYhgT3g",
      "textoAbrir": "YouTube Music ↗"
    },
    {
      "id": "alb-f5M8C93U",
      "nombre": "Juaneco y su Combo · Linda Nena",
      "descripcion": "Álbum oficial",
      "categoria": "cumbia",
      "tipo": "playlist",
      "fuente": "OLAK5uy_lp5hCLDwpg2FOGjNAraK1AZztf5M8C93U",
      "abrir": "https://music.youtube.com/playlist?list=OLAK5uy_lp5hCLDwpg2FOGjNAraK1AZztf5M8C93U",
      "textoAbrir": "YouTube Music ↗"
    },
    {
      "id": "alb-mKbhxWRk",
      "nombre": "Juaneco y su Combo · Viajando por la Selva",
      "descripcion": "Álbum oficial",
      "categoria": "cumbia",
      "tipo": "playlist",
      "fuente": "OLAK5uy_kCvOgAyLdANPuy6GIEl6mSrgjmKbhxWRk",
      "abrir": "https://music.youtube.com/playlist?list=OLAK5uy_kCvOgAyLdANPuy6GIEl6mSrgjmKbhxWRk",
      "textoAbrir": "YouTube Music ↗"
    },
    {
      "id": "alb-sI5IrB6M",
      "nombre": "Comando SVR · Íntimos de Sentimiento, Aliancistas de Corazón",
      "descripcion": "Álbum oficial",
      "categoria": "barra",
      "tipo": "playlist",
      "fuente": "OLAK5uy_lNphFQBDapxJ3uP0-Yt09eIBfsI5IrB6M",
      "abrir": "https://music.youtube.com/playlist?list=OLAK5uy_lNphFQBDapxJ3uP0-Yt09eIBfsI5IrB6M",
      "textoAbrir": "YouTube Music ↗"
    },
    {
      "id": "alb-NiGrRHQM",
      "nombre": "Comando SVR · Sube el Volumen - La 20",
      "descripcion": "Álbum oficial",
      "categoria": "barra",
      "tipo": "playlist",
      "fuente": "OLAK5uy_kvyBijO6iTY5DSChOuIUg9-zCNiGrRHQM",
      "abrir": "https://music.youtube.com/playlist?list=OLAK5uy_kvyBijO6iTY5DSChOuIUg9-zCNiGrRHQM",
      "textoAbrir": "YouTube Music ↗"
    }
  ],
  "envivoAhora": {
    "activo": false,
    "texto": "Ritmo de Tribuna está transmitiendo en TikTok",
    "enlace": "https://www.tiktok.com/@ritmodetribuna/live"
  },
  "apk": {
    "fans": {
      "version": 4,
      "nombre": "v1.3",
      "url": "https://github.com/CLAZO12/ritmodetribuna-tv/releases/latest/download/RitmoDeTribunaTV-Fans.apk"
    },
    "dueno": {
      "version": 4,
      "nombre": "v1.3",
      "url": ""
    }
  },
  "claves": [
    "bd24c3d123b16b97841f83a85f4a6a10202332fea2f0ef135288138388651171"
  ]
};
