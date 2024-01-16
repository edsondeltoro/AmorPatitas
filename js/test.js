const preguntas = {
    "¿De qué tamaño es tu vivienda?": {
        "Casa pequeña o departamento": "¿Tienes alergias respiratorias?",
        "Casa mediana": "¿Como describirías tu situación económica actual?",
        "Casa grande": "¿Como describirías tu situación económica actual?"
    },
    "¿Tienes alergias respiratorias?": {
        "Sí": "¿Tienes un espacio al aire libre, como un patio o balcón, donde un perro pequeño pueda jugar y hacer sus necesidades?",
        "No": "¿Estás buscando una mascota que requiera más compañía y atención o una que pueda estar más tiempo sola?"
    },
    "¿Estás buscando una mascota que requiera más compañía y atención o una que pueda estar más tiempo sola?": {
        "Puedo darle bastante cariño a mi mascota": "¿Tienes un espacio al aire libre, como un patio o balcón, donde un perro pequeño pueda jugar y hacer sus necesidades?",
        "Preferiría una mascota más independiente": "¿Estás dispuesto a cuidar un gato a largo plazo?"
    },
    "¿Estás dispuesto a cuidar un gato a largo plazo?": {
        "Sí": "¿Prefieres que tu gato sea un cachorro o un adulto?",
        "No estoy segur@": "Tu mascota ideal es un Gato de edad avanzada"
    },
    "¿Prefieres que tu gato sea un cachorro o un adulto?": {
        "Puedo educar a un cachorro": "Tu mascota ideal es un Gato cachorro",
        "Los adultos son más sencillos de cuidar": "Tu mascota ideal es un Gato adulto"
    },
    "¿Tienes un espacio al aire libre, como un patio o balcón, donde un perro pequeño pueda jugar y hacer sus necesidades?": {
        "Sí": "¿Estás dispuesto a cuidar a un perro pequeño a largo plazo?",
        "No": "¿Tienes tiempo suficiente para sacar a pasear a un perro pequeño?"
    },
    "¿Estás dispuesto a cuidar a un perro pequeño a largo plazo?": {
        "Sí": "¿Prefieres que tu perro pequeño sea un cachorro o un adulto?",
        "No estoy segur@": "Tu mascota ideal es un Perro pequeño de edad avanzada"
    },
    "¿Tienes tiempo suficiente para sacar a pasear a un perro pequeño?": {
        "Sí": "¿Estás dispuesto a cuidar a un perro pequeño a largo plazo?",
        "No": "¿Estás dispuesto a cuidar un gato a largo plazo?"
    },
    "¿Prefieres que tu perro pequeño sea un cachorro o un adulto?": {
        "Puedo educar a un cachorro": "Tu mascota ideal es un Perro pequeño cachorro",
        "Los adultos son más sencillos de cuidar": "Tu mascota ideal es un Perro pequeño adulto"
    },
    "¿Como describirías tu situación económica actual?": {
        "Algo justa": "¿Tienes alergias respiratorias?",
        "Normal": "¿Que tamaño de mascota preferirías?",
        "Buena": "¿Estás dispuesto a dedicar tiempo para el adiestramiento y socialización de una mascota de tamaño grande?"
    },
    "¿Que tamaño de mascota preferirías?": {
        "Preferiría una mascota más pequeña": "¿Tienes alergias respiratorias?",
        "Puedo cuidar a una mascota más grande": "¿Tienes un espacio al aire libre, como un patio o balcón, donde un perro mediano pueda jugar y hacer sus necesidades?"
    },
    "¿Tienes un espacio al aire libre, como un patio o balcón, donde un perro mediano pueda jugar y hacer sus necesidades?": {
        "No": "¿Tienes tiempo suficiente para sacar a pasear a un perro mediano?",
        "Si": "¿Estás dispuesto a cuidar a un perro mediano a largo plazo?"
    },
    "¿Tienes tiempo suficiente para sacar a pasear a un perro mediano?": {
        "No": "¿Tienes alergias respiratorias?",
        "Si": "¿Estás dispuesto a cuidar a un perro mediano a largo plazo?"
    },
    "¿Estás dispuesto a cuidar a un perro mediano a largo plazo?": {
        "Si": "¿Prefieres que tu perro mediano sea un cachorro o un adulto?",
        "No estoy segur@": "Tu mascota ideal es un Perro mediano de edad avanzada"
    },
    "¿Prefieres que tu perro mediano sea un cachorro o un adulto?": {
        "Puedo educar a un cachorro": "Tu mascota ideal es un Perro mediano cachorro",
        "Los adultos son más sencillos de cuidar": "Tu mascota ideal es un Perro mediano adulto"
    },
    "¿Estás dispuesto a dedicar tiempo para el adiestramiento y socialización de una mascota de tamaño grande?": {
        "No estoy segur@": "¿Que tamaño de mascota preferirías?",
        "No, no estoy dispuest@": "¿Tienes alergias respiratorias?",
        "Si, me siento capaz": "¿Tienes un espacio al aire libre, como un patio o balcón, donde un perro grande pueda jugar y hacer sus necesidades?"
    },
    "¿Tienes un espacio al aire libre, como un patio o balcón, donde un perro grande pueda jugar y hacer sus necesidades?": {
        "Si": "¿Tienes tiempo suficiente para sacar a pasear o darle actividad física a un perro Grande?",
        "No": "¿Que tamaño de mascota preferirías?"
    },
    "¿Tienes tiempo suficiente para sacar a pasear o darle actividad física a un perro Grande?": {
        "Si": "¿Estás dispuesto a cuidar a un perro grande a largo plazo?",
        "No": "¿Que tamaño de mascota preferirías?"
    },
    "¿Estás dispuesto a cuidar a un perro grande a largo plazo?": {
        "Sí": "¿Prefieres que tu perro grande sea un cachorro o un adulto?",
        "No estoy segur@": "Tu mascota ideal es un Perro grande de edad avanzada"
    },
    "¿Prefieres que tu perro grande sea un cachorro o un adulto?": {
        "Puedo educar a un cachorro": "Tu mascota ideal es un Perro grande cachorro",
        "Los adultos son más sencillos de cuidar": "Tu mascota ideal es un Perro grande adulto"
    }
};



