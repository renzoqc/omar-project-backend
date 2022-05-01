import { IResponsePokemon } from '../interfaces/pokemon.interfaces'

export const ApiResponse = (
    message: string,
    content: any,
    extra: string
): IResponsePokemon => {
    return {
        message: message,
        content: content,
        extra: extra
    }
};
