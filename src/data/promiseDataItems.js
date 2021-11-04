
const dataItems = [
    {
        itemId: 1,
        service: 'Clases de Programación',
        name: 'Linus Torvalds',
        price: 50,
        urlPhoto: 'https://firebasestorage.googleapis.com/v0/b/e-servicios.appspot.com/o/linus4.svg?alt=media&token=28417a15-316f-4ea3-b5bc-86fdac5350ba',
        description: 'Te puedo ayudar a reforzar tus conocimientos en C, C++, Java, SQL, JavaScript, Python, entre otros. Descuento por grupos',
        curriculum: 'Soy ingeniero de software, ​conocido por iniciar y mantener el desarrollo del kernel Linux, basándome en el sistema operativo libre Minix creado por Andrew S. Tanenbaum y en algunas herramientas, varias utilidades y los compiladores desarrollados por el proyecto GNU',
        categoryId: 'clp',
        shedule: {
            mon:[8,9,10,11],
            tue:[],
            wed:[8,9,10,11],
            thu:[],
            fri:[8,9,10,11],
            sat:[],
            sun:[]
        },
        stock: 5,
        min:1,
        max:8
    },
    {
        itemId: 2,
        service: 'Asesoria Legal',
        name: 'Bill Clinton',
        price: 95,
        urlPhoto: 'https://firebasestorage.googleapis.com/v0/b/e-servicios.appspot.com/o/billy3.svg?alt=media&token=065da23f-a7f9-4c4f-bb0e-65fdd6c95652',
        description: 'Abogado con experiencia en Susesiones, Divorcio y Litigios, te puedo dar asesoria con temas difíciles en momentos difíciles.',
        curriculum: 'Soy Licenciado en Ciencias en Servicio Exterior de Universidad de Georgetown (1968) y Abogado (Juris Doctor) de la Universidad de Yale (1973). Me he desempeñado como político y abogado y fui el 42.º presidente de los Estados Unidos de América de 1993 a 2001. Antes de ello fui gobernador de Arkansas y fiscal general de Arkansas.',
        categoryId: 'alf',
        shedule: {
            mon:[9,10,11,12,16,17,18],
            tue:[9,10,11,12,16,17,18],
            wed:[9,10,11,12,16,17,18],
            thu:[9,10,11,12,16,17,18],
            fri:[9,10,11],
            sat:[],
            sun:[]
        },
        stock: 5,
        min:1,
        max:3
    },
    {
        itemId: 3,
        service: 'Clases Particulares de Física',
        name: 'Albert Einstein',
        price: 68,
        urlPhoto: 'https://firebasestorage.googleapis.com/v0/b/e-servicios.appspot.com/o/einstein2.svg?alt=media&token=42bb4db3-2f37-450a-a345-cd55410a3101',
        description: 'Clases particulares nivel secundario y universitario. Descuento por grupos',
        curriculum: 'Tengo varios grados en Física en diferentes universidades, mis mayores contribuciones son la teoría de la relatividad especial, el efecto fotoeléctrico, la relatividad general, algunos trabajos aosciados a la teoría de campo unificado y una explicaicon teorica al movimiento Browniano.',
        categoryId: 'clp',
        shedule: {
            mon:[17,18,19,20],
            tue:[17,18,19,20],
            wed:[17,18,19,20],
            thu:[17,18,19,20],
            fri:[9,10,11,12,16,17,18],
            sat:[9,10,11,12],
            sun:[]
        },
        stock: 5,
        min:1,
        max:10
    },
    {
        itemId: 4,
        service: 'Clases de Programación',
        name: 'Guido van Rossum',
        price: 60,
        urlPhoto: 'https://firebasestorage.googleapis.com/v0/b/e-servicios.appspot.com/o/guido.svg?alt=media&token=2040dc86-ee60-48dc-83e4-6ad1942a8c92',
        description: 'Te puedo enseñar a programar desde cero o ayudarte a perfeccionar algun lenguaje en específico. Te puedo hacer descuento por un programa de varias horas',
        curriculum: 'Soy titulado en matemáticas y computación por la Universidad de Ámsterdam (1982). A lo largo de mi carrera he trabajado tanto en la industria (destacando Google y Microsoft), como en diversos centros de investigación como el instituto holandés Centrum Wiskunde & Informática (CWI), el estadounidense Instituto Nacional de Estándares y Tecnología o la Corporación para las Iniciativas Investigadoras Nacionales en Reston, Virginia. El logro mas relevante de mi carrera es la creación y mantenimiento del lenguaje Python, el cual está entre los lenguajes más utilizados del mundo.', 
        categoryId: 'clp',
        shedule: {
            mon:[9,10,11,12,16,17,18],
            tue:[9,10,11,12,16,17,18],
            wed:[9,10,11,12,16,17,18],
            thu:[9,10,11,12,16,17,18],
            fri:[9,10,11],
            sat:[],
            sun:[]
        },
        stock: 5,
        min:1,
        max:10    
    },
    {
        itemId: 5,
        service: 'Animacion de eventos y cumpleaños infantiles',
        name: 'Homero Simpson',
        price: 10,
        urlPhoto: 'https://firebasestorage.googleapis.com/v0/b/e-servicios.appspot.com/o/homero2.svg?alt=media&token=44245141-0e78-4f74-bc2e-67dee0a5f355',
        description: 'Puedo hacer que tus fiestas sean inolvidable, el tiempo mínimo de la contratación es por 3 horas',
        curriculum: 'Tengo una larga trayectoria en el mundo del entretenimiento, soy conocido por protagonizar la serie de televisión "Los Simpson"',
        categoryId: 'ent',
        shedule: {
            mon:[],
            tue:[18,19,20,21],
            wed:[18,19,20,21],
            thu:[18,19,20,21],
            fri:[18,19,20,21],
            sat:[18,19,20,21],
            sun:[18,19,20,21]
        },
        stock: 5,
        min:3,
        max:5
    },
    {
        itemId: 6,
        service: 'Asesoria Tributaria Contable',
        name: 'Jeff Bezos',
        price: 400,
        urlPhoto: 'https://firebasestorage.googleapis.com/v0/b/e-servicios.appspot.com/o/jeff3.svg?alt=media&token=6accc69e-e7da-48ed-8293-010feb508003',
        description: 'Asesoria integral en temas tributarios. Puedes en principio contratar una hora para hacer un levantamiento del tema y si estas interesado podemos agendar un cronograma de fechas',
        curriculum: 'Estudié Ciencias de la Computación e Ingeniería Eléctrica en la Universidad de Princeton. Trabajé para una compañía de fibra óptica y luego en un hedge fund de Wall Street. Posterior a ello me independicé, fundadé y dirijí la empresa de venta en línea Amazon, posición que mantengo hasta ahora',
        categoryId: 'alf',
        shedule: {
            mon:[6,7],
            tue:[],
            wed:[6,7],
            thu:[],
            fri:[6,7],
            sat:[],
            sun:[]
        },
        stock: 5,
        min:1,
        max:5
    },
    {
        itemId: 7,
        service: 'Entrenamiento amateur y profesional para futbolistas',
        name: 'Lionel Messi',
        price: 50,
        urlPhoto: 'https://firebasestorage.googleapis.com/v0/b/e-servicios.appspot.com/o/messi2.svg?alt=media&token=6ca232c5-824c-4294-9f8e-7fd13d082bbd',
        description: 'Entrenamiento profesional, amateur y de alto rendimiento para futbolistas. Descuento por grupos y volumen de horas',
        curriculum: 'Tengo una larga trayectoria en el deporte. Desde niño jugué en las divisiones inferiores de Newells Old Boys para luego trasladarme a las inferiores de F. C. Barcelona. Luego de adulto jugué en F. C. Barcelona en donde alcancé 25 copas nacionales y 10 copas internacionales. Paralelamente a mi carrera en clubes me he mantenido ligado a la selección Argentina en donde he conseguido 3 copas y he anotado 80 goles en un total de 156 partidos jugados',
        categoryId: 'dep',
        shedule: {
            mon:[],
            tue:[],
            wed:[15,16,17,18,19],
            thu:[],
            fri:[],
            sat:[9,10,11,12,13,14,15,16],
            sun:[9,10,11,12,13,14,15,16]
        },
        stock: 5,
        min:1,
        max:5    
    },
    {
        itemId: 8,
        service: 'Animacion de eventos y matrimonios',
        name: 'Britney Spears',
        price: 120,
        urlPhoto: 'https://firebasestorage.googleapis.com/v0/b/e-servicios.appspot.com/o/britney2.svg?alt=media&token=302c5859-e9f8-454a-afcf-d3c3318f70d3',
        description: 'Shows de canto en vivo, animacion de eventos, mínimo 2 horas consecutivas',
        curriculum: 'Soy cantante, bailarina, compositora, modelo, actriz, diseñadora de modas y empresaria. Comenzé a actuar desde niña, a través de papeles en producciones teatrales. Después adquirí notoriedad al participar en el programa de televisión The Mickey Mouse Club. Posterior a ello he mantenido una extensa carrera en el mundo de la musica en donde destacan 9 albunes y más de 100 millones de discos vendidos en el mundo',
        categoryId: 'ent',
        shedule: {
            mon:[],
            tue:[],
            wed:[],
            thu:[],
            fri:[],
            sat:[16,17,18,19,20,21,22,23,24],
            sun:[]
        },
        stock: 5,
        min:2,
        max:5    
    },
    {
        itemId: 9,
        service: 'Asesoria financiera',
        name: 'Elon Musk',
        price: 520,
        urlPhoto: 'https://firebasestorage.googleapis.com/v0/b/e-servicios.appspot.com/o/elon.svg?alt=media&token=c9901a71-8683-46dc-af06-52d3a2b25377',
        description: 'Si tienes ahorros y estas aburrido de los depositos de plazo fijo, te puedo enseñar un abanico de posibilidades y contarte mis recomendaciones segun tus intereces, adversion al riesgo y horizonte de inversión',
        curriculum: 'Soy titulado de física y economía en la Universidad de Pensilvania. Mi carrera se destaca por ser cofundador de varias empresas, de las que destacan PayPal, SpaceX, Hyperloop, SolarCity, The Boring Company, Neuralink y OpenAI. Actualmente soy director general de SpaceX, de Tesla Motors, presidente de SolarCity y copresidente de OpenAI.',
        categoryId: 'alf',
        shedule: {
            mon:[],
            tue:[6,7,8],
            wed:[],
            thu:[6,7,8],
            fri:[],
            sat:[6,7,8],
            sun:[]
        },
        stock: 5,
        min:1,
        max:5    
    },
    {
        itemId: 10,
        service: 'Acondicionamiento fisico para la tercera edad',
        name: 'Cristiano Ronaldo',
        price: 120,
        urlPhoto: 'https://firebasestorage.googleapis.com/v0/b/e-servicios.appspot.com/o/cristiano.svg?alt=media&token=65c83a02-fc4c-4bbb-b559-d90c6ceb6fe2',
        description: 'Entrenamiento en plazas y parques, descuento por grupos',
        curriculum: 'Soy un futbolista portugués que juego como delantero en el Manchester United Football Club de la Premier League de Inglaterra y en la selección de Portugal, de la cual es su capitán y máximo goleador histórico. En cuanto a mi rendimienot en clubes destacan haber tenido 20 titulos nacionales y 14 titulos internacionales.',
        categoryId: 'dep',
        shedule: {
            mon:[],
            tue:[],
            wed:[],
            thu:[],
            fri:[],
            sat:[],
            sun:[9,10,11,12,13,14,15,16,17,18,19,20]
        },
        stock: 5,
        min:1,
        max:5    
    },
    {
        itemId: 11,
        service: 'Animacion de eventos y matrimonios',
        name: 'Luis Miguel',
        price: 180,
        urlPhoto: 'https://firebasestorage.googleapis.com/v0/b/e-servicios.appspot.com/o/luis.svg?alt=media&token=07cd64e3-99eb-4ed1-a2df-5c25fb62808d',
        description: 'Si quieres que tus invitados recuerden tu fiesta estás en el lugar correcto. Shows de alto nivel y para todos los gustos. Contratación mínima de 3 horas consecutivas',
        curriculum: 'Reconocido cantante y productor musical nacionalizado Mexicano​​​​​ y nacido en Puerto Rico.​ Tengo una larga trayectoria en la que destacan 29 discos publicado, 6 premios Grammy, más de 20 giras internacionales, y más de 100 millones de discos vendidos en el mundo.​',
        categoryId: 'ent',
        shedule: {
            mon:[],
            tue:[],
            wed:[],
            thu:[],
            fri:[20,21,22,23,24],
            sat:[20,21,22,23,24],
            sun:[]
        },
        stock: 5,
        min:3,
        max:5    
    },
    
];


const promiseDataItems = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(JSON.stringify(dataItems))
    }, 3000);
});


export default promiseDataItems
