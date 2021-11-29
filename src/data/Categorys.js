

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


function getNameByCategoryId(categoryId) {
    if (!categoryId) {
        return null
    }
    const category = categorys.find(e => e.categoryId === categoryId)
    if (category) {
        return category.name
    } else {
        return null
    }
}

export {categorys, getNameByCategoryId }
