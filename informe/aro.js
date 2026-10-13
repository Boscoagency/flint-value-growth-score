/* El anillo de la calificación general de la portada.
   pct de 0 a 100, color del semáforo, trazo redondeado y arranque arriba. */
window.aro = function (pct, color, opts) {
  opts = opts || {};
  var R = opts.r || 108, gr = opts.gr || 16, S = (R + gr) * 2 + 8,
      c = S / 2, C = 2 * Math.PI * R;
  return '<svg width="' + S + '" height="' + S + '" viewBox="0 0 ' + S + ' ' + S + '">' +
    '<circle cx="' + c + '" cy="' + c + '" r="' + R + '" fill="none" ' +
      'stroke="rgba(255,255,255,.13)" stroke-width="' + gr + '"/>' +
    '<circle cx="' + c + '" cy="' + c + '" r="' + R + '" fill="none" stroke="' + color + '" ' +
      'stroke-width="' + gr + '" stroke-linecap="round" ' +
      'stroke-dasharray="' + C.toFixed(1) + '" ' +
      'stroke-dashoffset="' + (C * (1 - pct / 100)).toFixed(1) + '" ' +
      'transform="rotate(-90 ' + c + ' ' + c + ')"/>' +
    '</svg>';
};