let preguntaActual = Object.keys(preguntas)[0]; // Empezamos con la primera pregunta
let historialPreguntas = []; // Para almacenar el historial de preguntas

function mostrarPregunta(pregunta) {
    const testContainer = document.getElementById('test-container');
    testContainer.innerHTML = `
        <div class="container text-center">
            <h2 class="section-heading mb-4"><p>${pregunta}</p></h2>
            <div id="botones" class="d-flex justify-content-center"></div>
        </div>`;

    const botonesContainer = document.getElementById('botones');
    const respuestas = Object.keys(preguntas[pregunta]);
    respuestas.forEach(respuesta => {
        botonesContainer.innerHTML += `
            <button style="margin: 0 2px;" class="btn btn-primary btn-xl" onclick="mostrarSiguientePregunta('${respuesta}')">
                ${respuesta}
            </button>`;
    });
}

function mostrarPreguntaAnterior() {
    if (historialPreguntas.length > 0) {
        preguntaActual = historialPreguntas.pop(); // Obtener la pregunta anterior
        mostrarPregunta(preguntaActual); // Mostrar la pregunta anterior
    }
}

function reiniciarTest() {
    historialPreguntas = []; // Limpiamos el historial de preguntas
    preguntaActual = Object.keys(preguntas)[0]; // Reiniciamos a la primera pregunta
    mostrarPregunta(preguntaActual); // Mostrar la primera pregunta para reiniciar el test
}

function mostrarResultado(respuesta) {
    const testContainer = document.getElementById('test-container');
    testContainer.innerHTML = `
        <div class="container text-center">
            <h2 class="section-heading mb-4"><p>${respuesta}</p></h2>
        </div>
        <p style="text-align: justify;" ;>${obtenerDescripcionMascotaIdeal(respuesta)}</p>
        <p style="text-align: justify;" ;>Recuerda siempre estar informado de los cuidados y necesidades del tipo de mascota que quieras tener.</p>
        <div class="container text-center">
            <img src="${obtenerImagenMascotaIdeal(respuesta)}" alt="Imagen de la mascota ideal" style="width: 288px; height: 288px;">
        </div>
    `;
}

