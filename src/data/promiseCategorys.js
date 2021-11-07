
const categorys = [
    {
        categoryId: 'clp',
        name: 'Clases Particulares',
    },
    {
        categoryId: 'alf',
        name: 'Asesoria Legal y Financiera',
    },
    {
        categoryId: 'ent',
        name: 'Entretenimiento',
    },
    {
        categoryId: 'dep',
        name: 'Deporte y Acondicionamiento Físico',
    },
];


const promiseCategorys = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(JSON.stringify(categorys))
    }, 1000);
});


export default promiseCategorys
