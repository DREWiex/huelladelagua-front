
export const questions = [

    // la propiedad 'category' podría ser el nombre de la columna en la base de datos
    // en el caso de las preguntas múltiples, se siguen tratando como individuales de cara a los endpoints de las bbdd
    // para calcular los píxeles se tomó como referencia el total de píxeles máximo que puede alcanzar la ola (500) y el total de litros máximo (11616,85 –la media de m2 fue de 250 en la pregunta 14–), y en función de litro/día se realizó una regla de tres

    // PREGUNTA 1
    {
        question_id: 1,
        question_group: undefined,
        category: "rango_edad",
        question: "¿Cuál es tu rango de edad?",
        description: "Este dato es 100% anónimo",
        answers: [
            { answer_id: 1, answer: "Menor de 18 años", liters: 0, euros: 0, pixels: 0, icon: "/assets/icons/persona.svg" },
            { answer_id: 2, answer: "Entre 18 y 35 años", liters: 0, euros: 0, pixels: 0, icon: "/assets/icons/persona.svg" },
            { answer_id: 3, answer: "Entre 36 y 65 años", liters: 0, euros: 0, pixels: 0, icon: "/assets/icons/persona.svg" },
            { answer_id: 4, answer: "Mayor de 65 años", liters: 0, euros: 0, pixels: 0, icon: "/assets/icons/persona.svg" },
        ],
        img: "/assets/1200-quiz-imgs/quiz1.png"
    },

    // PREGUNTA 2 //! pendiente corregir
    {
        question_id: 2,
        question_group: undefined,
        category: "personas_hogar",
        question: "¿Cuántas personas forman parte de tu hogar?",
        description: "De todas las edades",
        answers: [
            { answer_id: 5, answer: 1, liters: 0, euros: 0, pixels: 0 }
        ],
        icons: [ "/assets/icons/persona.svg" ],
        img: "/assets/1200-quiz-imgs/quiz2.png"
    },

    // PREGUNTA 3
    {
        question_id: 3,
        question_group: undefined,
        category: "provincia",
        question: "¿En qué provincia vives?",
        description: "El consumo varía según la zona donde vivas",
        answers: [
            {
                answer_id: 6,
                answer: [
                  'SELECCIONA', 'Alava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Avila', 'Badajoz', 'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 'La Coruña', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara', 'Guipúzcoa', 'Huelva', 'Huesca', 'Islas Baleares', 'Jaén', 'León', 'Lérida', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Orense', 'Palencia', 'Las Palmas', 'Pontevedra', 'La Rioja', 'Salamanca', 'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza'
                ],
                liters: 0,
                euros: 0,
                pixels: 0
            }
        ],
        img: "/assets/1200-quiz-imgs/quiz3.png"
    },

    // PREGUNTA 4
    {
        question_id: 4,
        question_group: undefined,
        category: "temas_interes",
        question: "¿De cuál de estos temas te interesaría saber más?",
        description: "Vamos a trabajar duro en lo que más te interesa",
        answers: [
            { answer_id: 7, answer: "Ahorrar agua", liters: 0, euros: 0, pixels: 0, icon: "/assets/icons/ahorrar-agua.svg" },
            { answer_id: 8, answer: "Ayudar al ecosistema", liters: 0, euros: 0, pixels: 0, icon: "/assets/icons/ecosistema.svg" },
            { answer_id: 9, answer: "Ahorrar dinero", liters: 0, euros: 0, pixels: 0, icon: "/assets/icons/ahorrar-euro.svg" },
            { answer_id: 10, answer: "Conocer mi huella hídrica", liters: 0, euros: 0, pixels: 0, icon: "/assets/icons/huella-hidrica.svg" },
        ],
        img: "/assets/1200-quiz-imgs/quiz4.png"
    },

    // PREGUNTA 5
    {
        question_id: 5,
        question_group: undefined,
        category: "ducha",
        question: "¿Cuánto tiempo te tomas para disfrutar de una ducha?",
        description: "Una ducha de 5 min gasta hasta 100L de agua",
        answers: [
            { answer_id: 11, answer: "Menos de 5 minutos", liters: 1.19, euros: 0.00227, pixels: 0.05, icon: "/assets/icons/5minutos.svg" },
            { answer_id: 12, answer: "Entre 5 y 10 minutos", liters: 2.07, euros: 0.00395, pixels: 0.09, icon: "/assets/icons/10minutos.svg" },
            { answer_id: 13, answer: "Entre 11 y 15 minutos", liters: 3.56, euros: 0.00679, pixels: 0.15, icon: "/assets/icons/15minutos.svg" },
            { answer_id: 14, answer: "Más de 15 minutos", liters: 5.93, euros: 0.01132, pixels: 0.26, icon: "/assets/icons/20minutos.svg" },
        ],
        img: "/assets/1200-quiz-imgs/quiz5.png"
    },

    // PREGUNTA 6_1-a
    {
        question_id: 6,
        question_group: "1-a",
        category: "lavadora",
        question: "¿Cuántas veces a la semana usas la lavadora?",
        description: [
            { question_id: 6, text: "Lavadora", icon: "/assets/icons/lavadora.svg", icon_bg_color: "quiz-current-page" },
            { question_id: 7, text: "Lavavajillas", icon: "/assets/icons/lavavajillas.svg", icon_bg_color: "quiz-next-page" },
            { question_id: 8, text: "Modo ECO", icon: "/assets/icons/eco.svg", icon_bg_color: "quiz-next-page" }
        ],
        answers: [
            { answer_id: 15, answer: "Menos de 3 veces", liters: 21.36, euros: 0.04079, pixels: 0.92, icon: "/assets/icons/lavadora.svg" },
            { answer_id: 16, answer: "Entre 3 y 5 veces", liters: 85.47, euros: 0.16324, pixels: 3.68, icon: "/assets/icons/lavadora.svg" },
            { answer_id: 17, answer: "Más de 5 veces", liters: 128.21, euros: 0.24488, pixels: 5.52, icon: "/assets/icons/lavadora.svg" },
        ],
        img: "/assets/1200-quiz-imgs/quiz6.png"
    },

    // PREGUNTA 7_1-b
    {
        question_id: 7,
        question_group: "1-b",
        category: "lavavajillas",
        question: "¿Y tu lavavajillas? ¿Cuántas veces se pone en marcha?",
        description: [
            { question_id: 6, text: "Lavadora", icon: "/assets/icons/lavadora.svg", icon_bg_color: "quiz-prev-page" },
            { question_id: 7, text: "Lavavajillas", icon: "/assets/icons/lavavajillas.svg", icon_bg_color: "quiz-current-page" },
            { question_id: 8, text: "Modo ECO", icon: "/assets/icons/eco.svg", icon_bg_color: "quiz-next-page" }
        ],
        answers: [
            { answer_id: 18, answer: "1 vez al día", liters: 64.82, euros: 0.1230, pixels: 2.79, icon: "/assets/icons/lavavajillas.svg" },
            { answer_id: 19, answer: "Entre 3 y 5 a la semana", liters: 46.30, euros: 0.08843, pixels: 1.99, icon: "/assets/icons/lavavajillas.svg" },
            { answer_id: 20, answer: "Friego a mano", liters: 384.65, euros: 0.73468, pixels: 16.56, icon: "/assets/icons/plato-mano.svg" },
        ],
        img: "/assets/1200-quiz-imgs/quiz7.png"
    },

    // PREGUNTA 8_1-c
    {
        question_id: 8,
        question_group: "1-c",
        category: "modo_eco",
        question: "¿Usas la función ECO en tus electrodomésticos?",
        description: [
            { question_id: 6, text: "Lavadora", icon: "/assets/icons/lavadora.svg", icon_bg_color: "quiz-prev-page" },
            { question_id: 7, text: "Lavavajillas", icon: "/assets/icons/lavavajillas.svg", icon_bg_color: "quiz-prev-page" },
            { question_id: 8, text: "Modo ECO", icon: "/assets/icons/eco.svg", icon_bg_color: "quiz-current-page" }
        ],
        answers: [
            { answer_id: 21, answer: "Siempre", liters: -31.02, euros: -0.05924, pixels: -1.34, icon: "/assets/icons/eco.svg" },
            { answer_id: 22, answer: "A veces", liters: -15.51, euros: -0.02962, pixels: -0.67, icon: "/assets/icons/eco.svg" },
            { answer_id: 23, answer: "No conocía el modo eco", liters: 0, euros: 0, pixels: 0, icon: "/assets/icons/eco.svg" },
        ],
        img: "/assets/1200-quiz-imgs/quiz8.png"
    },

    // PREGUNTA 9_2-a
    {
        question_id: 9,
        question_group: "2-a",
        category: "recicla_agua",
        question: "¿Tienes el hábito de reciclar agua para otras tareas?",
        description: [
             { question_id: 9, text: "Reciclar o reusar agua", icon: "/assets/icons/reciclar-agua.svg", icon_bg_color: "quiz-current-page" },
             { question_id: 10, text: "Reciclar papel, vidrio o plástico", icon: "/assets/icons/reciclaje-papel.svg", icon_bg_color: "quiz-next-page" }
        ],
        answers: [
            { answer_id: 24, answer: "Sí", liters: -2, euros: -0.00382, pixels: -0.09, icon: "/assets/icons/reciclar-agua.svg" },
            { answer_id: 25, answer: "No", liters: 0, euros: 0, pixels: 0, icon: "/assets/icons/reciclar-agua.svg" },
            { answer_id: 26, answer: "¡Buena idea! ¡Voy a probarlo!", liters: 0, euros: 0, pixels: 0, icon: "/assets/icons/reciclar-agua.svg" },
        ],
        img: "/assets/1200-quiz-imgs/quiz9.png"
    },

    // PREGUNTA 10_2-b
    {
        question_id: 10,
        question_group: "2-b",
        category: "recicla_papel",
        question: "¿Y qué hay del vidrio, cartón y plástico?",
        description: [
            { question_id: 9, text: "Reciclar o reusar agua", icon: "/assets/icons/reciclar-agua.svg", icon_bg_color: "quiz-prev-page" },
            { question_id: 10, text: "Reciclar papel, vidrio o plástico", icon: "/assets/icons/reciclaje-papel.svg", icon_bg_color: "quiz-current-page" }
       ],
       answers: [
            { answer_id: 27, answer: "A veces", liters: -2, euros: -0.00382, pixels: -0.09, icon: "/assets/icons/reciclaje-papel.svg" },
            { answer_id: 28, answer: "Siempre", liters: -4, euros: -0.00764, pixels: -0.17, icon: "/assets/icons/reciclaje-papel.svg" },
            { answer_id: 29, answer: "¡Nunca!", liters: 0, euros: 0, pixels: 0, icon: "/assets/icons/reciclaje-papel.svg" }
        ],
        img: "/assets/1200-quiz-imgs/quiz10.png"
    },

    // PREGUNTA 11
    {
        question_id: 11,
        question_group: undefined,
        category: "carne",
        question: "¿Cuántas veces incluyes carne en tus comidas?",
        description: "Ese pequeño bocata de jamón también cuenta…",
        answers: [
            { answer_id: 30, answer: "1 vez al día", liters: 7680, euros: 14.6688, pixels: 330.55, icon: "/assets/icons/carne.svg" },
            { answer_id: 31, answer: "1 vez cada 3 días", liters: 5960, euros: 11.3836, pixels: 256.52, icon: "/assets/icons/carne.svg" },
            { answer_id: 32, answer: "1 vez a la semana", liters: 5630, euros: 10.7533, pixels: 242.32, icon: "/assets/icons/carne.svg" },
            { answer_id: 33, answer: "¡Nunca!", liters: 4060, euros: 7.7546, pixels: 174.75, icon: "/assets/icons/carne.svg" },
        ],
        img: "/assets/1200-quiz-imgs/quiz11.png"
    },

    // PREGUNTA 12
    {
        question_id: 12,
        question_group: undefined,
        category: "coche",
        question: "¿Cuántos Km dirías que haces en coche semanalmente?",
        description: "Producir 1L de gasolina necesita de 97L de agua",
        answers: [
            { answer_id: 34, answer: "Menos de 100 Km", liters: 82.91, euros: 0.15835, pixels: 3.57, icon: "/assets/icons/coche.svg" },
            { answer_id: 35, answer: "100 - 200 Km", liters: 207.28, euros: 0.39590, pixels: 8.92, icon: "/assets/icons/coche.svg" },
            { answer_id: 36, answer: "Más de 200 Km", liters: 345.47, euros: 0.65984, pixels: 14.87, icon: "/assets/icons/coche.svg" },
            { answer_id: 37, answer: "No uso coche", liters: 0, euros: 0, pixels: 0, icon: "/assets/icons/coche-no.svg" },
        ],
        img: "/assets/1200-quiz-imgs/quiz12.png"
    },

    // PREGUNTA 13
    {
        question_id: 13,
        question_group: undefined,
        category: "mascota",
        question: "¿Cuánto gastas al mes en comida para tu mascota?",
        description: "Tu amigo peludo también come y bebe",
        answers: [
            { answer_id: 38, answer: "No tengo mascota", liters: 0, euros: 0, pixels: 0, icon: "/assets/icons/mascota.svg" },
            { answer_id: 39, answer: "Menos de 50 €", liters: 524.19, euros: 1.0012, pixels: 22.56, icon: "/assets/icons/mascota.svg" },
            { answer_id: 40, answer: "Entre 50 y 100 €", liters: 982.87, euros: 1.87728, pixels: 42.30, icon: "/assets/icons/mascota.svg" },
            { answer_id: 41, answer: "Más de 100 €", liters: 1572.59, euros: 3.00364, pixels: 67.69, icon: "/assets/icons/mascota.svg" },
        ],
        img: "/assets/1200-quiz-imgs/quiz13.png"
    },

    // PREGUNTA 14
    {
        question_id: 14,
        question_group: undefined,
        category: "jardin",
        question: `¿Cuántos m${"\u00B2"} tiene tu jardín?`, // m${"\u00B2"} = m²
        description: [ "Escribe 0 si no tienes jardín", `m${"\u00B2"} de tu jardín` ], // description[1] = placeholder
        answers: [
            { answer_id: 42, answer: 0, liters: 0, euros: 0, pixels: 0 }
        ],
        img: "/assets/1200-quiz-imgs/quiz14.png"
    },

    // PREGUNTA 15
    {
        question_id: 15,
        question_group: undefined,
        category: "gasto_agua",
        question: "¿Sabes cuánto te cuesta el agua cada mes?",
        description: "Una cantidad aproximada",
        answers: [
            { answer_id: 43, answer: "Menos de 10 €", liters: 0, pixels: 0, icon: "/assets/icons/AguaPrecio.svg" },
            { answer_id: 44, answer: "Entre 10 € y 40 €", liters: 0, pixels: 0, icon: "/assets/icons/AguaPrecio.svg" },
            { answer_id: 45, answer: "Más de 40 €", liters: 0, pixels: 0, icon: "/assets/icons/AguaPrecio.svg" },
            { answer_id: 46, answer: "¡Ni idea!", liters: 0, pixels: 0, icon: "/assets/icons/AguaPrecio.svg" }
        ],
        img: "/assets/1200-quiz-imgs/quiz15.png"
    },
    
];