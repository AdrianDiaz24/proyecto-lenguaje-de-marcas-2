
# Descripción Detallada del Proyecto

## Proyecto: Página Web Integral de Servicios de Ordenadores y Noticias Tecnológicas

###  Resumen General: 

Nuestra página web es un espacio único dedicado a brindar servicios especializados en el cuidado y mejora de ordenadores, combinado con      una sección informativa de noticias tecnológicas. Es una plataforma diseñada para atender a clientes particulares, profesionales y           empresas que buscan soluciones prácticas y confiables, así como mantenerse actualizados con las últimas tendencias en software y             hardware.

### Características Principales:
    
**- Servicios Técnicos Especializados:**

- Mantenimiento preventivo y correctivo: Garantizamos que los equipos funcionen al máximo rendimiento.

- Reparaciones personalizadas: Solucionamos fallos de hardware y software de manera eficiente.

- Montaje y overclocking: Armamos y optimizamos ordenadores para maximizar su capacidad.

- Actualización de controladores y software: Mantenemos los sistemas siempre al día.

- Instalación de sistemas operativos: Configuramos el entorno operativo de forma rápida y segura.


**- Noticias de Software y Hardware:**

- Sección dedicada a compartir las novedades más relevantes en el mundo tecnológico.

- Artículos detallados sobre lanzamientos, tendencias y comparativas entre productos.

- Actualizaciones sobre avances en hardware de alto rendimiento y software innovador.

**- Opiniones y Comunidad:**

- Espacio para reseñas y opiniones de usuarios sobre nuestros servicios y los últimos productos tecnológicos.

- Integración con redes sociales para fomentar la interacción y aumentar la visibilidad.

**- Boletín Informativo (Newsletter):**

- Suscripción gratuita para recibir noticias exclusivas, promociones y actualizaciones directamente en el correo electrónico.

**- Formulario de Contacto Personalizado:**

- Permite a los usuarios proporcionar sus datos, seleccionar servicios específicos y describir sus necesidades.

- Interfaz intuitiva y sencilla para garantizar una experiencia de usuario fluida.

### Ventajas Competitivas:
    
- Enfoque en la calidad y personalización: Adaptamos cada servicio a las necesidades específicas de nuestros clientes.

- Actualización constante: Información y servicios alineados con las últimas tendencias tecnológicas.

- Interfaz amigable: Navegación intuitiva, diseño responsive y optimización para dispositivos móviles.

- Comunicación cercana: Formularios claros, redes sociales activas y newsletter para mantenernos conectados con nuestros usuarios.

### Público Objetivo:
    
- Particulares que necesiten ayuda técnica con sus ordenadores.

- Empresas que buscan servicios de mantenimiento y optimización.

- Entusiastas de la tecnología interesados en mantenerse informados sobre hardware y software.


## Instrucciones para visualizarlo

1. Clonar el repositorio en una carpeta de tu preferencia o descargarlo como zip y descomprimirlo todo en una misma carpeta.
2. Abrir el archivo index.html en tu navegador.

## Identificar y clasificar los lenguajes de script de cliente relacionados con la web, destacando las características de JavaScript.

Se usa HTML y CSS para la creacion de la pagina y JavaScript como lenguaje de Script relacionando este con el html para modificar el DOM algunas de sus caracteristicas son las siguientes:
- Ejecución en el cliente: El código se ejecuta en el navegador del usuario, reduciendo la carga en el servidor.
- Interactividad: Permite respuestas dinámicas a las acciones del usuario.
- Integración con HTML y CSS: JavaScript trabaja junto con estos lenguajes para crear experiencias web ricas.
- Sintaxis flexible y moderna: Soporta múltiples paradigmas como programación orientada a objetos y funcional.

## Ejemplos documentados de manipulación del DOM

https://github.com/AdrianDiaz24/proyecto-lenguaje-de-marcas-2/blob/85625cce2ed3ac835db293c6d42edb5b5503cd98/assets/js/script.js#L3-L51

En el script mostrado arriba se ven los soguientes elementos de manipulacion del DOM
- getElementById(): Selecciona un elemento del DOM por una ID en este caso un input con la ID dark-mode
- document.body: Selecciona/accede al body del HTML
- querySelector(): Selecciona el primer elemento que encuentra en el documento del tipo especificado, en este caso el footer
- X.addEventListener(): Se añade un escuchador al elemento especificado, en este caso al input que tiene la id dark-mode y cuando este cambia es decir pasa a checked o no checked se activa realizando alguno de los cambios especificados
- setAttribute(): Añade/modifica un atributo, en este caso del body o el footer se cambia el tema claro por el oscuro
- removeAttribute(): Elimina el atributo especificado desde donde se llama por ejemplo body.removeAttribute() (teniendo en cuenta que body es una costante que tiene selecionado el body del documento), en el ejemplo se usa para quitar el tema y dejar el que se encuentra en la raiz del documento que seria el clarito
- document.createElement(): Crea un nuevo elemento en el DOM, en este caso se una para crear un div donde va un mensajito de si se ha activado el modo oscuro o si se ha desactivado
- textContent: Que define un texto a un elemento, en este caso en el div
- x.style.atributo: añade un estilo al elemento que se le llama, por ejemplo message.style.background-color = #000 siendo el atributo el mismo nombre que llamarias en el CSS para darle ese atributo/estilo a una parte del HTML
- x.appendChild(): añade un elemento como hijo desde donde se llama, en este caso llamandolo desde el body se le hayade el div que se encuentra en la constante del mensaje(message)
- x.removeChild(): Elimina el elemento especificado como hijo del elemento donde se le llama, en este caso se quita el div donde va el mensaje del body despues de haber pasado 1 segudno

https://github.com/AdrianDiaz24/proyecto-lenguaje-de-marcas-2/blob/85625cce2ed3ac835db293c6d42edb5b5503cd98/assets/js/inputsMontaje.js#L3-L16

- En este ejemplo se hace casi lo mismo que en el anterior:
- se selecciona un elemento por la ID montaje que seria un input con el getElementById()
- con el addEventListener() se añade uno al input de montaje
- cuando cambia el input con el querySelector() se coge la clase .montaje
- la clase .montaje seleccionada se le cambia el display con style.display a block o a none dependiendo del caso especificado
