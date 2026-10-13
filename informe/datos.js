/* Value Growth · los datos de un cliente.
   Esto es lo ÚNICO que cambia por cliente. La página del diagnóstico ya
   calcula todos estos valores; sólo hay que entregarlos con estos nombres.

   Los textos de cada componente no van aquí: viven en textos.js y la
   plantilla los elige sola según la calificación. */
window.VG = {
  empresa:   'Grupo Ejemplo, S.A. de C.V.',
  contacto:  'Nombre del Contacto',
  asesor:    'Jorge De la Rosa',
  fecha:     '13 de octubre de 2026',
  industria: 'Servicios profesionales, científicos y técnicos',

  total:     57,       // calificación general, 0 a 100
  potencial: 64,       // calificación si suben sus dos componentes más débiles

  ebitda:    '430,000',   // promedio de los últimos tres ejercicios, en dólares
  valor:     '1.76',      // valor estimado hoy, en millones de dólares
  valorPot:  '1.84',      // valor en el escenario potencial
  rangoBajo: '1.12',      // piso de la banda
  rangoAlto: '2.24',      // techo de la banda
  multiplo:    '4.1x',
  multiploPot: '4.3x',

  /* Los ocho componentes, en el orden canónico. 'p' es la calificación de
     cada uno, de 0 a 100. El nombre tiene que coincidir con textos.js. */
  comps: [
    { n:'Desempeño Financiero',         p:72 },
    { n:'Potencial de Crecimiento',     p:54 },
    { n:'Radar de Dependencia',         p:38 },
    { n:'Generación de Flujos',         p:66 },
    { n:'Ingresos Recurrentes',         p:24 },
    { n:'Diferenciación y Elasticidad', p:71 },
    { n:'Satisfacción del Cliente',     p:83 },
    { n:'Keyman Risk',                  p:45 }
  ]
};

/* El semáforo de Value Growth: rojo abajo de 30, ámbar de 30 a 69,
   verde de 70 en adelante. */
window.CORTES = [30, 70];
window.banda = function (p) {
  return p >= 70 ? { k:'verde', t:'Fortaleza' }
       : p >= 30 ? { k:'amar',  t:'Atención'  }
                 : { k:'rojo',  t:'Prioridad' };
};