function obtenerDescripcionMascotaIdeal(respuesta) {
    const descripciones = {
        'Tu mascota ideal es un Gato cachorro': 'Los gatos son animales exploradores por naturaleza, demostrando una marcada curiosidad por su entorno. Son criaturas independientes, prefieren mantener su autonomía y no depender demasiado de sus dueños. Su instinto cazador les otorga una gran cantidad de energía, necesitando canales adecuados para expresarla.<br><br>' +
            'Procura que siempre tengan juguetes con los cuales puedan satisfacer sus necesidades de ejercicio, es importante cuidarlos y esterilizarlos para evitar que se salgan de tu hogar y les pueda ocurrir algo malo.<br><br>' +
            'Son extremadamente juguetones, curiosos y les encanta explorar y jugar. Durante esta etapa, están en pleno aprendizaje, desarrollando habilidades sociales y requieren una dieta y cuidados especiales asegúrate de que estén al día con sus visitas veterinarias para que crezcan sanos y fuertes. Son adorables, llenos de energía y necesitan atención y cariño para prosperar en su nuevo hogar.',
        'Tu mascota ideal es un Gato adulto': 'Los gatos son animales exploradores por naturaleza, demostrando una marcada curiosidad por su entorno. Son criaturas independientes, prefieren mantener su autonomía y no depender demasiado de sus dueños. Su instinto cazador les otorga una gran cantidad de energía, necesitando canales adecuados para expresarla.<br><br>' +
            'Procura que siempre tengan juguetes con los cuales puedan satisfacer sus necesidades de ejercicio, es importante cuidarlos y esterilizarlos para evitar que se salgan de tu hogar y les pueda ocurrir algo malo.<br><br>' +
            'Los gatos adultos son elegantes y gráciles, con cuerpos esbeltos y pelaje suave. Son independientes, pero aprecian el cariño de sus dueños. Muestran una calma encantadora y disfrutan de momentos de juego y relajación. Conocen bien su entorno y expresan su personalidad de manera única. Proporcionarles amor y cuidados garantiza una vida plena y feliz para estos encantadores compañeros felinos.',
        'Tu mascota ideal es un Gato de edad avanzada':'Los gatos son animales exploradores por naturaleza, demostrando una marcada curiosidad por su entorno. Son criaturas independientes, prefieren mantener su autonomía y no depender demasiado de sus dueños. Su instinto cazador les otorga una gran cantidad de energía, necesitando canales adecuados para expresarla.<br><br>' +
            'Procura que siempre tengan juguetes con los cuales puedan satisfacer sus necesidades de ejercicio, es importante cuidarlos y esterilizarlos para evitar que se salgan de tu hogar y les pueda ocurrir algo malo.<br><br>' +
            'Los gatos de edad avanzada son serenos y sabios, con una elegancia que viene de la experiencia. Su pelaje puede mostrar las huellas del tiempo, pero aún conservan su gracia. Prefieren momentos de tranquilidad y cariño, apreciando las comodidades del hogar. Su sabiduría y vínculos con sus dueños se vuelven más profundos, y cada ronroneo se convierte en un preciado tesoro. Brindarles cuidados especiales y amor en esta etapa es esencial para su bienestar y felicidad.',
        'Tu mascota ideal es un Perro pequeño cachorro':'Los perritos de talla pequeña son aquellos con un peso inferior a los 10 kg, son el tipo de perro más habitual en los hogares. <br><br>' +
            'Se adaptan especialmente bien a casas pequeñas o departamentos y resultan más manejables para los paseos urbanos. Requieren una menor cantidad de actividad física a comparación de perros más grandes. Suelen tener una esperanza de vida más extensa. Entender sus requerimientos nos permite proporcionarles un óptimo cuidado y asegurar que nos acompañen en buen estado de salud a lo largo de muchos años.<br><br>' +
            'Los cachorros de perro pequeño son adorables bolitas de energía y ternura. Con cuerpos diminutos y ojos curiosos, exploran el mundo con entusiasmo y curiosidad. Su pelaje es suave y esponjoso, y sus patitas, tiernas y ágiles. Les encanta jugar, descubrir todo a su alrededor y recibir cariño. Requieren cuidados delicados y amorosos para crecer fuertes y saludables en su nuevo hogar.',
        'Tu mascota ideal es un Perro pequeño adulto':'Los perritos de talla pequeña son aquellos con un peso inferior a los 10 kg, son el tipo de perro más habitual en los hogares. <br><br>' +
            'Se adaptan especialmente bien a casas pequeñas o departamentos y resultan más manejables para los paseos urbanos. Suelen tener una esperanza de vida más extensa. Entender sus requerimientos nos permite proporcionarles un óptimo cuidado y asegurar que nos acompañen en buen estado de salud a lo largo de muchos años.<br><br>' +
            'Los perros pequeños adultos son elegantes y compactos, con una presencia encantadora. Su pelaje suele estar bien cuidado y puede variar en colores y texturas. Son compañeros leales y cariñosos que se adaptan fácilmente a la vida en interiores. Disfrutan de largos ratos de relajación y también están listos para compartir momentos activos y llenos de alegría. A pesar de su tamaño, tienen un corazón grande lleno de amor y afecto para brindar a sus dueños.',
        'Tu mascota ideal es un Perro pequeño de edad avanzada':'Los perritos de talla pequeña son aquellos con un peso inferior a los 10 kg, son el tipo de perro más habitual en los hogares. <br><br>' +
            'Se adaptan especialmente bien a casas pequeñas o departamentos y resultan más manejables para los paseos urbanos. Suelen tener una esperanza de vida más extensa. Entender sus requerimientos nos permite proporcionarles un óptimo cuidado y asegurar que nos acompañen en buen estado de salud a lo largo de muchos años.<br><br>' +
            'Los perros pequeños de edad avanzada son serenos y llenos de sabiduría. Su cuerpo, aunque envejecido, aún refleja la gracia y elegancia de su juventud. Disfrutan de momentos tranquilos y aprecian el calor del hogar. Su amor y compañía son un tesoro preciado, y cada momento junto a ellos es único.',
        'Tu mascota ideal es un Perro mediano cachorro':'Los perros medianos son aquellos que pesan entre 10 kg y 25 kg y la mayoría de ellos tienen una complexión definida y equilibrada. También hay algunos tipos de perros medianos que son altos y delgados.<br><br>' +
            'Los perros medianos tienen rasgos de entusiasmo y comportamientos típicos de un perro pequeño, y también pueden mostrar comportamientos de perros grandes como un alto nivel de inteligencia y cooperación. A comparación de los perros pequeños requieren un espacio mayor y más actividad física, pero sin llegar a ser tan demandantes como los perros grandes.<br><br>' +
            'Los cachorros de perro mediano son enérgicos y juguetones, con cuerpos ágiles y atléticos. Les encanta explorar y aprender sobre su entorno, disfrutando de largos juegos y carreras. Con cada día que pasa, muestran más personalidad y cariño hacia sus dueños. Requieren atención y cuidados amorosos para crecer felices y saludables en su nuevo hogar.',
        'Tu mascota ideal es un Perro mediano adulto':'Los perros medianos son aquellos que pesan entre 10 kg y 25 kg y la mayoría de ellos tienen una complexión definida y equilibrada. También hay algunos tipos de perros medianos que son altos y delgados.<br><br>' +
            'Los perros medianos tienen rasgos de entusiasmo y comportamientos típicos de un perro pequeño, y también pueden mostrar comportamientos de perros grandes como un alto nivel de inteligencia y cooperación. A comparación de los perros pequeños requieren un espacio mayor y más actividad física, pero sin llegar a ser tan demandantes como los perros grandes.<br><br>' +
            'Los perros medianos adultos son equilibrados y llenos de vitalidad. Con cuerpos agiles y proporcionados, demuestran confianza en su andar. Son compañeros leales y amigables, listos para compartir momentos activos y también disfrutar de relajados momentos junto a sus dueños. Su tamaño ideal los convierte en compañeros perfectos para diferentes estilos de vida.',
        'Tu mascota ideal es un Perro mediano de edad avanzada':'Los perros medianos son aquellos que pesan entre 10 kg y 25 kg y la mayoría de ellos tienen una complexión definida y equilibrada. También hay algunos tipos de perros medianos que son altos y delgados.<br><br>' +
            'Los perros medianos tienen rasgos de entusiasmo y comportamientos típicos de un perro pequeño, y también pueden mostrar comportamientos de perros grandes como un alto nivel de inteligencia y cooperación. A comparación de los perros pequeños requieren un espacio mayor y más actividad física, pero sin llegar a ser tan demandantes como los perros grandes.<br><br>' +
            'Los perros medianos de edad avanzada son serenos y llenos de experiencia. Su elegancia perdura a pesar del paso del tiempo. Muestran la sabiduría acumulada en sus ojos y la calma en su comportamiento. Aprecian los momentos tranquilos y el afecto de sus seres queridos. Con cada mirada, transmiten la historia de una vida y la gratitud por los momentos juntos.',
        'Tu mascota ideal es un Perro grande cachorro':'Los perros grandes pesan de 30 kg hasta casi los 100kg en algunos casos, cuentan con una estructura ósea y muscular robusta. Tienen cuerpos amplios y altos, con extremidades fuertes y poderosas.<br><br>' +
            'Aunque pueden parecer imponentes, muchos perros grandes son amorosos, cariñosos y además muy inteligentes. Necesitan una cantidad sustancial de ejercicio para mantenerse saludables y felices. Requieren caminatas largas y actividad física regular. Requieren de gran espacio en casa y un factor a considerar es la economía ya que es más costoso mantener a un perro de mayor tamaño.<br><br>' +
            'Los cachorros de perro grande son como torbellinos de energía y encanto. Con patas largas y torpes, exploran el mundo con entusiasmo. Les encanta jugar, saltar y recibir cariño. Es importante entrenarlos, sobre todo a esta edad que son más receptivos al entrenamiento. Requieren cuidados y amor extra en esta etapa crucial para crecer saludables y fuertes en su nuevo hogar.',
        'Tu mascota ideal es un Perro grande adulto':'Los perros grandes pesan de 30 kg hasta casi los 100kg en algunos casos, cuentan con una estructura ósea y muscular robusta. Tienen cuerpos amplios y altos, con extremidades fuertes y poderosas.<br><br>' +
            'Aunque pueden parecer imponentes, muchos perros grandes son amorosos, cariñosos y además muy inteligentes. Necesitan una cantidad sustancial de ejercicio para mantenerse saludables y felices. Requieren caminatas largas y actividad física regular. Requieren de gran espacio en casa y un factor a considerar es la economía ya que es más costoso mantener a un perro de mayor tamaño.<br><br>' +
            'Los perros grandes adultos son majestuosos y poderosos, con una presencia imponente y una estructura física robusta. A pesar de su tamaño, tienen un corazón tierno y leal. Son compañeros fieles que combinan fuerza con gentileza. Disfrutan de momentos activos y también aprecian la calma y el cariño de su familia. Procura que estén bien entrenados.',
        'Tu mascota ideal es un Perro grande de edad avanzada':'Los perros grandes pesan de 30 kg hasta casi los 100kg en algunos casos, cuentan con una estructura ósea y muscular robusta. Tienen cuerpos amplios y altos, con extremidades fuertes y poderosas.<br><br>' +
            'Aunque pueden parecer imponentes, muchos perros grandes son amorosos, cariñosos y además muy inteligentes. Necesitan una cantidad sustancial de ejercicio para mantenerse saludables y felices. Requieren caminatas largas y actividad física regular. Requieren de gran espacio en casa y un factor a considerar es la economía ya que es más costoso mantener a un perro de mayor tamaño.<br><br>' +
            'Los perros grandes de edad avanzada son sabios y serenos, con una elegancia que proviene de los años vividos. Su mirada refleja experiencias vividas y un amor incondicional. Prefieren momentos de tranquilidad y cariño, apreciando cada momento con sus seres queridos.'
    };

    return descripciones[respuesta] || 'No se encontró descripción.'; // Mensaje predeterminado si no se encuentra la descripción
}

