
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
        description: 'Abogado con experiencia en Divorcio, Susesiones y Litigios',
        name: 'Bill Clinton',
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
