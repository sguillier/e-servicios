import { getByDisplayValue } from "@testing-library/dom";

const prod = [
    {
        id: 1,
        service: 'Clases Particulares de Programación',
        description: 'Conocimientos en JavaScript, NodeJS, Python, entre otros',
        name: 'Bill Gate',
        stock: 10,
    },
    {
        id: 2,
        service: 'Asesoria Legal',
        name: 'Bill Clinton',
        price: '$120 USD',
        urlPhoto: 'https://firebasestorage.googleapis.com/v0/b/e-servicios.appspot.com/o/billy2.svg?alt=media&token=8af36eb1-616f-46d8-8207-9978d7080bd0',
        description: 'Abogado con experiencia en Susesiones, Divorcio y Litigios, te puedo dar asesoria con temas difíciles en momentos difíciles.',
        curriculum: 'Soy Licenciado en Ciencias en Servicio Exterior de Universidad de Georgetown (1968) y Abogado (Juris Doctor) de la Universidad de Yale (1973). Me he desempeñado como político y abogado y fui el 42.º presidente de los Estados Unidos de América de 1993 a 2001. Antes de ello fui gobernador de Arkansas y fiscal general de Arkansas.',
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
    },
    {
        id: 3,
        service: 'Clases Particulares de Física',
        description: 'Licenciado en Fisica, clases para nivel secundario y universitario',
        name: 'Albert Einstein',
        stock: 10,
    },
    {
        id: 4,
        service: 'Asesoria Tributaria',
        hola:' Puedes en principio contratar una hora para hacer un levantamiento del tema y si estas interesado podemos ',
        description: 'Contador con experiencia',
        name: 'Carlos Slim',
        stock: 5,    
    },
    {
        id: 5,
        service: 'Clase de Ingles',
        description: 'Profesor con ingles nativo, clases teoricas y de conversación',
        name: 'Jhon Kenedy',
        stock: 5,    
    },
];


const promiseProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(JSON.stringify(prod))
    }, 3000);
});


export default promiseProducts