function obtenerImagenMascotaIdeal(resultado) {
    const imagenes = {
        'Tu mascota ideal es un Gato cachorro': 'node_modules/startbootstrap-business-casual/dist/assets/resultados/gato_cachorro.jpg',
        'Tu mascota ideal es un Gato adulto': 'node_modules/startbootstrap-business-casual/dist/assets/resultados/gato_adulto.jpg',
        'Tu mascota ideal es un Gato de edad avanzada': 'node_modules/startbootstrap-business-casual/dist/assets/resultados/gato_avanzada.jpg',
        'Tu mascota ideal es un Perro pequeño cachorro': 'node_modules/startbootstrap-business-casual/dist/assets/resultados/pequeno_cachorro.jpg',
        'Tu mascota ideal es un Perro pequeño adulto': 'node_modules/startbootstrap-business-casual/dist/assets/resultados/pequeno_adulto.jpg',
        'Tu mascota ideal es un Perro pequeño de edad avanzada': 'node_modules/startbootstrap-business-casual/dist/assets/resultados/pequeno_avanzada.jpg',
        'Tu mascota ideal es un Perro mediano cachorro': 'node_modules/startbootstrap-business-casual/dist/assets/resultados/mediano_cachorro.jpg',
        'Tu mascota ideal es un Perro mediano adulto': 'node_modules/startbootstrap-business-casual/dist/assets/resultados/mediano_adulto.jpg',
        'Tu mascota ideal es un Perro mediano de edad avanzada': 'node_modules/startbootstrap-business-casual/dist/assets/resultados/mediano_avanzada.jpg',
        'Tu mascota ideal es un Perro grande cachorro': 'node_modules/startbootstrap-business-casual/dist/assets/resultados/grande_cachorro.jpg',
        'Tu mascota ideal es un Perro grande adulto': 'node_modules/startbootstrap-business-casual/dist/assets/resultados/grande_adulto.jpg',
        'Tu mascota ideal es un Perro grande de edad avanzada': 'node_modules/startbootstrap-business-casual/dist/assets/resultados/grande_avanzada.jpg'
    };

    return imagenes[resultado] || 'node_modules/startbootstrap-business-casual/dist/assets/resultados/default.jpg'; // Ruta predeterminada si no se encuentra la imagen
}

