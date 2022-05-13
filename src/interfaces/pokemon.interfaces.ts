export interface IPostPokemon {
    name: string,
    price: number,
    warehouse: string,
    author: string,
    createdAt: Date,
    updatedAt: Date,
    deleteAt: Date
}

export interface IResponsePokemon {
    message: string,
    content: any,
    extra: string
}

// crear varias interfaces
