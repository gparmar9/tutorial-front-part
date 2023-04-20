import { LendingPage } from './LendingPage';


export const LENDING_DATA: LendingPage = {
    content: [
        { id: 1, game: { id: 1, title: 'Juego 1', age: 3, category: { id: 1, name: 'Categoría 1' }, author: { id: 1, name: 'Autor 1', nationality: 'Español' } }, client: { id: 1, name: 'Cliente 1' }, begin_date: new Date('09/25/2021'), end_date: new Date('09/30/2021') },
        { id: 2, game: { id: 2, title: 'Juego 2', age: 3, category: { id: 2, name: 'Categoría 2' }, author: { id: 2, name: 'Autor 2', nationality: 'Español' } }, client: { id: 1, name: 'Cliente 2' }, begin_date: new Date('09/25/2021'), end_date: new Date('09/30/2021') },
        { id: 3, game: { id: 3, title: 'Juego 3', age: 3, category: { id: 3, name: 'Categoría 3' }, author: { id: 3, name: 'Autor 3', nationality: 'Español' } }, client: { id: 1, name: 'Cliente 3' }, begin_date: new Date('09/25/2021'), end_date: new Date('09/30/2021') },
        { id: 4, game: { id: 4, title: 'Juego 4', age: 3, category: { id: 4, name: 'Categoría 4' }, author: { id: 4, name: 'Autor 4', nationality: 'Español' } }, client: { id: 1, name: 'Cliente 4' }, begin_date: new Date('09/25/2021'), end_date: new Date('09/30/2021') },
        { id: 5, game: { id: 5, title: 'Juego 5', age: 3, category: { id: 5, name: 'Categoría 5' }, author: { id: 5, name: 'Autor 5', nationality: 'Español' } }, client: { id: 1, name: 'Cliente 5' }, begin_date: new Date('09/25/2021'), end_date: new Date('09/30/2021') },
        { id: 6, game: { id: 6, title: 'Juego 6', age: 3, category: { id: 6, name: 'Categoría 6' }, author: { id: 6, name: 'Autor 6', nationality: 'Español' } }, client: { id: 1, name: 'Cliente 6' }, begin_date: new Date('09/25/2021'), end_date: new Date('09/30/2021') },
        { id: 7, game: { id: 7, title: 'Juego 7', age: 3, category: { id: 7, name: 'Categoría 7' }, author: { id: 7, name: 'Autor 7', nationality: 'Español' } }, client: { id: 1, name: 'Cliente 7' }, begin_date: new Date('09/25/2021'), end_date: new Date('09/30/2021') },
        { id: 8, game: { id: 8, title: 'Juego 8', age: 3, category: { id: 8, name: 'Categoría 8' }, author: { id: 8, name: 'Autor 8', nationality: 'Español' } }, client: { id: 1, name: 'Cliente 8' }, begin_date: new Date('09/25/2021'), end_date: new Date('09/30/2021') },
        { id: 9, game: { id: 9, title: 'Juego 9', age: 3, category: { id: 9, name: 'Categoría 9' }, author: { id: 9, name: 'Autor 9', nationality: 'Español' } }, client: { id: 1, name: 'Cliente 9' }, begin_date: new Date('09/25/2021'), end_date: new Date('09/30/2021') },

    ],
    pageable : {
        pageSize: 5,
        pageNumber: 0,
        sort: [
            {property: "id", direction: "ASC"}
        ]
    },
    totalElements: 9
}