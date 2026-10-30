/* El anillo de la calificación general de la portada.
   pct de 0 a 100, color del semáforo, trazo redondeado y arranque arriba.
   El trazo lleva el mismo degradado que el anillo de la pantalla de resultado
   del diagnóstico: del color del semáforo a su versión clara, en diagonal. */
(function () {
  var CLARO = {
    '#16AF57': '#5EF0A6',   // verde
    '#FFBE31': '#FFD966',   // ámbar
    '#EC0011': '#FF7A8A',   // rojo
    '#00AEEF': '#BFE9FA'    // cian de Flint
  };
  /* Si llega un color que no está en la tabla, se aclara mezclándolo con blanco. */
  function aclarar(hex) {
    var h = hex.replace('#', ''), out = '#';
    for (var i = 0; i < 3; i++) {
      var v = parseInt(h.substr(i * 2, 2), 16);
      v = Math.round(v + (255 - v) * 0.45);
      out += ('0' + v.toString(16)).slice(-2);
    }
    return out.toUpperCase();
  }
  var n = 0;
  window.aro = function (pct, color, opts) {
    opts = opts || {};
    var R = opts.r || 108, gr = opts.gr || 16, S = (R + gr) * 2 + 8,
        c = S / 2, C = 2 * Math.PI * R,
        c2 = opts.claro || CLARO[String(color).toUpperCase()] || aclarar(color),
        id = 'aro-g' + (++n);
    return '<svg width="' + S + '" height="' + S + '" viewBox="0 0 ' + S + ' ' + S + '">' +
      '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="' + color + '"/>' +
        '<stop offset="1" stop-color="' + c2 + '"/>' +
      '</linearGradient></defs>' +
      '<circle cx="' + c + '" cy="' + c + '" r="' + R + '" fill="none" ' +
        'stroke="rgba(255,255,255,.13)" stroke-width="' + gr + '"/>' +
      '<circle cx="' + c + '" cy="' + c + '" r="' + R + '" fill="none" stroke="url(#' + id + ')" ' +
        'stroke-width="' + gr + '" stroke-linecap="round" ' +
        'stroke-dasharray="' + C.toFixed(1) + '" ' +
        'stroke-dashoffset="' + (C * (1 - pct / 100)).toFixed(1) + '" ' +
        'transform="rotate(-90 ' + c + ' ' + c + ')"/>' +
      '</svg>';
  };
})();
