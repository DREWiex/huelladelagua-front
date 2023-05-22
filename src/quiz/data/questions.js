
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
            { answer_id: 1, answer: "Menor de 18 años", liters: null, euros: null, pixels: null, icon: "/assets/icons/persona.svg" },
            { answer_id: 2, answer: "Entre 18 y 35 años", liters: null, euros: null, pixels: null, icon: "/assets/icons/persona.svg" },
            { answer_id: 3, answer: "Entre 36 y 65 años", liters: null, euros: null, pixels: null, icon: "/assets/icons/persona.svg" },
            { answer_id: 4, answer: "Mayor de 65 años", liters: null, euros: null, pixels: null, icon: "/assets/icons/persona.svg" },
        ],
        img: "/assets/1200-quiz-imgs/quiz1.png"
    },

    // PREGUNTA 2
    {
        question_id: 2,
        question_group: undefined,
        category: "personas_hogar",
        question: "¿Cuántas personas forman parte de tu hogar?",
        description: "De todas las edades",
        answers: [
            { answer_id: 5, answer: 1, liters: null, pixels: null }
        ],
        icons: [
            "/assets/icons/persona.svg",
        ],
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
                liters: null,
                euros: null,
                pixels: null
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
            { answer_id: 7, answer: "Ahorrar agua", liters: null, euros: null, pixels: null, icon: "/assets/icons/AhorraAgua.svg" },
            { answer_id: 8, answer: "Ayudar al ecosistema", liters: null, euros: null, pixels: null, icon: "/assets/icons/ecosistema.svg" },
            { answer_id: 9, answer: "Ahorrar dinero", liters: null, euros: null, pixels: null, icon: "/assets/icons/AhorraEuro.svg" },
            { answer_id: 10, answer: "Conocer mi huella hídrica", liters: null, euros: null, pixels: null, icon: "/assets/icons/huellaHidrica.svg" },
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
            { answer_id: 11, answer: "Menos de 5 minutos", liters: 1.19, euros: 2.27, pixels: 0.05, icon: "/assets/icons/5minutos.svg" },
            { answer_id: 12, answer: "Entre 5 y 10 minutos", liters: 2.07, euros: 3.95, pixels: 0.09, icon: "/assets/icons/1ominutos.svg" },
            { answer_id: 13, answer: "Entre 11 y 15 minutos", liters: 3.56, euros: 6.79, pixels: 0.15, icon: "/assets/icons/15minutos.svg" },
            { answer_id: 14, answer: "Más de 15 minutos", liters: 5.93, euros: 11.32, pixels: 0.26, icon: "/assets/icons/20minutos.svg" },
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
            { text: "Lavadora", icon: "/assets/icons/lavadora.svg", icon_bg_color: "quiz-current-page" },
            { text: "Lavavajillas", icon: "/assets/icons/lavavajillas.svg", icon_bg_color: "quiz-next-page" },
            { text: "Modo ECO", icon: "/assets/icons/ECO.svg", icon_bg_color: "quiz-next-page" }
        ],
        answers: [
            { answer_id: 15, answer: "Menos de 3 veces", liters: 21.36, euros: 40.79, pixels: 0.92, icon: "/assets/icons/lavadora.svg" },
            { answer_id: 16, answer: "Entre 3 y 5 veces", liters: 85.47, euros: 163.24, pixels: 3.68, icon: "/assets/icons/lavadora.svg" },
            { answer_id: 17, answer: "Más de 5 veces", liters: 128.21, euros: 244.88, pixels: 5.52, icon: "/assets/icons/lavadora.svg" },
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
            { text: "Lavadora", icon: "/assets/icons/lavadora.svg", icon_bg_color: "quiz-prev-page" },
            { text: "Lavavajillas", icon: "/assets/icons/lavavajillas.svg", icon_bg_color: "quiz-current-page" },
            { text: "Modo ECO", icon: "/assets/icons/ECO.svg", icon_bg_color: "quiz-next-page" }
        ],
        answers: [
            { answer_id: 18, answer: "1 vez al día", liters: 64.82, euros: 123.80, pixels: 2.79, icon: "/assets/icons/lavavajillas.svg" },
            { answer_id: 19, answer: "Entre 3 y 5 a la semana", liters: 46.30, euros: 88.43, pixels: 1.99, icon: "/assets/icons/lavavajillas.svg" },
            { answer_id: 20, answer: "Friego a mano", liters: 384.65, euros: 734.68, pixels: 16.56, icon: "/assets/icons/PlatoMano.svg" },
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
            { text: "Lavadora", icon: "/assets/icons/lavadora.svg", icon_bg_color: "quiz-prev-page" },
            { text: "Lavavajillas", icon: "/assets/icons/lavavajillas.svg", icon_bg_color: "quiz-prev-page" },
            { text: "Modo ECO", icon: "/assets/icons/ECO.svg", icon_bg_color: "quiz-current-page" }
        ],
        answers: [
            { answer_id: 21, answer: "Siempre", liters: -31.02, euros: -59.24, pixels: -1.34, icon: "/assets/icons/ECO.svg" },
            { answer_id: 22, answer: "A veces", liters: -15.51, euros: -29.62, pixels: -0.67, icon: "/assets/icons/ECO.svg" },
            { answer_id: 23, answer: "No conocía el modo eco", liters: 0, euros: 0, pixels: 0, icon: "/assets/icons/ECO.svg" },
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
             { text: "Reciclar o reusar agua", icon: "/assets/icons/reciclaAgua.svg", icon_bg_color: "quiz-current-page" },
             { text: "Reciclar papel, vidrio o plástico", icon: "/assets/icons/reciclajePapel.svg", icon_bg_color: "quiz-next-page" }
        ],
        answers: [
            { answer_id: 24, answer: "Sí", liters: -2, euros: -3.82, pixels: -0.09, icon: "/assets/icons/reciclaAgua.svg" },
            { answer_id: 25, answer: "No", liters: 0, euros: 0, pixels: 0, icon: "/assets/icons/reciclaAgua.svg" },
            { answer_id: 26, answer: "¡Buena idea! ¡Voy a probarlo!", liters: 0, euros: 0, pixels: 0, icon: "/assets/icons/reciclaAgua.svg" },
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
            { text: "Reciclar o reusar agua", icon: "/assets/icons/reciclaAgua.svg", icon_bg_color: "quiz-prev-page" },
            { text: "Reciclar papel, vidrio o plástico", icon: "/assets/icons/reciclajePapel.svg", icon_bg_color: "quiz-current-page" }
       ],
       answers: [
            { answer_id: 27, answer: "A veces", liters: -2, euros: -3.82, pixels: -0.09, icon: "/assets/icons/reciclajePapel.svg" },
            { answer_id: 28, answer: "Siempre", liters: -4, euros: -7.64, pixels: -0.17, icon: "/assets/icons/reciclajePapel.svg" },
            { answer_id: 29, answer: "¡Nunca!", liters: 0, euros: 0, pixels: 0, icon: "/assets/icons/reciclajePapel.svg" }
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
            { answer_id: 30, answer: "1 vez al día", liters: 7680, euros: 14668.80, pixels: 330.55, icon: "/assets/icons/carne.svg" },
            { answer_id: 31, answer: "1 vez cada 3 días", liters: 5960, euros: 11383.60, pixels: 256.52, icon: "/assets/icons/carne.svg" },
            { answer_id: 32, answer: "1 vez a la semana", liters: 5630, euros: 10753.30, pixels: 242.32, icon: "/assets/icons/carne.svg" },
            { answer_id: 33, answer: "¡Nunca!", liters: 4060, euros: 7754.60, pixels: 174.75, icon: "/assets/icons/carne.svg" },
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
            { answer_id: 34, answer: "Menos de 100 Km", liters: 82.91, euros: 158.35, pixels: 3.57, icon: "/assets/icons/coche.svg" },
            { answer_id: 35, answer: "100 - 200 Km", liters: 207.28, euros: 395.90, pixels: 8.92, icon: "/assets/icons/coche.svg" },
            { answer_id: 36, answer: "Más de 200 Km", liters: 345.47, euros: 659.84, pixels: 14.87, icon: "/assets/icons/coche.svg" },
            { answer_id: 37, answer: "No uso coche", liters: 0, euros: 0, pixels: 0, icon: "/assets/icons/cocheNo.svg" },
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
            { answer_id: 39, answer: "Menos de 50 €", liters: 524.19, euros: 1001.20, pixels: 22.56, icon: "/assets/icons/mascota.svg" },
            { answer_id: 40, answer: "Entre 50 y 100 €", liters: 982.87, euros: 1877.28, pixels: 42.30, icon: "/assets/icons/mascota.svg" },
            { answer_id: 41, answer: "Más de 100 €", liters: 1572.59, euros: 3003.64, pixels: 67.69, icon: "/assets/icons/mascota.svg" },
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
            { answer_id: 42, answer: 0, liters: 0, euros: 0, pixels: 0 } // solución temporal hasta recibir datos reales: sumar el 'value' a 'liters'
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
            { answer_id: 43, answer: "Menos de 10 €", liters: 0, pixels: 0 },
            { answer_id: 44, answer: "Entre 10 € y 40 €", liters: 0, pixels: 0 },
            { answer_id: 45, answer: "Más de 40 €", liters: 0, pixels: 0 },
            { answer_id: 46, answer: "¡Ni idea!", liters: 0, pixels: 0 }
        ],
        icons: [
            "/assets/icons/AguaPrecio.svg"
        ],
        img: "/assets/1200-quiz-imgs/quiz15.png"
    },
    
];