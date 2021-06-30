import { Grupo } from "./grupo";

export class Tarefa {
    
    id: number;
    grupos_id: number;
    nome_tarefa: string;
    criado: Date;
    concluido: Date;

    constructor(obj:any) {
        this.id = obj.id;
        this.grupos_id = obj.grupos_id;
        this.nome_tarefa = obj.nome_tarefa;
        this.criado = obj.criado;
        this.concluido = obj.concluido;
    }

    static Concluido(tarefa: Tarefa): String{
        if (tarefa.concluido === null){
            return '<span>Aberto</span>';
        }
        else{
            return '<span>Concluido</span>';
        }
    }
    
    static tempoConclusao(criado,concluido){
            criado = new Date(criado);
            concluido = new Date(concluido);
            return Math.floor((Date.UTC(concluido.getFullYear(), concluido.getMonth(), concluido.getDate()) - Date.UTC(criado.getFullYear(), criado.getMonth(), criado.getDate()) ) /(1000 * 60 * 60 * 24));
        }
   
}
    