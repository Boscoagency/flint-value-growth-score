/* La campana de valor.
   Una curva que representa el rango de valor de la empresa, con la parte baja
   en rojo, la media en tinta y la alta en verde, y una marca vertical donde
   cae el cliente. pos va de 0 a 1. modo 'claro' u 'oscuro'. */
window.campana = function (opts) {
  var W = opts.w || 860, H = opts.h || 240, pos = opts.pos,
      oscuro = opts.modo === 'oscuro', id = 'cmp' + Math.random().toString(36).slice(2, 7),
      tinta = oscuro ? '#E8EFF3' : '#0D0D0D',
      guia  = oscuro ? '#243038' : '#E2E7EB',
      lab   = oscuro ? '#7E8F9B' : '#8593A0',
      base  = H - 46, alto = base - 58;   // margen arriba para la etiqueta

  function y(t){ return base - alto * Math.exp(-Math.pow((t - 0.5) / 0.30, 2) / 2); }
  var pts = [], n = 220;
  for (var i = 0; i <= n; i++) { var t = i / n; pts.push([24 + t * (W - 48), y(t)]); }
  var d = pts.map(function (p, i) { return (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join(' ');
  var area = d + ' L' + (W - 24) + ' ' + base + ' L24 ' + base + ' Z';
  var mx = 24 + pos * (W - 48), my = y(pos);

  return '<svg width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '">' +
    '<defs>' +
      '<linearGradient id="' + id + 't" x1="0" x2="1">' +
        '<stop offset="0%" stop-color="#EC0011"/>' +
        '<stop offset="26%" stop-color="#FFBE31"/>' +
        '<stop offset="52%" stop-color="' + tinta + '"/>' +
        '<stop offset="76%" stop-color="#16AF57"/>' +
        '<stop offset="100%" stop-color="#16AF57"/>' +
      '</linearGradient>' +
      '<linearGradient id="' + id + 'a" x1="0" x2="0" y1="0" y2="1">' +
        '<stop offset="0%" stop-color="#0EB2ED" stop-opacity="' + (oscuro ? .34 : .16) + '"/>' +
        '<stop offset="100%" stop-color="#0EB2ED" stop-opacity="0"/>' +
      '</linearGradient>' +
    '</defs>' +
    '<path d="' + area + '" fill="url(#' + id + 'a)"/>' +
    '<line x1="24" y1="' + base + '" x2="' + (W - 24) + '" y2="' + base + '" stroke="' + guia + '" stroke-width="1"/>' +
    '<path d="' + d + '" fill="none" stroke="url(#' + id + 't)" stroke-width="7" stroke-linecap="round"/>' +
    '<line x1="' + mx.toFixed(1) + '" y1="' + (my - 4).toFixed(1) + '" x2="' + mx.toFixed(1) + '" y2="' + (base + 8) + '"' +
      ' stroke="' + tinta + '" stroke-width="2" stroke-dasharray="4 4"/>' +
    '<circle cx="' + mx.toFixed(1) + '" cy="' + my.toFixed(1) + '" r="9" fill="' + (oscuro ? '#0A0A0A' : '#FFFFFF') + '"/>' +
    '<circle cx="' + mx.toFixed(1) + '" cy="' + my.toFixed(1) + '" r="6" fill="#0EB2ED"/>' +
    '<text x="24" y="' + (base + 26) + '" font-family="Roboto" font-size="12" font-weight="700"' +
      ' letter-spacing="1.3" fill="' + lab + '">' + (opts.izq || '') + '</text>' +
    '<text x="' + (W / 2) + '" y="' + (base + 26) + '" text-anchor="middle" font-family="Roboto" font-size="12"' +
      ' font-weight="700" letter-spacing="1.3" fill="' + lab + '">' + (opts.centro || '') + '</text>' +
    '<text x="' + (W - 24) + '" y="' + (base + 26) + '" text-anchor="end" font-family="Roboto" font-size="12"' +
      ' font-weight="700" letter-spacing="1.3" fill="' + lab + '">' + (opts.der || '') + '</text>' +
    '<text x="' + mx.toFixed(1) + '" y="' + Math.max(16, my - 20).toFixed(1) + '" text-anchor="middle"' +
      ' font-family="Bebas Neue" font-size="36" fill="' + tinta + '">' + (opts.punto || '') + '</text>' +
    '</svg>';
};
