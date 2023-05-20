
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
            { answer_id: 1, answer: "Menor de 18 años", liters: null, euros: null, pixels: null, icon: "/src/assets/icons/persona.svg" },
            { answer_id: 2, answer: "Entre 18 y 35 años", liters: null, euros: null, pixels: null, icon: "/src/assets/icons/persona.svg" },
            { answer_id: 3, answer: "Entre 36 y 65 años", liters: null, euros: null, pixels: null, icon: "/src/assets/icons/persona.svg" },
            { answer_id: 4, answer: "Mayor de 65 años", liters: null, euros: null, pixels: null, icon: "/src/assets/icons/persona.svg" },
        ],
    },

    // PREGUNTA 2
    {
        question_id: 2,
        question_group: undefined,
        category: "personas_hogar",
        question: "¿Cuántas personas forman parte de tu hogar?",
        description: "De todas las edades",
        answers: [
            { answer_id: 5, answer: 1, liters: null, euros: null, pixels: null }
        ],
        icons: [
            "/src/assets/icons/persona.svg",
        ]
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
                  'Selecciona',  'Alava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Avila', 'Badajoz', 'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 'La Coruña', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara', 'Guipúzcoa', 'Huelva', 'Huesca', 'Islas Baleares', 'Jaén', 'León', 'Lérida', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Orense', 'Palencia', 'Las Palmas', 'Pontevedra', 'La Rioja', 'Salamanca', 'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza'
                ],
                liters: null,
                euros: null,
                pixels: null
            }
        ]
    },

    // PREGUNTA 4
    {
        question_id: 4,
        question_group: undefined,
        category: "temas_interes",
        question: "¿De cuál de estos temas te interesaría saber más?",
        description: "Vamos a trabajar duro en lo que más te interesa",
        answers: [
            { answer_id: 7, answer: "Ahorrar agua", liters: null, euros: null, pixels: null },
            { answer_id: 8, answer: "Ayudar al ecosistema", liters: null, euros: null, pixels: null },
            { answer_id: 9, answer: "Ahorrar dinero", liters: null, euros: null, pixels: null },
            { answer_id: 10, answer: "Conocer mi huella hídrica", liters: null, euros: null, pixels: null },
        ],
        icons: [
            "/src/assets/icons/AhorraAgua.svg",
            "/src/assets/icons/ecosistema.svg",
            "/src/assets/icons/AhorraEuro.svg",
            "/src/assets/icons/huellaHidrica.svg"
        ]
    },

    // PREGUNTA 5
    {
        question_id: 5,
        question_group: undefined,
        category: "ducha",
        question: "¿Cuánto tiempo te tomas para disfrutar de una ducha?",
        description: "Una ducha de 5 min gasta hasta 100L de agua",
        answers: [
            { answer_id: 11, answer: "Menos de 5 minutos", liters: 1.19, euros: 2.27, pixels: 0.05 },
            { answer_id: 12, answer: "Entre 5 y 10 minutos", liters: 2.07, euros: 3.95, pixels: 0.09 },
            { answer_id: 13, answer: "Entre 11 y 15 minutos", liters: 3.56, euros: 6.79, pixels: 0.15 },
            { answer_id: 14, answer: "Más de 15 minutos", liters: 5.93, euros: 11.32, pixels: 0.26 },
        ],
        icons: [
            "/src/assets/icons/5minutos.svg",
            "/src/assets/icons/1ominutos.svg",
            "/src/assets/icons/15minutos.svg",
            "/src/assets/icons/20minutos.svg"
        ]
    },

    // PREGUNTA 6_1-a
    {
        question_id: 6,
        question_group: "1-a",
        category: "lavadora",
        question: "¿Cuántas veces a la semana usas la lavadora?",
        description: ["Lavadora", "Lavavajillas", "Modo ECO" ],
        answers: [
            { answer_id: 15, answer: "Menos de 3 veces", liters: 21.36, euros: 40.79, pixels: 0.92 },
            { answer_id: 16, answer: "Entre 3 y 5 veces", liters: 85.47, euros: 163.24, pixels: 3.68 },
            { answer_id: 17, answer: "Más de 5 veces", liters: 128.21, euros: 244.88, pixels: 5.52 },
        ],
        icons: [
            "/src/assets/icons/lavadora.svg",
            "/src/assets/icons/lavavajillas.svg",
            "/src/assets/icons/ECO.svg"
        ]
    },

    // PREGUNTA 7_1-b
    {
        question_id: 7,
        question_group: "1-b",
        category: "lavavajillas",
        question: "¿Y tu lavavajillas? ¿Cuántas veces se pone en marcha?",
        description: ["Lavadora", "Lavavajillas", "Modo ECO" ],
        answers: [
            { answer_id: 18, answer: "1 vez al día", liters: 64.82, euros: 123.80, pixels: 2.79 },
            { answer_id: 19, answer: "Entre 3 y 5 a la semana", liters: 46.30, euros: 88.43, pixels: 1.99 },
            { answer_id: 20, answer: "Friego a mano", liters: 384.65, euros: 734.68, pixels: 16.56 },
        ],
        icons: [
            "/src/assets/icons/lavadora.svg",
            "/src/assets/icons/lavavajillas.svg",
            "/src/assets/icons/ECO.svg",
            "/src/assets/icons/PlatoMano.svg"
        ]
    },

    // PREGUNTA 8_1-c
    {
        question_id: 8,
        question_group: "1-c",
        category: "modo_eco",
        question: "¿Usas la función ECO en tus electrodomésticos?",
        description: ["Lavadora", "Lavavajillas", "Modo ECO" ],
        answers: [
            { answer_id: 21, answer: "Siempre", liters: -31.02, euros: -59.24, pixels: -1.34 },
            { answer_id: 22, answer: "A veces", liters: -15.51, euros: -29.62, pixels: -0.67 },
            { answer_id: 23, answer: "No conocía el modo eco", liters: 0, euros: 0, pixels: 0 },
        ],
        icons: [
            "/src/assets/icons/lavadora.svg",
            "/src/assets/icons/lavavajillas.svg",
            "/src/assets/icons/ECO.svg"
        ]
    },

    // PREGUNTA 9_2-a
    {
        question_id: 9,
        question_group: "2-a",
        category: "recicla_agua",
        question: "¿Tienes el hábito de reciclar agua para otras tareas?",
        description: [ "Reciclar o reusar agua", "Reciclar papel, vidrio o plástico" ],
        answers: [
            { answer_id: 24, answer: "Sí", liters: -2, euros: -3.82, pixels: -0.09 },
            { answer_id: 25, answer: "No", liters: 0, euros: 0, pixels: 0 },
            { answer_id: 26, answer: "¡Buena idea! ¡Voy a probarlo!", liters: 0, euros: 0, pixels: 0 },
        ],
        icons: [
            "/src/assets/icons/reciclaAgua.svg",
            "/src/assets/icons/reciclajePapel.svg"
        ]
    },

    // PREGUNTA 10_2-b
    {
        question_id: 10,
        question_group: "2-b",
        category: "recicla_papel",
        question: "¿Y qué hay del vidrio, cartón y plástico?",
        description: [ "Reciclar o reusar agua", "Reciclar papel, vidrio o plástico" ],
        answers: [
            { answer_id: 27, answer: "A veces", liters: -2, euros: -3.82, pixels: -0.09 },
            { answer_id: 28, answer: "Siempre", liters: -4, euros: -7.64, pixels: -0.17 },
            { answer_id: 29, answer: "¡Nunca!", liters: 0, euros: 0, pixels: 0 },
        ],
        icons: [
            "/src/assets/icons/reciclaAgua.svg",
            "/src/assets/icons/reciclajePapel.svg"
        ]
    },

    // PREGUNTA 11
    {
        question_id: 11,
        question_group: undefined,
        category: "carne",
        question: "¿Cuántas veces incluyes carne en tus comidas?",
        description: "Ese pequeño bocata de jamón también cuenta…",
        answers: [
            { answer_id: 30, answer: "1 vez al día", liters: 7680, euros: 14668.80, pixels: 330.55 },
            { answer_id: 31, answer: "1 vez cada 3 días", liters: 5960, euros: 11383.60, pixels: 256.52 },
            { answer_id: 32, answer: "1 vez a la semana", liters: 5630, euros: 10753.30, pixels: 242.32 },
            { answer_id: 33, answer: "¡Nunca!", liters: 4060, euros: 7754.60, pixels: 174.75 },
        ],
        icons: [
            "/src/assets/icons/carne.svg"
        ]
    },

    // PREGUNTA 12
    {
        question_id: 12,
        question_group: undefined,
        category: "coche",
        question: "¿Cuántos Km dirías que haces en coche semanalmente?",
        description: "Producir 1L de gasolina necesita de 97L de agua",
        answers: [
            { answer_id: 34, answer: "Menos de 100 Km", liters: 82.91, euros: 158.35, pixels: 3.57 },
            { answer_id: 35, answer: "100 - 200 Km", liters: 207.28, euros: 395.90, pixels: 8.92 },
            { answer_id: 36, answer: "Más de 200 Km", liters: 345.47, euros: 659.84, pixels: 14.87 },
            { answer_id: 37, answer: "No uso coche", liters: 0, euros: 0, pixels: 0 },
        ],
        icons: [
            "/src/assets/icons/coche.svg",
            "/src/assets/icons/cocheNo.svg"
        ]
    },

    // PREGUNTA 13
    {
        question_id: 13,
        question_group: undefined,
        category: "mascota",
        question: "¿Cuánto gastas al mes en comida para tu mascota?",
        description: "Tu amigo peludo también come y bebe",
        answers: [
            { answer_id: 38, answer: "No tengo mascota", liters: 0, euros: 0, pixels: 0 },
            { answer_id: 39, answer: "Menos de 50 €", liters: 524.19, euros: 1001.20, pixels: 22.56 },
            { answer_id: 40, answer: "Entre 50 y 100 €", liters: 982.87, euros: 1877.28, pixels: 42.30 },
            { answer_id: 41, answer: "Más de 100 €", liters: 1572.59, euros: 3003.64, pixels: 67.69 },
        ],
        icons: [
            "/src/assets/icons/mascota.svg"
        ]
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
        ]
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
            "/src/assets/icons/AguaPrecio.svg"
        ]
    },
    
];