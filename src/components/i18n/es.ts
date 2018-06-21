export const phrases = {
  "lrtp": {
    "app": {
      "label": "C-U Voces de Transporte",
      "basemap": {
        "imagery": "Imágenes",
        "hybrid": "Imágenes con etiquetas"
      },
      "comment": {
        "label": "Comentarios",
        "location": "Elija una ubicación",
        "add": "Añada un comentario",
        "added": "Tu comentario ha sido agregado.",
        "moderation": "Tu comentario está esperando ser moderado.",
        "error": "Ocurrió un error. Por favor, inténtelo de nuevo más tarde."
      },
      "intro": {
        "next": "→",
        "prev": "←",
        "done": "Hecho",
        "close": "Cerrado",
        "welcome": {
          "title": "Bienvenido",
          "text": "Bienvenido a %{app_label} por la Comisión de Planificación Regional del Condado de Champaign. Puede navegar por el mapa para ver comentarios."
        },
        "view": {
          "title": "Ver comentarios",
          "text": "El panel de comentarios muestra los detalles de todos los comentarios actualmente visibles en el mapa."
        },
        "locate": {
          "title": "Encuentra un comentario",
          "text": "Toca el botón de localizar para acercar el mapa a un comentario."
        },
        "like": {
          "title": "Te gusta el comentario",
          "text": "Muestra tu apoyo para un comentario tocando la estrella."
        },
        "add": {
          "title": "Añada un comentario",
          "text": "Para agregar un comentario, toque el botón más, seleccione una ubicación y complete el formulario de comentarios."
        },
        "survey": {
          "title": "Tome la Encuesta",
          "text": "Toque la bombilla para realizar una breve encuesta sobre el futuro del transporte en nuestra región. ¡Feliz navegación!"
        }
      }
    },
    "survey-controller": {
      "title": "Tome la Encuesta de Transporte",
      "text": "Por favor, comparta sus ideas sobre el futuro del transporte en nuestra comunidad mediante una breve encuesta. Puede acceder a la encuesta más tarde utilizando el ícono% {icon} en la barra de herramientas localizada en la parte superior.",
      "later": "Hazlo más tarde",
      "now": "Hazlo ahora"
    },
    "form": {
      "labels": {
        "mode": "Elige un Modo de Transporte",
        "category": "Elige una Categoría",
        "comment": "Elija un Comentario",
        "details": "Incluya detalles adicionales (opcional)"
      },
      "pedestrian": {
        "label": "Caminar or Silla de Ruedas",
        "crosswalk": {
          "label": "Paso de Peatones",
          "ok": "Paso de peatones funciona bien",
          "add": "Agrega un paso de peatones aquí",
          "pavement": "Repara el pavimento desigual en el paso de peatones",
          "repaint": "Repinta paso de peatones"
        },
        "curbramp": {
          "label": "Rampa de Acera",
          "ok": "La rampa de la acera funciona bien",
          "add": "Agrega una rampa de acera aquí",
          "design": "Cambia el diseño de la rampa de la acera (por favor describa abajo)",
          "repair": "Repara o reemplaza la rampa de la acera"
        },
        "sidewalk": {
          "label": "Aceras",
          "ok": "La acera funciona bien",
          "add": "Agrega una acera aquí",
          "obstruction": "Elimina obstrucción en la acera (por favor describa abajo)",
          "repair": "Repara o reemplaza la acera",
          "widen": "Ensancha la acera estrecha"
        },
        "sign": {
          "label": "Signos y Señales",
          "ok": "Signos y señales funcionan bien",
          "stop": "Agrega señales de alto aquí",
          "pedestriansignal": "Agrega señales peatonales aquí",
          "trafficsignal": "Agrega señales de tráfico aquí",
          "crossingtime": "Aumenta el tiempo de cruce",
          "movesignal": "Mueva el botón o señal peatonal",
          "speedlimit": "Reduzca el límite de velocidad de la carretera"
        },
        "other": {
          "label": "Otro",
          "goodaccessibility": "Buen acceso para múltiples modos aquí",
          "lighting": "Agrega iluminación aquí",
          "roundabout": "Convierte la intersección en una redoma o rotonda",
          "separation": "Aumenta la separación entre automovilistas y peatones",
          "other": "Otro (por favor describa abajo)"
        }
      },
      "bicycle": {
        "label": "Bicicleta",
        "facility": {
          "label": "Carriles y Senderos para Bicicletas",
          "ok": "Carriles y senderos para bicicletas funcionan bien",
          "onstreet": "Agrega carril de ciclistas en la calle",
          "offstreet": "Agrega un camino lateral o sendero fuera de la calle",
          "pavement": "Arregla el pavimento desigual en carril de bicicletas o sendero",
          "repair": "Repara o reemplaza carriles o senderos para bicicletas"
        },
        "parking": {
          "label": "Estacionamiento de Bicicletas",
          "ok": "Estacionamiento de bicicletas funciona bien",
          "add": "Agrega estacionamiento de bicicletas",
          "change": "Cambia el tipo de estacionamiento de bicicletas",
          "repair": "Repara o reemplaza el estacionamiento de  bicicletas"
        },
        "sign": {
          "label": "Signos y Señales",
          "ok": "Signos y señales funcionan bien",
          "signal": "Agrega señales de tráfico activadas por bicicleta aquí",
          "stop": "Agrega señales de alto aquí",
          "wayfinding": "Añada o mejora los signos de orientación para los ciclistas",
          "crossingtime": "Aumenta el tiempo de cruce",
          "speedlimit": "Reduzca el límite de velocidad"
        },
        "other": {
          "label": "Otro",
          "goodaccessibility": "Buen acceso para múltiples modos aquí",
          "lighting": "Agrega iluminación aquí",
          "roundabout": "Convierte la intersección en una redoma o rotonda",
          "visibility": "Mejora la visibilidad para los ciclistas",
          "separation": "Aumenta la separación entre automovilistas y ciclistas",
          "other": "Otro (por favor describa abajo)"
        }
      },
      "bus": {
        "label": "Autobús",
        "amenity": {
          "label": "Bancos, Refugios, y Comodidades",
          "ok": "Las amenidades en esta parada funcionan bien",
          "bench": "Agrega un banco en esta parada",
          "landingpad": "Agrega una plataforma de embarque en la parada para facilitar el embarque",
          "shelter": "Agrega un refugio en esta parada",
          "audiblesign": "Agrega señalización audible en esta parada para rutas e información",
          "bikeparking": "Añada estacionamiento para bicicletas en esta parada",
          "lighting": "Agrega iluminación en esta parada"
        },
        "stop": {
          "label": "Ubicaciones de Paradas de Autobús",
          "ok": "La ubicación de la parada de autobús funciona bien",
          "safe": "Me siento seguro en esta parada",
          "unsafe": "No me siento seguro en esta parada",
          "add": "Agrega una parada aquí",
          "move": "Mueva este parada (por favor describa abajo)",
          "remove": "Elimina este parada"
        },
        "schedule": {
          "label": "Horario y Servicio",
          "ok": "El servicio de autobús en este lugar funciona bien",
          "add": "Agrega una nueva ruta aquí (por favor describa abajo)",
          "frequency": "Aumenta la frecuencia del autobús aquí",
          "weekday": "Aumenta las horas de servicio en los días de semana aquí",
          "weekend": "Aumenta las horas de servicio de fin de semana aquí",
          "delays": "Reduce las demoras de los autobuses aquí"
        },
        "other": {
          "label": "Otro",
          "goodaccessibility": "Buen acceso para múltiples modos aquí",
          "pavement": "Mejora la condición del pavimento para los autobuses",
          "separation": "Aumenta la separación entre los autobuses y otros usuarios de la carretera",
          "conflicts": "Reduzca los conflictos entre los autobuses y otros usuarios de la carretera",
          "other": "Otro (por favor describa abajo)"
        }
      },
      "automobile": {
        "label": "Automóvil",
        "driving": {
          "label": "Condiciones de Manejo",
          "ok": "Buena circulación de automóviles aquí",
          "lighting": "Agrega iluminación pública",
          "design": "Cambia el diseño o el ancho de la carretera (por favor describa abajo)",
          "pavement": "Repara el pavimento desigual",
          "markings": "Mejora las marcas en el pavimento",
          "visibility": "Mejora la visibilidad para los conductores",
          "speedlimit": "Reduzca el límite de velocidad",
          "congestion": "Reduzca la congestión del tráfico"
        },
        "multimodal": {
          "label": "Instalaciones para Peatones, Bicicletas y Autobuses",
          "ok": "Buen acceso para múltiples modos aquí",
          "bikelane": "Agrega un carril de bicicletas en la calle",
          "sidepath": "Agrega un sendero fuera de la calle",
          "sidewalk": "Agrega una acera fuera de la calle",
          "buslane": "Agrega un carril dedicado solo a autobuses"
        },
        "sign": {
          "label": "Signos y Señales",
          "ok": "Signos y señales funcionan bien",
          "signal": "Agrega señales de tráfico activadas por bicicleta aquí",
          "stop": "Agrega señales de alto aquí",
          "wayfinding": "Añada o mejora los signos de orientación para los ciclistas",
          "crossing": "Aumenta el tiempo de cruce",
          "speedlimit": "Reduzca el límite de velocidad"
        },
        "parking": {
          "label": "Estacionamiento",
          "ok": "Estacionamiento funciona bien",
          "add": "Añada estacionamiento para automóviles aquí",
          "reduce": "Reduzca estacionamiento para automóviles aquí",
          "bike": "Agrega estacionamiento de bicicletas aquí"
        },
        "other": {
          "label": "Otro",
          "goodaccessibility": "Buen acceso para múltiples modos aquí",
          "lighting": "Agrega iluminación pública",
          "roundabout": "Convierta la intersección en una redoma o rotonda",
          "visibility": "Mejora la visibilidad para los conductores",
          "separation": "Aumenta la separación entre automovilistas y ciclistas",
          "other": "Otro (por favor describa abajo)"
        }
      },
      "train": {
        "label": "Tren",
        "ok": "Me gustan las opciones existentes para viajar en tren",
        "highspeed": "Agrega tren de alta velocidad o tren bala a Chicago",
        "destination": "Agrega servicio de tren a otra ciudad",
        "frequency": "Aumenta la frecuencia de viaje en tren",
        "delays": "Reduzca los retrasos en los trenes",
        "prices": "Reduzca los precios de los boletos de tren",
        "other": "Otro (por favor describa abajo)"
      },
      "plane": {
        "label": "Avión",
        "ok": "Me gustan las opciones existentes para viajar en avión",
        "destination": "Agrega vuelos directos a otros lugares (por favor describa abajo)",
        "times": "Agrega más tiempo de salida y llegada",
        "transit": "Agrega una opción de tránsito hacia y desde el aeropuerto",
        "parking": "Ofrezca estacionamiento gratis en el aeropuerto",
        "other": "Otro (por favor describa abajo)"
      }
    }
  }
};
