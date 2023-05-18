
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
        answers: [
            { answer_id: 1, answer: "Menor de 18 años", liters: 0 },
            { answer_id: 2, answer: "Entre 18 y 35 años", liters: 0 },
            { answer_id: 3, answer: "Entre 36 y 65 años", liters: 0 },
            { answer_id: 4, answer: "Mayor de 65 años", liters: 0 },
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
            { answer_id: 5, answer: 0, liters: 0 }
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
                    'Alava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Avila', 'Badajoz', 'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 'La Coruña', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara', 'Guipúzcoa', 'Huelva', 'Huesca', 'Islas Baleares', 'Jaén', 'León', 'Lérida', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Orense', 'Palencia', 'Las Palmas', 'Pontevedra', 'La Rioja', 'Salamanca', 'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza'
                ],
                liters: 0
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
            { answer_id: 7, answer: "Ahorrar agua", liters: 0 },
            { answer_id: 8, answer: "Ayudar al ecosistema", liters: 0 },
            { answer_id: 9, answer: "Ahorrar dinero", liters: 0 },
            { answer_id: 10, answer: "Conocer mi huella hídrica", liters: 0 },
        ]
    },

    // PREGUNTA 5
    {
        question_id: 5,
        question_group: undefined,
        category: "ducha",
        question: "¿Cuánto tiempo te tomas para disfrutar de una ducha?",
        description: "Una ducha de 5 min. gasta hasta 100L de agua",
        answers: [
            { answer_id: 11, answer: "Menos de 5 minutos", liters: 10 },
            { answer_id: 12, answer: "Entre 5 y 10 minutos", liters: 15 },
            { answer_id: 13, answer: "Entre 11 y 15 minutos", liters: 20 },
            { answer_id: 14, answer: "Más de 15 minutos", liters: 25 },
        ]
    },

    // PREGUNTA 6_1-a
    {
        question_id: 6,
        question_group: "1-a",
        category: "lavadora",
        question: "¿Cómo usas tus electrodomésticos?",
        description: null,
        answers: [ //? UX: habría que especificar que son días a la semana?
            { answer_id: 15, answer: "Menos de 3 veces", liters: 10 },
            { answer_id: 16, answer: "Entre 3 y 5 veces", liters: 15 },
            { answer_id: 17, answer: "Más de 5 veces", liters: 20 },
        ]
    },

    // PREGUNTA 7_1-b
    {
        question_id: 7,
        question_group: "1-b",
        category: "lavavajillas",
        question: "¿Cómo usas tus electrodomésticos?",
        description: null,
        answers: [
            { answer_id: 18, answer: "1 vez al día", liters: 10 },
            { answer_id: 19, answer: "Entre 3 y 5 a la semana", liters: 15 },
            { answer_id: 20, answer: "Friego a mano", liters: 20 },
        ]
    },

    // PREGUNTA 8_1-c
    {
        question_id: 8,
        question_group: "1-c",
        category: "modo_eco",
        question: "¿Cómo usas tus electrodomésticos?",
        description: null,
        answers: [
            { answer_id: 21, answer: "Siempre", liters: 10 },
            { answer_id: 22, answer: "A veces", liters: 15 },
            { answer_id: 23, answer: "No conocía el modo eco", liters: 20 },
        ]
    },

    // PREGUNTA 9_2-a
    {
        question_id: 9,
        question_group: "2-a",
        category: "recicla_agua",
        question: "¿Tienes el hábito de reciclar agua para otras tareas?",
        description: [ "Reciclar o reusar agua", "Reciclar papel, cartón o plástico" ], //? UX: papel y cartón o papel y vidrio?
        answers: [
            { answer_id: 24, answer: "Sí", liters: 10 },
            { answer_id: 25, answer: "No", liters: 15 },
            { answer_id: 26, answer: "¡Buena idea! ¡Voy a probarlo!", liters: 15 },
        ]
    },

    // PREGUNTA 10_2-b
    {
        question_id: 10,
        question_group: "2-b",
        category: "recicla_papel",
        question: "¿Y qué hay del vidrio, cartón y plástico?",
        description: [ "Reciclar o reusar agua", "Reciclar papel, cartón o plástico" ], //? UX: papel y cartón o papel y vidrio?
        answers: [
            { answer_id: 27, answer: "A veces", liters: 15 },
            { answer_id: 28, answer: "Siempre", liters: 10 },
            { answer_id: 29, answer: "¡Nunca!", liters: 20 },
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
            { answer_id: 30, answer: "1 vez al día", liters: 25 },
            { answer_id: 31, answer: "1 vez cada 3 días", liters: 20 },
            { answer_id: 32, answer: "1 vez a la semana", liters: 15 },
            { answer_id: 33, answer: "¡Nunca!", liters: 10 },
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
            { answer_id: 34, answer: "Menos de 100 Km", liters: 10 },
            { answer_id: 35, answer: "100 - 200 Km", liters: 15 },
            { answer_id: 36, answer: "Más de 200 Km", liters: 20 },
            { answer_id: 37, answer: "No uso coche", liters: 0 },
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
            { answer_id: 38, answer: "No tengo mascota", liters: 0 },
            { answer_id: 39, answer: "Menos de 50 €", liters: 10 },
            { answer_id: 40, answer: "Entre 50 y 100 €", liters: 15 },
            { answer_id: 41, answer: "Más de 100 €", liters: 20 },
        ]
    },

    // PREGUNTA 14
    {
        question_id: 14,
        question_group: undefined,
        category: "jardin",
        question: `¿Cuántos m${"\u00B2"} tiene tu jardín?`, // m${"\u00B2"} = m²
        description: [ "Escribe 0 si no tienes jardín.", `m${"\u00B2"} de tu jardín` ], // description[1] = placeholder
        answers: [
            { answer_id: 42, answer: 0, liters: 0 } // solución temporal hasta recibir datos reales: sumar el 'value' a 'liters'
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
            { answer_id: 43, answer: "Menos de 10 €", liters: 10 },
            { answer_id: 44, answer: "Entre 10 € y 40 €", liters: 15 },
            { answer_id: 45, answer: "Más de 40 €", liters: 20 },
            { answer_id: 46, answer: "¡Ni idea!", liters: 0 }, //? no sé si sería correcto, ya que no se puede calcular
        ]
    },
    
];