function mostrarSiguientePregunta(respuesta) {
    historialPreguntas.push(preguntaActual); // Guardamos la pregunta actual en el historial
    preguntaActual = preguntas[preguntaActual][respuesta];
    if (preguntaActual === "Tu mascota ideal es un Gato cachorro") {
        mostrarResultado(preguntaActual);
    }
    else if(preguntaActual === "Tu mascota ideal es un Gato adulto") {
        mostrarResultado(preguntaActual);
    }
    else if(preguntaActual === "Tu mascota ideal es un Gato de edad avanzada") {
        mostrarResultado(preguntaActual);
    }
    else if(preguntaActual === "Tu mascota ideal es un Perro pequeño cachorro") {
        mostrarResultado(preguntaActual);
    }
    else if(preguntaActual === "Tu mascota ideal es un Perro pequeño adulto") {
        mostrarResultado(preguntaActual);
    }
    else if(preguntaActual === "Tu mascota ideal es un Perro pequeño de edad avanzada") {
        mostrarResultado(preguntaActual);
    }
    else if(preguntaActual === "Tu mascota ideal es un Perro mediano cachorro") {
        mostrarResultado(preguntaActual);
    }
    else if(preguntaActual === "Tu mascota ideal es un Perro mediano adulto") {
        mostrarResultado(preguntaActual);
    }
    else if(preguntaActual === "Tu mascota ideal es un Perro mediano de edad avanzada") {
        mostrarResultado(preguntaActual);
    }
    else if(preguntaActual === "Tu mascota ideal es un Perro grande cachorro") {
        mostrarResultado(preguntaActual);
    }
    else if(preguntaActual === "Tu mascota ideal es un Perro grande adulto") {
        mostrarResultado(preguntaActual);
    }
    else if(preguntaActual === "Tu mascota ideal es un Perro grande de edad avanzada") {
        mostrarResultado(preguntaActual);
    }
    else {
        mostrarPregunta(preguntaActual);
    }
}

// Mostrar la primera pregunta al cargar la página
mostrarPregunta(preguntaActual);


