
export const questions = [

    // la propiedad 'category' podría ser el nombre de la columna en la base de datos
    // en el caso de las preguntas múltiples, se siguen tratando como individuales de cara a los endpoints de las bbdd

    // PREGUNTA 1
    {
        question_id: 1,
        question_group: undefined,
        category: "rango_edad",
        question: "¿Cuál es tu rango de edad?",
        description: "Este dato es 100% anónimo",
        icons:["/src/icons/persona.svg","/src/icons/persona.svg","/src/icons/persona.svg","/src/icons/persona.svg"],
        answers: [
            { answer_id: 1, answer: "Menor de 18 años", liters: null, pixels: null },
            { answer_id: 2, answer: "Entre 18 y 35 años", liters: null, pixels: null },
            { answer_id: 3, answer: "Entre 36 y 65 años", liters: null, pixels: null },
            { answer_id: 4, answer: "Mayor de 65 años", liters: null, pixels: null },
        ]
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
        icons:["/src/icons/AhorraAgua.svg","/src/icons/ecosistema.svg","/src/icons/AhorraEuro.svg","/src/icons/huellaHidrica.svg"],
        answers: [
            { answer_id: 7, answer: "Ahorrar agua", liters: null, pixels: null },
            { answer_id: 8, answer: "Ayudar al ecosistema", liters: null, pixels: null },
            { answer_id: 9, answer: "Ahorrar dinero", liters: null, pixels: null },
            { answer_id: 10, answer: "Conocer mi huella hídrica", liters: null, pixels: null },
        ]
    },

    // PREGUNTA 5
    {
        question_id: 5,
        question_group: undefined,
        category: "ducha",
        question: "¿Cuánto tiempo te tomas para disfrutar de una ducha?",
        description: "Una ducha de 5 min gasta hasta 100L de agua",
        icons:["/src/icons/5minutos.svg","/src/icons/1ominutos.svg","/src/icons/15minutos.svg","/src/icons/20minutos.svg"],

        answers: [
            { answer_id: 11, answer: "Menos de 5 minutos", liters: 1.19, pixels: 10 },
            { answer_id: 12, answer: "Entre 5 y 10 minutos", liters: 2.07, pixels: 15 },
            { answer_id: 13, answer: "Entre 11 y 15 minutos", liters: 3.56, pixels: 20 },
            { answer_id: 14, answer: "Más de 15 minutos", liters: 5.93, pixels: 25 },
        ]
    },

    // PREGUNTA 6_1-a
    {
        question_id: 6,
        question_group: "1-a",
        category: "lavadora",
        question: "¿Cuántas veces a la semana usas la lavadora?",
        description: ["Lavadora", "Lavavajillas", "Modo ECO" ],
        icons:["/src/icons/lavadora.svg"],

        answers: [
            { answer_id: 15, answer: "Menos de 3 veces", liters: 21.36, pixels: 10 },
            { answer_id: 16, answer: "Entre 3 y 5 veces", liters: 85.47, pixels: 15 },
            { answer_id: 17, answer: "Más de 5 veces", liters: 128.21, pixels: 20 },
        ]
    },

    // PREGUNTA 7_1-b
    {
        question_id: 7,
        question_group: "1-b",
        category: "lavavajillas",
        question: "¿Y tu lavavajillas? ¿Cuántas veces se pone en marcha?",
        description: ["Lavadora", "Lavavajillas", "Modo ECO" ],
        icons:["/src/icons/lavavajillas.svg","/src/icons/lavavajillas.svg","/src/icons/PlatoMano.svg"],

        answers: [
            { answer_id: 18, answer: "1 vez al día", liters: 64.82, pixels: 15 },
            { answer_id: 19, answer: "Entre 3 y 5 a la semana", liters: 46.30, pixels: 10 },
            { answer_id: 20, answer: "Friego a mano", liters: 384.65, pixels: 40 },
        ]
    },

    // PREGUNTA 8_1-c
    {
        question_id: 8,
        question_group: "1-c",
        category: "modo_eco",
        question: "¿Usas la función ECO en tus electrodomésticos?",
        description: ["Lavadora", "Lavavajillas", "Modo ECO" ],
        icons:["/src/icons/ECO.svg","/src/icons/ECO.svg","/src/icons/ECO.svg"],
        
        answers: [
            { answer_id: 21, answer: "Siempre", liters: -31.02, pixels: -10 },
            { answer_id: 22, answer: "A veces", liters: -15.51, pixels: -5 },
            { answer_id: 23, answer: "No conocía el modo eco", liters: 0, pixels: 0 },
        ]
    },

    // PREGUNTA 9_2-a
    {
        question_id: 9,
        question_group: "2-a",
        category: "recicla_agua",
        question: "¿Tienes el hábito de reciclar agua para otras tareas?",
        description: [ "Reciclar o reusar agua", "Reciclar papel, vidrio o plástico" ],
        icons:["/src/icons/reciclaAgua.svg","/src/icons/reciclaPapel.svg"],
        answers: [
            { answer_id: 24, answer: "Sí", liters: -2, pixels: -5 },
            { answer_id: 25, answer: "No", liters: 0, pixels: 0 },
            { answer_id: 26, answer: "¡Buena idea! ¡Voy a probarlo!", liters: 0, pixels: 0 },
        ]
    },

    // PREGUNTA 10_2-b
    {
        question_id: 10,
        question_group: "2-b",
        category: "recicla_papel",
        question: "¿Y qué hay del vidrio, cartón y plástico?",
        description: [ "Reciclar o reusar agua", "Reciclar papel, vidrio o plástico"  ],
        icons:["/src/icons/reciclaAgua.svg","/src/icons/reciclaPapel.svg"],
        answers: [
            { answer_id: 27, answer: "A veces", liters: -2, pixels: -5 },
            { answer_id: 28, answer: "Siempre", liters: -4, pixels: -10 },
            { answer_id: 29, answer: "¡Nunca!", liters: 0, pixels: 0 },
        ]
    },

    // PREGUNTA 11
    {
        question_id: 11,
        question_group: undefined,
        category: "carne",
        question: "¿Cuántas veces incluyes carne en tus comidas?",
        description: "Ese pequeño bocata de jamón también cuenta…",
        icons:["/src/icons/carne.svg","/src/icons/carne.svg","/src/icons/carne.svg","/src/icons/carne.svg"],
        answers: [
            { answer_id: 30, answer: "1 vez al día", liters: 7680, pixels: 160 },
            { answer_id: 31, answer: "1 vez cada 3 días", liters: 5960, pixels: 150 },
            { answer_id: 32, answer: "1 vez a la semana", liters: 5630, pixels: 145 },
            { answer_id: 33, answer: "¡Nunca!", liters: 4060, pixels: 135 },
        ]
    },

    // PREGUNTA 12
    {
        question_id: 12,
        question_group: undefined,
        category: "coche",
        question: "¿Cuántos Km dirías que haces en coche semanalmente?",
        description: "Producir 1L de gasolina necesita de 97L de agua",
        icons:["/src/icons/coche.svg","/src/icons/coche.svg","/src/icons/coche.svg","/src/icons/cocheNo.svg"],
        answers: [
            { answer_id: 34, answer: "Menos de 100 Km", liters: 82.91, pixels: 15 },
            { answer_id: 35, answer: "100 - 200 Km", liters: 207.28, pixels: 40 },
            { answer_id: 36, answer: "Más de 200 Km", liters: 345.47, pixels: 50 },
            { answer_id: 37, answer: "No uso coche", liters: 0, pixels: 0 },
        ]
    },

    // PREGUNTA 13
    {
        question_id: 13,
        question_group: undefined,
        category: "mascota",
        question: "¿Cuánto gastas al mes en comida para tu mascota?",
        description: "Tu amigo peludo también come y bebe",
        icons:["/src/icons/mascota.svg","/src/icons/mascota.svg","/src/icons/mascota.svg","/src/icons/mascota.svg"],
    
        answers: [
            { answer_id: 38, answer: "No tengo mascota", liters: 0, pixels: 0 },
            { answer_id: 39, answer: "Menos de 50 €", liters: 524.19, pixels: 70 },
            { answer_id: 40, answer: "Entre 50 y 100 €", liters: 982.87, pixels: 80 },
            { answer_id: 41, answer: "Más de 100 €", liters: 1572.59, pixels: 100 },
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
            { answer_id: 42, answer: 0, liters: 0, pixels: 0 } // solución temporal hasta recibir datos reales: sumar el 'value' a 'liters'
        ]
    },

    // PREGUNTA 15
    {
        question_id: 15,
        question_group: undefined,
        category: "gasto_agua",
        question: "¿Sabes cuánto te cuesta el agua cada mes?",
        description: "Una cantidad aproximada",
        icons:["/src/icons/AguaPrecio.svg","/src/icons/AguaPrecio.svg","/src/icons/AguaPrecio.svg","/src/icons/AguaPrecio.svg"],
        answers: [
            { answer_id: 43, answer: "Menos de 10 €", liters: 0, pixels: 0 },
            { answer_id: 44, answer: "Entre 10 € y 40 €", liters: 0, pixels: 0 },
            { answer_id: 45, answer: "Más de 40 €", liters: 0, pixels: 0 },
            { answer_id: 46, answer: "¡Ni idea!", liters: 0, pixels: 0 }
        ]
    },
    
];