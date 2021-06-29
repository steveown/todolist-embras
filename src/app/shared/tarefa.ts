import { Grupo } from "./grupo";

export class Tarefa {
    
    id: number;
    grupo: Grupo;
    nome_tarefa: string;
    criado: Date;
    concluido: Date;

    constructor(obj:any) {
        this.id = obj.id;
        this.grupo = obj.grupo;
        this.nome_tarefa = obj.nome_tarefa;
        this.criado = obj.criado;
        this.concluido = obj.concluido;
    }

    static Concluido(tarefa: Tarefa): String{
        if (tarefa.concluido == null){
            return '<span>Aberto</span>';
        }
        else{
            return '<span>Concluido</span>';
        }
    }
}
    