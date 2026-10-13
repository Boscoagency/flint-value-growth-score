/* Value Growth · el botón de descarga del informe.
   Esto va en la página del diagnóstico, no en la plantilla.

   Se le pasa el mismo objeto de datos que ya calcula la pantalla de resultado.
   Abre la plantilla en una pestaña nueva y lanza el diálogo de guardar como
   PDF. No necesita servidor: el navegador del cliente genera el documento.

   Los datos viajan en el fragmento de la URL, después del #, que nunca se
   manda al servidor. Las cifras del cliente no quedan en ningún registro. */
window.descargarInforme = function (vg, ruta) {
  var json = JSON.stringify(vg);
  var b64  = btoa(unescape(encodeURIComponent(json)));
  var url  = (ruta || 'informe/informe.html') + '?print=1#' + b64;
  var w = window.open(url, '_blank');
  if (!w) alert('Permite las ventanas emergentes para descargar tu informe.');
};

/* Ejemplo de uso en la pantalla de resultado:

   document.getElementById('bajar').addEventListener('click', function () {
     descargarInforme({
       empresa:'Grupo Ejemplo, S.A. de C.V.',
       contacto:'Nombre del Contacto',
       asesor:'Jorge De la Rosa',
       fecha:'13 de octubre de 2026',
       industria:'Servicios profesionales, científicos y técnicos',
       total:57, potencial:64,
       ebitda:'430,000', valor:'1.76', valorPot:'1.84',
       rangoBajo:'1.12', rangoAlto:'2.24',
       multiplo:'4.1x', multiploPot:'4.3x',
       comps:[
         {n:'Desempeño Financiero',p:72}, {n:'Potencial de Crecimiento',p:54},
         {n:'Radar de Dependencia',p:38},  {n:'Generación de Flujos',p:66},
         {n:'Ingresos Recurrentes',p:24},  {n:'Diferenciación y Elasticidad',p:71},
         {n:'Satisfacción del Cliente',p:83}, {n:'Keyman Risk',p:45}
       ]
     });
   });
*/
