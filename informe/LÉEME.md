# Value Growth · plantilla del informe

Con esto la página del diagnóstico genera el informe en PDF desde el navegador
del cliente. No hace falta servidor ni servicio de conversión.

## Qué hay aquí

    informe.html     la plantilla, catorce hojas
    base.css         estilos, tipografías y colores de Flint
    textos.js        los 56 textos de las hojas de componente
    datos.js         datos de ejemplo, sólo para probar
    aro.js           el anillo de la calificación de la portada
    campana.js       la curva de la hoja de estimación de valor
    descargar.js     el botón de descarga, va en la página del diagnóstico
    assets/          tipografías, logos, mapa y la foto

Todo es estático. Súbelo tal cual, en una carpeta, por ejemplo `/informe/`.

## Cómo se conecta

En la pantalla de resultado, incluye `descargar.js` y pon el botón:

    <button id="bajar">Descargar mi informe</button>

    document.getElementById('bajar').addEventListener('click', function () {
      descargarInforme(datosDelCliente, '/informe/informe.html');
    });

`datosDelCliente` es un objeto con los valores que la pantalla ya calcula. La
forma exacta está en `datos.js`, con un comentario por campo. Los textos de
cada componente no van ahí: la plantilla los elige sola según la calificación.

Lo que pasa al hacer clic: se abre la plantilla en una pestaña nueva con los
datos y se lanza el diálogo de guardar como PDF. El cliente elige dónde.

## Tres cosas que no hay que tocar

**Los datos viajan después del `#` de la URL, no en la query string.** Eso es a
propósito: lo que va después del `#` nunca llega al servidor, así que las
ventas y el EBITDA del cliente no quedan en ningún registro de acceso. Si se
cambia a `?datos=`, esa información empieza a guardarse en los logs.

**En `base.css` está `print-color-adjust: exact`.** Sin esa línea el navegador
tira los fondos al imprimir y el informe sale en blanco, porque casi todo el
diseño es fondo. Está probado: con ella el fondo se imprime aunque el cliente
no active "Gráficos de fondo" en el diálogo.

**Las hojas miden 1280 por 720 y `@page` está en 13.333 por 7.5 pulgadas.** Es
16:9 horizontal. Si se cambia una, hay que cambiar la otra.

## Cómo probarlo

Abre `informe.html` directo en el navegador: sale con los datos de ejemplo y
con el sello "Maqueta con datos de ejemplo" en cada hoja. Ese sello desaparece
solo cuando los datos llegan por la URL.

Para probar con otros datos, agrega `?print=1` y el `#` con el objeto en
base64. `descargar.js` lo arma solo.

## Falta probar

El comportamiento del fondo está verificado en Chromium, que es el motor de
Chrome y de Edge. **Falta confirmarlo en Safari y en Firefox**: abrir el
informe, darle imprimir sin tocar ninguna opción y ver si el fondo sale azul
o blanco. Si saliera blanco en alguno, avísanos antes de publicar.
