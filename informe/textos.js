/* Value Growth · los 56 textos de las hojas de componente.
   Cada componente trae su texto fijo de comprador y tres versiones de
   lectura y mensaje, una por banda del semáforo. {puntos} se sustituye
   por la calificación real de ese componente. */
window.TEXTOS = {
  "Desempeño Financiero": {
    "d": "Tu historial de ingresos y ganancias, junto con el profesionalismo de tus registros.",
    "w": 20,
    "comprador": "Es lo primero que revisa y donde más rápido pierde interés si algo no cuadra. Estados financieros consistentes y auditables no suben el múltiplo por sí solos, pero evitan el descuento por incertidumbre, que suele ser el más caro de todos.",
    "verde": {
      "l": "Con {puntos} puntos tus números aguantan una revisión. Tu historial de ingresos y tu rentabilidad están en orden, y tus registros tienen el nivel que se espera de una empresa de tu tamaño. Es el componente con más peso de los ocho, así que este resultado te está ayudando.",
      "m": "Tus números aguantan una revisión, úsalos como argumento de precio."
    },
    "amar": {
      "l": "Con {puntos} puntos tus números cuentan una historia razonable, pero no completa. Hay orden en lo general y huecos en el detalle: periodos que no cierran igual, criterios que cambiaron en el camino, o información que vive fuera de la contabilidad formal.",
      "m": "Cerrar los huecos del detalle: un solo criterio contable para toda la serie, y los números que viven fuera de la contabilidad, dentro."
    },
    "rojo": {
      "l": "Con {puntos} puntos tus registros todavía no sostienen una revisión externa. Puede que el negocio gane dinero y que tú lo sepas, pero eso no está documentado de forma que alguien de fuera lo pueda verificar sin ayuda tuya.",
      "m": "Poner la contabilidad al nivel de una revisión externa, antes que cualquier otra cosa: es el componente que más pesa de los ocho."
    }
  },
  "Potencial de Crecimiento": {
    "d": "Tu probabilidad de crecer en el futuro, y a qué ritmo.",
    "w": 15,
    "comprador": "Está comprando los años que vienen, no los que pasaron. Un plan de tres años con supuestos explícitos y de dónde sale cada punto de crecimiento es lo que le permite pagar por el futuro en lugar de descontarlo.",
    "verde": {
      "l": "Con {puntos} puntos tu crecimiento es creíble y está sostenido. No dependes solo de que el mercado jale: hay cosas que ustedes hacen y pueden repetir, y eso es lo que convierte una buena racha en una expectativa.",
      "m": "Dejar por escrito qué es exactamente lo que te hace crecer, para que no dependa de quien hoy lo sabe."
    },
    "amar": {
      "l": "Con {puntos} puntos tu crecimiento es creíble pero no está documentado. La empresa crece; la pregunta es si crece por inercia del mercado o por algo que ustedes hacen y pueden repetir. Hoy esa diferencia no está escrita en ningún lado.",
      "m": "Documentar de dónde va a salir el crecimiento de los próximos tres años."
    },
    "rojo": {
      "l": "Con {puntos} puntos no hay una historia de crecimiento que contar. Puede ser que el mercado esté plano, que la capacidad ya esté al tope, o que no exista un plan más allá del año en curso. Para efectos de valor, las tres se leen igual.",
      "m": "Definir de dónde saldría el siguiente peso de ingreso, aunque sea una sola vía y a un año."
    }
  },
  "Radar de Dependencia": {
    "d": "Qué tan dependiente es tu empresa de un solo cliente, empleado o proveedor.",
    "w": 8,
    "comprador": "Cada concentración es un riesgo que hereda completo. La pregunta que se hace es qué pasa con el resultado si se va el cliente más grande, y si no hay una respuesta tranquilizadora, ese riesgo lo descuenta del precio o lo amarra a pagos condicionados.",
    "verde": {
      "l": "Con {puntos} puntos tu empresa no está colgada de nadie en particular. Ni un cliente, ni un proveedor, ni una persona concentran lo suficiente como para que su salida cambie el resultado del año. Es menos común de lo que parece y vale.",
      "m": "Mantener el reparto como está y revisarlo cada año, porque la concentración regresa sola cuando un cliente crece más rápido que los demás."
    },
    "amar": {
      "l": "Con {puntos} puntos hay concentración, aunque todavía no en un punto crítico. Normalmente es un cliente que pesa más de la cuenta, un proveedor sin segunda opción, o un área que descansa en una sola persona.",
      "m": "Identificar cuál de las tres concentraciones pesa más, clientes, proveedores o personas, y abrir una segunda opción ahí."
    },
    "rojo": {
      "l": "Con {puntos} puntos tu concentración es alta. Una parte importante de tu resultado depende de pocos clientes, o de un proveedor, o de una persona que no tiene reemplazo. No es un problema mientras todo sigue igual, y ese es justo el punto.",
      "m": "Bajar la concentración de clientes y documentar quién puede reemplazar a quién."
    }
  },
  "Generación de Flujos": {
    "d": "Si tu operación genera el efectivo que necesita para funcionar.",
    "w": 12,
    "comprador": "Revisa cuánto capital de trabajo tiene que meter el día uno después de comprar. Cada día que bajes tu ciclo de cobro es dinero que él ya no tiene que aportar, y eso entra directo en lo que está dispuesto a pagar.",
    "verde": {
      "l": "Con {puntos} puntos tu operación se financia sola. Cobras antes de tener que pagar, o al menos al mismo ritmo, así que crecer no te obliga a meter dinero ni a pedirlo prestado. Es una ventaja concreta y no todas las empresas de tu tamaño la tienen.",
      "m": "Tu operación se financia sola, úsalo como argumento: el comprador no tiene que inyectar capital el día uno."
    },
    "amar": {
      "l": "Con {puntos} puntos tu operación se sostiene, pero no con holgura. El efectivo alcanza para funcionar sin depender de crédito de forma permanente, aunque el ciclo de cobro todavía te obliga a financiar a tus clientes más de lo que te financian a ti.",
      "m": "Cobrar antes: anticipos, parcialidades y una política de crédito real."
    },
    "rojo": {
      "l": "Con {puntos} puntos tu operación consume más efectivo del que genera. Cada venta nueva te aprieta en lugar de aliviarte, y el crecimiento se está pagando con crédito, con tu propio dinero, o con el de tus proveedores.",
      "m": "Atacar el ciclo de efectivo antes que las ventas: cobrar antes, pagar en plazos reales y revisar inventarios."
    }
  },
  "Ingresos Recurrentes": {
    "d": "Qué parte de tus ventas se repite sin que tengas que volver a venderla.",
    "w": 12,
    "comprador": "Es el componente que más mueve el múltiplo, y con diferencia. Un peso de ingreso recurrente vale más que un peso de venta suelta, porque le permite ver hacia adelante con certeza. Convertir aunque sea una parte de tu venta en iguala cambia la conversación de precio.",
    "verde": {
      "l": "Con {puntos} puntos buena parte de tu ingreso ya no hay que volver a venderlo. Arrancas cada ejercicio con una base que se renueva sola, y eso es lo que permite ver hacia adelante con certeza. Es el componente que más mueve el múltiplo.",
      "m": "Proteger la base recurrente: revisar las renovaciones antes de que venzan y vigilar la cancelación mes con mes."
    },
    "amar": {
      "l": "Con {puntos} puntos tienes una parte del ingreso que se repite, pero no la suficiente para que el año arranque resuelto. Normalmente es recurrencia de hecho, clientes que vuelven por costumbre, más que recurrencia de contrato.",
      "m": "Convertir la recurrencia de costumbre en recurrencia de contrato: iguala, renovación automática y fecha de corte."
    },
    "rojo": {
      "l": "Con {puntos} puntos este es el componente donde tienes más valor detenido. Prácticamente todo lo que vendes hay que volver a venderlo, así que cada ejercicio arranca de cero y el resultado del año depende de la operación comercial, no de la base instalada.",
      "m": "Convertir parte de tus ventas en igualas o contratos con renovación automática."
    }
  },
  "Diferenciación y Elasticidad": {
    "d": "Qué tan diferenciada está tu empresa de su competencia.",
    "w": 10,
    "comprador": "Le interesa saber qué pasa si subes tus precios cinco por ciento. Si la respuesta es que pierdes poco volumen, está comprando margen defendible. Si es que se te van los clientes, está comprando una empresa que vive de precio, y eso vale menos.",
    "verde": {
      "l": "Con {puntos} puntos tienes poder de precio. Tu oferta no se compara uno a uno contra la de tu competencia, y eso se nota en que no compites principalmente por descuento. Es una ventaja real que conviene proteger antes que ampliar.",
      "m": "Tienes poder de precio, no lo regales en descuentos."
    },
    "amar": {
      "l": "Con {puntos} puntos te distingues en algo, pero no lo suficiente para mandar en el precio. Probablemente ganas por servicio, por tiempo de respuesta o por relación, que son ventajas reales pero difíciles de demostrarle a alguien de fuera.",
      "m": "Poner por escrito qué te hace distinto, y que eso se note en el precio y no solo en el trato."
    },
    "rojo": {
      "l": "Con {puntos} puntos compites principalmente por precio. Lo que vendes el cliente lo puede conseguir en otro lado en condiciones parecidas, así que cada negociación arranca en el descuento y el margen se defiende con volumen.",
      "m": "Encontrar una línea, un segmento o un servicio donde no te comparen uno a uno, y empezar por ahí."
    }
  },
  "Satisfacción del Cliente": {
    "d": "La probabilidad de que tus clientes vuelvan y te recomienden.",
    "w": 8,
    "comprador": "No pregunta si tus clientes están contentos, pregunta cómo lo sabes. Una medición formal de recompra y recomendación convierte tu percepción en un dato que él puede auditar, y eso es lo que le permite pagar por la permanencia de esos clientes.",
    "verde": {
      "l": "Con {puntos} puntos tus clientes regresan y te recomiendan, y eso sostiene tu ingreso sin que tengas que reponer cartera cada año. Lo que falta no es el resultado, es la evidencia: hoy lo sabes por trato, no por medición.",
      "m": "Ponerle método a la medición de satisfacción y recompra, para que deje de ser percepción y se vuelva un dato auditable."
    },
    "amar": {
      "l": "Con {puntos} puntos tus clientes están razonablemente conformes, que no es lo mismo que convencidos. Vuelven, pero no te recomiendan solos, y una parte de la cartera se repone cada año con venta nueva.",
      "m": "Medir recompra y recomendación con un método fijo, y atender primero a los clientes que ya estaban por irse."
    },
    "rojo": {
      "l": "Con {puntos} puntos la permanencia de tus clientes no está asegurada. Puede ser que no la midas, o que lo que mides salga bajo. En cualquiera de los dos casos, el ingreso del año que viene hay que salir a buscarlo otra vez.",
      "m": "Empezar por preguntar: una medición simple de recompra y recomendación, aplicada en serio, antes de rediseñar nada."
    }
  },
  "Keyman Risk": {
    "d": "Cómo se comportaría tu negocio si no pudieras estar presente.",
    "w": 15,
    "comprador": "Es la pregunta que define si la empresa es vendible o no. Si el negocio se detiene cuando tú te detienes, lo que está comprando es tu empleo y no una empresa, y el precio lo refleja o de plano no hay operación.",
    "verde": {
      "l": "Con {puntos} puntos la empresa funciona sin ti en el día a día. Las decisiones importantes están repartidas, los clientes clave conocen a alguien más y la operación no se detiene si te ausentas. Es el segundo componente de mayor peso, así que este resultado te está ayudando mucho.",
      "m": "Sostener la independencia: que las relaciones con clientes clave sigan siendo del equipo y no regresen a ti."
    },
    "amar": {
      "l": "Con {puntos} puntos ya delegaste una parte, pero no la que importa. La operación camina sin ti unos días; lo que no camina son las decisiones de precio, la relación con los clientes grandes y todo lo que no está escrito en ningún proceso.",
      "m": "Delegar lo que todavía pasa por ti: precio, relación con clientes clave y las decisiones que nadie más puede tomar."
    },
    "rojo": {
      "l": "Con {puntos} puntos el negocio todavía depende demasiado de ti. Las decisiones importantes, la relación con los clientes clave y buena parte de la operación siguen pasando por tu escritorio. Es el segundo componente de mayor peso, así que aquí se juega mucho.",
      "m": "Sacarte de la operación diaria: delegar ventas y la relación con clientes clave."
    }
  }
};
