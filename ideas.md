# Direcciones de diseño — Centro de Estudiantes Secundaria UNGS

## Tres aproximaciones posibles

| Tema | Introducción breve | Probabilidad |
|---|---|---:|
| **Campus Amplificado** | Un mural editorial nocturno que mezcla señalética escolar, afiches pegados y tarjetas bento para que la participación se sienta visible, rápida y propia. | 0.07 |
| **Cuaderno de Pasillo** | Un sistema cálido inspirado en hojas rayadas, sellos y anotaciones a mano, con energía de cartelera hecha entre compañeros. | 0.03 |
| **Club de Recreo** | Una interfaz pop, clara y lúdica que transforma la organización estudiantil en un tablero de actividades y desafíos. | 0.09 |

## Enfoque elegido: Campus Amplificado

### Movimiento de diseño

**Neo-brutalismo editorial suave**, mezclado con composición de afiches culturales, señalética universitaria contemporánea y módulos bento. La página se percibe como una cartelera digital viva, no como una institución rígida.

### Principios centrales

1. **La participación primero:** los accesos para proponer, votar y encontrar ayuda tienen mayor presencia visual que la información institucional.
2. **Contraste útil:** azul UNGS profundo, dorado eléctrico y blanco cálido separan acciones, estados y lecturas sin depender de ornamentos gratuitos.
3. **Ritmo de afiche:** titulares grandes, bloques asimétricos y notas cortas generan escaneo rápido desde el celular.
4. **Bento con personalidad:** las tarjetas no son una grilla monótona; alternan proporciones, color, borde y jerarquía como piezas de una misma cartelera.

### Filosofía de color

El fondo azul noche representa un espacio común abierto durante todo el día; baja la fatiga visual y permite que las llamadas de acción destaquen. El **dorado eléctrico `#F5A623`** es la firma energética del Centro: activa votos, ideas y eventos. El azul UNGS `#005A9C` mantiene el vínculo institucional, mientras que verde menta y coral solo aparecen para comunicar avance y urgencia.

### Paradigma de layout

Una **cartelera editorial en desplazamiento vertical**: una franja de navegación flotante abre paso a un hero partido con manifiesto a la izquierda y “postales” inclinadas a la derecha. Cada sección siguiente cambia de densidad: tira de indicadores, tarjetas en mosaico, lista de progreso y módulos de participación. En móvil, el relato se vuelve una secuencia de tarjetas de gran tamaño y acciones a una mano.

### Elementos distintivos

1. **Stickers de estado:** píldoras y sellos de color que etiquetan propuestas, eventos y novedades.
2. **Marco de póster:** bordes oscuros de alto contraste, sombras desplazadas y pequeños detalles tipo cinta adhesiva.
3. **Subrayado de marcador:** trazos dorados curvos que señalan verbos de acción y títulos clave.

### Filosofía de interacción

Las acciones principales deben sentirse directas y físicas: las tarjetas se elevan apenas, los botones responden con presión y los filtros revelan información sin recargar la pantalla. Las opciones aún no conectadas a servicios reales muestran una confirmación clara de “próximamente” en vez de aparentar que funcionan.

### Animación

Los elementos entran con una traslación vertical corta y opacidad escalonada, respetando `prefers-reduced-motion`. Los botones hacen una compresión de 0,97 al presionarse y las tarjetas usan transiciones de transformación de 180–220 ms con una curva `cubic-bezier(0.23, 1, 0.32, 1)`. No hay desplazamientos continuos ni efectos que dificulten la lectura.

### Sistema tipográfico

**Archivo Black** se reserva para titulares-manifiesto y números de impacto; **Manrope** sostiene textos, etiquetas y controles. Los títulos van en mayúsculas controladas, con interlineado compacto; el cuerpo mantiene contraste y tamaño cómodo para lectura en móvil.

### Esencia de marca

**El tablero vivo de la Secundaria UNGS para convertir necesidades, ideas y planes en movimiento colectivo.**

Personalidad: **frontal, cómplice, movilizadora**.

### Voz de marca

Habla con cercanía rioplatense, frases breves y verbos concretos. Evita el tono burocrático y no promete lo que aún no está resuelto.

> “Tu idea no queda en visto: dejala acá.”

> “El recreo también organiza: mirá qué se viene.”

### Wordmark y logo

Un monograma gráfico **CE/** como dos bloques enfrentados que abren una conversación: la C se forma como megáfono curvo y la E como tres bandas escalonadas. La marca no depende de texto, funciona como sello en cabeceras, favicón y stickers.

### Color distintivo de marca

**Dorado eléctrico `#F5A623`**, usado como tinta de activación, subrayado y firma visual de participación.

## Decisiones de estilo

- El primer pantallazo pone **proponer y votar** antes que presentar institucionalmente al Centro.
- El monograma **CE/** actúa como sello recurrente en navegación, módulos participativos y cierre; debe reconocerse aun sin el wordmark.
- El dorado eléctrico es exclusivamente la tinta de activación. Menta y coral se limitan a estados puntuales, sin competir con el sistema base azul noche + azul UNGS.
