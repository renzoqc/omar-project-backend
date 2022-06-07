// export interface IPostPokemon {
//     name: string,
//     price: number,
//     warehouse: string,
//     author: string
// }

export interface IResponsePokemon {
    message: string,
    content: any,
    extra: string
}

export interface IServiceUpdate {
    id: string,
    name: string,
    price: number,
    warehouse: string,
    author: string,
    createdAt: Date,
    updatedAt: Date,
    deleteAt: Date
}

export interface IGetErrorMessage {
    msg:string
}


// crear varias interfaces
