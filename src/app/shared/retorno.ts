/**
 * Objeto genérico que representa o retorno
 * http da API
 */
export interface Retorno {

    mensagem: string;
    objeto: any;
    total?: number;

}