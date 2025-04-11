
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

### Cambio del modo oscuro
Primero para realizar el cambio del estilo para hacer el modo oscuro hay que seleccionar el elemento que queremos cambiar, en este caso el body y footer, despues antes de poder cambiar el estilo hay que seleccionar el input por la ID con el getElementById(), ya por ultimo para cambiar el estilo hay que añadir un escuchador un addEventListener() y que este "escuche" o vea cuando cambia con el evento change(), el input puede cambiar a checked o no, en este caso si se cambia a true, entonces se activa el modo oscuro, si no se cambia a false, entonces se desactiva el modo oscuro, esto se hace con el setAttribute() que selecciona el atributo del tema que seria el default que esta en el Root y con la cambia por la variable del modo oscuro almacendada en el CSS.

### Añadir un mensaje en la parte inferior de la página
Primero hay que crear un elemento desde el cual se mostrara el mensaje, esto se hace con el createElement en el documento esto lo guardamos en una constante para poder ir cambiando el estilo lo cual es lo segundo ya que  seleccionando esta constante y con el .style se le va añadiendo estilos con el backgroundcolor, padding, entre otros, despues se añade el mensaje con un textContent mostrando si se ha puesto o quitado el modo oscuro y por ultimo se añade el hijo (Child) con el appendChild al body para que se muestre

### Eliminar el mensaje en la parte inferior de la página
Primero hay que añadir un "cronometo" / "contador" para que pasado X tiempo en ms se ejecute la parte del codigo que se quiera en este caso es tan facil con al body quitarle el hijo del mensaje con el removeChild()

### Mostrar y Ocultar los input del formulario de contacto

Primero se seleciona por la ID el input que lo activa con el getElementById() y despues igual que el cambio de modo oscuro con un addEventListener() se "escucha" el evento Change y cuando esto pasa se verificas si el input esta checked o no, lo cual hace que seleccionando la clase de los inputs con el document.querySelector(.nombre_de_la_clase) se le cambie con el .style se cambia el display de none a block o a none si no esta checked el input

### Agregar imágenes a la galería dinámica

Primero en el HTML hay que añadir un div donde se vayan a crear y mostrar las fotos para poder seleccionarlo facilmente abria que darle una clase o una id, tambien hay que añadir un input de tipo File y con una id pero tambien es recomendable añadir el accept que define que tipo de archivo podemos seleccionar, en el caso de image/* singnifica que solo aceptara archivos de imagen y el /* especifica que se pueden todos los tipos extensiones para archivos de imagen, por ejemplo JPEG, PNG, etc...

Lo segundo seria empezar con el JS, en este se realizan las siguientes acciones:
- Se selecciona el input de tipo File con el getElementById()
- Se selecciona el div donde se va a mostrar las fotos con el getElementById()
- Se añade un evento listener al input de tipo File con el addEventListener() y cuando cambia se ejecuta la funcion que nosotros queremos
- Se crear una costante para los archivos asignandole el valor de un Array de los archivos añadidos en el input
- Con un forEach() se recorren los archivos realizando lo que nosotros le queremos con cada uno de ellos, el forEach() es similar a un for (archivo of archivos)
- Ahora para cada archivo se le crea una costante lector que es una instancia de FileReader, esto es para poder leer el contenido del archivo
- Despues desde el lecto se llama a la funcion onLoad() que carga el archivo y eso ejecuta una funcion que se le pasa el evento que es decir el contenido del archivo
- Se crea una costante que seria una img
- A la img creada antes se le pasa el src que este es una llamada al contenido del archivo (evento) que a su vez llama al reader (target) y es llama a result que devuelve el contenido del archivo por decirlo de alguna manera como una ruta o url que este seria un String del archivo codificado en texto que es capaz de ser interpretado por el src de img
- Tambien se le añade a la img un alt que es el nombre del archivo
- Finalmente se añade a la galeria con appendChild() el img creado
- Por ultimo se llama a la funcion del reader .readAsDataURL() que es la que lee el contenido del archivo y activa la funcion definida antes del onLoad() haciendo que se cree la img en la galeria del HTML, y a esta ya por utimo se le da el estilo en el CSS

### Validador de formulario

Primero en el HTML creo varios parafor (p) debajo de los inputs del formulario y a estos les doy una id para poder identificarlos, al igual que los inputs.

Lo siguiente que hago es en el JS selecciono cada uno de los parrafos y de los input mediante las id

Ya por ultimo se crean uno if para comprobar el cotenido del los inputs, en si son todo iguales exepto 2 que explicare abajo, en estos lo que hacen principalmente es que si escribes algo y lo borras, un listener activa la comprobacion y si el valor del input  es igual a '' es decir esta vacio el String el display del p con el error cambia a block y en caso contrario se cambia a none

El primer caso en el que cambia es levemente en el del correo electronico, tiene la misma funcion que el resto con el añadido de que ademas no deve estar vacio, tambien debe seguir el formato que se le paso por la expresion regular, en este se hace que el patron con la funcion .test(formCorreo.value) hace que el string que introducimo en el input se le pase a la funcion y retorne un true cuando el String siga el formato del patron.

El segundo caso fue que se me complico un poco mas ya que es el grupo de inputs de los servicios ya que si no habia ninguno deberia salir el mensaje error pero con que habiera uno quitarse, aqui lo que hice fue en vez de selecionar el input por la id selecione todos por la clase y le añadie el listener que comprueba el cambio y eso inicia un comprobacion de todos los checks con el array de estos y el .some() que en caso de que alguno se encontrara checkeado devolviera true y se almacenara en una variable y con un if se compriba si esa variable es true o no, en este caso si es true se oculta el mensaje de error y si no se muestra el error

### explicacion de los comandos basicos de JS

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
